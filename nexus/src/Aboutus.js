import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Aboutus.css'; // Import your CSS file
import borderImage from './border.png'; // Import the border image
import Card from './Card';
import Contact from './Contact';

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
  const redSvgControls = useAnimation(); // New animation control for the red SVG

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleAnimation = async () => {
      const duration = 0;
      const easing = 'easeInOut';

      if (scrollY <= 50) {
        // Step 1: Initial state
        await Promise.all([
          svgControls.start({
            opacity: 1,
            transition: { duration, ease: easing },
          }),
          amberControls.start({
            opacity: 0,
            transition: { duration, ease: easing },
          }),
          redSvgControls.start({
            opacity: 0,
            transition: { duration, ease: easing },
          }),
        ]);
      } else if (scrollY <= 150) {
        // Step 2: Amber visible, SVG hidden
        await Promise.all([
          svgControls.start({
            opacity: 0,
            transition: { duration, ease: easing },
          }),
          amberControls.start({
            opacity: 1,
            transition: { duration, ease: easing },
          }),
          redSvgControls.start({
            opacity: 0,
            transition: { duration, ease: easing },
          }),
        ]);
      } else {
        // Step 3: Both SVG and Amber hidden, show red SVG
        await Promise.all([
          svgControls.start({
            opacity: 0,
            transition: { duration, ease: easing },
          }),
          amberControls.start({
            opacity: 0,
            transition: { duration, ease: easing },
          }),
          redSvgControls.start({
            opacity: 1,
            transition: { duration, ease: easing },
          }),
        ]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleAnimation(); // Initial setup

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, svgControls, amberControls, redSvgControls]);

  return (
    <div className="relative font">
      <section className="whitey flex flex-col items-center justify-center h-80 relative">
        {/* Content */}
        <h1 className='large-font align-left'>
  {'A b o u t'.split('').map((char, index) => 
    <span key={index} style={{ position: 'relative' }}>{char}</span>
  )}
</h1>
<h1 className='large-font move-up'>N E X U S</h1>
        
        <motion.div
          className='w-full h-12 absolute bottom-0 black-section border1'
          animate={amberControls} 
        ></motion.div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg" 
          className='w-full h-28 absolute bottom-0 border1 '
          viewBox="-13 -8 25 8"
          preserveAspectRatio='none'
          animate={svgControls}
        >
          <path d="M 0 0 L -13 -8 L -13 0 Z L 12 -8 L 12 0" fill="#161617" />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 4" 
          preserveAspectRatio='none'
          className='w-full h-28 absolute bottom-0 danimation '
          animate={redSvgControls}
        >
          <path d="M 0 0 L 7 4 L 14 0 L 0 0" fill="#161617" />
        </motion.svg>
      </section>
      <div className='border1'>
      <section className="black-section flex flex-col text-white">
        <p className='p-10'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
        <p className='p-10'>Too know more about the three clubs click on the cards below</p>
        <div className="flex flex-row justify-center">
          <Card />
          <Card />
          <Card />
          </div>
      </section>
      <section className="bg-blue-800 flex flex-col items-center text-white h-96 relative" style={blueSectionStyle}>
        <div className="content-container   h-full">
          <div className='pt-24'>
          <Contact />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Aboutus;
