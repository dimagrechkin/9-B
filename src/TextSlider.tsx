import { motion } from 'framer-motion'

const slides = [{ icon: <span>Explore</span> }, { icon: <span>Explore</span> }, { icon: <span>Explore</span> }]

const TextSlider = () => {
  const duplicatedSlides = [...slides, ...slides]

  return (
    <div className="absolute bottom--10 w-full -rotate-12 -translate-x-14 z-50">
      <div className="h-full py-4 ">
        <motion.div
          className="flex bg-blue-500 w-[150%]"
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: 5,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-blue-500 w-[150%]"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex items-center justify-center h-full text-4xl">{slide.icon}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TextSlider

// const TextSlider = () => {
//     const duplicatedSlides = [
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//       ...slides,
//     ]

//     return (
//       <div className="absolute z-100 bottom-0">
//         <motion.div
//           className="flex text-4xl  bg-blue-500 p-2 rounded"
//           animate={{
//             x: ['0%', '-200%'],
//             transition: {
//               ease: 'linear',
//               duration: 5,
//               repeat: Infinity,
//             },
//           }}
//         >
//           {duplicatedSlides.map((slide, index) => (
//             <div key={index} style={{ width: `${100}%` }}>
//               <div
//                 className={`flex items-center justify-center h-full ${slide.icon.props.children === '⭐' ? 'pr-3' : ''}`}
//               >
//                 {slide.icon}
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     )
//   }
