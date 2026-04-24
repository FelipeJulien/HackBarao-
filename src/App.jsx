import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import VRIntro from './VRIntro'
import './App.css'

function App() {
  const [introCompleta, setIntroCompleta] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroCompleta(true)
  }, [])

  return (
    <>
      {!introCompleta && <VRIntro onComplete={handleIntroComplete} />}

      <motion.main
        className="pagina-principal"
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        animate={
          introCompleta
            ? { opacity: 1, filter: 'blur(0px)' }
            : { opacity: 0, filter: 'blur(20px)' }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="fundo-cozinha"
          role="img"
          aria-label="Cozinha moderna e sofisticada"
          initial={{ scale: 1.1 }}
          animate={introCompleta ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.main>

      <motion.footer
        className="rodape-flutuante"
        initial={{ opacity: 0 }}
        animate={introCompleta ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        © 2026 Hack Barão Antigravidade
      </motion.footer>
    </>
  )
}

export default App
