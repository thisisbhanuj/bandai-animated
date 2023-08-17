'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { videoVariants, staggerContainer, fadeIn } from '../utils/motion';
import Video from './Video';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <TitleText title="Latest Video" textStyles="text-center" />
            <TypingText title={<>Check out our recent product releases and see what's new in the Bandai world!</>} textStyles="mt-[25px] text-center font-normal lg:text-[21px] text-[15px] gap-10" />
            <TypingText title={<>MORE</>} textStyles="mt-[15px] text-center font-bold lg:text-[25px] text-[15px]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={videoVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Video />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
