import { motion, AnimatePresence } from 'framer-motion'

import Header from './Header'
import Features from './Features'
import TrustedBy from './TrustedBy'
import Efficiency from './Efficiency'
import Footer from './Footer'

const App: React.FC = () => {
  const exploreItems = Array.from({ length: 5 }, (_, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }} // Start slightly above
      animate={{ opacity: 1, y: 0 }} // Move to normal position
      transition={{ delay: index * 0.1 }}
      className={`explore-item ${index % 2 === 0 ? 'with-star' : ''}`}
    >
      Explore{index % 2 === 0 && <motion.span className="star-icon">⭐</motion.span>}
    </motion.span>
  ))
  return (
    <div className="flex flex-col p-5 bg-black rounded-[40px]">
      <Header />
      <AnimatePresence>
        <div className="explore-line">{exploreItems}</div>
      </AnimatePresence>
      {/* <ProjectManagement /> */}
      <Features />
      <TrustedBy />
      <Efficiency />
      <Footer />
    </div>
  )
}

export default App
