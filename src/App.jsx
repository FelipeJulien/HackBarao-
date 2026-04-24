import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import VRIntro from './VRIntro'
import './App.css'

/**
 * Componente principal da landing page.
 *
 * Fluxo:
 * 1. VRIntro exibe o Meta Quest 3 com zoom imersivo pela lente
 * 2. Ao concluir (onComplete), o intro é desmontado
 * 3. O conteúdo da cozinha é revelado com fade-in + blur que desaparece
 */
function App() {
  const [introCompleta, setIntroCompleta] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroCompleta(true)
  }, [])

  return (
    <>
      {/* ====== INTRO VR — META QUEST 3 ====== */}
      {!introCompleta && <VRIntro onComplete={handleIntroComplete} />}

      {/* ====== CONTEÚDO PRINCIPAL — COZINHA ====== */}
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
        {/* Fundo com a imagem da cozinha moderna */}
        <motion.div
          className="fundo-cozinha"
          role="img"
          aria-label="Cozinha moderna e sofisticada"
          initial={{ scale: 1.1 }}
          animate={introCompleta ? { scale: 1 } : { scale: 1.1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Conteúdo hero */}
        <section className="conteudo-hero">
          <motion.div
            className="cartao-vidro"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={
              introCompleta
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 50, scale: 0.95 }
            }
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 18,
              delay: 0.4,
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={
                introCompleta
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            >
              Transforme Sua Cozinha
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                introCompleta
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
            >
              Descubra designs que combinam elegância e funcionalidade.
              Cada detalhe pensado para criar o ambiente dos seus sonhos
              — com a qualidade que você merece.
            </motion.p>

            <motion.button
              id="botao-explorar"
              className="botao-cta"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={
                introCompleta
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.9 }
              }
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 15,
                delay: 1,
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: '0 8px 30px rgba(233, 69, 96, 0.5)',
              }}
              whileTap={{ scale: 0.97 }}
            >
              Explorar Agora <span className="seta-cta">→</span>
            </motion.button>
          </motion.div>
        </section>
      </motion.main>

      {/* ====== RODAPÉ ====== */}
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
