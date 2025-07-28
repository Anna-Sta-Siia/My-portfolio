import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MatryoshkaLoader from './components/MatryoshkaLoader';
import Layout from './components/Layout';

import Accueil from './pages/Accueil';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Formation from './pages/Formation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CV from './pages/CV';

export default function App() {
  const [phase, setPhase] = useState('matryoshka');

  const handleMatryoshkaEnd = () => {
    setTimeout(() => setPhase('medallion'), 500);
  };

  const handleMedallionEnd = () => {
    setPhase('app');
  };

  return (
    <BrowserRouter>
      {phase === 'matryoshka' && <MatryoshkaLoader onComplete={handleMatryoshkaEnd} />}

      <AnimatePresence>
        {phase !== 'matryoshka' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Routes>
              <Route path="/" element={<Layout phase={phase} />}>
                <Route index element={<Accueil phase={phase} onFinish={handleMedallionEnd} />} />
                <Route path="projects" element={<Projects />} />
                <Route path="services" element={<Services />} />
                <Route path="formation" element={<Formation />} />
                <Route path="contact" element={<Contact />} />
                <Route path="cv" element={<CV />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
