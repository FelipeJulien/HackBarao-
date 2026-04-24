import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import questImg from './assets/Metaquestesemfundosemlente.webp'

export default function VRIntro({ onComplete }) {
  const [fase, setFase] = useState('escuro')

  useEffect(() => {
    const tempos = [
      setTimeout(() => setFase('aparece'), 300),
      setTimeout(() => setFase('zoom'), 2200),
      setTimeout(() => { if (onComplete) onComplete() }, 4200),
      setTimeout(() => setFase('fim'), 4600),
    ]
    return () => tempos.forEach(clearTimeout)
  }, [onComplete])

  const CENTRO_LENTES = '50% 50%'

  return (
    <AnimatePresence>
      {fase !== 'fim' && (
        <motion.div
          key="vr-intro"
          className="fixed inset-0 z-[200] overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
        >
          <motion.div
            className="absolute inset-0 z-[1]"
            style={{
              backgroundImage: 'url(/cozinha.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ filter: 'blur(30px) brightness(0.4)', opacity: 0 }}
            animate={
              fase === 'escuro'
                ? { filter: 'blur(30px) brightness(0.4)', opacity: 0 }
                : fase === 'aparece'
                ? { filter: 'blur(20px) brightness(0.5)', opacity: 1 }
                : { filter: 'blur(0px) brightness(1)', opacity: 1 }
            }
            transition={
              fase === 'zoom'
                ? { duration: 2.4, ease: [0.22, 1, 0.36, 1] }
                : { duration: 1.2, ease: 'easeOut' }
            }
          />

          <motion.div
            className="absolute inset-0 z-[2] flex items-center justify-center overflow-hidden"
            style={{ transformOrigin: CENTRO_LENTES }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              fase === 'escuro'
                ? { scale: 0.8, opacity: 0 }
                : fase === 'aparece'
                ? { scale: 1, opacity: 1 }
                : { scale: 30, opacity: 0 }
            }
            transition={
              fase === 'zoom'
                ? {
                    scale: { duration: 2.4, ease: [0.76, 0, 0.24, 1] },
                    opacity: { duration: 2, ease: 'easeIn', delay: 0.4 },
                  }
                : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <img
              src={questImg}
              alt="Meta Quest 3"
              className="select-none"
              style={{ width: '100%', minWidth: '100vw', height: 'auto' }}
              draggable={false}
            />
          </motion.div>

          <motion.div
            className="absolute z-[3] rounded-full pointer-events-none"
            style={{
              left: '30%',
              top: '47%',
              width: 'min(14vw, 170px)',
              height: 'min(14vw, 170px)',
              background:
                'radial-gradient(circle, rgba(56,182,255,0.3) 0%, rgba(56,182,255,0.08) 50%, transparent 70%)',
              filter: 'blur(10px)',
            }}
            initial={{ opacity: 0 }}
            animate={
              fase === 'aparece'
                ? { opacity: [0, 0.8, 0.4, 0.9, 0.5] }
                : { opacity: 0 }
            }
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute z-[3] rounded-full pointer-events-none"
            style={{
              right: '30%',
              top: '47%',
              width: 'min(13vw, 155px)',
              height: 'min(13vw, 155px)',
              background:
                'radial-gradient(circle, rgba(56,182,255,0.15) 0%, transparent 60%)',
              filter: 'blur(12px)',
            }}
            initial={{ opacity: 0 }}
            animate={fase === 'aparece' ? { opacity: [0, 0.4, 0.2, 0.5] } : { opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          <AnimatePresence>
            {fase === 'aparece' && (
              <motion.p
                className="absolute z-[5] bottom-[8%] left-0 right-0 text-center font-light tracking-[0.25em] uppercase select-none"
                style={{
                  color: 'rgba(56, 182, 255, 0.7)',
                  fontSize: 'clamp(0.7rem, 1.3vw, 1rem)',
                  textShadow: '0 0 30px rgba(56,182,255,0.3)',
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Entrando na experiência...
              </motion.p>
            )}
          </AnimatePresence>


        </motion.div>
      )}
    </AnimatePresence>
  )
}
