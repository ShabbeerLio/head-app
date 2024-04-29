import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/headapp/" exact element={<Home title={""} descriptions={""} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
