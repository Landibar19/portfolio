import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Portfolio from './pages/PortfolioPage/Portfolio';
import { ContactPage } from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';


function App() {
  return (
      <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  
    
  );
}

export default App;