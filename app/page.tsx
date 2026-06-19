"use client";

import Clock from "@/components/Clock";
import StatCounter from "@/components/StatCounter";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 0.61, 0.36, 1],
      delay: i * 0.11,
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

function SkillPill({ name, slug }: { name: string; slug: string }) {
  return (
    <div className="sp">
      {slug === "japanese" ? (
        <span className="si">🎌</span>
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${slug}/475569`}
          width={14}
          height={14}
          alt={name}
        />
      )}
      {name}
    </div>
  );
}

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

  // Soft switch tick on hover — Web Audio API, no files needed
  const playTick = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 3200;
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.06);
    } catch {}
  }, []);

  useEffect(() => {
    const selector = "a, button, .htag, .si-card, .feat-btn, .ctab, .chip, .sp";
    const handler = () => playTick();
    const els = document.querySelectorAll(selector);
    els.forEach((el) => el.addEventListener("mouseenter", handler));
    return () => els.forEach((el) => el.removeEventListener("mouseenter", handler));
  }, [playTick]);

  return (
    <main className="grid-wrapper">
      {/* HERO — dominant anchor, spans 7 cols × 2 rows */}
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
          <div className="hero-top">
            <div className="avail">
              <div className="adot"></div> Open to opportunities
            </div>
            <div className="hero-head">
              <div className="hero-headline">
                <h1>
                  こんにちは,
                  <br />
                  I&apos;m <span className="name">Risshi</span>{" "}
                  <span className="star">✦</span>
                </h1>
                <p>
                  Backend engineer merging agentic AI systems with
                  Japanese-inspired minimalism.
                </p>
              </div>
              <div className="hero-avatar-wrap">
                <div className="avatar-animated-border"></div>
                <Image
                  src="/profile.png"
                  alt="Risshi avatar"
                  width={130}
                  height={130}
                  className="object-cover rounded-full grayscale opacity-90 contrast-110"
                />
              </div>
            </div>
            <div className="htags">
              <span className="htag">Backend Dev</span>
              <span className="htag">Agentic AI</span>
              <span className="htag">3D Art</span>
              <span className="htag">日本語</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="stats-row">
              <div className="stat">
                <StatCounter target={2} duration={900} />
                <div className="l">Internships</div>
              </div>
              <div className="stat">
                {commits !== null ? (
                  <StatCounter target={commits} suffix="+" duration={1100} />
                ) : (
                  <div className="n" style={{ opacity: 0.5  }}>
                    --
                  </div>
                )}
                <div className="l">Commits</div>
              </div>
              <div className="stat">
                <StatCounter target={500} suffix="+" duration={1000} />
                <div className="l">Cups of Coffee</div>
              </div>
            </div>
            <div className="av-row">
              <div className="bu-logo-wrap">
                <Image
                  src="/image.png"
                  alt="Bennett University"
                  width={30}
                  height={30}
                  className="bu-logo"
                />
              </div>
              <div className="av-info">
                <p>B.Tech CSE — Bennett University · 2023-27</p>
              </div>
              <div className="cgpa-badge">8.70 CGPA</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* STATUS — compact right-rail card */}
      <motion.div
        custom={3}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container status"
      >
        <div className="grain"></div>
        <div className="inner status-inner">
          <div className="lbl">Status</div>
          <div className="srow">
            <div className="sdot"></div>
            <div>
              <div className="st">Available now</div>
              <div className="ss">Internships · Freelance</div>
            </div>
          </div>
          <div className="status-foot">
            <div className="clock-block">
              <Clock />
              <div className="clksub">IST · UTC+5:30</div>
            </div>
            <div className="chip">📍 India</div>
          </div>
        </div>
      </motion.div>

      {/* SKILLS — marquee */}
      <motion.div
        custom={4}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container skills"
      >
        <div className="inner">
          <div className="lbl">Stack</div>
        </div>
        <div className="mq-wrap">
          <div className="mq mq1">
            {row1.map((item, i) => (
              <SkillPill key={`r1a-${i}`} {...item} />
            ))}
            {row1.map((item, i) => (
              <SkillPill key={`r1b-${i}`} {...item} />
            ))}
          </div>
          <div className="mq mq2">
            {row2.map((item, i) => (
              <SkillPill key={`r2a-${i}`} {...item} />
            ))}
            {row2.map((item, i) => (
              <SkillPill key={`r2b-${i}`} {...item} />
            ))}
          </div>
        </div>
        <div className="grain"></div>
      </motion.div>

      {/* EXPERIENCE — large, spans 7 cols × 2 rows */}
      <motion.div
        custom={2}
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
                      <span className="ei-type">Incoming · 1 Year</span>
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
                <div className="ei-dot"></div>
                <div className="ei-line"></div>
              </div>
              <div className="ei-body">
                <div className="ei-top">
                  <div>
                    <div className="ei-role">Software Development Intern</div>
                    <div className="ei-co">
                      Empty Cup Ltd. <span className="ei-co-dot"></span>
                      <span className="ei-type">Remote</span>
                    </div>
                  </div>
                  <div className="ei-date">Jun – Aug 2025</div>
                </div>
                <div className="ei-desc">
                  Implemented rate limiting for compute-intensive API endpoints
                  in a Svelte + Flask monorepo. Built multi-user collaboration
                  features, automated quotation and billing, and resolved
                  critical backend defects across modules.
                </div>
                <div className="ei-tags">
                  <span className="etag">Python</span>
                  <span className="etag">Flask</span>
                  <span className="etag">Svelte</span>
                  <span className="etag">API Design</span>
                  <span className="etag">Monorepo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FEATURED PROJECT — latest work */}
      <motion.div
        custom={5}
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-20px" }}
        className="card-container featured"
      >
        <div className="grain"></div>
        <div className="feat-bg"></div>
        <div className="orb1"></div>
        <div className="feat-content">
          <div className="feat-head">
            <div className="feat-lbl">Latest project</div>
            <div className="feat-badge">⚡ Just shipped</div>
          </div>
          <h2>UrbanPulse Backend</h2>
          <p>
            Real-time ride-sharing backend — live driver matching, GPS tracking,
            and spatial fare calculation.
          </p>
          <div className="feat-tags">
            <span className="feat-tag">Node.js</span>
            <span className="feat-tag">Redis GEO</span>
            <span className="feat-tag">PostGIS</span>
          </div>
          <div className="feat-links">
            <a
              href="https://github.com/codeRisshi25/urbanpulse-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="feat-btn feat-btn-primary"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </motion.div>

      {/* CONTACT — CTA */}
      <motion.div
        custom={6}
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
        <div className="inner contact-inner">
          <div>
            <div className="lbl">Contact</div>
            <h3>
              Let&apos;s build something <em>remarkable</em> together.
            </h3>
            <p>
              Open to backend roles, 3D collabs, and Japanese study sessions.
            </p>
          </div>
          <div className="contact-actions">
            <a className="ctab" href="mailto:risshirajsen@gmail.com">
              Say hello →
            </a>
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
        custom={1}
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
              className="si-card si-email"
              href="mailto:workrisshi@gmail.com"
            >
              <div className="si-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="si-nm">Email</div>
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
        <div className="inner jp-inner">
          <motion.svg
            width="120"
            height="68"
            viewBox="0 0 120 68"
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
                stroke: "rgba(189,106,72,0.6)",
                strokeWidth: 1.5,
              }}
              whileInView={{
                strokeDashoffset: 0,
                fill: "rgba(20,22,27,0.92)",
              }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
            >
              創造
            </motion.text>
          </motion.svg>
          <div className="jp-divider"></div>
          <div className="jp-text">
            <div className="jp-r">Sōzō</div>
            <div className="jp-m">&quot;Creation&quot; — to build from nothing</div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
