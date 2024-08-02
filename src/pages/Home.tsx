import { motion, useIsPresent, useScroll, useSpring } from 'framer-motion'

import Header from '../Header'
import Features from '../Features'
import ParagrapraphBlock from '../ParagrapraphBlock'

import TrustedBy from '../TrustedBy'

import Footer from '../Footer'

const Home: React.FC = () => {
  const isPresent = useIsPresent()
  return (
    <div className="flex flex-col p-5 bg-backgroundMain rounded-[40px] overflow-hidden">
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <Header />

      <Features />

      <TrustedBy />
      <ParagrapraphBlock />
      <Footer />
    </div>
  )
}

export default Home
