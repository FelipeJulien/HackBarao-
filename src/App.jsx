import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import VRIntro from './VRIntro'
import './App.css'

function App() {
  const [introRodando, setIntroRodando] = useState(false)
  const [vrJaRodou, setVrJaRodou] = useState(false)
  const [introKey, setIntroKey] = useState(0)

  const handleIntroComplete = useCallback(() => {
    setIntroRodando(false)
    setVrJaRodou(true)
  }, [])

  const handleReplay = () => {
    setIntroRodando(true)
    setIntroKey(prev => prev + 1)
  }

  const fundoAtual = vrJaRodou ? '/cozinha.png' : '/inicio.png'

  return (
    <>
      {introRodando && <VRIntro key={introKey} onComplete={handleIntroComplete} />}

      <main
        className="pagina-principal"
        style={{ backgroundImage: `url('${fundoAtual}')` }}
      />

      <footer className="rodape-flutuante">
        © 2026 Hack Barão
      </footer>

      <motion.button
        className="botao-replay"
        onClick={handleReplay}
        initial={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(56,182,255,0.5)' }}
        whileTap={{ scale: 0.95 }}
        title="Repetir animação VR"
      >
        🥽 Replay VR
      </motion.button>
    </>
  )
}

export default App



