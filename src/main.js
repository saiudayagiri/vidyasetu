import './style.css';
import { parseHash } from './js/router.js';
import { renderHome } from './js/pages/home.js';
import { renderClasses } from './js/pages/classes.js';
import { renderClassDetail } from './js/pages/class-detail.js';
import { renderSubjectDetail } from './js/pages/subject-detail.js';
import { renderTopicDetail } from './js/pages/topic-detail.js';
import { renderAbout } from './js/pages/about.js';

// Application Scaffold HTML
const appScaffold = `
  <header>
    <div class="nav-container">
      <a href="#/" class="logo-link">
        <span class="logo-icon">📚</span>
        <div class="logo-text">
          <span>VidyaSetu</span>
          <span class="logo-sub">विद्यासेतु • Classroom</span>
        </div>
      </a>
      <nav class="nav-links">
        <a href="#/" class="nav-item" id="nav-link-home">Home</a>
        <a href="#/classes" class="nav-item" id="nav-link-classes">Classes</a>
        <a href="#/about" class="nav-item" id="nav-link-about">About Mission</a>
      </nav>
      <div class="nav-controls">
        <!-- Classroom Zoom Controller for visibility from last rows -->
        <div class="zoom-ctrl" title="Adjust visual size for back rows">
          <button class="zoom-btn" id="zoom-dec">-</button>
          <span class="zoom-indicator" id="zoom-val">Size: 100%</span>
          <button class="zoom-btn" id="zoom-inc">+</button>
        </div>
        <!-- Theme Toggle -->
        <button class="ctrl-btn" id="theme-toggle-btn" title="Toggle Light/Dark Theme">
          <span id="theme-toggle-icon">🌙</span>
        </button>
      </div>
    </div>
  </header>
  <main id="page-content"></main>
  <footer>
    <div class="footer-content">
      <div class="footer-logo">VidyaSetu (विद्यासेतु)</div>
      <div class="footer-motto">"विद्यां ददाति विनयं" — High-Quality Visual Lessons for Smart Classrooms</div>
      <p style="color: var(--text-light); max-width: 600px; margin: 0.5rem auto; font-size: 0.85rem;">
        An open-source, offline-ready education platform designed specifically for government village schools.
      </p>
      <div class="footer-credits">Created in support of Education for All. Free of cost.</div>
    </div>
  </footer>
`;

// Insert scaffold into DOM
const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = appScaffold;
}

// Global Classroom Text Zoom scaling State
let zoomPercent = 100;
const minZoom = 75;
const maxZoom = 150;
const stepZoom = 12.5;

function setClassroomZoom(newZoom) {
  zoomPercent = Math.max(minZoom, Math.min(maxZoom, newZoom));
  const decimalZoom = zoomPercent / 100;
  
  // Set global CSS custom property
  document.documentElement.style.setProperty('--classroom-scale', decimalZoom);
  
  // Update UI indicator
  const indicator = document.getElementById('zoom-val');
  if (indicator) {
    indicator.textContent = `Size: ${zoomPercent}%`;
  }
  
  // Cache preference
  localStorage.setItem('vidyasetu-zoom', zoomPercent);
}

// Global Theme State
let currentTheme = localStorage.getItem('vidyasetu-theme') || 'light';

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('vidyasetu-theme', theme);
  
  // Update icon
  const iconSpan = document.getElementById('theme-toggle-icon');
  if (iconSpan) {
    iconSpan.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

// Register Global Controls Event Listeners
document.getElementById('zoom-dec')?.addEventListener('click', () => {
  setClassroomZoom(zoomPercent - stepZoom);
});

document.getElementById('zoom-inc')?.addEventListener('click', () => {
  setClassroomZoom(zoomPercent + stepZoom);
});

document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Load preferences from cache
const cachedZoom = localStorage.getItem('vidyasetu-zoom');
if (cachedZoom) {
  setClassroomZoom(parseInt(cachedZoom));
}
setTheme(currentTheme);

// Core Routing/Rendering Controller
function handleRouting() {
  const { route, params } = parseHash();
  const pageContent = document.getElementById('page-content');
  if (!pageContent) return;

  // Render correct page HTML
  if (route === 'home') {
    pageContent.innerHTML = renderHome();
  } else if (route === 'classes') {
    pageContent.innerHTML = renderClasses();
  } else if (route === 'class-detail') {
    pageContent.innerHTML = renderClassDetail(params.classId);
  } else if (route === 'subject-detail') {
    pageContent.innerHTML = renderSubjectDetail(params.classId, params.subjectId);
  } else if (route === 'topic-detail') {
    pageContent.innerHTML = renderTopicDetail(params.classId, params.subjectId, params.topicId);
  } else if (route === 'about') {
    pageContent.innerHTML = renderAbout();
  } else {
    pageContent.innerHTML = renderHome(); // fallback
  }

  // Update Nav links active states
  const navHome = document.getElementById('nav-link-home');
  const navClasses = document.getElementById('nav-link-classes');
  const navAbout = document.getElementById('nav-link-about');

  // Clear active
  navHome?.classList.remove('active');
  navClasses?.classList.remove('active');
  navAbout?.classList.remove('active');

  // Set active based on route
  if (route === 'home') {
    navHome?.classList.add('active');
  } else if (route === 'classes' || route === 'class-detail' || route === 'subject-detail' || route === 'topic-detail') {
    navClasses?.classList.add('active');
  } else if (route === 'about') {
    navAbout?.classList.add('active');
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  // Scroll to top on navigation
  window.scrollTo(0, 0);
}

// Router Event Listeners
window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', () => {
  handleRouting();
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 800); // Give it a slight delay so the beautiful loader is visible
});
