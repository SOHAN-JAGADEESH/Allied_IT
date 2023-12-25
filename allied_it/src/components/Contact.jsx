import React from 'react';

const Contact = () => {
  // Inline styles for the container, text section, and form section
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '50px',
    
    position: 'relative', // Needed for absolute positioning of the SVG
  };

  const textSectionStyle = {
    maxWidth: '500px',
    color: 'white',
    marginRight: '50px',
    zIndex: 2, // Ensure the text is above the SVG line
  };

  const formSectionStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '40px',
    maxWidth: '400px',
    width: '100%',
    zIndex: 2, // Ensure the form is above the SVG line
  };

  const svgStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1, // Below the text and form sections
  };

  return (
    <div style={containerStyle}>
      {/* SVG Curve */}
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{
          width: '200px',
          height: '200px',
          position: 'absolute',
          top: '50%', // Adjust this value to match the vertical position of the curve
          left: '50%', // Adjust this value to match the horizontal position of the curve
          transform: 'translate(-50%, -50%) rotate(0deg)', // Adjust rotation if needed
          zIndex: 1, // Ensure it's above the background but below the content
        }}
      >
        <path 
          fill="none" 
          stroke="orange" 
          strokeWidth="5" 
          d="M0,100 Q50,-50 100,100 T200,100" 
        />
      </svg>

      {/* Text Section */}
        <div style={textSectionStyle}>
        <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>It’s time to build something exciting!</h1>
        <p style={{ marginBottom: '20px', color: '#F48023' }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
        </p>

    
      </div>

      {/* Form Section */}
      <div style={formSectionStyle}>
        <h2 style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '20px' }}>Get a free quote</h2>
        <p style={{ marginBottom: '30px' }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
        <form>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <input type="email" placeholder="Email address" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }} />
          <textarea placeholder="Project brief" style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '100px' }}></textarea>
          <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#ffa500', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Get Free Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
