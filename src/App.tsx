import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ClientsPage } from './pages/ClientsPage';
import { ContactPage } from './pages/ContactPage';
import { CtaButton } from './components/common/CtaButton';

function NotFoundPage() {
  return (
    <section className="bg-white pt-44 pb-32">
      <div className="mx-auto max-w-[1400px] px-[var(--gutter)] space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#00943e]">
          404
        </p>
        <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-normal tracking-[-0.03em] text-[#555555]">
          Page not found
        </h1>
        <p className="max-w-md text-[#555555]">
          The page you requested does not exist. Return to the AMBILUX homepage or explore our architectural lighting catalogue.
        </p>
        <CtaButton label="Return home" to="/" />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
