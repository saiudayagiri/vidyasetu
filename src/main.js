import './style.css';
import { parseHash } from './js/router.js';
import { renderHome } from './js/pages/home.js';
import { renderClasses } from './js/pages/classes.js';
import { renderClassDetail } from './js/pages/class-detail.js';
import { renderSubjectDetail } from './js/pages/subject-detail.js';
import { renderTopicDetail } from './js/pages/topic-detail.js';
import { renderChapterTextbook } from './js/pages/chapter-textbook.js';
import { renderAbout } from './js/pages/about.js';
import { curriculumData } from './js/data.js';

// Application Scaffold HTML
const appScaffold = `
  <div class="app-shell">
    <aside class="global-sidebar" id="global-sidebar">
      <div class="global-sidebar-header">
        <span>🧭</span>
        <span>Curriculum Navigator</span>
        <button type="button" class="sidebar-collapse-btn" id="sidebar-collapse-btn" title="Collapse sidebar">‹</button>
      </div>
      <div class="global-sidebar-content" id="global-sidebar-content"></div>
    </aside>
    <button type="button" class="sidebar-expand-btn" id="sidebar-expand-btn" title="Show curriculum navigator">🧭</button>
    <div class="app-main-column">
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
    </div>
  </div>
`;

// Insert scaffold into DOM
const appContainer = document.getElementById('app');
if (appContainer) {
  appContainer.innerHTML = appScaffold;
}

// ------------------------------------------------------------------
// Global Curriculum Navigator (persistent left sidebar)
// ------------------------------------------------------------------
function resolveSubjectObj(classObj, subjectKey) {
  if (!classObj) return null;
  if (classObj.isHighSchool) {
    const parts = subjectKey.split('_');
    const streamKey = parts[0];
    const realSubjectKey = parts.slice(1).join('_');
    const stream = classObj.streams ? classObj.streams[streamKey] : null;
    return stream && stream.subjects ? stream.subjects[realSubjectKey] : null;
  }
  return classObj.subjects ? classObj.subjects[subjectKey] : null;
}

function listSubjectsForClass(classObj) {
  const list = [];
  if (!classObj) return list;
  if (classObj.isHighSchool) {
    Object.keys(classObj.streams || {}).forEach(streamKey => {
      const stream = classObj.streams[streamKey];
      Object.keys(stream.subjects || {}).forEach(subKey => {
        list.push({ key: `${streamKey}_${subKey}`, name: stream.subjects[subKey].name, icon: stream.subjects[subKey].icon || '📘' });
      });
    });
  } else {
    Object.keys(classObj.subjects || {}).forEach(subKey => {
      list.push({ key: subKey, name: classObj.subjects[subKey].name, icon: classObj.subjects[subKey].icon || '📘' });
    });
  }
  return list;
}

function buildSidebarHtml(route, params) {
  const classId = params.classId;
  const classObj = classId ? curriculumData.classes[classId] : null;

  if (!classObj) {
    const classLinks = Object.keys(curriculumData.classes).map(cid => {
      const c = curriculumData.classes[cid];
      return `<a href="#/class/${cid}" class="sidenav-class-link">${c.name}</a>`;
    }).join('');
    return `
      <p class="sidenav-hint">Pick a class to browse its chapters here.</p>
      <div class="sidenav-class-list">${classLinks}</div>
    `;
  }

  const subjectId = params.subjectId || '';
  const topicId = params.topicId || '';
  const currentChapterId = params.chapterId || '';
  const subjects = listSubjectsForClass(classObj);

  const subjectsHtml = subjects.map(sub => {
    const isCurrentSubject = sub.key === subjectId;
    const subjectObj = resolveSubjectObj(classObj, sub.key);
    const chapters = (subjectObj && subjectObj.chapters) || [];

    let chaptersHtml = '';
    if (isCurrentSubject) {
      chaptersHtml = chapters.map((ch, idx) => {
        const hasActiveTopic = !!(ch.topics || []).find(t => t.id === topicId);
        const isViewingTextbook = route === 'chapter-textbook' && ch.id === currentChapterId;
        const isCurrentChapter = hasActiveTopic || isViewingTextbook;
        const topicsHtml = (ch.topics || []).map(t => {
          const isActive = t.id === topicId;
          return `<a href="#/class/${classId}/subject/${sub.key}/topic/${t.id}" class="sidenav-topic-link${isActive ? ' active' : ''}">${t.title}</a>`;
        }).join('');
        const textbookLink = `<a href="#/class/${classId}/subject/${sub.key}/chapter/${ch.id}/textbook" class="sidenav-textbook-link${isViewingTextbook ? ' active' : ''}">📄 Chapter Textbook (PDF)</a>`;
        return `
          <div class="sidenav-chapter${isCurrentChapter ? ' expanded' : ''}">
            <button type="button" class="sidenav-chapter-header">
              <span class="sidenav-chapter-num">${idx + 1}</span>
              <span class="sidenav-chapter-title">${ch.title}</span>
              <span class="sidenav-chevron">${isCurrentChapter ? '−' : '+'}</span>
            </button>
            <div class="sidenav-topics">${textbookLink}${topicsHtml}</div>
          </div>`;
      }).join('');
    }

    return `
      <div class="sidenav-subject${isCurrentSubject ? ' current' : ''}">
        <a href="#/class/${classId}/subject/${sub.key}" class="sidenav-subject-header">
          <span class="sidenav-subject-icon">${sub.icon}</span>
          <span>${sub.name}</span>
        </a>
        ${isCurrentSubject ? `<div class="sidenav-chapters">${chaptersHtml || '<p class="sidenav-hint">No chapters yet.</p>'}</div>` : ''}
      </div>`;
  }).join('');

  return `
    <a href="#/class/${classId}" class="sidenav-class-label">${classObj.name}</a>
    <div class="sidenav-subjects">${subjectsHtml}</div>
  `;
}

function renderGlobalSidebar(route, params) {
  const container = document.getElementById('global-sidebar-content');
  if (!container) return;
  container.innerHTML = buildSidebarHtml(route, params);

  container.querySelectorAll('.sidenav-chapter-header').forEach(header => {
    header.addEventListener('click', () => {
      const chapterDiv = header.parentElement;
      const chevron = header.querySelector('.sidenav-chevron');
      const isExpanded = chapterDiv.classList.toggle('expanded');
      if (chevron) chevron.textContent = isExpanded ? '−' : '+';
    });
  });

  const activeLink = container.querySelector('.sidenav-topic-link.active, .sidenav-textbook-link.active');
  if (activeLink) {
    activeLink.scrollIntoView({ block: 'center' });
  }
}

// Sidebar collapse/expand (persisted)
const sidebarEl = document.getElementById('global-sidebar');
const appShellEl = document.querySelector('.app-shell');
let sidebarCollapsed = localStorage.getItem('vidyasetu-sidebar-collapsed') === 'true';

function applySidebarCollapsed() {
  if (appShellEl) appShellEl.classList.toggle('sidebar-collapsed', sidebarCollapsed);
}
applySidebarCollapsed();

document.getElementById('sidebar-collapse-btn')?.addEventListener('click', () => {
  sidebarCollapsed = true;
  localStorage.setItem('vidyasetu-sidebar-collapsed', 'true');
  applySidebarCollapsed();
});
document.getElementById('sidebar-expand-btn')?.addEventListener('click', () => {
  sidebarCollapsed = false;
  localStorage.setItem('vidyasetu-sidebar-collapsed', 'false');
  applySidebarCollapsed();
});

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
  } else if (route === 'chapter-textbook') {
    pageContent.innerHTML = renderChapterTextbook(params.classId, params.subjectId, params.chapterId);
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
  } else if (route === 'classes' || route === 'class-detail' || route === 'subject-detail' || route === 'topic-detail' || route === 'chapter-textbook') {
    navClasses?.classList.add('active');
  } else if (route === 'about') {
    navAbout?.classList.add('active');
  }
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }

  // Keep the curriculum navigator in sync with the current page
  renderGlobalSidebar(route, params);

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
