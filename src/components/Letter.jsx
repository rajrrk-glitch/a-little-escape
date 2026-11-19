import { motion } from 'framer-motion'
import { letter } from '../config'
import { Heart, Sparkle, Star, Arrow, PolaroidDoodle } from './Doodles'

function Polaroid({ item, className = '' }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: item.tilt }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className={`relative w-36 bg-white p-2 pb-1 soft-shadow sm:w-44 ${className}`}
    >
      <div className="tape -top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
      <div className="aspect-[6/5] overflow-hidden bg-beige">
        {item.src
          ? <img src={item.src} alt={item.caption} className="h-full w-full object-cover" loading="lazy" />
          : <PolaroidDoodle kind={item.doodle} />}
      </div>
      <figcaption className="py-1.5 text-center font-hand text-lg text-coffee">{item.caption}</figcaption>
    </motion.figure>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: .6, ease: 'easeOut' } },
}

export default function Letter({ onNext }) {
  const [p1, p2, p3] = letter.polaroids
  return (
    <section className="relative mx-auto max-w-5xl px-4 pb-24 pt-14 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-xl text-center font-serif text-4xl font-semibold leading-tight text-coffee sm:text-5xl"
      >
        {letter.heading}
      </motion.h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_minmax(0,560px)_1fr] lg:items-start">
        {/* left polaroids on desktop / row on mobile */}
        <div className="flex justify-center gap-4 lg:flex-col lg:items-end lg:pt-24">
          {p1 && <Polaroid item={p1} />}
          {p2 && <Polaroid item={p2} className="lg:hidden" />}
        </div>

        {/* the letter */}
        <motion.article
          initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: .12 } } }}
          className="relative mx-auto w-full rounded-sm bg-[#FFFBF7] px-6 py-9 lined soft-shadow sm:px-10"
          style={{ backgroundPositionY: '22px' }}
        >
          <div className="tape -top-3 left-8 -rotate-6" />
          <div className="tape -top-3 right-8 rotate-6" />
          <Heart className="absolute -right-3 -top-4 w-9 rotate-12 text-pink" filled />
          <Sparkle className="absolute -left-4 bottom-24 w-7 text-pink/70" />

          <motion.p variants={fadeUp} className="font-hand text-[28px] leading-[34px] text-coffee">
            {letter.salutation}
          </motion.p>
          {letter.paragraphs.map((para, i) => (
            <motion.p
              key={i} variants={fadeUp}
              className="mt-[34px] font-hand text-[22px] leading-[34px] text-ink sm:text-[24px]"
            >
              {para}
            </motion.p>
          ))}
          <motion.div variants={fadeUp} className="mt-[34px] text-right font-hand text-[24px] leading-[34px] text-coffee">
            <p>{letter.signOff}</p>
            <p className="text-[30px] font-bold">{letter.signature}</p>
          </motion.div>
        </motion.article>

        {/* right polaroids */}
        <div className="flex justify-center gap-4 lg:flex-col lg:items-start lg:pt-64">
          {p2 && <Polaroid item={p2} className="hidden lg:block" />}
          {p3 && <Polaroid item={p3} />}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="mt-16 flex flex-col items-center text-center"
      >
        <Star className="mb-2 w-6 text-pink" />
        <p className="font-hand text-3xl text-coffee">{letter.outro}</p>
        <Arrow className="my-2 w-16 rotate-[30deg] text-coffee/50" />
        <button type="button" onClick={onNext} className="btn">{letter.button}</button>
      </motion.div>
    </section>
  )
}
