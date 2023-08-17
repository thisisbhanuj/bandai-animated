'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[40px] text-secondary-black uppercase ${textStyles}`}
  >
    {title}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-normal md:text-[80px] text-[60px] text-black ${textStyles}`}
  >
    {title}
  </motion.h2>
);
