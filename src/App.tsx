// All photos by Matt Perry https://citizenofnowhe.re
import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import AnimationEnter from './pages/AnimationEnter'

const App: React.FC = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <AnimationEnter />,
    },
    {
      path: '/main',
      element: <Home />,
    },
  ])

  const location = useLocation()

  if (!element) return null

  return (
    <AnimatePresence mode="wait" initial={true}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  )
}

export default App
