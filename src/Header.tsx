import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000) // 1 second delay

    // Cleanup function: clear the timer when the component unmounts
    return () => clearTimeout(timer)
  }, []) // Empty dependency array: runs only once on mount

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
    hidden: {
      y: -50,
      opacity: 0,
    },
  }
  return (
    <header className="sticky top-0 z-50 flex-wrap gap-3 gap-y-3 justify-between content-center items-center px-16 py-5 w-full font-medium shadow backdrop-blur-[10px] rounded-[99px] max-md:px-5 max-md:max-w-full">
      {/* <div className="flex gap-2 justify-center self-stretch p-2.5 text-3xl font-bold tracking-tighter text-white whitespace-nowrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae22f4a03155fc95c889ffc8645c3719d84d2badef545532195afe4dc5f168f1?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60" alt="" className="shrink-0 my-auto w-7 aspect-square" />
        <div>TaskManager</div>
      </div> */}
      <motion.div className="header1" variants={headerVariants} animate={isVisible ? 'visible' : 'hidden'}>
        <nav className="flex top-24 gap-2.5 self-stretch my-auto text-sm leading-5 text-white">
          <div className="px-4 py-1.5 whitespace-nowrap shadow backdrop-blur-[10px] rounded-[99px]">HOME</div>
          <div className="px-4 py-1.5 shadow backdrop-blur-[10px] rounded-[99px]">TOKENOMICS</div>
          <div className="px-4 py-1.5 whitespace-nowrap shadow backdrop-blur-[10px] rounded-[99px]">HOW TO BUY</div>
        </nav>
      </motion.div>

      {/* <button className="flex gap-2.5 justify-center self-stretch px-5 py-2.5 my-auto text-base leading-6 text-center text-white rounded-xl">
        Download the App
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1975dc7082c2d07623d0b2f7054456ce0fec914b4f5644e4845b8719acab82c9?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60" alt="" className="shrink-0 my-auto w-4 aspect-square" />
      </button> */}
    </header>
  )
}

export default Header
