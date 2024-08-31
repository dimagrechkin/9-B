import { motion, useIsPresent } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

import derzhitLogo from '../assets/logoHeroLarge.png'
import rugratsLogo from '../assets/logo.png'
import tablaLogo from '../assets/tabla.png'
import xLogo from '../assets/x.png'
import telegaLogo from '../assets/teleg.png'

import aboutButton from '../assets/about-button.png'
import tekenomicButton from '../assets/tek-button.png'
import buyButton from '../assets/buy-button.png'

import tommyCard from '../assets/tommy-card.png'
import angelicaCard from '../assets/angelica-card.png'
import chuckyCard from '../assets/chucky-card.png'
import kimiCard from '../assets/kimi-card.png'
import susieCard from '../assets/susie-card.png'
import geminiCard from '../assets/gemini-card.png'
import dilCard from '../assets/dil-card.png'
import spikeCard from '../assets/spike-card.png'

import tommy_her from '../assets/dil_sh.png'
import angelica_her from '../assets/jess_sh.png'
import chucky_her from '../assets/chucky_sh.png'
import kimi_her from '../assets/dev2_sh.png'
import susie_her from '../assets/dev_sh.png'
import gemini_her from '../assets/gem_sh.png'
import dil_her from '../assets/maliy_sh.png'
import spike_her from '../assets/spike.png'

import rodit from '../assets/rodit.png'
import desk from '../assets/desk.png'
import aboutImage from '../assets/about-page-image-med.png'

import golovaImg from '../assets/baby.png'
import babyWhiteImg from '../assets/baby_white.png'
import babyWhiteText from '../assets/babyWhiteText.png'
import useScrollBlock from '../hooks/useScrollBlock'

const Home: React.FC = () => {
  const isPresent = useIsPresent()
  const [toggle, setToggle] = useState(null)
  const sectionRef = useRef(null)
  const aboutSectionRef = useRef(null)

  const [blockScroll, allowScroll] = useScrollBlock()
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(0) // Track loaded images

  useEffect(() => {
    blockScroll()
    if (imagesLoaded === 2) {
      allowScroll()
      setIsLoading(false)
    }
  }, [imagesLoaded])

  const handleImageLoad = () => {
    setImagesLoaded((prevLoaded) => prevLoaded + 1)
  }

  const cards = [
    { src: tommyCard, hero: tommy_her, alt: 'Tommy Pickles' },
    { src: angelicaCard, hero: angelica_her, alt: 'Angelica' },
    { src: chuckyCard, hero: chucky_her, alt: 'Chucky Finster' },
    { src: kimiCard, hero: kimi_her, alt: 'Kimi Finster' },
    { src: susieCard, hero: susie_her, alt: 'Susie Carmichael' },
    { src: geminiCard, hero: gemini_her, alt: 'Phil and Lil DeVille' },
    { src: dilCard, hero: dil_her, alt: 'Dil Pickles' },
    { src: spikeCard, hero: spike_her, alt: 'Spike' },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#00aaff] rounded-[40px] filter drop-shadow-lg overflow-hidden">
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute w-32 h-32 top-44 border-t-4 border-lime-300 border-solid rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />

      <motion.div
        className="absolute top-4 right-4 md:right-8 md:top-8 flex space-x-4 z-50"
        initial={{ y: -150 }}
        animate={!isLoading ? { y: 0 } : {}}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <motion.a
          target="_blank"
          href="https://x.com/RUGRATSCOIN"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={xLogo} alt="twitter logo" className="w-12 h-12 md:w-24 md:h-24 filter drop-shadow-xl" />
        </motion.a>

        <motion.a
          target="_blank"
          href="https://t.me/rugratscoinsol"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img
            src={telegaLogo}
            alt="telega logo"
            className="w-12 h-12 md:w-24 md:h-24 filter drop-shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.a>
        <motion.img
          src={tablaLogo}
          alt="tabla logo"
          className="w-12 h-12 md:w-24 md:h-24 filter drop-shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </motion.div>
      <div className="relative w-96 h-96 md:w-[600px] md:h-[550px] md:translate-y-1/4 translate-y-1/3">
        <motion.div
          className=""
          initial={{ scale: 0, y: -100, opacity: 0 }}
          animate={!isLoading ? { scale: 1, y: 0, opacity: 1 } : {}}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20,
            duration: 0.5,
          }}
        >
          <img
            src={rugratsLogo}
            alt="Rugrats Logo"
            onLoad={handleImageLoad}
            className="absolute top-0 left-1/2 transform -translate-y-1/3 scale-125 -translate-x-1/2 pb-4 w-full z-10"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center justify-center h-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={derzhitLogo}
            onLoad={handleImageLoad}
            alt="Rugrats Characters"
            className="w-80 md:w-[500px] z-50"
            initial={{ x: '150%', opacity: 0 }}
            animate={!isLoading ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ originX: 1 }}
          />
        </motion.div>
      </div>
      <div className="flex space-x-2 md:space-x-4 md:pt-24 pt-20 justify-center">
        <Link
          style={{ display: 'contents' }}
          to="/main#aboutsection"
          onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.img
            src={aboutButton}
            alt="about button"
            className="h-24 w-64  md:h-full px-6 py-4 filter drop-shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            initial={{ scale: 0.01, opacity: 0 }}
            animate={
              !isLoading
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{ duration: 1.3, delay: 0.5 }}
          />
        </Link>
        <Link
          style={{ display: 'contents' }}
          to="/main#tekenomicsection"
          onClick={() => aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.img
            className="h-24 w-64 md:h-full px-6 py-4 filter drop-shadow-lg"
            src={tekenomicButton}
            alt="tekenomic button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            initial={{ scale: 0.1, opacity: 0 }}
            animate={
              !isLoading
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{ duration: 1, delay: 0.5 }}
          />
        </Link>
        <motion.img
          className="h-24 w-64 md:h-full px-5 py-4 filter drop-shadow-lg"
          src={buyButton}
          alt="buy button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={
            !isLoading
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{ duration: 1.2, delay: 0.7 }}
        />
      </div>
      <div className="grid auto-rows-fr grid-cols-2 md:grid-cols-4 gap-2  mt-8">
        {cards.map((card, index) => (
          <motion.img
            key={index}
            src={toggle === index ? card.src : card.hero}
            alt={card.alt}
            onHoverStart={() => setToggle(index)}
            onClick={() => setToggle(index)}
            className="rounded-lg text-card-foreground w-48 md:w-full filter drop-shadow-x"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            whileInView={
              !isLoading
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  }
                : {}
            }
            viewport={{ once: true, amount: 0.1 }}
            animate={
              index === Math.floor(Math.random() * cards.length)
                ? {
                    rotate: [0, -3, 3, -3, 0],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      repeatDelay: 2.5,
                    },
                  }
                : undefined
            }
          />
        ))}
      </div>
      <section ref={sectionRef} id="tekenomicsection">
        <div className="md:mt-24 mt-8 relative ">
          <div className="container md:flex mx-auto p-4 md:p-0 text-white flex-grow ">
            <div>
              <motion.section
                className="grid font-galindo grid-cols-1 lg:grid-cols-1 gap-4 text-white text-2xl md:text-4xl text-center font-black mt-4 md:mt-8 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Step into the playful world of Rugrats Coin, where the charm of your favorite cartoon characters comes
                  alive in the crypto realm. Inspired by Tommy, Chuckie, and the rest of the gang, our memecoin embodies
                  the unique traits that made the show unforgettable. Each transaction and interaction is infused with
                  the spirit of these iconic characters, making Rugrats Coin a delightful way to engage with
                  cryptocurrency.
                </motion.p>
              </motion.section>
              <motion.section
                className="font-galindo pt-4 text-white text-2xl md:text-4xl text-center font-black drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Let the characters guide you through the crypto playground!
                </motion.p>
              </motion.section>
            </div>
            <img
              className="pt-8  w-full md:w-1/3 md:h-1/3 md:pt-20  md:justify-center drop-shadow-lg rounded-[40px]"
              src={aboutImage}
              alt="aboutImage"
            />
          </div>
        </div>
      </section>
      <section ref={aboutSectionRef} id="aboutsection">
        <div className="mt-44 relative">
          <motion.img
            className="absolute -left-8 md:top-14 top-8 bottom-0 w-72 md:w-96"
            src={rodit}
            alt="rodit"
            initial={{ x: -160 }}
            whileInView={{
              x: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: false }}
          />
          <img className="bottom-0 w-full" src={desk} alt="desk" />
        </div>
      </section>
      <div className="mt-20 relative">
        <motion.img className="absolute bottom-0 w-72 md:w-96" src={golovaImg} alt="golova" />
        <motion.img
          className="bottom-0 left-0 right-0 w-72 md:w-96"
          src={babyWhiteImg}
          alt="golova"
          animate={{ opacity: [1, 0.01, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img
          className="absolute bottom-24 md:bottom-32 w-64 md:w-80"
          src={babyWhiteText}
          alt="golova"
          initial={{ scale: 0, y: -20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20,
            duration: 0.5,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  )
}

export default Home
