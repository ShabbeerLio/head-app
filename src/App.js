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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/headapp/" exact element={<Home />} />
        <Route path="/headapp/about" exact element={<About />} />
        <Route path="/headapp/cognitive-training-programs" exact element={<Training />} />
        <Route path="/headapp/screening-tests" exact element={<Screening />} />
        <Route path="/headapp/therapeutic-areas" exact element={<Therapeutic />} />
        <Route path="/headapp/telerehabilitation" exact element={<Telerehab />} />
        <Route path="/headapp/resources" exact element={<Resources />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
