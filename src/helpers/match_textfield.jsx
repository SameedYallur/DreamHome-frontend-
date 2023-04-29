import React, { useState, useEffect } from 'react';

function Match_textfield({ propertyNo }) {
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/propertymatch/${propertyNo}/`)
      .then(response => response.json())
      .then(data => setMatchData(data));
  }, [propertyNo]);
  
  return (
    <>
      {matchData && (
        <div className="container text-center my-4">
          <div className="row ">
            <div className="col shadow-sm m-2 " style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Property No.</h4>
              <p>{matchData.property.propertyno}</p>
            </div>
            <div className="col shadow-sm m-2 " style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Address</h4>
              <p>{matchData.property.address}</p>
            </div>

            <div className="col shadow-sm m-2 " style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Property Type</h4>
              <p>{matchData.property.proptype}</p>
            </div>
            <div className="col shadow-sm m-2 " style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Rooms</h4>
              <p>{matchData.property.rooms}</p>
            </div>

            <div className="col shadow-sm m-2 " style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Rent</h4>
              <p>{matchData.property.rent}</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col shadow-sm m-2" style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Client No.</h4>
              <p>{matchData.client[0].clientno}</p>
            </div>
            <div className="col shadow-sm m-2" style={{ backgroundColor: '#f8f9fa' }}>
              <h4>First Name</h4>
              <p>{matchData.client[0].fname}</p>
            </div>

            <div className="col shadow-sm m-2" style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Last Name</h4>
              <p>{matchData.client[0].lname}</p>
            </div>
            <div className="col shadow-sm m-2" style={{ backgroundColor: '#f8f9fa' }}>
              <h4>Registration Date</h4>
              <p>{matchData.client[0].regdate}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Match_textfield;
