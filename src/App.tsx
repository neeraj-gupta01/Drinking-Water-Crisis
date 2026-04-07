import React from 'react';
import { motion } from 'motion/react';
import { Droplet, Factory, Trash2, Users, AlertTriangle, ShieldCheck, Activity, MapPin, PlayCircle, Heart, Share2, Eye, CheckCircle2, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582467029213-ce71667c2e28?q=80&w=2000&auto=format&fit=crop" 
          alt="Polluted water" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-teal/20 text-brand-teal border border-brand-teal/30 text-sm font-medium tracking-wider uppercase mb-6">
            Public Health Crisis
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Drinking Water Crisis in <span className="text-blue-400">Indian Cities</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-3xl mx-auto">
            Understanding contamination, health risks, and the urgent solutions needed to secure our future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#overview"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Explore the Crisis <ArrowRight size={18} />
            </a>
            <a 
              href="#video"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <PlayCircle size={18} /> Watch Awareness Video
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#overview" className="text-slate-400 hover:text-white transition-colors">
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-current rounded-full"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Silent Epidemic</h2>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              India is facing one of its most severe water crises in history. With rapid urbanization and industrial growth, the quality of drinking water in major cities has deteriorated drastically, posing a severe threat to public health.
            </p>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              According to recent studies, a significant percentage of water supplied to urban households fails to meet basic safety standards, containing harmful pathogens, heavy metals, and toxic chemicals.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">70%</h3>
                <p className="text-sm text-slate-400">Of India's surface water is unfit for consumption</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-4xl font-bold text-brand-teal mb-2">200k</h3>
                <p className="text-sm text-slate-400">Lives lost annually due to inadequate water access</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {[
              { icon: Droplet, title: "Sewage Leakage", desc: "Aging infrastructure leading to cross-contamination." },
              { icon: Factory, title: "Industrial Waste", desc: "Untreated effluents discharged into water bodies." },
              { icon: Trash2, title: "Poor Sanitation", desc: "Inadequate waste management in urban slums." },
              { icon: Users, title: "Overcrowding", desc: "Demand vastly exceeding supply capabilities." }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HealthImpactSection = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold mb-6"
          >
            The Human Cost
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Contaminated water is a primary vector for severe diseases. <span className="text-red-400 font-semibold">Millions are affected every year</span>, with children being the most vulnerable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Cholera", icon: AlertTriangle, color: "text-red-400", bg: "bg-red-400/10", desc: "An acute diarrheal illness caused by infection of the intestine with Vibrio cholerae bacteria, often found in contaminated water supplies." },
            { name: "Typhoid", icon: Activity, color: "text-orange-400", bg: "bg-orange-400/10", desc: "A life-threatening infection caused by the bacterium Salmonella Typhi, usually spread through contaminated food or water." },
            { name: "Diarrhea", icon: Droplet, color: "text-blue-400", bg: "bg-blue-400/10", desc: "The second leading cause of death in children under five years old, primarily caused by drinking water contaminated with fecal matter." }
          ].map((disease, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${disease.bg} rounded-bl-full -z-10 transition-transform group-hover:scale-110`}></div>
              <disease.icon className={`w-12 h-12 ${disease.color} mb-6`} />
              <h3 className="text-2xl font-bold mb-4">{disease.name}</h3>
              <p className="text-slate-400 leading-relaxed">{disease.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CitiesSection = () => {
  const cities = [
    { name: "Delhi", issue: "High levels of ammonia and coliform bacteria in the Yamuna river supply.", img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop" },
    { name: "Mumbai", issue: "Aging pipeline infrastructure leading to frequent contamination with sewage.", img: "https://images.unsplash.com/photo-1522256198274-5858528f1473?q=80&w=800&auto=format&fit=crop" },
    { name: "Kolkata", issue: "Severe arsenic contamination in groundwater affecting millions of residents.", img: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section id="cities" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ground Zero</h2>
            <p className="text-xl text-slate-300">
              Major metropolitan areas face unique challenges due to their specific geographical and infrastructural constraints.
            </p>
          </div>
          <div className="flex items-center gap-2 text-brand-teal">
            <MapPin /> <span className="font-medium">Mapping the Crisis</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <img 
                src={city.img} 
                alt={city.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-3xl font-serif font-bold mb-3">{city.name}</h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {city.issue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Pathways to Clean Water</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Addressing this crisis requires a multi-faceted approach combining technology, policy, and community action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Advanced Purification", icon: ShieldCheck, desc: "Implementing RO, UV, and ultrafiltration systems at municipal and household levels." },
            { title: "Smart Monitoring", icon: Activity, desc: "IoT-based sensors for real-time water quality tracking in distribution networks." },
            { title: "Policy & Infrastructure", icon: Factory, desc: "Strict enforcement of industrial waste treatment and upgrading aging pipelines." }
          ].map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-t-4 border-t-brand-teal"
            >
              <div className="w-14 h-14 rounded-full bg-brand-teal/20 flex items-center justify-center mb-6">
                <sol.icon className="text-brand-teal w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">{sol.title}</h3>
              <p className="text-slate-400">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ActionSection = () => {
  return (
    <section id="action" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="glass-panel rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What You Can Do</h2>
              <p className="text-slate-300 mb-8 text-lg">
                While systemic changes take time, there are immediate steps you can take to protect yourself and your family.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Boil drinking water for at least 1 minute",
                  "Use certified water purifiers (RO/UV)",
                  "Clean water storage tanks regularly",
                  "Report pipeline leakages to authorities",
                  "Avoid single-use plastics that pollute water bodies"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-brand-teal shrink-0 mt-1" size={20} />
                    <span className="text-slate-200">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div id="video" className="relative rounded-2xl overflow-hidden bg-black/20 flex flex-col items-center justify-center p-4 h-[550px]">
              <p className="text-white font-medium mb-4 flex items-center gap-2">
                <PlayCircle size={20} className="text-brand-teal" /> Awareness Video
              </p>
              <iframe 
                src="https://www.instagram.com/reel/DWp6mL6j-Iw/embed/" 
                className="w-full max-w-[320px] h-[480px] rounded-xl border border-white/10 shadow-xl bg-white"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {[
            { icon: Eye, count: "1.2M+", label: "Views" },
            { icon: Heart, count: "450K+", label: "Supporters" },
            { icon: Share2, count: "120K+", label: "Shares" },
            { icon: Users, count: "50+", label: "Communities" }
          ].map((stat, idx) => (
            <div key={idx}>
              <stat.icon className="w-8 h-8 mx-auto text-slate-400 mb-4" />
              <h4 className="text-3xl font-bold text-white mb-2">{stat.count}</h4>
              <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { text: "This project opened my eyes to the reality of what's coming out of our taps. We need immediate action.", author: "Priya S., Mumbai" },
            { text: "The data presented here is alarming. I've started boiling water even after filtering it.", author: "Rahul M., Delhi" },
            { text: "Excellent academic presentation of a critical public health issue. Highly recommended reading.", author: "Dr. A. Kumar, Public Health Researcher" }
          ].map((testimonial, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl">
              <p className="text-slate-300 italic mb-4">"{testimonial.text}"</p>
              <p className="text-sm font-medium text-brand-teal">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Clean Water is a Right, Not a Privilege.</h2>
          <p className="text-xl text-slate-400 mb-8">Join the movement to ensure safe drinking water for all.</p>
          <button className="px-8 py-4 bg-brand-teal hover:bg-teal-600 text-white rounded-full font-medium transition-all">
            Spread Awareness
          </button>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-white">Water Crisis in India</h3>
            <p className="text-slate-500 text-sm mt-1">An Academic Awareness Project</p>
          </div>
          
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#impact" className="hover:text-white transition-colors">Impact</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#action" className="hover:text-white transition-colors">Take Action</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light font-sans selection:bg-brand-teal/30">
      <HeroSection />
      <OverviewSection />
      <HealthImpactSection />
      <CitiesSection />
      <SolutionsSection />
      <ActionSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
}
