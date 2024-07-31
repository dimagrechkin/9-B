import Header from './Header'
import Features from './Features'
import ParagrapraphBlock from './ParagrapraphBlock'

import TrustedBy from './TrustedBy'

import Footer from './Footer'

const App: React.FC = () => {
  return (
    <div className="flex flex-col p-5 bg-backgroundMain rounded-[40px] overflow-hidden">
      <Header />

      <Features />

      <TrustedBy />
      <ParagrapraphBlock />
      <Footer />
    </div>
  )
}

export default App
