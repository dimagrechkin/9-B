import { SwipeCarousel } from './SwipeCarousel'
import { motion } from 'framer-motion'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const imgs = [
  'https://cdn.builder.io/api/v1/image/assets/TEMP/a0328e1d481cad2bfb69897b6b14d9a1f0a59872cfe264690cc4a5b121f4f9b3?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/43a3ee83efc1f435f84577222d206e66c73b6e72f6e04c2accddfcdeb97ed3f5?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/da74cf25c68824a36aac3f3f060922fcab55771b30217ab45f971d90217bb0a2?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/7900eac9d3bf6aa4903e8d0e249a93e552ae039778071fb7e6057bfb91a7425d?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/000855279b7ead7a7cec6a26c6cac4089b0542aab72b013215be293eff90a9fb?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/10c074837edf8ba32781ed5c10f05d0594eb1598760c68a83746aadadd7727ec?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
]

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

const Images = () => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return <img src={imgSrc} alt="" />
      })}
    </>
  )
}

const TrustedBy: React.FC = () => {
  return (
    <div className="flex flex-col max-w-full w-[686px] mt-4">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
      >
        {imgs.map((imgSrc, idx) => {
          return (
            <motion.div
              key={idx}
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: '320px 50% ',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              animate={{
                scale: 0.95,
              }}
              transition={SPRING_OPTIONS}
              className="w-52 h-24 mx-4 rounded-lg bg-secondaryMain object-cover p-4"
            >
              <div className="w-full h-full scale-150" />
            </motion.div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default TrustedBy
