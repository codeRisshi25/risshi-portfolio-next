"use client";

import Clock from "@/components/Clock";
import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.08,
    }
  })
};

export default function Home() {
  return (
    <main className="grid-wrapper">

      {/* HERO — dominant, spans 5 cols × 2 rows */}
      <motion.div custom={0} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container hero">
        <div className="animated-border"></div>
        <div className="grain"></div>
        <div className="hero-inner">
          <div>
            <div className="avail">
              <div className="adot"></div> Open to opportunities
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
              <h1>
                こんにちは,<br />
                I&apos;m <span className="name">Risshi</span> ✦
              </h1>
              <Image 
                src="/profile.png" 
                alt="Risshi avatar" 
                width={100} 
                height={100} 
                className="object-cover rounded-full grayscale opacity-90 contrast-125 mix-blend-luminosity" 
                style={{ border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)', marginTop: '-10px' }}
              />
            </div>
            <p>
              Backend engineer who renders worlds in 3D and reads manga with a
              dictionary open. Building things that scale.
            </p>
            <div className="htags">
              <span className="htag ht-p">Backend Dev</span>
              <span className="htag ht-g">3D Artist</span>
              <span className="htag ht-o">BTech CSE</span>
              <span className="htag ht-pk">日本語</span>
            </div>
            <div className="stats-row">
              <div className="stat">
                <div className="n">2</div>
                <div className="l">Internships</div>
              </div>
              <div className="stat">
                <div className="n">15+</div>
                <div className="l">Projects</div>
              </div>
              <div className="stat">
                <div className="n">N3</div>
                <div className="l">Japanese</div>
              </div>
            </div>
          </div>
          <div className="av-row">
            <div className="av">R</div>
            <div className="av-info">
              <p>Risshi · B.Tech CSE</p>
              <span>One commit, one render, one kanji at a time</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FEATURED PROJECT — latest work */}
      <motion.div custom={1} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container featured">
        <div className="grain" style={{ opacity: 0.015 }}></div>
        <div className="feat-scene">
          <div className="feat-bg"></div>
          <div className="orb1"></div>
          <div className="orb2"></div>
          <div className="orb3"></div>
          <div className="feat-content">
            <div className="feat-lbl">Latest project</div>
            <div className="feat-badge">⚡ Just shipped</div>
            <h2>Distributed Task Queue</h2>
            <p>
              Async job processing engine built in Rust with Redis-backed queues
              and real-time monitoring.
            </p>
            <div className="feat-links">
              <button className="feat-btn feat-btn-primary">View on GitHub →</button>
              <button className="feat-btn feat-btn-ghost">Live demo</button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <motion.div custom={2} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container skills">
        <div className="inner">
          <div className="lbl">Skills</div>
        </div>
        <div className="mq-wrap">
          <div className="mq mq1">
            <div className="sp"><span className="si">🐍</span>Python</div>
            <div className="sp"><span className="si">🦀</span>Rust</div>
            <div className="sp"><span className="si">🐳</span>Docker</div>
            <div className="sp"><span className="si">☁️</span>AWS</div>
            <div className="sp"><span className="si">🗄️</span>PostgreSQL</div>
            <div className="sp"><span className="si">⚡</span>FastAPI</div>
            <div className="sp"><span className="si">🎨</span>Blender</div>
            <div className="sp"><span className="si">🔥</span>Redis</div>
            <div className="sp"><span className="si">🐍</span>Python</div>
            <div className="sp"><span className="si">🦀</span>Rust</div>
            <div className="sp"><span className="si">🐳</span>Docker</div>
            <div className="sp"><span className="si">☁️</span>AWS</div>
            <div className="sp"><span className="si">🗄️</span>PostgreSQL</div>
            <div className="sp"><span className="si">⚡</span>FastAPI</div>
            <div className="sp"><span className="si">🎨</span>Blender</div>
            <div className="sp"><span className="si">🔥</span>Redis</div>
          </div>
          <div className="mq mq2">
            <div className="sp"><span className="si">🎌</span>Japanese N3</div>
            <div className="sp"><span className="si">🔧</span>Linux</div>
            <div className="sp"><span className="si">📡</span>GraphQL</div>
            <div className="sp"><span className="si">🧊</span>Three.js</div>
            <div className="sp"><span className="si">🕸️</span>Nginx</div>
            <div className="sp"><span className="si">🖼️</span>Substance 3D</div>
            <div className="sp"><span className="si">🎌</span>Japanese N3</div>
            <div className="sp"><span className="si">🔧</span>Linux</div>
            <div className="sp"><span className="si">📡</span>GraphQL</div>
            <div className="sp"><span className="si">🧊</span>Three.js</div>
            <div className="sp"><span className="si">🕸️</span>Nginx</div>
            <div className="sp"><span className="si">🖼️</span>Substance 3D</div>
          </div>
        </div>
        <div className="grain"></div>
      </motion.div>

      {/* STATUS */}
      <motion.div custom={3} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container status">
        <div className="grain"></div>
        <div className="inner" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div className="lbl">Status</div>
          <div className="srow">
            <div className="sdot"></div>
            <div>
              <div className="st">Available now</div>
              <div className="ss">Internships · Freelance</div>
            </div>
          </div>
          <div className="chip">📍 India</div>
          <div>
            <Clock />
            <div className="clksub">IST · UTC+5:30</div>
          </div>
        </div>
      </motion.div>

      {/* EXPERIENCE — large, spans 7 cols × 2 rows */}
      <motion.div custom={4} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container experience">
        <div className="grain"></div>
        <div className="inner">
          <div className="lbl">Experience</div>
          <div className="exp-list">

            <div className="ei">
              <div className="ei-spine">
                <div className="ei-dot"></div>
                <div className="ei-line"></div>
              </div>
              <div className="ei-body">
                <div className="ei-top">
                  <div>
                    <div className="ei-role">Backend Engineering Intern</div>
                    <div className="ei-co">
                      Acme Technologies <span className="ei-co-dot"></span>
                      <span className="ei-type">Full-time internship</span>
                    </div>
                  </div>
                  <div className="ei-date">Jun – Aug 2024</div>
                </div>
                <div className="ei-desc">
                  Built and optimized REST APIs serving 50k+ daily requests. Reduced
                  average response latency by 40% through strategic Redis caching and
                  query indexing. Collaborated with a 6-person backend team in an agile
                  sprint cycle.
                </div>
                <div className="ei-tags">
                  <span className="etag">Python</span>
                  <span className="etag">FastAPI</span>
                  <span className="etag">Redis</span>
                  <span className="etag">PostgreSQL</span>
                  <span className="etag">Docker</span>
                </div>
              </div>
            </div>

            <div className="ei">
              <div className="ei-spine">
                <div
                  className="ei-dot"
                  style={{
                    background: "#8be0c0",
                    boxShadow: "0 0 0 3px rgba(139,224,192,0.12),0 0 12px rgba(139,224,192,0.15)",
                  }}
                ></div>
                <div
                  className="ei-line"
                  style={{
                    background: "linear-gradient(to bottom,rgba(139,224,192,0.2),rgba(139,224,192,0.03))",
                  }}
                ></div>
              </div>
              <div className="ei-body">
                <div className="ei-top">
                  <div>
                    <div className="ei-role">3D Visualization Intern</div>
                    <div className="ei-co" style={{ color: "#8be0c0" }}>
                      Studio Nōva <span className="ei-co-dot" style={{ background: "#8be0c0" }}></span>
                      <span className="ei-type" style={{ color: "var(--tm)" }}>Part-time internship</span>
                    </div>
                  </div>
                  <div className="ei-date">Dec 2023 – Feb 2024</div>
                </div>
                <div className="ei-desc">
                  Created product visualization assets and animated scene renders for
                  client campaigns across 3 product launches. Delivered 20+ production-ready
                  assets using Blender and Substance Painter under tight deadlines.
                </div>
                <div className="ei-tags">
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Blender
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Substance 3D
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Rendering
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Lighting
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* CONTACT — animated border, secondary */}
      <motion.div custom={5} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container contact">
        <div className="contact-animated-border"></div>
        <div className="grain"></div>
        <div
          className="inner"
          style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
        >
          <div>
            <div className="lbl">Contact</div>
            <h3>
              Let&apos;s build something <em>remarkable</em> together.
            </h3>
            <p>
              Open to backend roles, 3D collabs, and Japanese study sessions. If
              you&apos;re building something interesting — I want in.
            </p>
          </div>
          <div>
            <button className="ctab">Say hello →</button>
            <div className="cv-link">↓ Download CV</div>
          </div>
        </div>
      </motion.div>

      {/* SOCIALS */}
      <motion.div custom={6} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container socials">
        <div className="grain"></div>
        <div className="inner">
          <div className="lbl">Find me</div>
          <div className="sg">
            <a className="si-card" href="#">
              <div className="si-ico">🐙</div>
              <div className="si-nm">GitHub</div>
            </a>
            <a className="si-card" href="#">
              <div className="si-ico">💼</div>
              <div className="si-nm">LinkedIn</div>
            </a>
            <a className="si-card" href="#">
              <div className="si-ico">🐦</div>
              <div className="si-nm">Twitter</div>
            </a>
            <a className="si-card" href="#">
              <div className="si-ico">🎨</div>
              <div className="si-nm">ArtStation</div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* JP ACCENT */}
      <motion.div custom={7} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-20px" }} className="card-container jp">
        <div className="grain"></div>
        <div
          className="inner"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "4px" }}
        >
          <div className="jp-k">創造</div>
          <div className="jp-r">Sōzō</div>
          <div className="jp-m">&quot;Creation&quot;</div>
        </div>
      </motion.div>

    </main>
  );
}

