import React, { useState, useEffect } from 'react';
import { 
  Activity, CheckCircle2, ChevronRight, MapPin, Phone, 
  Menu, X, 
  Droplet, Flame, Stethoscope, Dumbbell, ShieldCheck, 
  Baby, Syringe, Wind, ArrowRight
} from 'lucide-react';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2A3 3 0 0 0 4 7v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7m5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5m4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20 20h-3.37v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V20H9.22V8.5h3.24v1.57h.05a3.55 3.55 0 0 1 3.19-1.75c3.41 0 4.04 2.24 4.04 5.15V20Z" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.9 4.75 12 4.75 12 4.75s-5.9 0-7.64.49A2.76 2.76 0 0 0 2.42 7.2 28.66 28.66 0 0 0 2 12a28.66 28.66 0 0 0 .42 4.81 2.76 2.76 0 0 0 1.94 1.95c1.74.49 7.64.49 7.64.49s5.9 0 7.64-.49a2.76 2.76 0 0 0 1.94-1.95A28.66 28.66 0 0 0 22 12a28.66 28.66 0 0 0-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z" />
  </svg>
);

// --- DATA DEFINITIONS ---

const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/SHRChealth', icon: FacebookIcon },
  { name: 'Instagram', url: 'https://instagram.com/shrchealth', icon: InstagramIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/shrchealth', icon: LinkedinIcon },
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCKnAruS1_PaR3XhLlYxvqaA', icon: YoutubeIcon },
  { 
    name: 'TikTok', 
    url: 'https://www.tiktok.com/@shrchealth/', 
    // Custom SVG for TikTok since it's not natively in standard icon sets
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  },
];

const SERVICES = [
  { title: 'Isokinetic Therapy', description: 'Quantify muscular deficits with HUMAC® NORM™ and design precise rehabilitation programs.', icon: Activity },
  { title: 'Acupuncture', description: 'Releases trigger points, reduces pain pathways, and restores structural balance.', icon: Syringe },
  { title: 'Osteopathy', description: 'Holistic treatment addressing spinal blockages, pelvic torsion, and musculoskeletal dysfunction.', icon: Stethoscope },
  { title: 'Medical Thermography', description: 'Infrared diagnostic technology that visualizes pain and disease non-invasively.', icon: Flame },
  { title: 'Ergonomy', description: 'Evaluate workplace and daily habits to propose posture corrections and prevent injuries.', icon: ShieldCheck },
  { title: 'Women\'s Health', description: 'Specialized pelvic rehabilitation for incontinence, prolapse, and related conditions.', icon: Baby },
  { title: 'SkinPen Microneedling', description: 'FDA-cleared device for skin rejuvenation, stimulating natural collagen and elastin.', icon: CheckCircle2 },
  { title: 'Cupping Therapy', description: 'Reduces inflammation, enhances blood circulation, and provides relief for back pain.', icon: Wind },
  { title: 'LPG Body Treatment', description: 'Non-invasive mechanical massage to reduce cellulite, tighten skin, and boost drainage.', icon: Droplet },
];

const TEAM = [
  { name: 'Dr. Mohamad Halimi', role: 'Founder & Physiotherapist', details: 'Diploma in Physiotherapy, France (1980). Over 40 years of clinical expertise.' },
  { name: 'Dr. Saad M. Halimi', role: 'Director — DPT, Ms.Ost, L.Ac', details: 'Master in Manual Therapy & Osteopathy. Licensed Acupuncturist.' },
  { name: 'Imad M. Halimi', role: 'Nurse & Clinical Support', details: 'Nursing degree — USJ Lebanon. Mechanical Ventilation Specialist.' },
];

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Activity className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-2xl tracking-tight text-slate-900">SHRC</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Team', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Book Appointment
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full px-4 py-4 space-y-4">
          {['About', 'Services', 'Team', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-slate-600 hover:text-blue-600"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-24 pb-32 overflow-hidden bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
          Tripoli, Lebanon
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
          Personalized Care. <br className="hidden md:block"/>
          <span className="text-blue-600">Complete Recovery.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
          At SHRC, we design treatment programs around your personal goals — combining modern physiotherapy, osteopathy, and acupuncture to help you return to the life you love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
            Book a Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="inline-flex justify-center items-center px-8 py-4 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors">
            Explore Services
          </a>
        </div>
      </div>
    </div>
    
    <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
      <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2563EB" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18.1,97.7,-2.9C97.4,12.3,90.2,27.3,80.1,39.9C70,52.5,57,62.7,42.8,70.1C28.6,77.5,13.2,82.1,-2.4,86C-18,89.9,-36,93.2,-49.5,86.5C-63,79.8,-72,63.1,-78.8,46.2C-85.7,29.3,-90.5,12.1,-89.4,-4.7C-88.4,-21.5,-81.5,-37.9,-70.8,-49.8C-60,-61.7,-45.4,-69,-31.2,-75.6C-17,-82.3,-3.1,-88.3,11.9,-90.3C26.8,-92.2,53.6,-90.1,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">About SHRC</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">A Legacy of Rehabilitation in Lebanon</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Founded in 1990 by Dr. Mohamad Halimi, the Saad Halimi Rehabilitation Center has served patients across Tripoli and North Lebanon for over three decades.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We provide therapeutic treatment wherever movement and function are threatened by aging, injury, disease, or environmental factors. Fully equipped with state-of-the-art rehabilitation tools, we tailor care to each patient.
          </p>
          <div className="space-y-4">
            {['Evidence-based medicine', 'State-of-the-art technology', 'Holistic approach to healing'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" 
              alt="Physical Therapy Clinic" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">What We Offer</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Specialized Services</h3>
        <p className="text-slate-600 text-lg">
          Integrative healthcare designed to diagnose accurately, treat effectively, and prevent recurrence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <Icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
                Book Session <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Our Specialists</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Meet the Team</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM.map((member, index) => (
          <div key={index} className="text-center group">
            <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full mb-6 flex items-center justify-center text-3xl font-bold text-slate-300 group-hover:bg-blue-50 transition-colors">
              {member.name.split(' ').map(n => n[0]).join('').replace('D.', '')}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
            <p className="text-blue-600 font-medium text-sm mb-4">{member.role}</p>
            <p className="text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
              {member.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-900 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6 text-white">
            <Activity className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-2xl tracking-tight">SHRC</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Comprehensive rehabilitation care combining modern physiotherapy with evidence-based complementary medicine since 1990.
          </p>
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Team'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors text-sm">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-semibold mb-6">Contact & Location</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-300 font-medium">Tripoli, Lebanon</p>
                <p className="text-slate-400 text-sm mt-1">Face to Nini Hospital, Hazem El Jisr Street</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <a href="https://wa.me/961000000" className="text-slate-300 hover:text-white transition-colors">
                +961 00 000 000 (WhatsApp Available)
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-slate-800 rounded-xl border border-slate-700">
            <p className="text-white font-medium mb-2">Opening Hours</p>
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>Monday – Friday</span>
              <span>8:00 AM – 7:00 PM</span>
            </div>
            <div className="flex justify-between text-sm text-slate-400">
              <span>Saturday</span>
              <span>8:00 AM – 2:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} SHRC — Saad Halimi Rehabilitation Center. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
