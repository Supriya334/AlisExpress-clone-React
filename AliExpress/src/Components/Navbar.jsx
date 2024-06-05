import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

function CustomModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '100%', // Positioning the modal just below the button
      width: '120%', // Ensuring the modal takes the width of the container
      height: '240px', // Height of the modal
      backgroundColor: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      padding: '20px',
      boxSizing: 'border-box', // Ensure padding is included in height
      left: 0 // Align the modal to the left of the container
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img 
            style={{ height: "60px", marginRight: '20px' }} // Increased marginRight for more space
            src="https://ae01.alicdn.com/kf/S4c4cf3670c1f4dc68d48c2003ec2a26cP/3700x3700.png" 
            alt="QR Code" 
          />
          <p>
            <b>Download the AliExpress app</b>
            <br />
            <span>Scan the QR code to download</span>
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button style={{ flex: 1, margin: '0 5px' }}> <img src="" alt="" /> Apple Store</Button>
          <Button style={{ flex: 1, margin: '0 5px' }}>GooglePlay </Button>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => setIsModalOpen(true);
  const handleMouseLeave = () => setIsModalOpen(false);

  return (
    <div className="navbar">
      <div className="navbar-1-child">
        <img
          src="https://th.bing.com/th/id/OIP.0a8I_PXQVHKbYStLen_0AQHaEM?w=2048&h=1161&rs=1&pid=ImgDetMain"
          alt="Sponsor 1"
        />
        {' | '}
        <img
          src="https://static.vecteezy.com/system/resources/previews/022/700/794/original/euro-2024-germany-symbol-logo-official-name-white-european-football-final-design-illustration-with-black-background-free-vector.jpg"
          alt="Sponsor 2"
        />
        <p style={{ textAlign: 'center', color: 'white', fontSize: '8px' }}>
          OFFICIAL PARTNERS
        </p>
      </div>

      <div className="navbar-1-child2">
        <input type="text" placeholder="bluetooth earbuds" />
      </div>

      <div className="navbar-1-child3">
        <div 
          className="download flex" 
          style={{ position: 'relative' }} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button 
            style={{ border: "none", backgroundColor: "black", color: "white" }} 
          >
            Download the AliExpress app
          </Button>
          <CustomModal isOpen={isModalOpen} />
        </div>
        <div className="download"></div>
        <div className="download"></div>
        <div className="download"></div>
      </div>
    </div>
  );
}

export default Navbar;
