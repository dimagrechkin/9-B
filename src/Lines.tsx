import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    // const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'spring', duration: 3, bounce: 0 },
        opacity: { duration: 0.01 },
      },
    }
  },
}

export default function Lines() {
  return (
    <motion.svg
      viewport={{ once: true, amount: 0.1 }}
      whileInView="visible"
      className="absolute -bottom-72"
      width="1000"
      height="1000"
      viewBox="0 0 600 600"
      initial="hidden"
    >
      <motion.path
        d="M0,100 Q50,50 100,100 T200,100 T300,100 T400,100"
        stroke="gray"
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
        variants={draw}
        custom={2}
      />
    </motion.svg>
  )
}
