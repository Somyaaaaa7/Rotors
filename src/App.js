import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/ROTORS.png";
import founder from "./assets/founder.jpg";
import cofounder1 from "./assets/cofounder1.jpg";
import cofounder2 from "./assets/cofounder2.jpg";



// ✅ Import pages
import IotRobotics from "./IotRobotics";
import AiCloud from "./AiCloud";
import { space } from "postcss/lib/list";
import DroneTechnology from "./DroneTechnology"; // <-- NEW PAGE


function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = new Date().getFullYear();
  const [showPackages, setShowPackages] = useState(false);

  const [selectedImg, setSelectedImg] = useState(null);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedImg(null);
      setClosing(false);
    }, 300); // match animation duration
  };


  const courses = [
    {
      tag: "3 Days • Grades 6–12",
      title: "IoT & Robotics",
      desc: "Build smart devices and robots using sensors, automation, and connectivity. Learn how everyday objects can think, act, and interact with the world.",
      link: "/iot-robotics",
    },
    {
      tag: "3 Days • Grades 6–12",
      title: "AI & Cloud Computing",
      desc: "Discover how Artificial Intelligence and Cloud platforms power modern apps. Design and deploy smart, scalable solutions for real-world problems.",
      link: "/ai-cloud",
    },
    {
      tag: "3 Days • Grades 6–12",
      title: "Drone Technology ",
      desc: "Explore the science of drones, flight control, and aerial robotics. Build and pilot intelligent flying machines for the future of aviation.",
      link: "/drone-technology",
    },
  ];

  const founders = [
    {
      name: "Anuj Narain",
      role: "Founder & CEO",
      img: founder,
      linkedin:
        "https://www.linkedin.com/in/narainanuj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Somya Sharma",
      role: "Co-Founder",
      img: cofounder1,
      linkedin:
        "https://www.linkedin.com/in/somya-sharma-486a22305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Krish Agarwal",
      role: "Co-Founder",
      img: cofounder2,
      linkedin:
        "https://www.linkedin.com/in/krish-agarwal-140920301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  // ✅ Drone Background Animation
  useEffect(() => {
    const canvas = document.getElementById("drone-bg");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const drones = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 6, // drone size
      dx: (Math.random() - 0.5) * 1.2,
      dy: (Math.random() - 0.5) * 1.2,
    }));

    function drawDrone(d) {
      // drone body
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = "#15d4ff";
      ctx.fill();

      // propeller glow
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r + 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(21,212,255,0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // connect drones with faint lines
      for (let i = 0; i < drones.length; i++) {
        for (let j = i + 1; j < drones.length; j++) {
          const dx = drones[i].x - drones[j].x;
          const dy = drones[i].y - drones[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(drones[i].x, drones[i].y);
            ctx.lineTo(drones[j].x, drones[j].y);
            ctx.strokeStyle = "rgba(21,212,255,0.15)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // move drones
      drones.forEach((d) => {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0 || d.x > w) d.dx *= -1;
        if (d.y < 0 || d.y > h) d.dy *= -1;
        drawDrone(d);
      });

      requestAnimationFrame(animate);
    }

    animate();

    // resize handler
    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="site">
      {/* Drone Background */}
      <canvas id="drone-bg"></canvas>

      {/* NAV */}
      <header className="nav">
        <div className="container nav__row">

          <div className="brand">
            <div className="brand__glyph">
              <img src={logo} alt="ROTORS Logo" className="brand__logo" />
            </div>
            <div className="brand__text">
              <span className="brand__name">ROTORS</span>
              <span className="brand__tag">IoT • AI • Cloud</span>
            </div>
          </div>

          <nav className={`nav__links ${mobileOpen ? "open" : ""}`}>
            <a href="#courses">Courses</a>
            <a href="#packages">Packages</a>
            <a href="#about">About Us</a>
            <a href="#why">Why Us</a>
            <a href="#success">Success</a>
            <a href="#faq">FAQs</a>
            <a href="#founders">Founders</a>
            <a href="#contact" className="btn btn--ghosttt">
              Enquire
            </a>
          </nav>

          <button
            className="hamburger"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          {/* Left - Text */}
          <div className="hero__copy">
            <h1 className="hero__title">
              <span className="accent">ROTORS</span>
              <br />
              Build the Future. Now.
            </h1>
            <p className="hero__tagline">IoT • AI • Cloud • Robotics</p>

            <div className="cta">
              <a className="btn btn--primaryy btn--glow" href="#courses">
                Start Building
              </a>
              <a className="btn btn--ghostt" href="#contact">
                Enquire
              </a>
            </div>

            {/* Futuristic Stats */}
            <div className="trust trust--grid">
              {[
                { num: "98%", label: "Future-Ready" },
                { num: "100%", label: "Hands-On" },
                { num: "95%", label: "Clarity" },
              ].map((s, i) => (
                <div key={i} className="glass trust__block">
                  <span className="num">{s.num}</span>
                  <span className="label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Floating Smart Kit Card */}
          <div className="hero__card">
            <div className="glass card3d">
              <div className="card3d__glow"></div>
              <div className="card3d__title">Smart Living Kit</div>
              <ul className="card3d__list">
                <li>ESP32 + Sensors</li>
                <li>YOLOv8 Vision</li>
                <li>Cloud Dashboards</li>
                <li>Emergency Triggers</li>
              </ul>
              <div className="card3d__bar">
                <span>Live Build</span>
                <div className="pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee" role="presentation">
          <div className="marquee__track">
            <span>
              Hands-On • Industry Mentors • Certifications • Career Pathways •{" "}
            </span>
            <span>
              Hands-On • Industry Mentors • Certifications • Career Pathways •{" "}
            </span>
            <span>
              Hands-On • Industry Mentors • Certifications • Career Pathways •{" "}
            </span>
          </div>
          <div className="marquee__track">
            <span>
              Hands-On • Industry Mentors • Certifications • Career Pathways •{" "}
            </span>
            <span>
              Hands-On • Industry Mentors • Certifications • Career Pathways •{" "}
            </span>
            <span>
              Hands-On • Industry Mentors • Certifications • Career Pathways •{" "}
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="section section--alt">
        <div className="container">
          <h2
            className="section__titl"
            style={{ textAlign: "center" }}
          >
            ABOUT US
          </h2>

          <div className="about-grid">
            {/* Left Side - Mission Statement */}
            <div className="about-text glass">
              <p className="lead">
                At <strong>ROTORS</strong>, our mission is simple:
              </p>
              <h3 className="mission">
                <span className="accent">Turn Curiosity → Capability</span>
              </h3>
              <p>
                We’re not another “coding class”. We’re a movement of{" "}
                <strong>builders, innovators, and mentors</strong> who transform
                classrooms into launchpads.
              </p>
              <p>
                From <span className="accent">IoT devices</span> to{" "}
                <span className="accent">AI dashboards</span>, every learner
                builds real projects that actually work.
              </p>
            </div>

            {/* Right Side - Floating Logo */}
            <div className="about-logo">
              <img src={logo} alt="About ROTORS" className="logo-float" />
            </div>
          </div>

          {/* Core Values */}
          <div className="grid values">
            {[
              {
                t: "Hands-On First",
                d: "We learn by doing, not memorizing.",
              },
              {
                t: "Mentor Driven",
                d: "Guided by startup founders & industry leaders.",
              },
              {
                t: "Future Ready",
                d: "Skills that matter for the world of tomorrow.",
              },
            ].map((v, i) => (
              <article key={i} className="glass value-card">
                <h4>{v.t}</h4>
                <p>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="section">
        <div className="container">
          <h2
            className="section__title"
            style={{ textAlign: "center" }}
          >
            WHY LEARN WITH ROTORS?
          </h2>
          <div className="grid cards">
            {[
              {
                t: "Ignite Curiosity",
                d: "Spark your interest in cutting-edge technologies.",
              },
              {
                t: "Hands-On Learning",
                d: "Dive into practical projects and build real devices.",
              },
              {
                t: "Future-Ready Skills",
                d: "Develop abilities crucial for tomorrow's innovations.",
              },
              {
                t: "Certificates that Matter",
                d: "Evaluated e-certificates, hardcopy badges for top performers.",
              },
              // New 4
              {
                t: "Expert Mentorship",
                d: "Learn directly from experienced engineers and innovators.",
              },
              {
                t: "Collaborative Environment",
                d: "Work in teams, share ideas, and build stronger together.",
              },
              {
                t: "Real-World Applications",
                d: "See how robotics & IoT solve actual industry problems.",
              },
              {
                t: "Fun + Learning",
                d: "Interactive sessions that make technology exciting, not boring.",
              },
            ].map((c, i) => (
              <article key={i} className="glass card">
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* COURSES */}
      <section id="courses" className="section section--alt">
        <div className="container">
          <h2
            className="section__title"
            style={{ textAlign: "center" }}
          >
            FLAGSHIP COURSES
          </h2>
          <div className="grid coursecards">
            {courses.map((c, i) => (
              <article key={i} className="glass course">
                <div className="course__top">
                  <span className="pill">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="course__cta">
                  <Link className="btn btn--primary" to={c.link}>
                    Know About the Course
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="section section--alt">
        <div className="container">
          <h2
            className="section__title"
            style={{ textAlign: "center" }}
          >
            CHOOSE YOUR PATH
          </h2>

          <p className="lead centered-text">
            Three tiers. One mission: <span className="accent">Innovation</span>.
          </p>

          {!showPackages ? (
            <div style={{ marginTop: "20px" }}>
              <button
                className="btn btn--primary btn--glow"
                onClick={() => setShowPackages(true)}
                style={{
                  display: "block",       // makes centering work
                  margin: "20px auto",    // centers horizontally
                  padding: "15px 40px",   // taller + wider
                  width: "60%",           // adjust % for how long you want
                  fontSize: "18px",       // makes text bigger
                  borderRadius: "10px",   // optional: rounded corners
                }}
              >
                Explore Packages
              </button>

            </div>
          ) : (
            <div className="grid coursecards">
              {[
                {
                  name: "Fundamentals",
                  price: "₹3000",
                  tagline: "Kickstart your journey with the basics.",
                  features: [
                    "Core concepts covered",
                    "E-certificate of participation",
                    "Perfect for beginners",
                  ],
                  glow: "cyan",
                },
                {
                  name: "Practical Learner",
                  price: "₹4000",
                  tagline: "Build, test, and get evaluated.",
                  features: [
                    "Hands-on project evaluation",
                    "Includes Fundamentals",
                    "Evaluated e-certificate",
                  ],
                  glow: "lime",
                },
                {
                  name: "Elite Innovator",
                  price: "₹5000",
                  tagline: "Push limits with exclusive mentoring.",
                  features: [
                    "Includes Practical Learner",
                    "Exclusive mentor Q&A session",
                    "Hardcopy certificate & badge",
                  ],
                  glow: "violet",
                },
              ].map((p, i) => (
                <PackageCard key={i} {...p} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SUCCESS / METRICS */}
      <section id="success" className="section">
        <div className="container">
          <h2
            className="section__title"
            style={{ textAlign: "center" }}
          >
            MEASURABLE IMPACTS
          </h2>
          <div className="grid metrics">
            {[
              { k: "1,000+", v: "Learners" },
              { k: "95%", v: "Concept Clarity" },
              { k: "100%", v: "Hands-On Builds" },
              { k: "98%", v: "Future-Readiness" },
            ].map((m, i) => (
              <div key={i} className="glass metric">
                <div className="metric__k">{m.k}</div>
                <div className="metric__v">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT OUR LEARNERS SAY */}
      <section className="section section--alt">
        <div className="container">
          <h2
            className="section__titlee"
            style={{ textAlign: "center" }}
          >
            WHAT OUR LEARNERS SAY
          </h2>
          <div className="grid quotes">
            {[
              {
                q: "I built my first smart device in 2 days. The confidence boost is unreal.",
                a: "Aryan, Grade 10",
              },
              {
                q: "Finally a workshop that feels like building at a startup—fast, focused, fun.",
                a: "Meera, Grade 12",
              },
              {
                q: "Cloud dashboards + IoT telemetry = chef's kiss. This is the future.",
                a: "Rohan, Grade 11",
              },
              // New 3
              {
                q: "Before this, I was scared of coding. Now I can’t wait to explore more.",
                a: "Sanya, Grade 9",
              },
              {
                q: "Teamwork + tech = amazing experience. I learned more here than in months of classes.",
                a: "Kabir, Grade 11",
              },
              {
                q: "The mentors were so approachable. Every doubt was cleared with patience.",
                a: "Ishita, Grade 8",
              },
            ].map((t, i) => (
              <blockquote key={i} className="glass quote">
                <p>“{t.q}”</p>
                <cite>— {t.a}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>


      {/* FOUNDERS */}
      <section id="founders" className="section section--alt">
        <div className="container">
          <h2
            className="section__titleeee"
            style={{ textAlign: "center" }}
          >
            MEET OUR FOUNDERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="relative bg-gray-800/70 shadow-lg rounded-2xl p-6 text-center backdrop-blur-md border border-cyan-400/20 hover:scale-105 transition-transform"
              >
                <div className="founder-avatar mx-auto mb-6">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full object-cover border-3 border-cyan-400"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-cyan-300">
                  {founder.name}
                </h3>
                <p className="italic text-gray-300">{founder.role}</p>

                {/* LinkedIn Icon */}
                <div className="mt-4 flex justify-center">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400/40 hover:bg-cyan-500/20 transition-colors"
                  >
                    {/* LinkedIn SVG icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-cyan-400"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1s2.48 1.119 2.48 2.5zM.25 8.25h4.5v15h-4.5v-15zM8.75 8.25h4.31v2.041h.061c.601-1.138 2.072-2.336 4.269-2.336 4.565 0 5.409 3.004 5.409 6.91v8.385h-4.5v-7.436c0-1.773-.031-4.056-2.469-4.056-2.469 0-2.847 1.93-2.847 3.923v7.569h-4.5v-15z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}

      <section id="highlights" className="section high1">

        <div className="container">
          <h2
            className="section__title"
            style={{ textAlign: "center" }}
          >

            OUR ACHIEVEMENTS
          </h2>

          <div className="marquee">
            <div className="marquee-content">

              {/* {[1, 2, 3, 4, 5, 6].map((num) => (
                <figure key={`first-${num}`} className="marquee-item">
                  <img
                    src={require(`./assets/image${num}.jpeg`)}
                    alt={`Highlight ${num}`}
                    className="tile__img"
                  />
                </figure>
              ))} */}

              {/* Duplicate for seamless loop */}
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <figure key={`second-${num}`} className="marquee-item">
                  <img
                    src={require(`./assets/image${num}.jpeg`)}
                    alt={`Highlight ${num}`}
                    className="tile__img"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* HIGHLIGHTS */}

      {/* HIGHLIGHTS */}
      <section id="highlights" className="section">
        <h2 className="section__ttl" style={{ textAlign: "center" }}>
          HIGHLIGHTS
        </h2>
        <div className="container highlights-wrapper">
          {/* Left Arrow */}
          <button
            className="scroll-btn left"
            onClick={() => {
              document.querySelector(".highlights-scroll").scrollBy({
                left: -300,
                behavior: "smooth",
              });
            }}
          >
            ‹
          </button>

          {/* Thumbnails */}
          <div className="highlights-scroll">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <figure
                key={num}
                className="highlight-item"
                onClick={() => setSelectedImg(require(`./assets/img${num}.jpeg`))}
              >
                <img
                  src={require(`./assets/img${num}.jpeg`)}
                  alt={`Highlight ${num}`}
                />
              </figure>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="scroll-btn right"
            onClick={() => {
              document.querySelector(".highlights-scroll").scrollBy({
                left: 300,
                behavior: "smooth",
              });
            }}
          >
            ›
          </button>
        </div>

        {/* Popup */}
        {selectedImg && (
          <div
            className={`popup ${closing ? "fadeOut" : ""}`}
            onClick={() => handleClose()}
          >
            <div
              className={`popup-content ${closing ? "zoomOut" : "zoomIn"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Enlarged highlight" />
              <button className="close-btn" onClick={() => handleClose()}>
                ✕
              </button>
            </div>
          </div>
        )}
      </section>


      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <h2
            className="section__titleeeee"
            style={{ textAlign: "center" }}
          >
            FAQ's
          </h2>

          <details className="glass faq">
            <summary>Who can join?</summary>
            <p>Students in Grades 6–12. No prior coding experience required.</p>
          </details>

          <details className="glass faq">
            <summary>What do I need to bring?</summary>
            <p>
              Laptop + charger; headphones optional. Everything else is provided
              on-site.
            </p>
          </details>

          <details className="glass faq">
            <summary>Do I get a certificate?</summary>
            <p>
              Yes, evaluated e-certificates for all, plus hardcopy & badge for
              top performers.
            </p>
          </details>

          {/* New FAQs */}
          <details className="glass faq">
            <summary>How long is each workshop?</summary>
            <p>
              Each workshop runs for 3–4 hours with breaks, depending on the
              module selected.
            </p>
          </details>

          <details className="glass faq">
            <summary>Do I need to know robotics or coding already?</summary>
            <p>
              Not at all! We start from the basics and guide you step by step.
            </p>
          </details>

          <details className="glass faq">
            <summary>Is there any fee to join?</summary>
            <p>
              Yes, a minimal registration fee is charged to cover kits, materials,
              and refreshments.
            </p>
          </details>

          <details className="glass faq">
            <summary>Can schools host a private workshop?</summary>
            <p>
              Absolutely! Schools can invite us to conduct exclusive sessions
              for their students.
            </p>
          </details>
        </div>
      </section>


      {/* CONTACT */}

      <section id="contact" className="section ctafooter">
        <h2 style={{ textAlign: "center", marginBottom: "25px", marginTop: "-8px", fontSize: "35px", fontWeight: "200", }}>CONTACT US</h2>
        <div className="container ctafooter__innerr glass">

          <h2>Ready to run a workshop at your school?</h2>
          <p>
            Write to us at{" "}
            <a href="mailto:learnwithrotors@gmail.com">
              learnwithrotors@gmail.com
            </a>
          </p>

          <div style={{ marginTop: "16px" }}>
            <a
              className="btn btn--primary"
              href="mailto:learnwithrotors@gmail.com?subject=Enquiry%20-%20ROTORS%20Workshop"
            >
              Enquire via Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="brand brand--small">
            <div className="brand__glyph">
              <img src={logo} alt="ROTORS Logo" className="brand__logo" />
            </div>
            <div className="brand__text">
              <span className="brand__name">ROTORS</span>
              <span className="brand__tag">IoT • AI & Cloud</span>
            </div>
          </div>
          <div className="footer__copy">
            © {year} ROTORS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function PackageCard({ name, price, tagline, features, glow }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className={`glass course package-card package-${glow}`}
      onClick={() => setOpen((o) => !o)}
    >
      <h3>{name}</h3>
      <div className="price">{price}</div>

      {/* Show tagline + features only if open */}
      {open && (
        <div className="details">
          <p className="tagline">{tagline}</p>
          <ul>
            {features.map((f, j) => (
              <li key={j}>{f}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

// ✅ Main App with Routing
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/iot-robotics" element={<IotRobotics />} />
        <Route path="/ai-cloud" element={<AiCloud />} />
        <Route path="/drone-technology" element={<DroneTechnology />} />
      </Routes>
    </Router>
  );
}
