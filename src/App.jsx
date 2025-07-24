import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header       from './components/Header';
import Footer       from './components/Footer';

import About        from './pages/About';
import Projects     from './pages/Projects';
import Services     from './pages/Services';
import Skills       from './pages/Skills';
import Formation    from './pages/Formation';
import Contact      from './pages/Contact';
import NotFound     from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {/* Главная и About */}
          <Route index            element={<About />} />
          <Route path="/about"    element={<About />} />

          {/* Остальные страницы */}
          <Route path="/projects"  element={<Projects />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/skills"    element={<Skills />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/contact"   element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
);
}
