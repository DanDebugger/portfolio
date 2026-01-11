import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  SiReact, 
  SiJavascript, 
  SiNextdotjs, 
  SiPhp, 
  SiMysql, 
  SiHtml5, 
  SiCss3,
  SiVuedotjs, 
  SiRust, 
  SiMongodb, 
  SiEthereum 
} from 'react-icons/si'
import { FaCode } from 'react-icons/fa'
import '../App.css'

export default function Skills() {
  const themeColor = '#2563eb'
  const themeColorTransparent = 'rgba(37, 99, 235, 0.1)'
  
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end end']
  })
  
  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])
  
  const technologies = useMemo(() => [
    { 
      id: 1,
      name: 'React', 
      icon: SiReact,
      iconColor: '#61DAFB',
      category: 'Frontend',
      description: 'Component-based library for building user interfaces'
    },
    { 
      id: 2,
      name: 'JavaScript', 
      icon: SiJavascript,
      iconColor: '#F7DF1E',
      category: 'Language',
      description: 'Programming language for web development'
    },
    { 
      id: 3,
      name: 'Next.js', 
      icon: SiNextdotjs,
      iconColor: '#000000',
      category: 'Frontend',
      description: 'React framework for production-ready applications'
    },
    { 
      id: 4,
      name: 'PHP', 
      icon: SiPhp,
      iconColor: '#777BB4',
      category: 'Backend',
      description: 'Server-side scripting language'
    },
    { 
      id: 5,
      name: 'MySQL', 
      icon: SiMysql,
      iconColor: '#4479A1',
      category: 'Database',
      description: 'Relational database management system'
    },
    { 
      id: 6,
      name: 'HTML & CSS', 
      icon: SiHtml5,
      iconColor: '#E34F26',
      category: 'Frontend',
      description: 'Markup and styling languages for web pages',
      secondaryIcon: SiCss3,
      secondaryIconColor: '#1572B6'
    },
    { 
      id: 7,
      name: 'Vue', 
      icon: SiVuedotjs,
      iconColor: '#4FC08D',
      category: 'Frontend',
      description: 'Progressive JavaScript framework for building user interfaces'
    },
    { 
      id: 8,
      name: 'Rust', 
      icon: SiRust,
      iconColor: '#000000',
      category: 'Language',
      description: 'Systems programming language focused on safety and performance'
    },
    { 
      id: 9,
      name: 'Motoko', 
      icon: FaCode,
      iconColor: '#2563eb',
      category: 'Language',
      description: 'Programming language for Internet Computer blockchain development'
    },
    { 
      id: 10,
      name: 'MongoDB', 
      icon: SiMongodb,
      iconColor: '#47A248',
      category: 'Database',
      description: 'NoSQL document database for modern applications'
    },
    { 
      id: 11,
      name: 'Ethereum', 
      icon: SiEthereum,
      iconColor: '#627EEA',
      category: 'Blockchain',
      description: 'Decentralized blockchain platform for smart contracts'
    }
  ], [])

  const headerAnimations = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const titleAnimations = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 }
    }
  }

  const underlineAnimations = {
    hidden: { width: 0 },
    visible: { 
      width: '6rem',
      transition: { duration: 0.8, delay: 0.4 }
    }
  }

  const descriptionAnimations = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, delay: 0.6 }
    }
  }

  const TechCard = ({ tech, isEven, index }) => {
    const IconComponent = tech.icon
    const SecondaryIconComponent = tech.secondaryIcon
    
    const cardAnimations = {
      hidden: { opacity: 0, x: isEven ? -50 : 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
      }
    }

    const lineAnimations = {
      hidden: { width: 0 },
      visible: { 
        width: '80px',
        transition: { duration: 0.6, delay: 0.2 }
      }
    }

    const cardScaleAnimations = {
      hidden: { scale: 0.9, opacity: 0 },
      visible: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.5, delay: 0.3 }
      }
    }

    return (
      <motion.div
        key={tech.id}
        className="mb-20 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={cardAnimations}
      >
        <motion.div
          className="absolute top-1/2 h-px z-10 tech-timeline-line"
          style={{
            background: themeColor,
            [isEven ? 'right' : 'left']: '50%',
            [isEven ? 'left' : 'right']: 'auto',
            width: '80px'
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={lineAnimations}
        />

        <div className={`d-flex ${isEven ? 'justify-content-start' : 'justify-content-end'}`}>
          <motion.div
            className={`position-relative bg-white rounded-3 shadow-lg overflow-hidden z-20 tech-card ${
              isEven ? 'me-4' : 'ms-4'
            }`}
            style={{ 
              borderTop: `4px solid ${themeColor}`,
              width: '280px',
              backgroundColor: '#ffffff'
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardScaleAnimations}
            whileHover={{ 
              y: -5, 
              boxShadow: `0 15px 30px rgba(37, 99, 235, 0.15)`,
              transition: { duration: 0.2 }
            }}
          >
            <div className="p-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <motion.div
                  className="rounded-circle d-flex align-items-center justify-content-center tech-icon-wrapper"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  style={{ 
                    padding: tech.secondaryIcon ? '0.5rem' : undefined,
                    gap: tech.secondaryIcon ? '0.15rem' : undefined,
                    borderRadius: tech.secondaryIcon ? '0.5rem' : '50%',
                    width: tech.secondaryIcon ? 'auto' : '48px',
                    minWidth: tech.secondaryIcon ? '56px' : '48px'
                  }}
                >
                  {IconComponent && (
                    <IconComponent 
                      style={{ 
                        color: tech.iconColor || themeColor, 
                        fontSize: '1.25rem',
                        width: '1.25rem',
                        height: '1.25rem'
                      }} 
                    />
                  )}
                  {SecondaryIconComponent && (
                    <SecondaryIconComponent 
                      style={{ 
                        color: tech.secondaryIconColor || themeColor, 
                        fontSize: '1.25rem',
                        width: '1.25rem',
                        height: '1.25rem'
                      }} 
                    />
                  )}
                </motion.div>
                <h3 className="h5 fw-bold text-dark mb-0">{tech.name}</h3>
              </div>
              
              <div className="mb-3">
                <span 
                  className="badge rounded-pill px-3 py-1 fw-medium tech-category-badge"
                  style={{ background: themeColorTransparent, color: themeColor }}
                >
                  {tech.category}
                </span>
              </div>
              
              <p className="text-secondary small mb-0">{tech.description}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  return (
    <main style={{ paddingTop: '80px', backgroundColor: '#ffffff' }}>
      <section 
        ref={scrollRef} 
        className="py-5 skills-section position-relative"
        style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}
      >
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <motion.div 
            className="text-center mx-auto mb-5"
            style={{ maxWidth: '600px' }}
            initial="hidden"
            animate="visible"
            variants={headerAnimations}
          >
            <motion.h2 
              className="section-title mb-3"
              variants={titleAnimations}
            >
              My Tech Stack
            </motion.h2>
            <motion.div 
              className="h-1 mx-auto mb-4 tech-underline"
              style={{ background: themeColor, width: '96px' }}
              variants={underlineAnimations}
            />
            <motion.p 
              className="section-subtitle"
              variants={descriptionAnimations}
            >
              My journey through technologies that power modern web development
            </motion.p>
          </motion.div>
          
          <div 
            className="position-relative mx-auto tech-timeline-container"
            style={{ maxWidth: '900px' }}
          >
            <div className="position-absolute start-50 top-0 bottom-0 tech-timeline-vertical" style={{ transform: 'translateX(-50%)', width: '4px' }}>
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded" style={{ opacity: 0.3, borderRadius: '2px' }} />
              
              <svg
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ overflow: 'visible' }}
              >
                <motion.path
                  d="M 0,0 L 0,100%"
                  stroke={themeColor}
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  style={{
                    pathLength,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeOpacity: opacity
                  }}
                />
              </svg>
              
              {technologies.map((tech, index) => (
                <motion.div
                  key={`dot-${tech.id}`}
                  className="position-absolute w-3 h-3 rounded-circle z-10 tech-timeline-dot"
                  style={{ 
                    background: themeColor,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: `${(index / (technologies.length - 1)) * 100}%`,
                    boxShadow: `0 0 10px ${themeColor}`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ 
                    delay: 0.2 + (index * 0.05), 
                    duration: 0.5,
                    type: 'spring'
                  }}
                />
              ))}
            </div>
            
            <div>
              {technologies.map((tech, index) => (
                <TechCard 
                  key={tech.id} 
                  tech={tech} 
                  isEven={index % 2 === 0} 
                  index={index} 
                />
              ))}
            </div>
          </div>
          
          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.p 
              className="fst-italic text-secondary mb-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: 'loop' 
              }}
            >
              Scroll to explore my technical journey
            </motion.p>
            <motion.div 
              className="d-inline-block"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: 'loop' 
              }}
            >
              <i className="bi bi-arrow-down fs-4" style={{ color: themeColor }} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}


