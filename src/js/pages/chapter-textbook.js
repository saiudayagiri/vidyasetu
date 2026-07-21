import { curriculumData } from '../data.js';

export function renderChapterTextbook(classId, subjectId, chapterId) {
  const classObj = curriculumData.classes[classId];
  if (!classObj) {
    return `<div class="page-container"><h1>Class not found</h1><p><a href="#/classes">Back to classes</a></p></div>`;
  }

  // Resolve subject (handling streams for Class 11/12)
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

  const chapterObj = (subjectObj.chapters || []).find(c => c.id === chapterId);
  if (!chapterObj) {
    return `<div class="page-container"><h1>Chapter not found</h1><p><a href="#/class/${classId}/subject/${subjectId}">Back to chapters</a></p></div>`;
  }

  const pdfPath = `/textbooks/${chapterObj.id}.pdf`;

  setTimeout(() => {
    const frame = document.getElementById('textbook-pdf-frame');
    const checking = document.getElementById('textbook-pdf-checking');
    const missing = document.getElementById('textbook-pdf-missing');
    if (!frame) return;
    fetch(pdfPath, { method: 'HEAD' })
      .then(res => {
        const contentType = res.headers.get('content-type') || '';
        if (res.ok && contentType.includes('pdf')) {
          frame.style.display = 'block';
          checking.style.display = 'none';
        } else {
          checking.style.display = 'none';
          missing.style.display = 'flex';
        }
      })
      .catch(() => {
        checking.style.display = 'none';
        missing.style.display = 'flex';
      });
  }, 0);

  return `
    <div class="page-container">
      <div class="breadcrumb-container">
        <a href="#/" class="breadcrumb-item">Home</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/classes" class="breadcrumb-item">Classes</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/class/${classId}" class="breadcrumb-item">${classObj.name}</a>
        <span class="breadcrumb-separator">/</span>
        <a href="#/class/${classId}/subject/${subjectId}" class="breadcrumb-item">${subjectName}</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">${chapterObj.title}</span>
      </div>

      <div class="subject-header-container" style="margin-bottom: 1.5rem;">
        <span style="font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: var(--primary-color); letter-spacing: 1px;">
          📄 Chapter Textbook
        </span>
        <h1 class="subject-header-title" style="font-size: 2.2rem; margin-top: 0.25rem;">${chapterObj.title}</h1>
      </div>

      <div class="textbook-viewer-container">
        <div class="textbook-pdf-frame-wrapper" id="textbook-pdf-frame-wrapper">
          <iframe id="textbook-pdf-frame" src="${pdfPath}#toolbar=1" title="${chapterObj.title} — Textbook PDF" class="textbook-pdf-frame" style="display:none;"></iframe>
          <div id="textbook-pdf-checking" class="textbook-pdf-placeholder">
            <div class="textbook-pdf-icon">📄</div>
            <p>Checking for a textbook PDF for this chapter…</p>
          </div>
          <div id="textbook-pdf-missing" class="textbook-pdf-placeholder" style="display:none;">
            <div class="textbook-pdf-icon">📄</div>
            <h3>No textbook PDF added yet for "${chapterObj.title}"</h3>
            <p>To show the official chapter PDF here, add the file to:</p>
            <code class="textbook-pdf-path">public/textbooks/${chapterObj.id}.pdf</code>
            <p class="textbook-pdf-hint">Once the file is added, reload this page — it will appear here automatically.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
