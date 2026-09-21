import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Check,
  ExternalLink,
  Layers3,
  Menu,
  Network,
  Orbit,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Project = {
  id: string
  name: string
  category: string
  status: string
  description: string
  detail: string
  accent: string
  position: string
}

const projects: Project[] = [
  {
    id: 'apex',
    name: 'Apex Abstracts v2',
    category: 'Client platform',
    status: 'Phase 1 delivered',
    description: 'A workflow platform for abstract and title operations.',
    detail: 'Reframed a document-heavy service into a clearer digital operating system, with a second phase already moving through beta.',
    accent: '#6cd7ff',
    position: 'node-a',
  },
  {
    id: 'nexus',
    name: 'Nexus CRM',
    category: 'Revenue operations',
    status: 'Internal build',
    description: 'An AI-powered command layer for pipeline and execution.',
    detail: 'Designed to bring accounts, outreach, priorities, and next actions into one coherent revenue workspace.',
    accent: '#b397ff',
    position: 'node-b',
  },
  {
    id: 'prospector',
    name: 'MAB Prospector',
    category: 'Lead intelligence',
    status: 'Functional system',
    description: 'A prospecting engine built for repeatable market discovery.',
    detail: 'Turns fragmented public signals into structured, reviewable prospect records and an actionable research queue.',
    accent: '#b8ff70',
    position: 'node-c',
  },
  {
    id: 'workforce',
    name: 'Agent Workforce OS',
    category: 'AI operating model',
    status: 'Evolving blueprint',
    description: 'A system for designing reliable AI roles around real work.',
    detail: 'Maps responsibilities, tools, context, approvals, and escalation paths before an agent ever reaches production.',
    accent: '#ffbd66',
    position: 'node-d',
  },
  {
    id: 'multitherm',
    name: 'Multi-Therm 3D',
    category: 'Spatial experience',
    status: 'Client experience',
    description: 'An interactive process walk through an industrial operation.',
    detail: 'Makes complex physical workflows easier to understand by turning facilities, equipment, and process steps into a guided spatial story.',
    accent: '#ff7b7b',
    position: 'node-e',
  },
  {
    id: 'knowledge',
    name: 'Knowledge Base Agent',
    category: 'AI infrastructure',
    status: 'Running system',
    description: 'A durable knowledge layer with scheduled ingestion and backup.',
    detail: 'Pairs structured storage with repeatable ingestion so operating context stays useful, governed, and recoverable.',
    accent: '#70ffcb',
    position: 'node-f',
  },
]

const principles = [
  {
    number: '01',
    word: 'Signal',
    title: 'Find the friction worth fixing.',
    copy: 'Start with the real work: the handoff that breaks, the decision that stalls, the knowledge trapped in one person’s head.',
    icon: Orbit,
  },
  {
    number: '02',
    word: 'System',
    title: 'Architect the operating layer.',
    copy: 'Connect agents, automations, data, and human judgment into a system people can trust and actually use.',
    icon: Network,
  },
  {
    number: '03',
    word: 'Scale',
    title: 'Make the advantage compound.',
    copy: 'Deploy, measure, refine. The goal is not another demo—it is a capability that gets stronger as the business moves.',
    icon: Zap,
  },
]

const timeline = [
  { era: 'Foundation', title: 'NCAA Division I athlete', copy: 'Discipline, film study, repetition, and accountability became the operating code.' },
  { era: 'Enterprise', title: '16+ years in technology', copy: 'Leadership across AT&T, T-Mobile, and Verizon built an instinct for complex systems and high-stakes execution.' },
  { era: 'Performance', title: '$12M+ B2B revenue impact', copy: 'Nationally ranked sales performance proved that rigor and relationships can scale together.' },
  { era: 'Now', title: 'Founder & CEO, MAB AI Strategies', copy: 'Building AI systems that move companies from scattered activity to focused operating leverage.' },
  { era: 'Why', title: 'Fatherhood and legacy', copy: 'The work is bigger than optimization. It is about building useful things that outlast the moment.' },
]

function Crystal() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
    camera.position.z = 6
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.25
    mount.appendChild(renderer.domElement)

    const group = new THREE.Group()
    scene.add(group)
    const geometry = new THREE.IcosahedronGeometry(1.56, 2)
    const crystal = new THREE.Mesh(
      geometry,
      new THREE.MeshPhysicalMaterial({
        color: 0xa7dfff,
        metalness: 0.12,
        roughness: 0.16,
        transmission: 0.67,
        thickness: 1.2,
        ior: 1.64,
        transparent: true,
        opacity: 0.72,
        iridescence: 0.7,
        iridescenceIOR: 1.35,
        clearcoat: 1,
        flatShading: true,
        depthWrite: false,
      }),
    )
    group.add(crystal)

    const facets = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        color: 0xb8e8ff,
        wireframe: true,
        transparent: true,
        opacity: 0.105,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    facets.scale.setScalar(1.008)
    group.add(facets)

    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(geometry, 18),
      new THREE.LineBasicMaterial({ color: 0xe0f6ff, transparent: true, opacity: 0.46 }),
    )
    wire.scale.setScalar(1.012)
    group.add(wire)

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.008, 8, 128),
      new THREE.MeshBasicMaterial({ color: 0x6cd7ff, transparent: true, opacity: 0.5 }),
    )
    ring.rotation.x = 1.18
    ring.rotation.z = -0.28
    group.add(ring)

    const particlesGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(180 * 3)
    for (let i = 0; i < 180; i += 1) {
      const r = 2.5 + Math.random() * 1.8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({ color: 0xaedfff, size: 0.018, transparent: true, opacity: 0.48 }),
    )
    scene.add(particles)

    scene.add(new THREE.AmbientLight(0x9db8cc, 1.4))
    const blue = new THREE.PointLight(0x50bfff, 38, 14)
    blue.position.set(3, 2, 4)
    scene.add(blue)
    const violet = new THREE.PointLight(0xa071ff, 30, 12)
    violet.position.set(-3, -2, 2)
    scene.add(violet)
    const warm = new THREE.PointLight(0xffb25f, 18, 10)
    warm.position.set(0, 3, -2)
    scene.add(warm)

    const pointer = { x: 0, y: 0 }
    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.42
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.28
    }
    window.addEventListener('pointermove', onPointer, { passive: true })

    const resize = () => {
      const bounds = mount.getBoundingClientRect()
      renderer.setSize(bounds.width, bounds.height, false)
      camera.aspect = bounds.width / Math.max(bounds.height, 1)
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()

    let frame = 0
    let visible = true
    const onVisibility = () => { visible = !document.hidden }
    document.addEventListener('visibilitychange', onVisibility)
    const clock = new THREE.Clock()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      if (!visible) return
      const t = clock.getElapsedTime()
      if (!reduceMotion) {
        group.rotation.y += (pointer.x + t * 0.075 - group.rotation.y) * 0.025
        group.rotation.x += (-pointer.y + Math.sin(t * 0.38) * 0.08 - group.rotation.x) * 0.025
        ring.rotation.z = -0.28 + t * 0.08
        particles.rotation.y = -t * 0.015
        group.position.y = Math.sin(t * 0.7) * 0.06
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
      geometry.dispose()
      ;(facets.material as THREE.Material).dispose()
      particlesGeometry.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return <div ref={mountRef} className="crystal" aria-hidden="true" />
}

function App() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(projects[0])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
      intro
        .from('.nav-shell', { y: -24, opacity: 0, duration: 0.8 }, 0.15)
        .from('.hero-line', { yPercent: 110, duration: 1.05, stagger: 0.09 }, 0.22)
        .from('.hero-copy, .hero-actions', { y: 22, opacity: 0, duration: 0.8, stagger: 0.12 }, 0.72)
        .from('.portrait-card', { x: 34, opacity: 0, duration: 1 }, 0.55)
        .from('.proof-item', { y: 16, opacity: 0, duration: 0.55, stagger: 0.1 }, 0.92)

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          y: 52,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 86%', once: true },
        })
      })

      gsap.utils.toArray<HTMLElement>('.principle').forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -42 : 42,
          opacity: 0,
          duration: 0.9,
          scrollTrigger: { trigger: card, start: 'top 82%', once: true },
        })
      })

      gsap.to('.signal-line-fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.principles-grid', start: 'top 70%', end: 'bottom 60%', scrub: true },
      })

      gsap.to('.constellation-map', {
        yPercent: -5,
        ease: 'none',
        scrollTrigger: { trigger: '.systems-section', start: 'top bottom', end: 'bottom top', scrub: 1.2 },
      })

      gsap.utils.toArray<HTMLElement>('.timeline-entry').forEach((entry) => {
        gsap.from(entry, {
          opacity: 0.25,
          x: -24,
          scrollTrigger: { trigger: entry, start: 'top 76%', end: 'top 50%', scrub: true },
        })
      })

      gsap.to('.cta-orbit', {
        rotate: 45,
        ease: 'none',
        scrollTrigger: { trigger: '.closing', start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, root)

    return () => context.revert()
  }, [])

  const jump = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={rootRef} className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="noise" aria-hidden="true" />
      <header className="nav-shell">
        <a href="#main" className="brand" aria-label="Mark Bockrath, home">
          <span>MB</span><i />
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <button onClick={() => jump('systems')}>Work</button>
          <button onClick={() => jump('method')}>Method</button>
          <button onClick={() => jump('story')}>Story</button>
          <a href="https://mabaistrategies.com" target="_blank" rel="noreferrer">MAB AI <ExternalLink size={13} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy-block">
            <p className="kicker hero-copy">Founder · AI systems architect · Revenue operator</p>
            <h1 id="hero-title">
              <span className="line-mask"><span className="hero-line">I turn operational</span></span>
              <span className="line-mask"><span className="hero-line italic">chaos</span><span className="hero-line"> into systems</span></span>
              <span className="line-mask"><span className="hero-line">that compound.</span></span>
            </h1>
            <p className="hero-summary hero-copy">I’m Mark Bockrath. I design AI agents, automations, and revenue systems that turn scattered effort into focused operating leverage.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => jump('systems')}>Explore the systems <ArrowDownRight size={17} /></button>
              <a className="button ghost" href="https://mabaistrategies.com" target="_blank" rel="noreferrer">Work with MAB AI <ArrowRight size={17} /></a>
            </div>
          </div>

          <div className="hero-visual">
            <Crystal />
            <div className="core-label top"><span>Input</span> business friction</div>
            <div className="core-label bottom"><span>Output</span> operating leverage</div>
          </div>

          <figure className="portrait-card">
            <img src="/bockrath.png" alt="Mark Bockrath" />
            <figcaption>
              <span>Mark Bockrath</span>
              <span>Founder & CEO, MAB AI Strategies</span>
            </figcaption>
          </figure>

          <div className="proof-rail" aria-label="Career highlights">
            <div className="proof-item"><strong>$12M+</strong><span>B2B revenue impact</span></div>
            <div className="proof-item"><strong>16+</strong><span>Years in enterprise tech</span></div>
            <div className="proof-item"><strong>40+</strong><span>Business AI solutions</span></div>
            <div className="proof-item availability"><i /><span>Building from Indiana</span></div>
          </div>
        </section>

        <section className="manifesto section-pad" aria-label="Operating thesis">
          <video className="manifesto-film" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/media/architect-signal.webm" type="video/webm" />
          </video>
          <div className="manifesto-film-wash" aria-hidden="true" />
          <p className="section-index" data-reveal>00 / Thesis</p>
          <blockquote data-reveal>
            The opportunity is not to add more AI.<br />
            It is to make the <em>business itself</em> more intelligent.
          </blockquote>
          <p className="manifesto-note" data-reveal>That means less theater. More clarity, orchestration, and measurable progress in the work that already matters.</p>
        </section>

        <section id="method" className="method section-pad" aria-labelledby="method-title">
          <header className="section-heading" data-reveal>
            <p className="section-index">01 / Operating method</p>
            <h2 id="method-title">Signal <span>→</span> System <span>→</span> Scale</h2>
            <p>Three moves. One objective: turn useful intelligence into a durable advantage.</p>
          </header>
          <div className="principles-grid">
            <div className="signal-line" aria-hidden="true"><i className="signal-line-fill" /></div>
            {principles.map((item) => {
              const Icon = item.icon
              return (
                <article className="principle" key={item.word}>
                  <div className="principle-number">{item.number}</div>
                  <div className="principle-icon"><Icon strokeWidth={1.25} /></div>
                  <div>
                    <p className="kicker">{item.word}</p>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="systems" className="systems-section section-pad" aria-labelledby="systems-title">
          <header className="section-heading systems-heading" data-reveal>
            <p className="section-index">02 / Selected systems</p>
            <h2 id="systems-title">Work that lives<br /><em>beyond the demo.</em></h2>
            <p>A cross-section of client platforms, revenue infrastructure, spatial experiences, and AI operating models.</p>
          </header>

          <div className="systems-workspace" data-reveal>
            <div className="constellation-map" aria-label="Select a system">
              <svg viewBox="0 0 760 560" preserveAspectRatio="none" aria-hidden="true">
                <path d="M108 154 C260 80 315 210 402 260 S566 180 676 110" />
                <path d="M107 154 C200 320 274 412 405 260 S555 356 657 452" />
                <path d="M164 438 C242 358 298 347 405 260" />
              </svg>
              <div className="map-core"><BrainCircuit /><span>MAB</span></div>
              {projects.map((project, index) => (
                <button
                  className={`project-node ${project.position} ${activeProject.id === project.id ? 'active' : ''}`}
                  style={{ '--accent': project.accent } as React.CSSProperties}
                  onClick={() => setActiveProject(project)}
                  key={project.id}
                  aria-label={`View ${project.name}`}
                >
                  <i />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{project.name}</strong>
                </button>
              ))}
            </div>
            <aside className="project-detail" aria-live="polite" style={{ '--accent': activeProject.accent } as React.CSSProperties}>
              <div className="detail-topline"><span>{activeProject.category}</span><span>{activeProject.status}</span></div>
              <p className="detail-number">{String(projects.indexOf(activeProject) + 1).padStart(2, '0')}</p>
              <h3>{activeProject.name}</h3>
              <p className="detail-lead">{activeProject.description}</p>
              <p>{activeProject.detail}</p>
              <div className="detail-rule" />
              <p className="detail-note"><Check size={15} /> Built around a real operating constraint.</p>
            </aside>
          </div>
        </section>

        <section className="range section-pad" aria-labelledby="range-title">
          <div className="range-copy" data-reveal>
            <p className="section-index">03 / Operating range</p>
            <h2 id="range-title">Strategy at the top.<br />Systems all the way down.</h2>
            <p>My best work happens where commercial instinct, technical architecture, and human adoption meet.</p>
          </div>
          <div className="range-orbit" data-reveal>
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-center"><Sparkles /><span>Operating<br />leverage</span></div>
            <span className="orbit-tag tag-a">AI strategy</span>
            <span className="orbit-tag tag-b">Revenue systems</span>
            <span className="orbit-tag tag-c">Agent design</span>
            <span className="orbit-tag tag-d">3D experiences</span>
            <span className="orbit-tag tag-e">Automation</span>
            <span className="orbit-tag tag-f">Leadership</span>
          </div>
        </section>

        <section id="story" className="story section-pad" aria-labelledby="story-title">
          <header className="story-intro" data-reveal>
            <p className="section-index">04 / The throughline</p>
            <h2 id="story-title">Built for the arena.<br /><em>Applied to the enterprise.</em></h2>
            <p>The titles changed. The operating principles did not: prepare deeply, tell the truth about the scoreboard, and make the people around you better.</p>
          </header>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-entry" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item.era}</p>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing section-pad" aria-labelledby="closing-title">
          <div className="cta-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="closing-content" data-reveal>
            <p className="section-index">05 / Next move</p>
            <h2 id="closing-title">Build the system your operation is missing.</h2>
            <p>If the work is important, repeatable, and harder than it should be, there is probably a better system waiting to be designed.</p>
            <div className="closing-actions">
              <a className="button primary light" href="https://mabaistrategies.com" target="_blank" rel="noreferrer">Start a conversation <ArrowRight size={17} /></a>
              <a className="text-link" href="mailto:mark@mabaistrategies.com">mark@mabaistrategies.com <ExternalLink size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-mark">MB<i /></div>
        <p>Founder & CEO · MAB AI Strategies</p>
        <div><span>© {new Date().getFullYear()} Mark Bockrath</span><a href="#main">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
