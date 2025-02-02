import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [location, setLocation] = useState([6.5244, 3.3792]); 
  const [searchQuery, setSearchQuery] = useState("");

  const ChangeView = ({ center }) => {
    const map = useMap();
    useEffect(() => {
      if (center) {
        map.setView(center, 13);
      }
    }, [center, map]);
    return null;
  };

  // Function to handle search
  const handleSearch = async () => {
    if (!searchQuery) return;
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLocation([parseFloat(lat), parseFloat(lon)]);
      } else {
        alert("Location not found. Try again.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div className='py-10'>
  
     <div className='flex'>
     <input
        type="text"
        placeholder="Search for a location..."
        className="p-2 border rounded md:w-[300px] w-full mb-2 mt-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(); // Trigger search when Enter is pressed
          }
        }}
      />
      <button onClick={handleSearch} className="p-2 mt-2 mb-2 ml-2 bg-[#147C84] cursor-pointer hover:bg-[#0C4C51] text-white rounded">Search</button>

     </div>
      {/* Map */}
      <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location} />
        <ChangeView center={location} />
      </MapContainer>
    </div>
  );
};

export default Map;
