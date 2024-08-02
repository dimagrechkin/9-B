import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import backgroundAnimation from './assets/backgroundAnimation.png'
import mainAnimation from './assets/mainAnimation.png'

function AnimationMain() {
  const backgroundVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 4,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  }

  return (
    <motion.div className="h-screen w-screen relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(backgroundAnimation.png)' }}
        variants={backgroundVariants}
        animate="spin"
        initial={{ scale: 2.1 }}
      />

      <motion.img
        src={mainAnimation}
        alt="Rugrats Heroes"
        className="w-full sm:w-3/4 md:w-2/3 lg:w-3/5 absolute top-44 transform "
        initial={{ opacity: 0, scale: 10 }}
        animate={{
          opacity: 1,
          scale: 1.5,
          y: [0, -20, 0],
          transition: {
            delay: 0.5,
            y: {
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            },
          },
        }}
      />
      <Link to="/main">
        <button className="w-full  absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-44">
          Click Me
        </button>
      </Link>
    </motion.div>
  )
}

export default AnimationMain
