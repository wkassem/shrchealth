import React, { useState, useEffect } from 'react';
import { 
  Activity, CheckCircle2, ChevronRight, MapPin, Phone, 
  Menu, X, 
  Droplet, Flame, Stethoscope, Dumbbell, ShieldCheck, 
  Baby, Syringe, Wind, ArrowRight, ArrowUpRight, Clock
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
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  },
];

const SERVICES = [
  { title: 'Isokinetic Therapy', description: 'Quantify muscular deficits with HUMAC® NORM™ for precise, data-driven rehabilitation programs.', icon: Activity, colorClass: 'blue' },
  { title: 'Acupuncture', description: 'Releases trigger points, reduces pain pathways, and restores structural balance through Eastern traditions.', icon: Syringe, colorClass: 'indigo' },
  { title: 'Osteopathy', description: 'Holistic treatment addressing spinal blockages, pelvic torsion, and deep musculoskeletal dysfunction.', icon: Stethoscope, colorClass: 'emerald' },
  { title: 'Medical Thermography', description: 'Advanced infrared diagnostic technology visualizing pain and disease non-invasively.', icon: Flame, colorClass: 'orange' },
  { title: 'Ergonomy', description: 'Comprehensive workplace and lifestyle evaluation to correct posture and prevent long-term injuries.', icon: ShieldCheck, colorClass: 'slate' },
  { title: 'Women\'s Health', description: 'Specialized pelvic floor rehabilitation for incontinence, prolapse, and related conditions.', icon: Baby, colorClass: 'pink' },
  { title: 'SkinPen Microneedling', description: 'FDA-cleared medical device for skin rejuvenation, naturally stimulating collagen and elastin.', icon: CheckCircle2, colorClass: 'violet' },
  { title: 'Cupping Therapy', description: 'Reduces deep tissue inflammation, enhances blood circulation, and provides rapid relief for back pain.', icon: Wind, colorClass: 'sky' },
  { title: 'LPG Body Treatment', description: 'Non-invasive mechanical cellular stimulation to reduce cellulite, tighten skin, and boost lymphatic drainage.', icon: Droplet, colorClass: 'teal' },
];

const TEAM = [
  { name: 'Dr. Mohamad Halimi', role: 'Founder & Physiotherapist', details: 'Diploma in Physiotherapy, France (1980). Over 40 years of clinical excellence and innovation in physical therapy.' },
  { name: 'Dr. Saad M. Halimi', role: 'Director — DPT, Ms.Ost, L.Ac', details: 'Master in Manual Therapy & Osteopathy. Licensed Acupuncturist integrating US, French, and Chinese methodologies.' },
  { name: 'Imad M. Halimi', role: 'Nurse & Clinical Support', details: 'Nursing degree — USJ Lebanon. Mechanical Ventilation Specialist ensuring highest standards of patient care.' },
];

const WHATSAPP_NUMBER = '9613780236';
const WHATSAPP_DISPLAY = '+9613780236';

const SERVICE_COLOR_STYLES = {
  blue: {
    glow: 'bg-blue-500',
    iconWrap: 'bg-blue-500/10 border-blue-500/20',
    icon: 'text-blue-500',
  },
  indigo: {
    glow: 'bg-indigo-500',
    iconWrap: 'bg-indigo-500/10 border-indigo-500/20',
    icon: 'text-indigo-500',
  },
  emerald: {
    glow: 'bg-emerald-500',
    iconWrap: 'bg-emerald-500/10 border-emerald-500/20',
    icon: 'text-emerald-500',
  },
  orange: {
    glow: 'bg-orange-500',
    iconWrap: 'bg-orange-500/10 border-orange-500/20',
    icon: 'text-orange-500',
  },
  slate: {
    glow: 'bg-slate-700',
    iconWrap: 'bg-slate-700/10 border-slate-700/20',
    icon: 'text-slate-700',
  },
  pink: {
    glow: 'bg-pink-500',
    iconWrap: 'bg-pink-500/10 border-pink-500/20',
    icon: 'text-pink-500',
  },
  violet: {
    glow: 'bg-violet-500',
    iconWrap: 'bg-violet-500/10 border-violet-500/20',
    icon: 'text-violet-500',
  },
  sky: {
    glow: 'bg-sky-500',
    iconWrap: 'bg-sky-500/10 border-sky-500/20',
    icon: 'text-sky-500',
  },
  teal: {
    glow: 'bg-teal-500',
    iconWrap: 'bg-teal-500/10 border-teal-500/20',
    icon: 'text-teal-500',
  },
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav className={`w-full max-w-7xl rounded-2xl transition-all duration-500 border ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-xl shadow-slate-200/50 border-white/40 py-3' : 'bg-transparent border-transparent py-5'
      }`}>
        <div className="px-6 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Activity className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter text-slate-900">SHRC<span className="text-blue-600">.</span></span>
          </div>
          
          <div className="hidden md:flex items-center bg-slate-50/80 backdrop-blur-md rounded-full px-2 py-1 border border-slate-200/50">
            {['About', 'Services', 'Team'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors rounded-full hover:bg-white">
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 font-medium text-white transition duration-300 hover:bg-slate-800">
              <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </span>
              <span className="relative flex items-center gap-2 text-sm">
                Book Visit <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </span>
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-full bg-slate-100 text-slate-900">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div className={`md:hidden absolute top-full left-0 right-0 mt-2 p-4 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-2">
            {['About', 'Services', 'Team', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#fafafa]">
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-70 pointer-events-none mix-blend-multiply" />
    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl opacity-70 pointer-events-none mix-blend-multiply" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase">Accepting New Patients in Tripoli</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[1.05]">
            Precision care. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Optimal recovery.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            Integrative physical therapy and osteopathy tailored to your anatomy. We combine modern diagnostics with evidence-based treatments to restore your mobility and relieve pain permanently.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors">
              Discover Our Method
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden md:block h-[600px]">
          <div className="absolute inset-0 rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-2xl transform rotate-3 scale-95 transition-transform hover:rotate-0 hover:scale-100 duration-700">
            <img 
              src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=1200&q=80" 
              alt="Physical Therapy" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-lg">Advanced Diagnostics</p>
                  <p className="text-white/70 text-sm">HUMAC® NORM™ Isokinetic Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-[4/5] w-4/5 rounded-[2.5rem] overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=1000&q=80" 
              alt="Clinic Environment" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-10 -right-4 w-3/5 aspect-square rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
              alt="Therapy Session" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-12 -left-8 bg-slate-900 text-white p-6 rounded-3xl flex flex-col items-center justify-center w-36 h-36 shadow-2xl shadow-slate-900/30 transform -rotate-6">
            <span className="text-4xl font-black text-blue-400">30+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-center mt-1 text-slate-300">Years of<br/>Legacy</span>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-blue-600"></span> About SHRC
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A legacy of healing. <br/> A future of innovation.
            </h3>
          </div>
          
          <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
            <p>
              Founded in 1990 by Dr. Mohamad Halimi, the Saad Halimi Rehabilitation Center has defined the standard of care for patients across Tripoli and North Lebanon for over three decades.
            </p>
            <p>
              We don't just treat symptoms; we investigate the biomechanical root causes. By integrating Western evidence-based technology with highly effective Eastern therapeutic traditions, we create individualized recovery programs that last.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              { title: 'Holistic Approach', subtitle: 'Treating the whole system' },
              { title: 'Global Standards', subtitle: 'Harvard & CSMi partnerships' },
              { title: 'Advanced Tech', subtitle: 'Isokinetic & Thermography' },
              { title: 'Expert Team', subtitle: 'Internationally certified' },
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 bg-slate-50 relative border-t border-slate-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-600"></span> Clinical Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive disciplines for complete recovery.
          </h3>
        </div>
        <p className="text-slate-600 font-medium max-w-sm md:text-right">
          Browse our specialized treatments, carefully selected to address complex musculoskeletal and neurological conditions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          const isLarge = index === 0;
          const styles = SERVICE_COLOR_STYLES[service.colorClass];
          return (
            <div 
              key={index} 
              className={`group relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden ${isLarge ? 'lg:col-span-2' : ''}`}
            >
              <div className={`absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 ${styles.glow} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full pointer-events-none`} />
              
              <div className="flex flex-col h-full relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${styles.iconWrap} border flex items-center justify-center mb-8`}>
                  <Icon className={`w-7 h-7 ${styles.icon}`} />
                </div>
                <h4 className={`${isLarge ? 'text-3xl' : 'text-xl'} font-bold text-slate-900 mb-4 tracking-tight`}>
                  {service.title}
                </h4>
                <p className={`text-slate-600 font-medium leading-relaxed mb-8 flex-grow ${isLarge ? 'text-lg max-w-xl' : 'text-sm'}`}>
                  {service.description}
                </p>
                <div className="mt-auto flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Explore treatment 
                  <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-32 bg-slate-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-sm font-black text-blue-400 tracking-widest uppercase mb-4 flex items-center justify-center gap-4">
           <span className="w-8 h-px bg-blue-400"></span> Medical Directors <span className="w-8 h-px bg-blue-400"></span>
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Pioneers in physical medicine.
        </h3>
        <p className="text-slate-400 text-lg font-medium">
          A multidisciplinary team combining decades of clinical practice with international academic rigor.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {TEAM.map((member, index) => (
          <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-[2rem] p-8 hover:bg-slate-800 transition-colors duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-8 flex items-center justify-center text-3xl font-black text-slate-500 shadow-inner shadow-black/20">
              {member.name.split(' ').map(n => n[0]).join('').replace('D.', '')}
            </div>
            <h4 className="text-2xl font-bold mb-2 tracking-tight">{member.name}</h4>
            <p className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 font-semibold text-xs rounded-full uppercase tracking-wider mb-6 border border-blue-500/20">
              {member.role.split('—')[0]}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {member.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BookingContact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    service: '',
    preferredDateTime: '',
    message: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const whatsappMessage = [
      'New SHRC Appointment Request',
      `Name: ${formValues.name}`,
      `Phone: ${formValues.phone}`,
      `Service: ${formValues.service}`,
      `Preferred Day/Time: ${formValues.preferredDateTime}`,
      `Message: ${formValues.message}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-sm font-black text-blue-400 tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-px bg-blue-400"></span> Contact & Booking
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Book an Appointment</h3>
          <p className="text-slate-300 text-lg font-medium leading-relaxed">
            Complete this form and WhatsApp opens instantly with your details pre-filled. Prefer direct contact? Reach us anytime on{' '}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-blue-300 hover:text-blue-200 font-semibold">{WHATSAPP_DISPLAY}</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          <div className="xl:col-span-5 space-y-4">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="font-bold">Location</p>
                  <p className="text-slate-300 text-sm mt-1">Face to Nini Hospital, Hazem El Jisr Street, Tripoli, Lebanon</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="font-bold">Phone / WhatsApp</p>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-slate-300 text-sm mt-1 inline-block hover:text-white">{WHATSAPP_DISPLAY}</a>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-300 mt-0.5" />
                <div>
                  <p className="font-bold">Opening Hours</p>
                  <p className="text-slate-300 text-sm mt-1">Monday – Friday: 8:00 AM – 7:00 PM</p>
                  <p className="text-slate-300 text-sm">Saturday: 8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <iframe
                title="SHRC Map"
                src="https://www.google.com/maps?q=Face+to+Nini+Hospital,+Hazem+El+Jisr+Street,+Tripoli,+Lebanon&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="xl:col-span-7 bg-white text-slate-900 rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-2xl shadow-blue-900/20 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="text-sm font-semibold text-slate-700">
                Name
                <input type="text" name="name" required value={formValues.name} onChange={onChange} className="mt-1.5 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Phone
                <input type="tel" name="phone" required value={formValues.phone} onChange={onChange} className="mt-1.5 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" />
              </label>
            </div>
            <label className="text-sm font-semibold text-slate-700 block">
              Service
              <select name="service" required value={formValues.service} onChange={onChange} className="mt-1.5 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500">
                <option value="">Select a service</option>
                {SERVICES.map((service) => (
                  <option key={service.title} value={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-slate-700 block">
              Preferred Day / Time
              <input type="text" name="preferredDateTime" required value={formValues.preferredDateTime} onChange={onChange} placeholder="e.g. Tuesday, 10:30 AM" className="mt-1.5 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" />
            </label>
            <label className="text-sm font-semibold text-slate-700 block">
              Message
              <textarea name="message" rows={4} required value={formValues.message} onChange={onChange} className="mt-1.5 w-full rounded-2xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white px-6 py-3.5 font-semibold hover:bg-slate-800 transition-colors">
              Send on WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white pt-24 pb-12 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 rounded-[2.5rem] p-10 sm:p-16 mb-24 relative overflow-hidden shadow-2xl shadow-blue-600/20">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to start your recovery?
            </h3>
            <p className="text-blue-100 text-lg font-medium max-w-md">
              Book a comprehensive evaluation today. Our specialists will design a custom protocol for your specific needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors">
              <Phone className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        <div className="lg:col-span-4 pr-8">
          <div className="flex items-center gap-2 mb-6 text-slate-900">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-2xl tracking-tighter">SHRC.</span>
          </div>
          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            Setting the standard for integrative physical therapy, osteopathy, and complementary medicine in North Lebanon since 1990.
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
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-6">
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Team'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-slate-500 font-medium hover:text-blue-600 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Location & Hours</h4>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-900 font-semibold">Tripoli, Lebanon</p>
                <p className="text-slate-500 font-medium mt-1">Hazem El Jisr Street<br/>Facing Nini Hospital</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div className="w-full">
                <div className="flex justify-between text-slate-500 font-medium mb-1">
                  <span>Mon – Fri</span>
                  <span className="text-slate-900">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Saturday</span>
                  <span className="text-slate-900">8:00 AM – 2:00 PM</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 font-medium text-sm">
          © {new Date().getFullYear()} SHRC. All rights reserved.
        </p>
        <p className="text-slate-400 font-medium text-sm flex items-center gap-1">
          Designed with precision.
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
    <div className="font-sans text-slate-900 bg-white selection:bg-blue-600 selection:text-white antialiased">
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
