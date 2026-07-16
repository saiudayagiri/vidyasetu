import { curriculumData } from '../data.js';

export function renderSubjectDetail(classId, subjectId) {
  const classObj = curriculumData.classes[classId];
  if (!classObj) {
    return `<div class="page-container"><h1>Class not found</h1><p><a href="#/classes">Back to classes</a></p></div>`;
  }

  // Resolve subject (handling streams)
  let subjectObj;
  let subjectName = '';
  
  if (classObj.isHighSchool) {
    const parts = subjectId.split('_');
    const streamKey = parts[0];
    const realSubjectKey = parts.slice(1).join('_');
    const stream = classObj.streams[streamKey];
    if (stream) {
      subjectObj = stream.subjects[realSubjectKey];
      subjectName = `${subjectObj?.name || ''} (${stream.name})`;
    }
  } else {
    subjectObj = classObj.subjects[subjectId];
    subjectName = subjectObj?.name || '';
  }

  if (!subjectObj) {
    return `<div class="page-container"><h1>Subject not found</h1><p><a href="#/class/${classId}">Back to subjects</a></p></div>`;
  }

  const chapters = subjectObj.chapters || [];
  let chaptersHtml = '';

  if (chapters.length === 0) {
    chaptersHtml = `
      <div style="text-align: center; padding: 4rem 2rem; background-color: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md); box-shadow: var(--card-shadow);">
        <span style="font-size: 4rem; display: block; margin-bottom: 1rem;">📖</span>
        <h3 style="margin-bottom: 0.5rem; font-size: 1.5rem;">Visual Content Coming Soon</h3>
        <p style="color: var(--text-muted); max-width: 500px; margin: 0 auto 1.5rem;">
          Our volunteer educators are currently drafting beautiful lesson slides, experiment templates, and interactive practice quizzes for this subject.
        </p>
        <a href="#/class/${classId}" class="btn-primary" style="font-size: 0.95rem; padding: 0.75rem 1.5rem;">Select Another Subject</a>
      </div>
    `;
  } else {
    // Generate chapter accordions
    chapters.forEach((chapter, index) => {
      // Default expand the first chapter to guide the user
      const isExpanded = index === 0;
      const expandClass = isExpanded ? 'expanded' : '';
      
      let topicsHtml = '';
      if (chapter.topics && chapter.topics.length > 0) {
        chapter.topics.forEach(topic => {
          // Generate pills for content types
          let pillsHtml = '';
          if (topic.slides) pillsHtml += `<span class="indicator-pill">📊 Slides</span> `;
          if (topic.theory) pillsHtml += `<span class="indicator-pill">📖 Theory</span> `;
          if (topic.activity) pillsHtml += `<span class="indicator-pill">🧪 Activity</span> `;
          if (topic.quiz) pillsHtml += `<span class="indicator-pill">📝 Quiz</span> `;

          topicsHtml += `
            <a href="#/class/${classId}/subject/${subjectId}/topic/${topic.id}" class="topic-item-link">
              <span class="topic-title-cell">${topic.title}</span>
              <div class="topic-indicators">
                ${pillsHtml}
              </div>
            </a>
          `;
        });
      } else {
        topicsHtml = `<div style="color: var(--text-muted); padding: 1rem; font-style: italic;">No topics available yet.</div>`;
      }

      chaptersHtml += `
        <div class="chapter-item ${expandClass}" id="chapter-card-${chapter.id}">
          <div class="chapter-header" data-chapter-id="${chapter.id}">
            <div class="chapter-info-block">
              <span class="chapter-num">Chapter ${index + 1}</span>
              <span class="chapter-title-text">${chapter.title}</span>
            </div>
            <span class="chapter-arrow">▼</span>
          </div>
          <div class="chapter-content">
            <div class="topic-list">
              ${topicsHtml}
            </div>
          </div>
        </div>
      `;
    });
  }

  // Set up click handlers for Accordion toggles
  setTimeout(() => {
    const headers = document.querySelectorAll('.chapter-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const chapterId = header.getAttribute('data-chapter-id');
        const card = document.getElementById(`chapter-card-${chapterId}`);
        if (card) {
          card.classList.toggle('expanded');
        }
      });
    });
  }, 100);

  return `
    <div class="page-container">
      <div class="breadcrumb-container">
        <a href="#/" class="breadcrumb-item">Home</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/classes" class="breadcrumb-item">Classes</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/class/${classId}" class="breadcrumb-item">${classObj.name}</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">${subjectObj.name}</span>
      </div>

      <div class="subject-header-container">
        <h1 class="subject-header-title">${classObj.name} — ${subjectName}</h1>
        <p class="hero-desc">
          Expand a chapter below to view individual learning topics and launch classroom slideshows or student quizzes.
        </p>
      </div>

      <div class="chapter-list">
        ${chaptersHtml}
      </div>
    </div>
  `;
}
