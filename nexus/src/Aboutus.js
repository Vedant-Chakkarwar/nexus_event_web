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
    <div className="grid grid-rows-3 gap-0 relative font">
      <section className="bg-white flex flex-col items-center justify-center h-96 relative">
        {/* Content */}
        <h1>NEXUS</h1>
        <motion.div
          className='w-full h-20 absolute bottom-0 black-section'
          animate={amberControls}
        ></motion.div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className='w-full h-28 absolute bottom-0'
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
          className='w-full h-28 absolute bottom-0 danimation'
          animate={redSvgControls}
        >
          <path d="M 0 0 L 7 4 L 14 0 L 0 0" fill="#161617" />
        </motion.svg>
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
