import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlogDetail from './pages/Blog';
import AllVehicales from './pages/AllVehicales/index';
import BookNow from './pages/BookNow/index';
import ConformBooking from './pages/ConformBooking/index';

import { useCausewayMyContext } from './context/CausewayMyContextProvider';
import PageTrans from './components/PageTrans/PageTrans';
import NotFound from './components/NotFound/NotFound';
import VersionChecker from './components/VersionChecker/VersionChecker';

function App() {
  const { loaderActive, activePageTrans } = useCausewayMyContext();
  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); 

  return (
    <>
      {(!loaderActive && activePageTrans) && <PageTrans />} 
      <VersionChecker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/causeway-vehicles" element={<AllVehicales />} />
        <Route path="/causeway-booking" element={<BookNow />} />
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/reservation/conform-booking/:reservationUid/:reservationId" element={<ConformBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
