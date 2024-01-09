import React from 'react';
import './Aboutus.css'; // Import your CSS file
import borderImage from './border.png'; // Import the border image

function Aboutus() {
  const blueSectionStyle = {
    backgroundImage: `url(${borderImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'left top',
  };

  return (
    <div className="grid grid-rows-3 gap-0">
      <section className="bg-white flex flex-col items-center justify-center h-96">
        {/* Content */}
        hola amigos 
      </section>
      <section className="black-section flex flex-col items-center justify-center text-white h-96">
        {/* Content */}
      </section>
      <section className="bg-blue-800 flex flex-col items-center text-white h-96 relative" style={blueSectionStyle}>
        <div className="content-container flex flex-col items-center justify-center h-full">
          {/* Content */}
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
