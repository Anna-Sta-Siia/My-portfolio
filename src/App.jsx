import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MatryoshkaLoader from './components/MatryoshkaLoader';
import MedallionReveal from './components/MedallionReveal';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Formation from './pages/Formation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CV from './pages/CV';

export default function App() {
  const [phase, setPhase] = useState('matryoshka'); // 'matryoshka' → 'medallion' → 'app'

  const handleMatryoshkaEnd = () => setPhase('medallion');
  const handleMedallionEnd = () => setPhase('app');

  return (
    <BrowserRouter>
      {phase === 'matryoshka' && (
        <MatryoshkaLoader onComplete={handleMatryoshkaEnd} />
      )}

      {phase === 'medallion' && (
        <MedallionReveal onFinish={handleMedallionEnd} />
      )}

      <AnimatePresence>
        {phase === 'app' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Header />
            <main>
              <Routes>
                <Route index element={<Accueil />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/formation" element={<Formation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<CV />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
