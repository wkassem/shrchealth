import React, { useState, useEffect } from 'react';
import { 
  Activity, CheckCircle2, ChevronRight, MapPin, Phone, 
  Menu, X, 
  Droplet, Flame, Stethoscope, Dumbbell, ShieldCheck, 
  Baby, Syringe, Wind, ArrowRight, Clock
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

const WHATSAPP_NUMBER = '9613780236';
const WHATSAPP_DISPLAY = '+9613780236';

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              S
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl tracking-tight text-slate-900">SHRC</span>
              <span className="text-xs text-slate-500 font-medium">Wellness</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-1 items-center">
            {['About', 'Services', 'Team', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-all duration-200">
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ml-4"
            >
              Book Now
            </a>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2">
          {['About', 'Services', 'Team', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="block font-medium text-slate-700 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-28 pb-40 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
    
    {/* Animated gradient blobs */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-15 pointer-events-none">
      <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
        <path fill="#0EA5E9" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18.1,97.7,-2.9C97.4,12.3,90.2,27.3,80.1,39.9C70,52.5,57,62.7,42.8,70.1C28.6,77.5,13.2,82.1,-2.4,86C-18,89.9,-36,93.2,-49.5,86.5C-63,79.8,-72,63.1,-78.8,46.2C-85.7,29.3,-90.5,12.1,-89.4,-4.7C-88.4,-21.5,-81.5,-37.9,-70.8,-49.8C-60,-61.7,-45.4,-69,-31.2,-75.6C-17,-82.3,-3.1,-88.3,11.9,-90.3C26.8,-92.2,53.6,-90.1,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
    </div>
    
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 opacity-10 pointer-events-none">
      <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#8B5CF6" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.3C91.4,-33.5,98,-18.1,97.7,-2.9C97.4,12.3,90.2,27.3,80.1,39.9C70,52.5,57,62.7,42.8,70.1C28.6,77.5,13.2,82.1,-2.4,86C-18,89.9,-36,93.2,-49.5,86.5C-63,79.8,-72,63.1,-78.8,46.2C-85.7,29.3,-90.5,12.1,-89.4,-4.7C-88.4,-21.5,-81.5,-37.9,-70.8,-49.8C-60,-61.7,-45.4,-69,-31.2,-75.6C-17,-82.3,-3.1,-88.3,11.9,-90.3C26.8,-92.2,53.6,-90.1,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-block mb-6 animate-in fade-in slide-in-from-top-4">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 text-blue-700 text-sm font-semibold border border-blue-200/50">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Tripoli, Lebanon
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-tight mb-8 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: '0.1s'}}>
          Personalized<br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">Recovery</span>
          <span className="text-slate-900">.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: '0.2s'}}>
          We design personalized treatment programs combining modern physiotherapy, osteopathy, and acupuncture — helping you return to the life you love.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4" style={{animationDelay: '0.3s'}}>
          <a href="#contact" className="group inline-flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300">
            Book Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="inline-flex justify-center items-center px-8 py-4 rounded-2xl font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300">
            Explore Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-gradient-to-b from-slate-50 to-white relative">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block mb-4 px-4 py-1 bg-emerald-50 rounded-full border border-emerald-200">
            <span className="text-sm font-bold text-emerald-700 tracking-widest uppercase">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">A Legacy of Rehabilitation</h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Founded in 1990, SHRC has served thousands across Tripoli and North Lebanon, combining decades of clinical expertise with cutting-edge technology.
          </p>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We treat where movement and function matter — designing personalized programs for aging, injury, disease, and prevention with state-of-the-art tools and compassionate care.
          </p>
          <div className="space-y-4">
            {[
              {icon: CheckCircle2, text: 'Evidence-based medicine'},
              {icon: CheckCircle2, text: 'State-of-the-art technology'},
              {icon: CheckCircle2, text: 'Holistic healing approach'}
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" 
              alt="Physical Therapy Clinic" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-emerald-500/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 bg-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block text-sm font-bold text-blue-600 tracking-widest uppercase mb-3 px-4 py-1 bg-blue-50 rounded-full">What We Offer</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Specialized Services</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Integrative healthcare combining evidence-based medicine with modern technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          const colors = ['from-blue-500', 'from-emerald-500', 'from-purple-500', 'from-cyan-500', 'from-pink-500', 'from-amber-500', 'from-rose-500', 'from-teal-500', 'from-indigo-500'];
          const color = colors[index % colors.length];
          
          return (32 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="inline-block text-sm font-bold text-purple-600 tracking-widest uppercase mb-3 px-4 py-1 bg-purple-50 rounded-full border border-purple-200">Team</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Meet Our Experts</h2>
        <p className="text-slate-600 text-lg">Dedicated professionals with decades of combined experience</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM.map((member, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 text-center border border-slate-100 group-hover:border-transparent transition-all duration-300">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8 flex items-center justify-center text-4xl font-black text-white shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                {member.name.split(' ').map(n => n[0]).join('').replace('D.', '')}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text font-semibold mb-4 text-sm">{member.role}</p>
              <p className="text-slate-600 leading-relaxed text-sm">
                {member.details}
              </p>
            </div
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
    </div>32 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-sm font-bold text-cyan-600 tracking-widest uppercase mb-3 px-4 py-1 bg-cyan-50 rounded-full border border-cyan-200">Get Started</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Send us your details and we'll WhatsApp you back within 24 hours. Available on{' '}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="font-semibold text-blue-600 hover:text-blue-700 underline decoration-blue-300 decoration-2 underline-offset-2">{WHATSAPP_DISPLAY}</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl border border-slate-100 p-6 group-hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="text-slate-600 text-sm mt-2">Face to Nini Hospital, Hazem El Jisr Street, Tripoli, Lebanon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl border border-slate-100 p-6 group-hover:border-emerald-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">WhatsApp</p>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-blue-600 font-medium text-sm mt-2 hover:text-blue-700 inline-flex items-center gap-1">
                      {WHATSAPP_DISPLAY} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300"></div>
              <div className="relative bg-white rounded-2xl border border-slate-100 p-6 group-hover:border-purple-200 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Hours</p>
                    <div className="text-slate-600 text-sm mt-2 space-y-1">
                      <p>Mon–Fri: 8 AM – 7 PM</p>
                      <p>Sat: 8 AM – 2 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
              <iframe
                title="SHRC Map"
                src="https://www.google.com/maps?q=Face+to+Nini+Hospital,+Hazem+El+Jisr+Street,+Tripoli,+Lebanon&output=embed"
                className="w-full h-64 border-0 group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
            <div className="relative bg-white rounded-3xl border border-slate-100 p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="text-sm font-semibold text-slate-700 block">
                  Name
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formValues.name} 
                    onChange={onChange} 
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-slate-50 hover:bg-white transition-colors" 
                  />
                </label>
                <label className="text-sm font-semibold text-slate-700 block">
                  Phone
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formValues.phone} 
                    onChange={onChange} 
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 bg-slate-50 hover:bg-white transition-colors" 
                  />gradient-to-b from-slate-900 to-slate-950 pt-20 pb-10 relative overflow-hidden">
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">SHRC</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Comprehensive rehabilitation care combining modern physiotherapy with evidence-based complementary medicine since 1990.
          </p>
          <div className="flex space-x-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Navigation</h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Services', 'Team', 'Contact'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm font-medium">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wide">Contact</h4>
          <div className="space-y-5">
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-300 font-semibold">Tripoli, Lebanon</p>
                <p className="text-slate-400 text-sm mt-1">Face to Nini Hospital, Hazem El Jisr Street</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-colors flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-slate-300 hover:text-white transition-colors font-medium">
                {WHATSAPP_DISPLAY}
                <span className="text-slate-500 text-sm ml-2">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-2xl border border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:border-slate-600 transition-colors">
            <p className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Opening Hours</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-400">
                <span>Monday – Friday</span>
                <span className="text-white font-medium">8 AM – 7 PM</span>
              </div>
              <div className="flex justify-between text-sm text-slate-400">
                <span>Saturday</span>
                <span className="text-white font-medium">8 AM – 2 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} SHRC — Saad Halimi Rehabilitation Center. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs">
          Designed with care for better health 💚
              <input type="text" name="preferredDateTime" required value={formValues.preferredDateTime} onChange={onChange} placeholder="e.g. Tuesday, 10:30 AM" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" />
            </label>
            <label className="text-sm font-medium text-slate-700 block">
              Message
              <textarea name="message" rows={4} required value={formValues.message} onChange={onChange} placeholder="Tell us briefly about your condition or request." className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Send on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 pt-20 pb-10">
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
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-slate-300 hover:text-white transition-colors">
                {WHATSAPP_DISPLAY} (WhatsApp Available)
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
        <BookingContact />
      </main>
      <Footer />
    </div>
  );
}
