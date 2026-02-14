import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-20 lg:px-40 flex flex-col justify-center relative border-t border-white/10 bg-eno-black">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Info & Locations */}
        <div className="flex flex-col h-full">
           <div className="mb-12">
             <h2 className="text-eno-accent font-mono text-xs md:text-sm tracking-[0.3em] mb-6 flex items-center gap-2">
                <span className="text-gray-500">//</span> CONTACT
             </h2>
             <h3 className="text-4xl md:text-6xl font-sans font-bold text-white mb-8 leading-tight">
               Global Reach.<br/>
               Local Roots.
             </h3>
             <p className="text-gray-400 max-w-md text-lg font-light leading-relaxed">
               We operate across borders to deliver world-class R&D. 
               Whether you are in Silicon Valley or Accra, we are ready to deploy.
             </p>
           </div>

           <div className="space-y-8 font-mono text-sm text-gray-400">
             
             {/* Locations Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* US Location */}
                <div className="p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded hover:border-eno-accent/30 transition-colors group">
                    <div className="flex items-center gap-2 text-white mb-4 group-hover:text-eno-accent transition-colors">
                        <MapPin className="w-4 h-4" />
                        <span className="font-bold tracking-wider">UNITED STATES</span>
                    </div>
                    <div className="space-y-1 opacity-80">
                        <p>405 Crafton Circle</p>
                        <p>Charlottesville, VA 22911</p>
                    </div>
                    <p className="mt-4 text-xs text-eno-accent/70 opacity-0 group-hover:opacity-100 transition-opacity">Silicon Valley HQ</p>
                </div>

                {/* Ghana Location */}
                <div className="p-6 border border-white/5 bg-white/5 backdrop-blur-sm rounded hover:border-eno-accent/30 transition-colors group">
                    <div className="flex items-center gap-2 text-white mb-4 group-hover:text-eno-accent transition-colors">
                        <Globe className="w-4 h-4" />
                        <span className="font-bold tracking-wider">GHANA</span>
                    </div>
                    <div className="space-y-1 opacity-80">
                        <p>45 Independence Avenue</p>
                        <p>Airport City, Accra</p>
                    </div>
                    <p className="mt-4 text-xs text-eno-accent/70 opacity-0 group-hover:opacity-100 transition-opacity">West Africa Hub</p>
                </div>
             </div>

             {/* Socials */}
             <div className="flex gap-6 pt-8 border-t border-white/5">
                <a href="#" className="hover:text-eno-accent transition-colors flex items-center gap-2">
                    <Linkedin className="w-5 h-5" /> <span className="hidden md:inline text-xs">LINKEDIN</span>
                </a>
                <a href="#" className="hover:text-eno-accent transition-colors flex items-center gap-2">
                    <Github className="w-5 h-5" /> <span className="hidden md:inline text-xs">GITHUB</span>
                </a>
                <a href="mailto:hello@enotribe.com" className="hover:text-eno-accent transition-colors flex items-center gap-2">
                    <Mail className="w-5 h-5" /> <span className="hidden md:inline text-xs">EMAIL</span>
                </a>
             </div>
           </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-eno-gray/30 p-8 md:p-12 rounded-lg border border-white/5 backdrop-blur-md relative overflow-hidden">
           {/* Decorative background element for the form */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-eno-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

           <h4 className="text-2xl font-bold text-white mb-6 font-sans relative z-10">Start a Project</h4>
           
           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                 <label className="text-xs font-mono text-eno-accent uppercase tracking-wider">Name / Organization</label>
                 <input 
                   type="text" 
                   required
                   value={formState.name}
                   onChange={(e) => setFormState({...formState, name: e.target.value})}
                   className="w-full bg-black/60 border border-white/10 p-4 text-white focus:border-eno-accent focus:outline-none transition-colors rounded-sm placeholder-white/20"
                   placeholder="Enter your name"
                 />
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-mono text-eno-accent uppercase tracking-wider">Email Address</label>
                 <input 
                   type="email" 
                   required
                   value={formState.email}
                   onChange={(e) => setFormState({...formState, email: e.target.value})}
                   className="w-full bg-black/60 border border-white/10 p-4 text-white focus:border-eno-accent focus:outline-none transition-colors rounded-sm placeholder-white/20"
                   placeholder="name@company.com"
                 />
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-mono text-eno-accent uppercase tracking-wider">Message</label>
                 <textarea 
                   rows={4}
                   required
                   value={formState.message}
                   onChange={(e) => setFormState({...formState, message: e.target.value})}
                   className="w-full bg-black/60 border border-white/10 p-4 text-white focus:border-eno-accent focus:outline-none transition-colors rounded-sm resize-none placeholder-white/20"
                   placeholder="Tell us about your project..."
                 ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || submitted}
                className="w-full py-4 bg-white text-black font-mono font-bold hover:bg-eno-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
              >
                {isSubmitting ? 'TRANSMITTING...' : submitted ? 'RECEIVED' : 'INITIATE CONTACT'}
                {!isSubmitting && !submitted && <Send className="w-4 h-4" />}
              </button>
           </form>
        </div>

      </div>

      <div className="absolute bottom-4 left-0 w-full text-center text-[10px] text-gray-600 font-mono">
         &copy; {new Date().getFullYear()} Enotribe LLC. All systems operational.
      </div>
    </section>
  );
};

export default Contact;