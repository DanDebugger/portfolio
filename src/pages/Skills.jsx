import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  SiReact, SiJavascript, SiNextdotjs, SiPhp, SiMysql,
  SiHtml5, SiCss3, SiVuedotjs, SiRust, SiMongodb, SiEthereum
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
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
    { id: 1, name: 'React', icon: SiReact, iconColor: '#61DAFB', category: 'Frontend', description: 'Component-based library for building user interfaces' },
    { id: 2, name: 'JavaScript', icon: SiJavascript, iconColor: '#F7DF1E', category: 'Language', description: 'Programming language for web development' },
    { id: 3, name: 'Next.js', icon: SiNextdotjs, iconColor: '#000000', category: 'Frontend', description: 'React framework for production-ready applications' },
    { id: 4, name: 'PHP', icon: SiPhp, iconColor: '#777BB4', category: 'Backend', description: 'Server-side scripting language' },
    { id: 5, name: 'MySQL', icon: SiMysql, iconColor: '#4479A1', category: 'Database', description: 'Relational database management system' },
    { id: 6, name: 'HTML & CSS', icon: SiHtml5, iconColor: '#E34F26', category: 'Frontend', description: 'Markup and styling languages for web pages', secondaryIcon: SiCss3, secondaryIconColor: '#1572B6' },
    { id: 7, name: 'Vue', icon: SiVuedotjs, iconColor: '#4FC08D', category: 'Frontend', description: 'Progressive JavaScript framework' },
    { id: 8, name: 'Rust', icon: SiRust, iconColor: '#000000', category: 'Language', description: 'Systems programming language focused on safety' },
    { id: 9, name: 'Motoko', icon: FaCode, iconColor: '#2563eb', category: 'Language', description: 'Language for Internet Computer blockchain' },
    { id: 10, name: 'MongoDB', icon: SiMongodb, iconColor: '#47A248', category: 'Database', description: 'NoSQL document database' },
    { id: 11, name: 'Ethereum', icon: SiEthereum, iconColor: '#627EEA', category: 'Blockchain', description: 'Decentralized blockchain platform' }
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
