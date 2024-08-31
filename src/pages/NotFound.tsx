import { motion, useIsPresent } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import aboutImage from '../assets/golova_orig.png'

const NotFound: React.FC = () => {
  const isPresent = useIsPresent()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-[#58a8dd] rounded-[40px] overflow-hidden">
      <main className="flex-grow flex flex-col">
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="privacy-screen"
        />
        <div className="container mx-auto p-4 md:p-0 text-white flex-grow">
          <svg
            onClick={() => navigate(-1)}
            className="w-6 h-6 md:m-8 md:w-8 md:h-8 cursor-pointer m-4 drop-shadow-lg"
            fill="currentColor"
            viewBox="0 0 52 52"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"></path>
            </g>
          </svg>
          <section className="grid font-galindo grid-cols-1 lg:grid-cols-1 gap-4 text-white text-lg md:text-4xl text-center font-black mt-4 md:mt-8 drop-shadow-lg">
            NOT FOUND
          </section>
          <section className="font-galindo pt-4 text-white text-lg md:text-4xl text-center font-black drop-shadow-lg">
            Let the characters guide you through the crypto playground!
          </section>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-2">
          <img className="w-96 h-auto" src={aboutImage} alt="about" />
        </div>
      </main>
    </div>
  )
}

export default NotFound
