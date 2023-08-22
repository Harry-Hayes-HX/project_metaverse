'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Talent League</span> Where Europe's R6 community excels. 
        As one of the top EU community leagues, its our mission to unite{' '}  
        <span className="font-extrabold text-white">
        passionate 
        </span>{' '}
        players and showcase their skills. From intense 
        matches to a thriving community, we're more than just a league; Join us to{' '}  
        <span className="font-extrabold text-white">
        elevate
        </span>{' '}
        Rainbow Six Siege in Europe, where Champions are forged. In Talent League, your journey to greatness begins.{' '}
        <span className="font-extrabold text-white">#PRAISETALENT</span>
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
