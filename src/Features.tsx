import FeatureCard from './FeatureCard'
import { motion } from 'framer-motion'

const Features: React.FC = () => {
  const features = [
    {
      title: 'Streamline Your Workflow',
      description:
        'Simplify your project management with intuitive tools designed to enhance productivity and keep your team aligned',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/53b996a6600df3526161e17ee88c3fd7505f09a6f7bcc84e36803be391ebd5c6?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
    {
      title: 'Collaborate Seamlessly',
      description:
        'Foster collaboration with real-time updates and communication tools that keep everyone on the same page',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/a2c1aaf5e27f1a43a7962d03f6830cfbb1082da3f59ba5a037c3f2ad3a8c1d7e?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
    {
      title: 'Optimize Task Management',
      description:
        'Prioritize tasks efficiently and ensure timely project delivery with our advanced tracking features',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/c43521ca1450b9a4c051731979274a9dfd0271fe84622b289bea909b63aee9ad?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
    {
      title: 'Enhance Team Performance',
      description: "Boost your team's performance with clear goals, streamlined processes, and insightful analytics",
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/4e1868a9a8810def45d563c600545dbfea5b3572f03178f9b9bae8e1661dd5a9?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
    {
      title: 'Enhance Team Performance',
      description: "Boost your team's performance with clear goals, streamlined processes, and insightful analytics",
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e4b56bd9c3d6862be258609223c806f3c1d605879a98f31902e0aa679c84f5f9?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60',
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col px-5 pt-6 pb-5 mt-5 bg-zinc-800 rounded-[50px] max-md:max-w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex gap-5 justify-center self-center px-5 max-md:flex-wrap"
      >
        <h2 className="flex-1 text-3xl font-semibold tracking-tighter text-white">
          Unleash Efficiency in Project Management
        </h2>
        {/* <p className="flex-1 text-base leading-6 text-white text-opacity-70">
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
