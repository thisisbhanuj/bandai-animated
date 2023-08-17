import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1,
      backgroundColor: '#ff00008e',
    },
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setDirection('left');

    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            variants={slideVariants}
          />
        </AnimatePresence>
        <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
