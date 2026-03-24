import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, History, User, ShieldAlert, ExternalLink, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { GRIFTERS, CONS } from './data';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Archive', path: '/' },
    { name: 'Grifters', path: '/grifters' },
    { name: 'The Cons', path: '/cons' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-end">
      <Link to="/" className="text-3xl font-serif font-black tracking-tighter uppercase leading-none">
        The <span className="text-accent">Con</span> Archive
      </Link>
      
      <div className="hidden md:flex space-x-16">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <button className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-ink z-40 flex flex-col justify-center items-center space-y-12 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-5xl font-serif font-bold uppercase tracking-tighter ${location.pathname === item.path ? 'text-accent' : 'text-white/40'}`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen pt-48 px-8 pb-32 max-w-[1600px] mx-auto overflow-hidden">
      <Helmet>
        <title>The Con Archive | Documentation of Deception</title>
        <meta name="description" content="Explore the history of human deception. A comprehensive digital repository documenting notorious grifters, legendary scams, and the architecture of the confidence trick." />
        <meta property="og:title" content="The Con Archive | Documentation of Deception" />
        <meta property="og:description" content="Explore the history of human deception. A comprehensive digital repository documenting notorious grifters, legendary scams, and the architecture of the confidence trick." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <p className="micro-label mb-8">Documentation Vol. 24.3</p>
          <h1 className="title-display mb-12">
            The Art of <br />
            <span className="serif-italic text-accent lowercase">Deception</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="lg:col-span-4 space-y-12"
          >
            <p className="text-white/60 text-xl leading-relaxed font-light">
              A confidence trick is an attempt to defraud a person or group after first gaining their trust. 
              It is a performance of psychological manipulation, exploiting credulity, vanity, and greed.
            </p>
            <div className="flex flex-col space-y-4 items-start">
              <Link to="/grifters" className="group flex items-center space-x-4 text-sm uppercase tracking-[0.2em] font-bold">
                <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
                <span>The Rogues</span>
              </Link>
              <Link to="/cons" className="group flex items-center space-x-4 text-sm uppercase tracking-[0.2em] font-bold">
                <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
                <span>The Playbook</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="lg:col-span-8 relative"
          >
            <div className="aspect-[16/9] overflow-hidden glass-surface p-2">
              <img 
                src="https://picsum.photos/seed/noir/1600/900" 
                alt="Noir" 
                className="object-cover w-full h-full grayscale opacity-40 hover:opacity-60 transition-all duration-1000 scale-110 hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 hidden xl:block">
              <p className="text-8xl font-serif italic text-white/5 select-none pointer-events-none">"Trust is a weakness."</p>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="mt-64">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-y border-white/10">
          {[
            { icon: <User size={24} />, title: "The Grifters", desc: "Master manipulators who turned lies into a high art form." },
            { icon: <ShieldAlert size={24} />, title: "The Mechanics", desc: "The psychological triggers and elaborate setups of the long con." },
            { icon: <History size={24} />, title: "The Legacy", desc: "How historical frauds shaped modern financial security." }
          ].map((item, i) => (
            <div key={i} className="p-16 bg-ink hover:bg-white/[0.02] transition-colors duration-700">
              <div className="text-accent mb-8">{item.icon}</div>
              <h3 className="text-2xl font-serif mb-6 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const GriftersList = () => {
  const [search, setSearch] = useState('');
  
  const filteredGrifters = GRIFTERS.filter(g => 
    g.name.toLowerCase().includes(search.toLowerCase()) || 
    g.alias.toLowerCase().includes(search.toLowerCase()) ||
    g.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-48 px-8 max-w-[1600px] mx-auto pb-32">
      <Helmet>
        <title>The Rogues Gallery | Famous Grifters & Con Artists</title>
        <meta name="description" content="A list of history's most notorious grifters and con artists. From 19th-century impostors to modern-day fraudsters." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <p className="micro-label mb-6">Archive / Personnel</p>
        <h2 className="title-display mb-12">The <span className="serif-italic lowercase text-accent">Rogues</span></h2>
        
        <div className="relative max-w-2xl">
          <input 
            type="text" 
            placeholder="Search the archive..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-6 text-2xl font-serif focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
        {filteredGrifters.map((grifter, index) => (
          <motion.div
            key={grifter.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group card-hover-effect"
          >
            <Link to={`/grifters/${grifter.id}`}>
              <div className="relative aspect-[3/4] overflow-hidden mb-8 glass-surface p-2">
                <img 
                  src={grifter.imageUrl} 
                  alt={grifter.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-50 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <p className="micro-label text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">{grifter.period}</p>
                </div>
              </div>
              <h3 className="text-3xl font-serif mb-3 tracking-tighter group-hover:text-accent transition-colors">{grifter.name}</h3>
              <p className="micro-label text-accent/60 italic lowercase">{grifter.alias}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      {filteredGrifters.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-white/20 font-serif italic text-4xl">No records found in the archive.</p>
        </div>
      )}
    </div>
  );
};

const GrifterDetail = () => {
  const { id } = useParams();
  const grifter = GRIFTERS.find(g => g.id === id);

  if (!grifter) return <div className="pt-40 text-center font-serif italic text-2xl">Grifter not found.</div>;

  return (
    <div className="min-h-screen pt-48 px-8 max-w-[1600px] mx-auto pb-32">
      <Helmet>
        <title>{`${grifter.name} | ${grifter.alias} | The Con Archive`}</title>
        <meta name="description" content={grifter.description} />
        <meta property="og:title" content={`${grifter.name} | The Con Archive`} />
        <meta property="og:description" content={grifter.description} />
        <meta property="og:image" content={grifter.imageUrl} />
      </Helmet>
      <Link to="/grifters" className="group flex items-center space-x-4 mb-20">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
          <ArrowLeft size={16} />
        </div>
        <span className="micro-label group-hover:text-white transition-colors">Back to Archive</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <p className="micro-label text-accent mb-6">{grifter.period}</p>
          <h2 className="text-7xl md:text-9xl font-serif font-black tracking-tighter uppercase leading-[0.85] mb-8">{grifter.name}</h2>
          <p className="text-3xl font-serif italic text-white/40 mb-20 lowercase">{grifter.alias}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="micro-label">Modus Operandi</p>
              <p className="text-xl text-white/80 font-light leading-relaxed">{grifter.famousFor}</p>
            </div>
            <div className="space-y-6">
              <p className="micro-label">Historical Record</p>
              <p className="text-white/40 leading-relaxed font-light">{grifter.story}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-[3/4] glass-surface p-3 sticky top-48">
            <img 
              src={grifter.imageUrl} 
              alt={grifter.name} 
              className="w-full h-full object-cover grayscale opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ConsList = () => {
  const [search, setSearch] = useState('');
  
  const filteredCons = CONS.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) || 
    c.description.toLowerCase().includes(search.toLowerCase()) ||
    c.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-48 px-8 max-w-[1600px] mx-auto pb-32">
      <Helmet>
        <title>The Playbook | Legendary Cons & Scams</title>
        <meta name="description" content="A comprehensive list of legendary cons and scams, from long cons to modern cyber scams. Understand the mechanics of deception." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <p className="micro-label mb-6">Archive / Playbook</p>
        <h2 className="title-display mb-12">The <span className="serif-italic lowercase text-accent">Cons</span></h2>
        
        <div className="relative max-w-2xl">
          <input 
            type="text" 
            placeholder="Search the techniques..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/[0.02] border-b border-white/10 px-0 py-6 text-2xl font-serif focus:outline-none focus:border-accent transition-all placeholder:text-white/10"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-px bg-white/10">
        {filteredCons.map((con, index) => (
          <motion.div
            key={con.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-ink p-12 md:p-20 group hover:bg-white/[0.02] transition-colors duration-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p className="micro-label text-accent mb-4">{con.type}</p>
                <h3 className="text-5xl font-serif tracking-tighter group-hover:italic transition-all duration-700">{con.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">{con.description}</p>
                <div className="glass-surface p-10">
                  <p className="micro-label mb-6 text-white/20">Execution Mechanics</p>
                  <p className="text-sm text-white/80 leading-relaxed font-mono">{con.mechanics}</p>
                </div>
              </div>
              <div className="lg:col-span-3 space-y-12">
                <div>
                  <p className="micro-label mb-4">Case Study</p>
                  <p className="text-sm text-white/40 italic font-serif leading-relaxed">{con.example}</p>
                </div>
                <div>
                  <p className="micro-label mb-4">Historical Context</p>
                  <p className="text-sm text-white/40 leading-relaxed">{con.history}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {filteredCons.length === 0 && (
        <div className="py-40 text-center">
          <p className="text-white/20 font-serif italic text-4xl">No techniques found in the playbook.</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="py-32 px-8 border-t border-white/5 max-w-[1600px] mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end space-y-12 md:space-y-0">
      <div className="space-y-6">
        <h2 className="text-4xl font-serif font-black uppercase tracking-tighter">The <span className="text-accent">Con</span> Archive</h2>
        <p className="text-white/20 text-sm max-w-xs font-light leading-relaxed">
          A digital repository documenting the history of human deception and the architecture of the confidence trick.
        </p>
      </div>
      <div className="text-right">
        <p className="micro-label mb-4">Est. 2026 / Archive No. 882</p>
        <p className="text-white/10 text-xs italic font-serif">"A fool and his money are soon parted."</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-ink min-h-screen text-white selection:bg-accent selection:text-white relative">
      <div className="noise-overlay" />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grifters" element={<GriftersList />} />
          <Route path="/grifters/:id" element={<GrifterDetail />} />
          <Route path="/cons" element={<ConsList />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
