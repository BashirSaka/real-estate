import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Account from "./Components/Account";
import AddListing from "./Components/AddListing";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/add-listing" element={<AddListing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
