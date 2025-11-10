// src/app/page.tsx
'use client'; // This marks the component as a Client Component

import React from 'react';
import HomeHero from './components/Hero';
import ConsultingSection from './components/ConsultingSection';
import CopilotSection from './components/CopilotSection';
import MarketplaceSection from './components/MarketplaceSection';
import NewsSection from './components/NewsSection';

export default function HomePage() {

  return (
    <div style={{ marginTop: '-64px' }}>
      {/* Hero Section - Justo debajo del header */}
      <HomeHero />
      
      {/* Consulting Section - Debajo del Hero */}
      <ConsultingSection />
      
      {/* Copilot Section - Debajo del Consulting Section */}
      <CopilotSection />
      
      {/* Marketplace Section - Debajo del Copilot Section */}
      <MarketplaceSection />
      
      {/* News Section - Debajo del Marketplace Section */}
      <NewsSection />
    </div>
  );
}
