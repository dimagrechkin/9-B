import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const imgs = [
  'https://cdn.builder.io/api/v1/image/assets/TEMP/a0328e1d481cad2bfb69897b6b14d9a1f0a59872cfe264690cc4a5b121f4f9b3?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/43a3ee83efc1f435f84577222d206e66c73b6e72f6e04c2accddfcdeb97ed3f5?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/da74cf25c68824a36aac3f3f060922fcab55771b30217ab45f971d90217bb0a2?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/7900eac9d3bf6aa4903e8d0e249a93e552ae039778071fb7e6057bfb91a7425d?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/000855279b7ead7a7cec6a26c6cac4089b0542aab72b013215be293eff90a9fb?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/10c074837edf8ba32781ed5c10f05d0594eb1598760c68a83746aadadd7727ec?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
]

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 1.9
const DRAG_BUFFER = 2

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0)
  const dragX = useMotionValue(0)
  const swipeCount = useRef(0) // Keep track of swipes

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setImgIndex((pv) => (pv + 1) % imgs.length)
      }
    }, AUTO_DELAY)
    return () => clearInterval(intervalRef)
  }, [])

  const onDragEnd = () => {
    const x = dragX.get()
    swipeCount.current++ // Increment swipe count

    if (swipeCount.current < 2) {
      // Only change images within the first two swipes
      if (x <= -DRAG_BUFFER) {
        setImgIndex((pv) => (pv + 1) % imgs.length)
      } else if (x >= DRAG_BUFFER) {
        setImgIndex((pv) => (pv - 1 + imgs.length) % imgs.length)
      }
    }

    dragX.set(0) // Reset drag position after each swipe
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      <GradientEdges />
    </div>
  )
}

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-1/2 shrink-0 rounded-xl bg-thirdMain object-cover"
          />
        )
      })}
    </>
  )
}

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px]" />
    </>
  )
}
