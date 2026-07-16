export function renderAbout() {
  return `
    <div class="page-container">
      <div class="breadcrumb-container">
        <a href="#/" class="breadcrumb-item">Home</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">About Mission</span>
      </div>

      <section class="about-grid">
        <div class="about-content">
          <span class="hero-tag">❤️ Education For All</span>
          <h1 class="about-title">Bridging the Smart Classroom Gap: <span>VidyaSetu</span></h1>
          <p class="hero-desc">
            Today, thousands of government village schools are equipped with smart boards, TVs, and projector systems. However, most remain dark or underutilized because teachers lack access to high-quality, structured digital teaching aids.
          </p>
          <p style="color: var(--text-muted); font-size: 1.05rem;">
            VidyaSetu is our solution. We provide rich visual chapters, step-by-step experiment instructions, classroom slide decks, and instant response quizzes tailored to Classes 6th through 12th.
          </p>
          <p style="color: var(--text-muted); font-size: 1.05rem; font-weight: 600; color: var(--secondary-color);">
            100% Free. No logins, no subscriptions, no ads. Built for the children of India.
          </p>
        </div>
        
        <div class="about-image-card">
          <!-- Abstract representation of smart classroom learning -->
          <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(135deg, #1e3a8a, #0f172a); width:100%; height:100%;">
            <!-- Big sun glow -->
            <circle cx="200" cy="175" r="120" fill="rgba(255, 107, 53, 0.15)" filter="blur(20px)" />
            
            <!-- Floating book icons -->
            <g transform="translate(180, 140) scale(1.5)">
              <path d="M12 21.27s-3.97-3.8-7.27-7.27a4.67 4.67 0 0 1 6.6-6.6l.67.67.67-.67a4.67 4.67 0 0 1 6.6 6.6c-3.3 3.47-7.27 7.27-7.27 7.27z" fill="#ff6b35" />
            </g>
            
            <text x="200" y="240" fill="#ffffff" font-family="'Outfit', sans-serif" font-weight="800" font-size="24" text-anchor="middle">विद्यादानं परमं धनम्</text>
            <text x="200" y="265" fill="rgba(255,255,255,0.7)" font-family="'Inter', sans-serif" font-size="14" text-anchor="middle">"Giving knowledge is the greatest charity"</text>
            
            <!-- School building or children silhouette abstract -->
            <path d="M 50 350 L 100 280 L 150 350 Z" fill="rgba(255,255,255,0.05)" />
            <path d="M 250 350 L 300 290 L 350 350 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
      </section>

      <section class="mission-statement">
        <blockquote>
          "Our goal is simple: ensure that the child sitting in the last row of a remote village classroom receives the exact same standard of engaging visual learning as a child in a premium private academy."
        </blockquote>
        <p>— The VidyaSetu Open Education Project</p>
      </section>

      <section style="margin-top: 4rem; margin-bottom: 3rem;">
        <h2 class="section-title">Designed for Rural Reality</h2>
        <div class="features-strip">
          <div class="feature-card">
            <div class="feature-icon">🔌</div>
            <h3 class="feature-title">Offline Execution</h3>
            <p class="feature-desc">Entire site runs from a local folder. Teachers can copy it to a USB pen drive and open it on school PCs without internet connection.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3 class="feature-title">Smartboard Friendly</h3>
            <p class="feature-desc">Big fonts, massive clickable buttons, and a customizable font scale so that information is readable from 20 feet away in high-glare environments.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚙️</div>
            <h3 class="feature-title">Low Resource Needs</h3>
            <p class="feature-desc">Pure, clean CSS and lightweight DOM rendering mean it operates perfectly on older, slower computers running Windows XP or Linux in schools.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">❤️</div>
            <h3 class="feature-title">Zero Friction</h3>
            <p class="feature-desc">No registration, email logins, or profiles. Immediate access to subjects with a single click ensures no classroom teaching time is wasted.</p>
          </div>
        </div>
      </section>
    </div>
  `;
}
