
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import MedicalTourismPackages from "./pages/tours/MedicalTourismPackages";
import DentalTourism from "./pages/tours/medical-tourism/DentalTourism";
import HairTransplantationTourism from "./pages/tours/medical-tourism/HairTransplantationTourism";
import EyeSurgeryTourism from "./pages/tours/medical-tourism/EyeSurgeryTourism";
import AestheticCosmeticSurgeryTourism from "./pages/tours/medical-tourism/AestheticCosmeticSurgeryTourism";
import WellnessSpRetreats from "./pages/tours/medical-tourism/WellnessSpRetreats";
import RehabilitationRecoveryPrograms from "./pages/tours/medical-tourism/RehabilitationRecoveryPrograms";
import CulturalLeisureTours from "./pages/tours/CulturalLeisureTours";
import HistoricalCityTours from "./pages/tours/cultural-leisure/HistoricalCityTours";
import AdventureTours from "./pages/tours/cultural-leisure/AdventureTours";
import NatureEcotourism from "./pages/tours/cultural-leisure/NatureEcotourism";
import CustomizedTourPackages from "./pages/tours/cultural-leisure/CustomizedTourPackages";
import PopularDestinations from "./pages/tours/PopularDestinations";
import IstanbulTours from "./pages/tours/destinations/IstanbulTours";
import CappadociaTours from "./pages/tours/destinations/CappadociaTours";
import AntalyaTours from "./pages/tours/destinations/AntalyaTours";
import MedicalServices from "./pages/MedicalServices";
import SpecializedTreatments from "./pages/medical/SpecializedTreatments.tsx";
import Oncology from "./pages/medical/specialized/Oncology";
import Cardiology from "./pages/medical/specialized/Cardiology";
import Orthopedics from "./pages/medical/specialized/Orthopedics";
import Neurology from "./pages/medical/specialized/Neurology";
import FertilityTreatments from "./pages/medical/specialized/FertilityTreatments";
import CheckupPrograms from "./pages/medical/specialized/CheckupPrograms";
import OurPartners from "./pages/medical/OurPartners";
import MedicalSecondOpinion from "./pages/medical/MedicalSecondOpinion";
import BeforeAfterCare from "./pages/medical/BeforeAfterCare";
import PatientTestimonials from "./pages/medical/PatientTestimonials";
import ExportImport from "./pages/ExportImport";
import MedicalEquipmentExport from "./pages/export-import/MedicalEquipmentExport";
import PharmaceuticalExportImport from "./pages/export-import/PharmaceuticalExportImport";
import HealthProductSourcing from "./pages/export-import/HealthProductSourcing";
import LogisticsSupplyChainSolutions from "./pages/export-import/LogisticsSupplyChainSolutions";
import PartnershipOpportunities from "./pages/export-import/PartnershipOpportunities";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="/tours/medical-tourism-packages" element={<MedicalTourismPackages />} />
              <Route path="/tours/medical-tourism-packages/dental-tourism" element={<DentalTourism />} />
              <Route path="/tours/medical-tourism-packages/hair-transplantation-tourism" element={<HairTransplantationTourism />} />
              <Route path="/tours/medical-tourism-packages/eye-surgery-tourism" element={<EyeSurgeryTourism />} />
              <Route path="/tours/medical-tourism-packages/aesthetic-cosmetic-surgery-tourism" element={<AestheticCosmeticSurgeryTourism />} />
              <Route path="/tours/medical-tourism-packages/wellness-spa-retreats" element={<WellnessSpRetreats />} />
              <Route path="/tours/medical-tourism-packages/rehabilitation-recovery-programs" element={<RehabilitationRecoveryPrograms />} />
              <Route path="/tours/cultural-leisure-tours" element={<CulturalLeisureTours />} />
              <Route path="/tours/cultural-leisure-tours/historical-city-tours" element={<HistoricalCityTours />} />
              <Route path="/tours/cultural-leisure-tours/adventure-tours" element={<AdventureTours />} />
              <Route path="/tours/cultural-leisure-tours/nature-ecotourism" element={<NatureEcotourism />} />
              <Route path="/tours/cultural-leisure-tours/customized-tour-packages" element={<CustomizedTourPackages />} />
              <Route path="/tours/popular-destinations" element={<PopularDestinations />} />
              <Route path="/tours/popular-destinations/istanbul-tours" element={<IstanbulTours />} />
              <Route path="/tours/popular-destinations/cappadocia-tours" element={<CappadociaTours />} />
              <Route path="/tours/popular-destinations/antalya-tours" element={<AntalyaTours />} />
              <Route path="/medical-services" element={<MedicalServices />} />
              <Route path="/medical-services/specialized-treatments" element={<SpecializedTreatments />} />
              <Route path="/medical-services/specialized-treatments/oncology" element={<Oncology />} />
              <Route path="/medical-services/specialized-treatments/cardiology" element={<Cardiology />} />
              <Route path="/medical-services/specialized-treatments/orthopedics" element={<Orthopedics />} />
              <Route path="/medical-services/specialized-treatments/neurology" element={<Neurology />} />
              <Route path="/medical-services/specialized-treatments/fertility-treatments" element={<FertilityTreatments />} />
              <Route path="/medical-services/specialized-treatments/check-up-programs" element={<CheckupPrograms />} />
              <Route path="/medical-services/our-partners" element={<OurPartners />} />
              <Route path="/medical-services/medical-second-opinion" element={<MedicalSecondOpinion />} />
              <Route path="/medical-services/before-after-care" element={<BeforeAfterCare />} />
              <Route path="/medical-services/patient-testimonials" element={<PatientTestimonials />} />
              <Route path="/export-import" element={<ExportImport />} />
              <Route path="/export-import/medical-equipment-export" element={<MedicalEquipmentExport />} />
              <Route path="/export-import/pharmaceutical-export-import" element={<PharmaceuticalExportImport />} />
              <Route path="/export-import/health-product-sourcing" element={<HealthProductSourcing />} />
              <Route path="/export-import/logistics-supply-chain-solutions" element={<LogisticsSupplyChainSolutions />} />
              <Route path="/export-import/partnership-opportunities" element={<PartnershipOpportunities />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
