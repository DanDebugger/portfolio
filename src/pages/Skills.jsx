import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  SiReact, SiJavascript, SiNextdotjs, SiPhp, SiMysql,
  SiHtml5, SiCss3, SiRust, SiEthereum, SiPython, SiCplusplus,
  SiTypescript, SiSupabase, SiSolana, SiSolidity, SiStellar, SiSui
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import { TbBrandCSharp } from 'react-icons/tb'
import SectionWrapper from '../components/SectionWrapper'
import '../App.css'

export default function Skills() {
  const themeColor = '#2563eb'
  const themeColorTransparent = 'rgba(37, 99, 235, 0.1)'
  const scrollRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end end']
  })

  // Smooth scroll animations
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  const technologies = useMemo(() => [
    { id: 1, name: 'HTML & CSS', icon: SiHtml5, iconColor: '#E34F26', category: 'Frontend', description: 'Core markup and styling languages for web pages', secondaryIcon: SiCss3, secondaryIconColor: '#1572B6' },
    { id: 2, name: 'JavaScript', icon: SiJavascript, iconColor: '#F7DF1E', category: 'Language', description: 'Dynamic scripting language powering interactive web applications' },
    { id: 3, name: 'PHP', icon: SiPhp, iconColor: '#777BB4', category: 'Backend', description: 'Server-side scripting language for dynamic content generation' },
    { id: 4, name: 'MySQL', icon: SiMysql, iconColor: '#4479A1', category: 'Database', description: 'Popular open-source relational database management system' },
    { id: 5, name: 'Python', icon: SiPython, iconColor: '#3776AB', category: 'Language', description: 'High-level language for scripting, automation, backend, and AI' },
    { id: 6, name: 'C#', icon: TbBrandCSharp, iconColor: '#239120', category: 'Language', description: "Microsoft's multi-paradigm language for enterprise apps and game dev" },
    { id: 7, name: 'C++', icon: SiCplusplus, iconColor: '#00599C', category: 'Language', description: 'High-performance systems programming language' },
    { id: 8, name: 'React', icon: SiReact, iconColor: '#00d8ff', category: 'Frontend', description: 'Declarative component-based library for building user interfaces' },
    { id: 9, name: 'TypeScript', icon: SiTypescript, iconColor: '#3178C6', category: 'Language', description: 'Strict typed superset of JavaScript for scalable app development' },
    { id: 10, name: 'Next.js', icon: SiNextdotjs, iconColor: '#000000', category: 'Frontend', description: 'React framework with server-side rendering and static generation' },
    { id: 11, name: 'Supabase', icon: SiSupabase, iconColor: '#3ECF8E', category: 'Database', description: 'Open-source Firebase alternative providing database, auth, and storage' },
    { id: 12, name: 'Rust', icon: SiRust, iconColor: '#E05D44', category: 'Language', description: 'Safe systems language emphasizing memory safety and speed' },
    { id: 13, name: 'Move Language', icon: FaCode, iconColor: '#000000', category: 'Blockchain', description: 'Safe smart contract programming language developed for the Sui blockchain' },
    { id: 14, name: 'Sui', icon: SiSui, iconColor: '#00A3E0', category: 'Blockchain', description: 'Next-generation smart contract platform with a builder-friendly object model' },
    { id: 15, name: 'Solana', icon: SiSolana, iconColor: '#00b894', category: 'Blockchain', description: 'High-performance network supporting scalable decentralized apps' },
    { id: 16, name: 'Motoko', icon: FaCode, iconColor: '#F15A24', category: 'Blockchain', description: 'Smart contract language tailored for the Internet Computer protocol' },
    { id: 17, name: 'Ethereum', icon: SiEthereum, iconColor: '#627EEA', category: 'Blockchain', description: 'Decentralized blockchain platform for smart contracts and dApps' },
    { id: 18, name: 'Stellar', icon: SiStellar, iconColor: '#000000', category: 'Blockchain', description: 'Decentralized protocol designed for fast, low-cost cross-border payments' },
    { id: 19, name: 'Solidity', icon: SiSolidity, iconColor: '#363636', category: 'Blockchain', description: 'EVM-native language for writing secure smart contracts' }
  ], [])

  const TechCard = ({ tech, isEven }) => {
    const IconComponent = tech.icon
    const SecondaryIconComponent = tech.secondaryIcon

    return (
      <div className={`d-flex ${isEven ? 'justify-content-start' : 'justify-content-end'} mb-5 position-relative`}>
        {/* Timeline Dot */}
        <motion.div
          className="position-absolute rounded-circle z-10 tech-timeline-dot"
          style={{
            background: themeColor,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '12px',
            height: '12px',
            boxShadow: `0 0 10px ${themeColor}`
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Timeline Line Connector */}
        <motion.div
          className="position-absolute top-50"
          style={{
            height: '2px',
            background: themeColor,
            left: isEven ? '50%' : 'auto',
            right: isEven ? 'auto' : '50%',
            width: '80px',
            zIndex: 0
          }}
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          transition={{ duration: 0.5 }}
        />

        {/* Card */}
        <motion.div
          className={`position-relative rounded-3 shadow-lg overflow-hidden z-20 tech-card ${isEven ? 'me-4' : 'ms-4'}`}
          style={{
            borderTop: `4px solid ${themeColor}`,
            width: '280px',
            backgroundColor: 'var(--bg-card)'
          }}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          whileHover={{ y: -8, boxShadow: `0 15px 30px rgba(37, 99, 235, 0.15)` }}
        >
          <div className="p-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <motion.div
                className="rounded-circle d-flex align-items-center justify-content-center tech-icon-wrapper"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{
                  width: '48px', height: '48px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {IconComponent && <IconComponent style={{ color: tech.iconColor || themeColor, fontSize: '1.5rem' }} />}
                {SecondaryIconComponent && <SecondaryIconComponent style={{ color: tech.secondaryIconColor || themeColor, fontSize: '1.5rem', marginLeft: '-8px' }} />}
              </motion.div>
              <h3 className="h5 fw-bold mb-0" style={{ color: 'var(--text-primary)' }}>{tech.name}</h3>
            </div>
            <span className="badge rounded-pill px-3 py-1 mb-3 fw-medium" style={{ background: themeColorTransparent, color: themeColor }}>
              {tech.category}
            </span>
            <p className="small mb-0" style={{ color: 'var(--text-secondary)' }}>{tech.description}</p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <SectionWrapper id="skills" title="My Tech Stack" subtitle="My journey through technologies that power modern web development">
      <div ref={scrollRef} className="position-relative mx-auto" style={{ maxWidth: '900px' }}>
        {/* Vertical Timeline Line */}
        <div className="position-absolute start-50 top-0 bottom-0" style={{ width: '4px', transform: 'translateX(-50%)' }}>
          <div className="w-100 h-100 rounded" style={{ backgroundColor: 'var(--border-subtle)', opacity: 0.3 }} />
          <svg className="position-absolute top-0 start-0 w-100 h-100" style={{ overflow: 'visible' }}>
            <motion.path
              d="M 2,0 L 2,100%"
              stroke={themeColor}
              strokeWidth="4"
              fill="none"
              style={{ pathLength, strokeOpacity: opacity }}
            />
          </svg>
        </div>

        <div className="py-5">
          {technologies.map((tech, index) => (
            <TechCard key={tech.id} tech={tech} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
