import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './HomePage.css';
import houseIcon from '../Images/white-home-svgrepo-com.svg';
import price_risng from '../Images/house-prices-rising.svg';
import energy_bill from '../Images/electricity-bill-svgrepo-com.svg';

 


const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/properties`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Believe in finding it</h1>
          <p>with the UK's largest choice of homes</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="e.g. Bath, NW3, or Leeds station"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search-buttons">
              <Button onClick={handleSearch}>For Sale</Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="info-cards">
        <div className="home-card">
          <img src={houseIcon}  alt="Sold House Prices" />
          <h3>Sold house prices</h3>
          <p>Check what a home sold for plus photos, floorplans and local area insights.</p>
        </div>
        <div className="home-card">
          <img src={price_risng} alt="House Price Forecast" />
          <h3>Our 2025 house price forecast</h3>
          <p>How's the housing market looking now, and what could happen next year?</p>
        </div>
        <div className="home-card">
          <img src={energy_bill} alt="Energy Bill Tips" />
          <h3>10 mistakes adding £100s to your energy bill</h3>
          <p>Simple changes and tips that could save you money this winter.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
