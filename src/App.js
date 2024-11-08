import { HomePage } from "./components/HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { About } from "./components/About";
import { Service } from "./components/Service";
import { Menu } from "./components/Menu";
import { Booking } from "./components/Booking";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
