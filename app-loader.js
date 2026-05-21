import React from 'react';
import { createRoot } from 'react-dom/client';

// Keep blob URLs alive briefly after dynamic import so slower browsers can finish module evaluation.
const BLOB_URL_REVOKE_DELAY_MS = 30000;

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
    .replaceAll('`', '&#96;');
}

function showError(mountId, message, error) {
  const mountNode = document.getElementById(mountId);
  if (!mountNode) return;
  mountNode.innerHTML = `<div style="max-width:900px;margin:2rem auto;padding:1rem;border:1px solid #fecaca;background:#fff1f2;color:#991b1b;border-radius:12px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;"><strong>${escapeHtml(message)}</strong><pre style="margin-top:0.75rem;white-space:pre-wrap;">${error ? escapeHtml(error) : ''}</pre></div>`;
}

async function importCompiledModule(sourcePath) {
  const response = await fetch(sourcePath);
  if (!response.ok) {
    throw new Error(`Failed to load ${sourcePath} (${response.status})`);
  }

  const source = await response.text();
  const { code } = Babel.transform(source, {
    presets: [['react', { runtime: 'automatic' }]],
    sourceType: 'module',
    filename: sourcePath,
  });

  const blobUrl = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
  const module = await import(blobUrl);
  setTimeout(() => URL.revokeObjectURL(blobUrl), BLOB_URL_REVOKE_DELAY_MS);
  return module;
}

export async function mountApp({ sourcePath, mountId = 'root' }) {
  try {
    if (!globalThis.Babel) {
      throw new Error('Babel standalone is not available on this page.');
    }
    const module = await importCompiledModule(sourcePath);
    const Component = module.default;
    if (!Component) {
      throw new Error(`No default export found in ${sourcePath}.`);
    }
    const mountNode = document.getElementById(mountId);
    if (!mountNode) {
      throw new Error(`Mount node #${mountId} not found.`);
    }
    createRoot(mountNode).render(React.createElement(Component));
  } catch (error) {
    showError(mountId, `Failed to load and mount component from ${sourcePath}`, error?.message || String(error));
  }
}
