import { motion } from 'framer-motion'

import FeatureCard from './FeatureCard'
import TextSlider from './TextSlider'
import img1 from './assets/image1.jpg'
import img2 from './assets/image2.jpg'
import img3 from './assets/image3.jpg'
import img4 from './assets/image4.jpg'
import img5 from './assets/image5.jpg'
import img6 from './assets/image6.jpg'
import Lines from './Lines'

const Features: React.FC = () => {
  const features = [
    {
      title: 'Unleash Your Inner Tommy Pickles',
      description:
        'Simplify your project management with tools as intuitive as Angelicas schemes. Keep your team aligned and productive, just like the Rugrats on a grand adventure.',
      imageSrc: img1,
    },
    {
      title: 'Collaborate Like Chuckie & Tommy',
      description:
        'Foster real-time collaboration with communication tools thatll have everyone on the same page, even if you are exploring the backyard.',
      imageSrc: img2,
    },
    {
      title: 'Optimize Tasks Like a Reptar Rampage',
      description:
        'Prioritize tasks efficiently and ensure timely project delivery with our features that are as advanced as a Reptar toy.',
      imageSrc: img3,
    },
    {
      title: 'Enhance Team Performance, Rugrats Style',
      description:
        "Boost your team's performance with clear goals and streamlined processes. We'll give you the insights you need to lead like a true Tommy Pickles.",
      imageSrc: img4,
    },
    {
      title: 'Maximize Efficiency with Tools Even Angelica Approves Of',
      description:
        "Maximize project efficiency with our advanced management tools. We'll help you enhance team collaboration and streamline workflows faster than a Rugrats diaper change.",
      imageSrc: img5,
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-5 pt-6 pb-5 mt-5 bg-secondaryMain rounded-[50px] max-md:max-w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-5 justify-center self-center px-5 max-md:flex-wrap"
      >
        <h2 className="flex-1 text-3xl font-semibold tracking-tighter text-primaryMain">
          Reptar-Sized Results in Project Management
        </h2>
        {/* <p className="flex-1 text-base leading-6 text-primaryMain text-opacity-70">
              Plan and organize your entire project work from start to finish. Communicate and collaborate with your management team.
            </p> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-8 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(0, 3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="relative">
        <Lines />
      </div>
      <div className="relative">
        <TextSlider />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-5 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col">
          {features.slice(3).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <FeatureCard {...feature} isWide={true} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Features
