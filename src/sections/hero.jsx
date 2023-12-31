import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components/CustomTexts';
import ExploreCard from '../components/ExploreCard';

const reviews = [
  {
    id: 'review-1',
    imgUrl: '../src/assets/r1.png',
    title: 'Australian Chef',
  },
  {
    id: 'review-2',
    imgUrl: '../src/assets/r2.png',
    title: 'America Writer',
  },
  {
    id: 'review-3',
    imgUrl: '../src/assets/r6.png',
    title: 'Swedish Actress',
  },
  {
    id: 'review-4',
    imgUrl: '../src/assets/r5.png',
    title: 'Canadian Singer',
  }

];

const Hero = () => {
  const [active, setActive] = useState('review-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Reviews" textStyles="text-center" />
        <TitleText title={<>Testimonials</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {reviews.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
