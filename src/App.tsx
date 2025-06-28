import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import MedicalTourismPackages from "./pages/tours/MedicalTourismPackages";
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
import Coffee from "./pages/export-import/Coffee";
import MezcalTequila from "./pages/export-import/MezcalTequila";
import Cereals from "./pages/export-import/Cereals";
import Textile from "./pages/export-import/Textile";
import Beaches from "./pages/tours/Beaches";
import Mountains from "./pages/tours/Mountains";
import Volcanoes from "./pages/tours/Volcanoes";
import Fishing from "./pages/tours/Fishing";
import Oludeniz from './pages/tours/beaches/Oludeniz';
import Kaputas from './pages/tours/beaches/Kaputas';
import Iztuzu from './pages/tours/beaches/Iztuzu';
import Ararat from './pages/tours/mountains/Ararat';
import Erciyes from './pages/tours/mountains/Erciyes';
import Kackar from './pages/tours/mountains/Kackar';
import Nemrut from './pages/tours/volcanoes/Nemrut';
import ErciyesVolcano from './pages/tours/volcanoes/Erciyes';
import Hasan from './pages/tours/volcanoes/Hasan';
import Bodrum from './pages/tours/fishing/Bodrum';
import Cesme from './pages/tours/fishing/Cesme';
import Gocek from './pages/tours/fishing/Gocek';
import Cultural from './pages/tours/Cultural';
import CulturalEphesus from './pages/tours/cultural/EphesusAncientCity';
import CulturalGobekliTepe from './pages/tours/cultural/GobekliTepe';
import CulturalTopkapiPalace from './pages/tours/cultural/TopkapiPalace';

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
              <Route path="/tours" element={<Navigate to="/tours/beaches" replace />} />
              <Route path="/tours/beaches" element={<Beaches />} />
              <Route path="/tours/mountains" element={<Mountains />} />
              <Route path="/tours/volcanoes" element={<Volcanoes />} />
              <Route path="/tours/fishing" element={<Fishing />} />
              <Route path="/tours/medical-tourism-packages" element={<MedicalTourismPackages />} />
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
              <Route path="/export-import/coffee" element={<Coffee />} />
              <Route path="/export-import/mezcal-tequila" element={<MezcalTequila />} />
              <Route path="/export-import/cereals" element={<Cereals />} />
              <Route path="/export-import/textile" element={<Textile />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/tours/beaches/oludeniz" element={<Oludeniz />} />
              <Route path="/tours/beaches/kaputas" element={<Kaputas />} />
              <Route path="/tours/beaches/iztuzu" element={<Iztuzu />} />
              <Route path="/tours/mountains/ararat" element={<Ararat />} />
              <Route path="/tours/mountains/erciyes" element={<Erciyes />} />
              <Route path="/tours/mountains/kackar" element={<Kackar />} />
              <Route path="/tours/volcanoes/nemrut" element={<Nemrut />} />
              <Route path="/tours/volcanoes/erciyes" element={<ErciyesVolcano />} />
              <Route path="/tours/volcanoes/hasan" element={<Hasan />} />
              <Route path="/tours/fishing/bodrum" element={<Bodrum />} />
              <Route path="/tours/fishing/cesme" element={<Cesme />} />
              <Route path="/tours/fishing/gocek" element={<Gocek />} />
              <Route path="/tours/cultural" element={<Cultural />} />
              <Route path="/tours/cultural/ephesus-ancient-city" element={<CulturalEphesus />} />
              <Route path="/tours/cultural/gobekli-tepe" element={<CulturalGobekliTepe />} />
              <Route path="/tours/cultural/topkapi-palace" element={<CulturalTopkapiPalace />} />
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
