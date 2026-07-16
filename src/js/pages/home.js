import { curriculumData } from '../data.js';

export function renderHome() {
  // Generate class cards for the grid
  let classCardsHtml = '';
  for (const [classKey, classObj] of Object.entries(curriculumData.classes)) {
    classCardsHtml += `
      <a href="#/class/${classKey}" class="class-card" style="background: ${classObj.theme || 'linear-gradient(135deg, #FF6B35, #1B3A5C)'}">
        <div>
          <div class="class-tagline">${classObj.tagline || 'Education for All'}</div>
          <div class="class-title">${classObj.name}</div>
        </div>
        <div class="class-action">
          <span>Open Class</span>
          <span>➜</span>
        </div>
      </a>
    `;
  }

  return `
    <div class="page-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <span class="hero-tag">🎓 Smart School Initiative</span>
          <h1 class="hero-title">Free Quality Content for <span>Smart Classrooms</span></h1>
          <p class="hero-desc">
            Bringing visual, interactive, and high-quality educational content to government village schools. Lessons, slides, activities, and quizzes completely free — for everyone, everywhere.
          </p>
          <div class="hero-cta">
            <a href="#/classes" class="btn-primary">
              <span>Start Teaching</span>
              <span>➜</span>
            </a>
            <a href="#/about" class="btn-secondary">Learn Our Mission</a>
          </div>
        </div>
        
        <div class="hero-illustration">
          <div class="ill-bg"></div>
          <!-- Beautiful SVG Classroom Blackboard Illustration -->
          <svg class="illustration-img" viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" style="background-color: var(--bg-secondary); border: 1px solid var(--border-color);">
            <!-- Blackboard Stand -->
            <rect x="235" y="270" width="30" height="90" fill="#475569" />
            <path d="M150 360 L250 270 L350 360" stroke="#475569" stroke-width="12" stroke-linecap="round" />
            
            <!-- Board Shadow -->
            <rect x="55" y="55" width="390" height="230" rx="16" fill="rgba(0,0,0,0.1)" />
            
            <!-- Board Outer Wooden Frame -->
            <rect x="50" y="45" width="400" height="230" rx="12" fill="#854d0e" stroke="#713f12" stroke-width="4" />
            
            <!-- Green Chalkboard Surface -->
            <rect x="70" y="60" width="360" height="200" rx="4" fill="#064e3b" />
            
            <!-- Chalkboard contents -->
            <!-- Grid pattern lines (faint) -->
            <path d="M 70 110 H 430 M 70 160 H 430 M 70 210 H 430" stroke="rgba(255,255,255,0.05)" stroke-width="2" />
            
            <!-- Math/Science chalk drawings -->
            <text x="90" y="105" fill="#fef08a" font-family="'Outfit', sans-serif" font-weight="700" font-size="18">विद्यासेतु - Smart Board</text>
            
            <!-- DNA Helix or sine wave -->
            <path d="M 90 190 Q 115 160 140 190 T 190 190" stroke="#a7f3d0" stroke-width="3" fill="none" stroke-linecap="round" />
            <path d="M 90 190 Q 115 220 140 190 T 190 190" stroke="#fca5a5" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4" />
            <line x1="115" y1="175" x2="115" y2="205" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
            <line x1="165" y1="175" x2="165" y2="205" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
            
            <!-- Atom diagram -->
            <circle cx="350" cy="180" r="10" fill="#f97316" />
            <ellipse cx="350" cy="180" rx="35" ry="12" stroke="#60a5fa" stroke-width="2" fill="none" transform="rotate(30 350 180)" />
            <ellipse cx="350" cy="180" rx="35" ry="12" stroke="#34d399" stroke-width="2" fill="none" transform="rotate(-30 350 180)" />
            <circle cx="320" cy="162" r="3" fill="#60a5fa" />
            <circle cx="378" cy="165" r="3" fill="#34d399" />
            
            <!-- Formula -->
            <text x="230" y="150" fill="#ffffff" font-family="monospace" font-size="15">E = mc²</text>
            <text x="230" y="180" fill="#ffffff" font-family="monospace" font-size="15">H₂O + CO₂</text>
            <text x="230" y="210" fill="#ffffff" font-family="monospace" font-size="15">a² + b² = c²</text>
            
            <!-- Chalk and Duster on frame -->
            <rect x="360" y="260" width="30" height="8" rx="2" fill="#d1d5db" />
            <rect x="320" y="262" width="15" height="5" rx="1" fill="#ffffff" />
          </svg>
        </div>
      </section>

      <!-- Features Section -->
      <section style="margin-top: 3rem;">
        <h2 class="section-title">Everything You Need To Teach</h2>
        <div class="features-strip">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Interactive Slides</h3>
            <p class="feature-desc">Interactive, big-text PPT-style slides built directly into the web page. No downloads needed.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🧪</div>
            <h3 class="feature-title">Hands-on Activities</h3>
            <p class="feature-desc">Simple laboratory and classroom activities with real-world objects to make learning practical.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📝</div>
            <h3 class="feature-title">Classroom Quizzes</h3>
            <p class="feature-desc">Instant multiple-choice quizzes to prompt active thinking and keep students engaged.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📖</div>
            <h3 class="feature-title">Visual Theory</h3>
            <p class="feature-desc">Simplified chapters divided into small visual segments, perfectly optimized for projector displays.</p>
          </div>
        </div>
      </section>

      <!-- Quick Access Classes Section -->
      <section>
        <h2 class="section-title">Jump Straight to Your Class</h2>
        <div class="classes-grid">
          ${classCardsHtml}
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section">
        <div class="stat-item">
          <span class="stat-num" id="stat-classes">7</span>
          <span class="stat-label">Classes (6th to 12th)</span>
        </div>
        <div class="stat-item">
          <span class="stat-num" id="stat-subjects">25+</span>
          <span class="stat-label">Subjects Structured</span>
        </div>
        <div class="stat-item">
          <span class="stat-num" id="stat-visuals">100%</span>
          <span class="stat-label">Visual Media Support</span>
        </div>
        <div class="stat-item">
          <span class="stat-num" id="stat-cost">₹0</span>
          <span class="stat-label">Always Free for Schools</span>
        </div>
      </section>
    </div>
  `;
}
