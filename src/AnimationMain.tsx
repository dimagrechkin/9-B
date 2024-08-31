import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import enterButton from './assets/enter.png'

import mainAnimation from './assets/mainAnimation.png'

function AnimationMain({ play }) {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
        <motion.img
          src={mainAnimation}
          alt="Rugrats Heroes"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-full absolute lg:relative top-44 lg:top-0 transform"
          initial={{ opacity: 0, scale: 10 }}
          animate={{
            opacity: 1,
            scale: 1.8,
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

        <Link onClick={play()} to="/main" className="justify-self-end">
          <motion.img
            className="w-80 absolute lg:relative left-16 lg:-left-64 py-2 px-4 rounded bottom-12 lg:bottom-auto"
            src={enterButton}
            alt=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          />
        </Link>
      </div>
    </motion.div>
  )
}

export default AnimationMain
