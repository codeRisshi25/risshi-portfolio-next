"use client";

import Clock from "@/components/Clock";
import StatCounter from "@/components/StatCounter";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.08,
    },
  }),
};

const row1 = [
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "C++", slug: "cplusplus" },
  { name: "React", slug: "react" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
];

const row2 = [
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "MySQL", slug: "mysql" },
  { name: "Linux", slug: "linux" },
  { name: "Git", slug: "git" },
  { name: "Agentic AI", slug: "anthropic" },
  { name: "Japanese N5", slug: "japanese" },
];

export default function Home() {
  const [commits, setCommits] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://api.github.com/search/commits?q=author:codeRisshi25&per_page=1",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.total_count === "number") {
          setCommits(data.total_count);
        }
      })
      .catch((err) => console.error("Error fetching commits:", err));
  }, []);

  return (
    <main className="grid-wrapper">
      {/* HERO — dominant, spans 5 cols × 2 rows */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container hero"
      >
        <div className="animated-border"></div>
        <div className="grain"></div>
        <div className="hero-inner">
          <div>
            <div className="avail">
              <div className="adot"></div> Open to opportunities
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              <h1>
                こんにちは,
                <br />
                I&apos;m <span className="name">Risshi</span> ✦
              </h1>
              <div className="hero-avatar-wrap">
                <div className="avatar-animated-border"></div>
                <Image
                  src="/profile.png"
                  alt="Risshi avatar"
                  width={100}
                  height={100}
                  className="object-cover rounded-full grayscale opacity-90 contrast-125 mix-blend-luminosity"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                />
              </div>
            </div>
            <p>
              Backend engineer merging agentic AI systems with Japanese-inspired
              minimalism.
            </p>
            <div className="htags">
              <span className="htag ht-p">Backend Dev</span>
              <span className="htag ht-g">Agentic AI</span>
              <span className="htag ht-o">3d Art</span>
              <span className="htag ht-pk">日本語</span>
            </div>
            <div className="stats-row">
              <div className="stat">
                <StatCounter target={2} duration={900} />
                <div className="l">Internships</div>
              </div>
              <div className="stat">
                {commits !== null ? (
                  <StatCounter target={commits} suffix="+" duration={1100} />
                ) : (
                  <div className="n" style={{ opacity: 0.5 }}>
                    --
                  </div>
                )}
                <div className="l">Commits</div>
              </div>
              <div className="stat">
                <StatCounter target={500} suffix="+" duration={1000} />
                <div className="l">Cups of Cofee</div>
              </div>
            </div>
          </div>
          <div className="av-row">
            <div className="av-info">
              <p>Risshi · B.Tech CSE - Bennett University</p>
              <span>
                8.70 CGPA
                <br />
                One commit, one render, one kanji at a time
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FEATURED PROJECT — latest work */}
      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container featured"
      >
        <div className="grain" style={{ opacity: 0.015 }}></div>
        <div className="feat-scene">
          <div className="feat-bg"></div>
          <div className="orb1"></div>
          <div className="orb2"></div>
          <div className="orb3"></div>
          <div className="feat-content">
            <div className="feat-lbl">Latest project</div>
            <div className="feat-badge">⚡ Just shipped</div>
            <h2>UrbanPulse Backend</h2>
            <p>
              Real-time ride-sharing backend with live driver matching, GPS
              tracking, and spatial fare calculation. Powered by Node.js, Redis
              GEO, and PostGIS.
            </p>
            <div className="feat-links">
              <a
                href="https://github.com/codeRisshi25/urbanpulse-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="feat-btn feat-btn-primary"
                style={{ textDecoration: "none" }}
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container skills"
      >
        <div className="inner">
          <div className="lbl">Skills</div>
        </div>
        <div className="mq-wrap">
          <div className="mq mq1">
            {row1.map((item, i) => (
              <div key={`r1a-${i}`} className="sp">
                {item.slug === "japanese" ? (
                  <span className="si">🎌</span>
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${item.slug}/c4b8ff`}
                    width={14}
                    height={14}
                    alt={item.name}
                  />
                )}
                {item.name}
              </div>
            ))}
            {row1.map((item, i) => (
              <div key={`r1b-${i}`} className="sp">
                {item.slug === "japanese" ? (
                  <span className="si">🎌</span>
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${item.slug}/c4b8ff`}
                    width={14}
                    height={14}
                    alt={item.name}
                  />
                )}
                {item.name}
              </div>
            ))}
          </div>
          <div className="mq mq2">
            {row2.map((item, i) => (
              <div key={`r2a-${i}`} className="sp">
                {item.slug === "japanese" ? (
                  <span className="si">🎌</span>
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${item.slug}/c4b8ff`}
                    width={14}
                    height={14}
                    alt={item.name}
                  />
                )}
                {item.name}
              </div>
            ))}
            {row2.map((item, i) => (
              <div key={`r2b-${i}`} className="sp">
                {item.slug === "japanese" ? (
                  <span className="si">🎌</span>
                ) : (
                  <img
                    src={`https://cdn.simpleicons.org/${item.slug}/c4b8ff`}
                    width={14}
                    height={14}
                    alt={item.name}
                  />
                )}
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="grain"></div>
      </motion.div>

      {/* STATUS */}
      <motion.div
        custom={3}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container status"
      >
        <div className="grain"></div>
        <div
          className="inner"
          style={{ display: "flex", flexDirection: "column", gap: "14px" }}
        >
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
      <motion.div
        custom={4}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container experience"
      >
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
                    <div className="ei-role">
                      Software Development Engineer Intern
                    </div>
                    <div className="ei-co">
                      Fidelity International <span className="ei-co-dot"></span>
                      <span className="ei-type">Incoming (1 Year)</span>
                    </div>
                  </div>
                  <div className="ei-date">Aug 2026 – Aug 2027</div>
                </div>
                <div className="ei-desc">
                  Incoming 1-year Software Development Engineering internship
                  focusing on backend systems and cloud infrastructure.
                </div>
                <div className="ei-tags">
                  <span className="etag">Python</span>
                  <span className="etag">Backend</span>
                  <span className="etag">AWS</span>
                </div>
              </div>
            </div>

            <div className="ei">
              <div className="ei-spine">
                <div
                  className="ei-dot"
                  style={{
                    background: "#8be0c0",
                    boxShadow:
                      "0 0 0 3px rgba(139,224,192,0.12),0 0 12px rgba(139,224,192,0.15)",
                  }}
                ></div>
                <div
                  className="ei-line"
                  style={{
                    background:
                      "linear-gradient(to bottom,rgba(139,224,192,0.2),rgba(139,224,192,0.03))",
                  }}
                ></div>
              </div>
              <div className="ei-body">
                <div className="ei-top">
                  <div>
                    <div className="ei-role">Software Development Intern</div>
                    <div className="ei-co" style={{ color: "#8be0c0" }}>
                      Empty Cup Ltd.{" "}
                      <span
                        className="ei-co-dot"
                        style={{ background: "#8be0c0" }}
                      ></span>
                      <span className="ei-type" style={{ color: "var(--tm)" }}>
                        Remote
                      </span>
                    </div>
                  </div>
                  <div className="ei-date">Jun – Aug 2025</div>
                </div>
                <div className="ei-desc">
                  Implemented rate limiting for computationally intensive API
                  endpoints within a Svelte and Flask monorepo. Built
                  collaboration features enabling multi-user project workflows,
                  and automated quotation and billing processes while resolving
                  critical backend defects across multiple modules.
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
                    Python
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Flask
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Svelte
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    API Design
                  </span>
                  <span
                    className="etag"
                    style={{
                      background: "rgba(139,224,192,0.08)",
                      color: "#8be0c0",
                      borderColor: "rgba(139,224,192,0.16)",
                    }}
                  >
                    Monorepo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CONTACT — animated border, secondary */}
      <motion.div
        custom={5}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container contact"
      >
        <div className="contact-animated-border"></div>
        <div className="grain"></div>
        <div className="sparkles-container">
          <div className="sparkle s1">✦</div>
          <div className="sparkle s2">✦</div>
          <div className="sparkle s3">✦</div>
        </div>
        <div
          className="inner"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
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
            <a
              className="cv-link"
              href="/resume.pdf"
              download="Risshi-Raj-Sen-Resume.pdf"
            >
              ↓ Download CV
            </a>
          </div>
        </div>
      </motion.div>

      {/* SOCIALS */}
      <motion.div
        custom={6}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container socials"
      >
        <div className="grain"></div>
        <div className="inner">
          <div className="lbl">Find me</div>
          <div className="sg">
            <a
              className="si-card si-github"
              href="https://github.com/codeRisshi25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="si-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="si-nm">GitHub</div>
            </a>
            <a
              className="si-card si-linkedin"
              href="https://www.linkedin.com/in/risshi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="si-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="si-nm">LinkedIn</div>
            </a>
            <a
              className="si-card si-twitter"
              href="https://x.com/RisshiRajSen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="si-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div className="si-nm">Twitter</div>
            </a>
            <a
              className="si-card si-instagram"
              href="https://www.instagram.com/__risshi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="si-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 6.85A5.15 5.15 0 1 1 6.85 12 5.16 5.16 0 0 1 12 6.85zm0 1.8A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65z" />
                </svg>
              </div>
              <div className="si-nm">Instagram</div>
            </a>
          </div>
        </div>
      </motion.div>

      {/* JP ACCENT */}
      <motion.div
        custom={7}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container jp"
      >
        <div className="grain"></div>
        <div
          className="inner"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "4px",
          }}
        >
          <motion.svg
            width="100"
            height="60"
            viewBox="0 0 100 60"
            style={{ overflow: "visible" }}
          >
            <motion.text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="jp-k-text"
              initial={{
                strokeDasharray: 300,
                strokeDashoffset: 300,
                fill: "transparent",
                stroke: "rgba(240,239,234,0.8)",
                strokeWidth: 1.5,
              }}
              whileInView={{
                strokeDashoffset: 0,
                fill: "rgba(240,239,234,0.88)",
              }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            >
              創造
            </motion.text>
          </motion.svg>
          <div className="jp-r">Sōzō</div>
          <div className="jp-m">&quot;Creation&quot;</div>
        </div>
      </motion.div>
    </main>
  );
}
