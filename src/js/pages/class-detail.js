import { curriculumData } from '../data.js';

export function renderClassDetail(classId) {
  const classObj = curriculumData.classes[classId];
  if (!classObj) {
    return `<div class="page-container"><h1>Class not found</h1><p><a href="#/classes">Back to classes</a></p></div>`;
  }

  // Check if Class 11 or 12 (stream-based)
  const isHighSchool = classObj.isHighSchool || false;

  let contentHtml = '';
  
  if (isHighSchool) {
    // High School Stream tabs and grids
    let tabsHtml = '';
    let gridsHtml = '';
    
    // We want to loop over streams
    let isFirstStream = true;
    for (const [streamKey, streamObj] of Object.entries(classObj.streams)) {
      const activeClass = isFirstStream ? 'active' : '';
      const displayStyle = isFirstStream ? 'grid' : 'none';
      
      // Add tab button
      tabsHtml += `
        <button class="stream-tab-btn ${activeClass}" data-stream="${streamKey}">
          ${streamObj.icon} ${streamObj.name}
        </button>
      `;
      
      // Generate subject cards for this stream
      let subjectCardsHtml = '';
      const subjects = streamObj.subjects;
      
      if (Object.keys(subjects).length === 0) {
        subjectCardsHtml = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-md);">
            <p style="color: var(--text-muted); font-size: 1.1rem; font-weight: 500;">📚 Curriculum details for this stream are currently being updated. Check back soon!</p>
          </div>
        `;
      } else {
        for (const [subjectKey, subjectObj] of Object.entries(subjects)) {
          // Check chapter count
          const chCount = subjectObj.chapters ? subjectObj.chapters.length : 0;
          
          subjectCardsHtml += `
            <a href="#/class/${classId}/subject/${streamKey}_${subjectKey}" class="subject-card">
              <div>
                <div class="subject-icon-large">${subjectObj.icon || '📚'}</div>
                <div class="subject-title">${subjectObj.name}</div>
              </div>
              <div class="subject-chapter-count">${chCount} Chapters Available</div>
            </a>
          `;
        }
      }
      
      // Add grid
      gridsHtml += `
        <div class="subject-grid stream-grid-content" id="stream-grid-${streamKey}" style="display: ${displayStyle};">
          ${subjectCardsHtml}
        </div>
      `;
      
      isFirstStream = false;
    }
    
    contentHtml = `
      <div class="stream-nav">
        ${tabsHtml}
      </div>
      ${gridsHtml}
    `;
  } else {
    // Middle school standard subjects grid
    let subjectCardsHtml = '';
    for (const [subjectKey, subjectObj] of Object.entries(classObj.subjects)) {
      const chCount = subjectObj.chapters ? subjectObj.chapters.length : 0;
      
      subjectCardsHtml += `
        <a href="#/class/${classId}/subject/${subjectKey}" class="subject-card">
          <div>
            <div class="subject-icon-large">${subjectObj.icon || '📚'}</div>
            <div class="subject-title">${subjectObj.name}</div>
          </div>
          <div class="subject-chapter-count">${chCount} Chapters Available</div>
        </a>
      `;
    }
    
    contentHtml = `
      <div class="subject-grid">
        ${subjectCardsHtml}
      </div>
    `;
  }

  // Code to run after DOM render to register tab switches
  setTimeout(() => {
    const tabBtns = document.querySelectorAll('.stream-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Toggle grids
        const targetStream = btn.getAttribute('data-stream');
        const grids = document.querySelectorAll('.stream-grid-content');
        grids.forEach(grid => {
          if (grid.id === `stream-grid-${targetStream}`) {
            grid.style.display = 'grid';
          } else {
            grid.style.display = 'none';
          }
        });
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
        <span class="breadcrumb-item active">${classObj.name}</span>
      </div>

      <div class="subject-header-container">
        <h1 class="subject-header-title">${classObj.name} Subjects</h1>
        <p class="hero-desc">
          Select a subject below to view chapters, interactive lesson slides, mock tests, and experiment guides.
        </p>
      </div>

      ${contentHtml}
    </div>
  `;
}
