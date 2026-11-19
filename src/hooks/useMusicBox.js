import { useCallback, useEffect, useRef, useState } from 'react'

// A tiny original music-box loop synthesised with the Web Audio API.
// No audio files, nothing autoplays — it only starts after the user taps the toggle.
const NOTES = [
  // [semitones from A4, beats]
  [3, 1], [7, 1], [10, 1], [15, 2], [14, 1], [10, 1], [12, 2],
  [3, 1], [7, 1], [10, 1], [14, 2], [12, 1], [10, 1], [7, 2],
  [5, 1], [8, 1], [12, 1], [17, 2], [15, 1], [12, 1], [14, 2],
  [10, 1], [7, 1], [5, 1], [3, 3], [-2, 1],
]
const BEAT = 0.42
const freq = (n) => 440 * Math.pow(2, n / 12)

export default function useMusicBox() {
  const [playing, setPlaying] = useState(false)
  const ctxRef = useRef(null)
  const timerRef = useRef(null)
  const masterRef = useRef(null)

  const pluck = (ctx, out, f, t) => {
    const osc = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = 'sine'; osc.frequency.value = f
    osc2.type = 'triangle'; osc2.frequency.value = f * 2
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.01)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6)
    const g2 = ctx.createGain(); g2.gain.value = 0.15
    osc.connect(g); osc2.connect(g2); g2.connect(g); g.connect(out)
    osc.start(t); osc2.start(t); osc.stop(t + 1.7); osc2.stop(t + 1.7)
  }

  const scheduleLoop = useCallback(() => {
    const ctx = ctxRef.current
    let t = ctx.currentTime + 0.05
    for (const [n, beats] of NOTES) { pluck(ctx, masterRef.current, freq(n), t); t += beats * BEAT }
    const total = NOTES.reduce((s, [, b]) => s + b, 0) * BEAT
    timerRef.current = setTimeout(scheduleLoop, total * 1000)
  }, [])

  const stop = useCallback(() => {
    clearTimeout(timerRef.current)
    if (masterRef.current && ctxRef.current) {
      masterRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.2)
    }
    setTimeout(() => { ctxRef.current?.close(); ctxRef.current = null }, 600)
    setPlaying(false)
  }, [])

  const start = useCallback(() => {
    const Ctx = window.AudioContext || window.webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    const master = ctx.createGain()
    master.gain.value = 0.35
    master.connect(ctx.destination)
    ctxRef.current = ctx; masterRef.current = master
    scheduleLoop()
    setPlaying(true)
  }, [scheduleLoop])

  const toggle = useCallback(() => (playing ? stop() : start()), [playing, start, stop])

  useEffect(() => () => { clearTimeout(timerRef.current); ctxRef.current?.close() }, [])

  return { playing, toggle }
}
