import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TechScanLandingPage } from "./components/techscan/landing-page";
import { IntralinksPartnershipPortal } from "./pages/partnerships/intralinks";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TechScanLandingPage />} />
        <Route path="/partnerships/intralinks" element={<IntralinksPartnershipPortal />} />
      </Routes>
    </Router>
  );
}