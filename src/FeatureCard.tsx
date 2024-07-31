import { motion } from 'framer-motion'

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  isWide?: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageSrc, isWide = false }) => {
  const widthClass = isWide ? 'w-6/12' : 'w-[33%]'

  return (
    <div className={`flex flex-col ${isWide ? 'ml-5' : ''} ${widthClass} max-md:ml-0 max-md:w-full`}>
      <div className="flex flex-col grow p-5 w-full bg-thirdMain rounded-[50px] max-md:mt-5 max-md:max-w-full overflow-hidden">
        <motion.img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className={`w-full ${isWide ? 'aspect-[2.44]' : 'aspect-[1.56]'} rounded-[30px] ${
            isWide ? 'max-md:max-w-full' : ''
          }`}
          initial={{ y: 50, scale: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 3,
              y: { type: 'spring', stiffness: 100, damping: 5 },
              scale: { type: 'spring', stiffness: 300, damping: 7 },
            },
          }}
        />
        <motion.h3
          className="mt-5 text-2xl font-semibold tracking-tighter text-primaryMain"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="mt-2 text-base leading-6 text-primaryMain text-opacity-70"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  )
}

export default FeatureCard
