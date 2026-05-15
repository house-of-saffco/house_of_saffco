import { motion } from 'framer-motion'
import akeedh from '../assets/akeedh.png'
import beautyImg from '../assets/beauty.jpeg'
import skinImg from '../assets/skin.jpeg'
import toolsImg from '../assets/tools.jpeg'
import { MotionSection } from '../components/ui/MotionSection'
import { GlassCard } from '../components/ui/GlassCard'
import { SectionHeading } from '../components/ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1]

const tiles = [
  { title: 'Skin rituals', meta: 'New arrivals weekly', img: skinImg },
  { title: 'Wellness systems', meta: 'Curated routines', img: beautyImg },
  { title: 'Beauty tech', meta: 'Devices & tools', img: toolsImg },
]

export function Akeedh() {
  return (
    <div className="relative isolate flex w-full flex-col bg-obsidian">
      <section className="relative z-10 mx-auto w-full max-w-[2048px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 aspect-[2048/1365] w-full" aria-hidden>
          <motion.div
            initial={{ scale: 1.02, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease }}
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${akeedh})`,
              backgroundPosition: 'center 42%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/45 via-obsidian/82 to-obsidian" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_0%,rgba(244,63,94,0.14),transparent_58%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,rgba(251,113,133,0.08),transparent_45%)]" />
          <div className="noise-overlay absolute inset-0 opacity-[0.14]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-[18%] md:px-8 lg:px-10">
          <motion.div
            className="max-w-3xl -translate-y-24"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-fuchsia-300/90">E-commerce</p>
            <h1 className="mt-4 font-body text-5xl font-medium tracking-tight text-white md:text-6xl lg:text-7xl">
              Akeedh
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-zinc-300">
              A dedicated platform for health and beauty — where editorial taste meets seamless shopping.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <span className="rounded-full border border-fuchsia-500/35 bg-fuchsia-500/15 px-5 py-2 text-xs uppercase tracking-widest text-fuchsia-100">
                Launching soon
              </span>
            </div>
          </motion.div>

          <MotionSection className="mt-[80px] pb-28 md:pb-32 lg:pb-36">
            <SectionHeading
              eyebrow="Assortment"
              title="Fashion meets function in the beauty aisle"
              titleClassName="font-body"
              subtitle="Soft gradients, tactile photography, and category storytelling designed for premium conversion."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {tiles.map(({ title, meta, img }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease }}
                >
                  <GlassCard className="group !p-0 overflow-hidden" hover glow={false}>
                    <div className="relative aspect-[3/4]">
                      <img
                        src={img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-200/90">{meta}</p>
                        <h3 className="mt-2 font-body text-2xl font-medium text-white">{title}</h3>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>
    </div>
  )
}
