import { useEffect, useMemo, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import Calendar from '../../icons/Calendar'
import Clock from '../../icons/Clock'
import Heart from '../../icons/Heart'
import Place from '../../icons/Place'

const ConfettiCard = () => {
  const cardRef = useRef(null)
  const defaults = useMemo(() => ({
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  }), [])
  const confettiCanvasRef = useRef(null)
  const [hasConfettiFired, setHasConfettiFired] = useState(false)

  useEffect(() => {
    const myConfetti = confetti.create(confettiCanvasRef.current, { resize: true })
    const card = cardRef.current

    const handleClick = () => {
      if (!hasConfettiFired) {
        myConfetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        myConfetti({
          ...defaults,
          particleCount: 60,
          scalar: 1.2,
          shapes: ['circle']
        })
        myConfetti({
          gravity: 1,
          decay: 0.94,
          startVelocity: 30,
          colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
          particleCount: 60,
          scalar: 1.2,
          shapes: ['star']
        })
      }
    }

    card.addEventListener('click', handleClick)

    return () => {
      card.removeEventListener('click', handleClick)
    }
  }, [hasConfettiFired])

  return (
    <>
      <div className="card" ref={ cardRef }>
        <div className="img-box">
          <img src="/portada.jpg" alt="" />
          <img src="/ante-portada.jpg" alt="" />
        </div>
        <div className="details">
          <div className="content">
            <h2>
              Te invito a <br />
              <span className="font-bold text">mi super duper cumpleaños 🎂🥳❤️</span>
            </h2>
            <div className="icons flex flex-col pt-4">
              <div className="flex gap-4 items-center" onClick={ () => window.open('https://calendar.app.google/zSRmbAAY5CHLfySk8', '_blank') }>
                <Calendar />
                <p className="text-xs text-center text-pretty">Agregar a tu calendario</p>
              </div>
              <div className="flex gap-4 items-center">
                <Clock />
                <p className="text-xs text-center text-pretty">15:00 a 17:00</p>
              </div>
              <div className="flex gap-4 items-center" onClick={ () => window.open('https://wa.me/573022056569', '_blank') }>
                <Heart />
                <p className="text-xs text-center text-pretty">Enviame un mensajito ❤️🎂</p>
              </div>
              <div className="flex gap-4 items-center" onClick={ () => window.open('https://maps.app.goo.gl/38i47fgd4axu1LGbA', '_blank') }>
                <Place />
                <p className="text-xs text-center text-pretty">Lugar</p>
              </div>
            </div>
            <div className="self-end mt-10">
              <p className='text-xs '>🎂🥳❤️ Te esperamos...🎊🎁🎉🎈</p>
            </div>
          </div>
        </div>
      </div>
      <canvas
        ref={ confettiCanvasRef }
        id="confetti-canvas"
        style={ {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        } }
      ></canvas>
    </>
  )
}

export default ConfettiCard