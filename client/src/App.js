import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import "./styles/Main.css";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import Cars from "./pages/Cars";
import BookingForm from "./pages/BookingForm";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <>
              <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cars" element={<Cars />} />
                <Route
                  path="cars/bookingform/:carId"
                  element={<BookingForm />}
                />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          </>
        }
      />
    </Routes>
  );
}

export default App;
