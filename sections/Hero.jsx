'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import Carousel from './Carousel';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      initial="hidden"
      variants={staggerContainer}
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 md:-mt-[60px] -mt-[40px]">
        <motion.h1
          className={styles.heroHeading}
          variants={textVariant(1)}
        >
          TOYS  |  COLLECTIBLES  |  COMPANY  |  PREMIUM BANDAI SHOP
        </motion.h1>
      </div>
      <motion.div
        className="relative w-full md:-mt-[15px] -mt-[12px]"
        variants={slideIn('right', 'tween', 0.2, 1)}
      >
        <Carousel images={['/bandai/banner1.jpg', '/bandai/banner2.jpg', '/bandai/banner3.jpg', '/bandai/banner4.jpg']} />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
