import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/DataScreen.css';


const DataScreen = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  return (
    <div>
    <h1 className='title'>Movies Rating</h1>
      {data ? (
        <div className="card-container">
          {data.map((show) => (
            <Link to={`/summary/${show.show.id}`} key={show.show.id} className="card-link" style={{ textDecoration: "none" }}>
            <div className="card" key={show.show.id}>
              <div className="card-image">
                {show.show.image && <img src={show.show.image.medium} alt={show.show.name} />}
              </div>
              <div className="card-content">
                <h3>{show.show.name}</h3>
                <h4>Genres: {show.show.genres[0]}</h4>
                <p dangerouslySetInnerHTML={{ __html: show.show.summary.substring(0,100) }}></p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataScreen;
