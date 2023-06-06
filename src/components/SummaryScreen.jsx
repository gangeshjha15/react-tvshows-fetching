import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/SummaryScreen.css';

const SummaryScreen = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [showId]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${showId}`);
      const jsonData = await response.json();
      setShowData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {showData ? (
        <div className="summary-container">
          <div className="summary-image">
            {showData.image && <img src={showData.image.medium} alt={showData.name} />}
          </div>
          <div className="summary-content">
            <h2 className="summary-title">{showData.name}</h2>
            <div className="summary-details">
              <div className="summary-item">
                <span className="summary-label">Language:</span>
                <span className="summary-value">{showData.language}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Genres:</span>
                <span className="summary-value">{showData.genres.join(', ')}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Premiered:</span>
                <span className="summary-value">{showData.premiered}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Rating:</span>
                <span className="summary-value">{showData.rating.average ? showData.rating.average : "Nill"}</span>
              </div>
            </div>
            <p className="summary-summary" dangerouslySetInnerHTML={{ __html: showData.summary }}></p>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default SummaryScreen;
