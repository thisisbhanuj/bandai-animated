'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="toys"
      className="md:w-[250px] w-full h-[120px] rounded-[16px] object-cover"
    />
    <div className="w-full flex items-center">
      <div className="flex-1 md:ml-[50px] flex flex-col max-w-[650px]">
        <h4 className="font-bold lg:text-[21px] text-[15px] text-black">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[15 px] text-[12px] text-secondary-black">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
