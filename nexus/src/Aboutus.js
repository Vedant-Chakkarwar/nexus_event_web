import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Aboutus.css'; // Import your CSS file
import borderImage from './border.png'; // Import the border image

function Aboutus() {
  const blueSectionStyle = {
    backgroundImage: `url(${borderImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'left top',
  };

  const [scrollY, setScrollY] = useState(0);
  const svgControls = useAnimation();
  const amberControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleAnimation = async () => {
      await svgControls.start({
        opacity: scrollY > 50 ? 0 : 1,
      });

      await amberControls.start({
        opacity: scrollY > 50 ? 1 : 0,
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleAnimation(); // Initial setup

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, svgControls, amberControls]);

  return (
    <div className="grid grid-rows-3 gap-0 relative">
      <section className="bg-white flex flex-col items-center justify-center h-96 relative">
        {/* Content */}
        hola amigos
        <motion.div
          className='w-full h-16 absolute bottom-0 bg-amber-400'
          animate={amberControls}
          style={{ transition: 'opacity 0.5s ease' }} // Adjust the duration as needed
        ></motion.div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className='w-full h-24 absolute bottom-0'
          viewBox="-13 -8 25 8"
          preserveAspectRatio='none'
          animate={svgControls}
          style={{ transition: 'opacity 0.5s ease' }} // Adjust the duration as needed
        >
          <path d="M 0 0 L -13 -8 L -13 0 Z L 12 -8 L 12 0" fill="#161617" />
        </motion.svg>
        

      </section>
      <section className="bg-black black-section flex flex-col items-center justify-center text-white h-96">
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
