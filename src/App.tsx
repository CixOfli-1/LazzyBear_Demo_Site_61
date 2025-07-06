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
import PopularDestinations from "./pages/tours/PopularDestinations";
import IstanbulTours from "./pages/tours/destinations/IstanbulTours";
import CappadociaTours from "./pages/tours/destinations/CappadociaTours";
import AntalyaTours from "./pages/tours/destinations/AntalyaTours";
import MedicalServices from "./pages/MedicalServices";
import OurPartners from "./pages/medical/OurPartners";
import BeforeAfterCare from "./pages/medical/BeforeAfterCare";
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
import HairTransplant from './pages/medical/HairTransplant';
import StemCellHairTransplant from './pages/medical/hair-transplant/StemCellHairTransplant';
import SapphireFueHairTransplant from './pages/medical/hair-transplant/SapphireFueHairTransplant';
import FueHairTransplant from './pages/medical/hair-transplant/FueHairTransplant';
import DirectHairImplant from './pages/medical/hair-transplant/DirectHairImplant';
import UnshavenHairTransplant from './pages/medical/hair-transplant/UnshavenHairTransplant';
import FemaleHairTransplant from './pages/medical/hair-transplant/FemaleHairTransplant';
import EyebrowTransplant from './pages/medical/hair-transplant/EyebrowTransplant';
import BeardTransplant from './pages/medical/hair-transplant/BeardTransplant';
import HairGraftCalculator from './pages/medical/hair-transplant/HairGraftCalculator';
import OzoneTherapyForHair from './pages/medical/hair-transplant/OzoneTherapyForHair';

import DentalTreatment from './pages/medical/DentalTreatment';
import DentalImplants from './pages/medical/dental-treatment/DentalImplants';
import DentalLaser from './pages/medical/dental-treatment/DentalLaser';
import HollywoodSmile from './pages/medical/dental-treatment/HollywoodSmile';
import TeethWhitening from './pages/medical/dental-treatment/TeethWhitening';
import Endodontic from './pages/medical/dental-treatment/Endodontic';
import Zirconium from './pages/medical/dental-treatment/Zirconium';
import Periodontology from './pages/medical/dental-treatment/Periodontology';
import Orthodontics from './pages/medical/dental-treatment/Orthodontics';

import PlasticSurgery from './pages/medical/PlasticSurgery';
import TummyTuck from './pages/medical/plastic-surgery/TummyTuck';
import Liposuction from './pages/medical/plastic-surgery/Liposuction';
import Rhinoplasty from './pages/medical/plastic-surgery/Rhinoplasty';
import BreastAugmentation from './pages/medical/plastic-surgery/BreastAugmentation';
import BreastLift from './pages/medical/plastic-surgery/BreastLift';
import Facelift from './pages/medical/plastic-surgery/Facelift';
import Otoplasty from './pages/medical/plastic-surgery/Otoplasty';
import LipAugmentation from './pages/medical/plastic-surgery/LipAugmentation';

import EyeSurgery from './pages/medical/EyeSurgery';
import FemtoLasikLaser from './pages/medical/eye-surgery/FemtoLasikLaser';
import RefractiveSurgery from './pages/medical/eye-surgery/RefractiveSurgery';
import SmileLaser from './pages/medical/eye-surgery/SmileLaser';
import TrifocalLens from './pages/medical/eye-surgery/TrifocalLens';

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
              <Route path="/tours/popular-destinations" element={<PopularDestinations />} />
              <Route path="/tours/popular-destinations/istanbul-tours" element={<IstanbulTours />} />
              <Route path="/tours/popular-destinations/cappadocia-tours" element={<CappadociaTours />} />
              <Route path="/tours/popular-destinations/antalya-tours" element={<AntalyaTours />} />
              <Route path="/medical-services" element={<MedicalServices />} />
              <Route path="/medical-services/hair-transplant" element={<HairTransplant />} />
              <Route path="/medical-services/hair-transplant/stem-cell-hair-transplant" element={<StemCellHairTransplant />} />
              <Route path="/medical-services/hair-transplant/sapphire-fue-hair-transplant" element={<SapphireFueHairTransplant />} />
              <Route path="/medical-services/hair-transplant/fue-hair-transplant" element={<FueHairTransplant />} />
              <Route path="/medical-services/hair-transplant/direct-hair-implant" element={<DirectHairImplant />} />
              <Route path="/medical-services/hair-transplant/unshaven-hair-transplant" element={<UnshavenHairTransplant />} />
              <Route path="/medical-services/hair-transplant/female-hair-transplant" element={<FemaleHairTransplant />} />
              <Route path="/medical-services/hair-transplant/eyebrow-transplant" element={<EyebrowTransplant />} />
              <Route path="/medical-services/hair-transplant/beard-transplant" element={<BeardTransplant />} />
              <Route path="/medical-services/hair-transplant/hair-graft-calculator" element={<HairGraftCalculator />} />
              <Route path="/medical-services/hair-transplant/ozone-therapy-for-hair" element={<OzoneTherapyForHair />} />

              <Route path="/medical-services/dental-treatment" element={<DentalTreatment />} />
              <Route path="/medical-services/dental-treatment/dental-implants" element={<DentalImplants />} />
              <Route path="/medical-services/dental-treatment/dental-laser" element={<DentalLaser />} />
              <Route path="/medical-services/dental-treatment/hollywood-smile" element={<HollywoodSmile />} />
              <Route path="/medical-services/dental-treatment/teeth-whitening" element={<TeethWhitening />} />
              <Route path="/medical-services/dental-treatment/endodontic" element={<Endodontic />} />
              <Route path="/medical-services/dental-treatment/zirconium" element={<Zirconium />} />
              <Route path="/medical-services/dental-treatment/periodontology" element={<Periodontology />} />
              <Route path="/medical-services/dental-treatment/orthodontics" element={<Orthodontics />} />

              <Route path="/medical-services/plastic-surgery" element={<PlasticSurgery />} />
              <Route path="/medical-services/plastic-surgery/tummy-tuck" element={<TummyTuck />} />
              <Route path="/medical-services/plastic-surgery/liposuction" element={<Liposuction />} />
              <Route path="/medical-services/plastic-surgery/rhinoplasty" element={<Rhinoplasty />} />
              <Route path="/medical-services/plastic-surgery/breast-augmentation" element={<BreastAugmentation />} />
              <Route path="/medical-services/plastic-surgery/breast-lift" element={<BreastLift />} />
              <Route path="/medical-services/plastic-surgery/facelift" element={<Facelift />} />
              <Route path="/medical-services/plastic-surgery/otoplasty" element={<Otoplasty />} />
              <Route path="/medical-services/plastic-surgery/lip-augmentation" element={<LipAugmentation />} />

              <Route path="/medical-services/eye-surgery" element={<EyeSurgery />} />
              <Route path="/medical-services/eye-surgery/femto-lasik-laser" element={<FemtoLasikLaser />} />
              <Route path="/medical-services/eye-surgery/refractive-surgery" element={<RefractiveSurgery />} />
              <Route path="/medical-services/eye-surgery/smile-laser" element={<SmileLaser />} />
              <Route path="/medical-services/eye-surgery/trifocal-lens" element={<TrifocalLens />} />
              <Route path="/medical-services/before-after-care" element={<BeforeAfterCare />} />
              <Route path="/medical-services/our-partners" element={<OurPartners />} />
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
