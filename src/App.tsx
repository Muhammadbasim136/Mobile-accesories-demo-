import React, { useState, Suspense, lazy } from 'react';
import { CartProvider } from './context/CartContext';

// Layout Components
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import SearchOverlay from './components/SearchOverlay';
import CartDrawer from './components/CartDrawer';

// Page Sections
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductGrid from './components/ProductGrid';
const PromoHighlights = lazy(() => import('./components/PromoHighlights'));
const BestSellingTabs = lazy(() => import('./components/BestSellingTabs'));
const PromoBanners = lazy(() => import('./components/PromoBanners'));
const NewArrivals = lazy(() => import('./components/NewArrivals'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQAccordion = lazy(() => import('./components/FAQAccordion'));
const Newsletter = lazy(() => import('./components/Newsletter'));
const Footer = lazy(() => import('./components/Footer'));

// Floating Elements
import WhatsAppButton from './components/WhatsAppButton';
import BackToTopButton from './components/BackToTopButton';

const AppContent: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-[100vw]">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Header - fixed, sits on top */}
      <Header
        onSearchOpen={() => setSearchOpen(true)}
        onMenuOpen={() => setMobileMenuOpen(true)}
      />

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-[68px]" />

      {/* Main Content */}
      <main>
        <Hero />
        <CategoryGrid />
        <ProductGrid />
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-gray-500">Loading more sections...</div>}>
          <PromoHighlights />
          <BestSellingTabs />
          <PromoBanners />
          <NewArrivals />
          <WhyChooseUs />
          <Testimonials />
          <FAQAccordion />
          <Newsletter />
          <Footer />
        </Suspense>
      </main>

      <Footer />

      {/* Overlays & Drawers */}
      <CartDrawer />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Floating Elements */}
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
