import { motion, AnimatePresence } from 'framer-motion'

const ProjectOverview: React.FC = () => {
  const ExploreLine = () => {
    const exploreItems = Array.from({ length: 4 }, (_, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, translateX: -20 }} // Initial state
        animate={{ opacity: 1, translateX: 0 }} // Animated state
        transition={{ delay: index * 0.1 }} // Staggered delay
        className="explore-item"
      >
        Explore
        <motion.span className="star-icon">⭐</motion.span>
      </motion.span>
    ))

    return (
      <AnimatePresence>
        <div className="explore-line">{exploreItems}</div>
      </AnimatePresence>
    )
  }

  return (
    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto text-base font-medium text-primaryMain max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 self-start px-3 py-1 text-sm leading-5 rounded-lg border border-solid shadow backdrop-blur-[10px] bg-white bg-opacity-10 border-white border-opacity-20">
          <div>New Mobile App Launched!</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ce2f338b71f218c17cd638d004790ba932f7bbaf1b9431f5d0dba3e79b1e9e?apiKey=596c4d4628c64f41b2a2cc62092b3a60&&apiKey=596c4d4628c64f41b2a2cc62092b3a60"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
        </div>
        <h1 className="mt-5 text-6xl font-semibold tracking-tighter max-md:max-w-full max-md:text-4xl">
          All-in-One Project Management
        </h1>
        <p className="mt-5 leading-6 text-primaryMain text-opacity-70 max-md:max-w-full">
          Streamline your meetings, manage projects efficiently, and optimize your workflow—all in one place
        </p>
        <div className="flex gap-5 mt-5 text-center leading-[150%] max-md:flex-wrap">
          <button className="px-5 py-2.5 rounded-xl">Get Started</button>
          <button className="px-5 py-2.5 rounded-xl bg-thirdMain">See Our Feature</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectOverview
