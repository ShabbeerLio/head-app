import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Pages/About/About';
import Training from './Pages/Training/Training';
import Screening from './Pages/Screening/Screening';
import Therapeutic from './Pages/Therapeutic/Therapeutic';
import Telerehab from './Pages/Telerehab/Telerehab';
import Resources from './Pages/Resources/Resources';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/cognitive-training-programs" exact element={<Training />} />
        <Route path="/screening-tests" exact element={<Screening />} />
        <Route path="/therapeutic-areas" exact element={<Therapeutic />} />
        <Route path="/telerehabilitation" exact element={<Telerehab />} />
        <Route path="/resources" exact element={<Resources />} />
        <Route path="/contact-us" exact element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
