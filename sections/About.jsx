'use client';

import { TypingText } from '../components';

import styles from '../styles';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <TypingText title="Product Categories" textStyles="text-center" />
  </section>
);

export default About;
