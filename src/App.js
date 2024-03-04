import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Loader from './components/Loader';
import Seo from './components/Seo';
import { useLocation } from 'react-router-dom'; 

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));
const Page404 = lazy(() => import('./pages/Page404'));

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); 
  return (
    <Seo url={location.pathname}>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <section className='main'>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              {/* The user will be routed back to home if they attempt to access a path that does not exist. */}
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </section>
      </div>
    </Seo>
  );
}

export default App;
