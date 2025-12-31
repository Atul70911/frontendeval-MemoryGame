import { useEffect, useRef } from "react"

export default function VantaBackground({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const effect = window.VANTA?.BIRDS?.({
      el: ref.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      backgroundColor: 0xf9da70,
      color1: 0xdb4e06,
      color2: 0x7c2847,
       birdSize: 4,
    })

    return () => effect?.destroy?.()
  }, [])

  return (
    <div style={{ minHeight: "100vh" }}>
      <div ref={ref} style={{ position: "fixed", inset: 0, zIndex: -1 }} />
      {children}
    </div>
  )
}
