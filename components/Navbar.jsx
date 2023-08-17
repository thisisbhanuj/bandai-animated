'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src="/bandai/logo.jpg"
        alt="menu"
        className="w-[220px] h-[100px] object-contain"
      />
    </div>
    <div className="grid justify-items-end gap-8">
      <h2 className="font-bold text-[24px] leading-[24px] text-black">
        Bandai Namco Toys & Collectibles America Inc.
      </h2>
    </div>
  </motion.nav>
);

export default Navbar;
