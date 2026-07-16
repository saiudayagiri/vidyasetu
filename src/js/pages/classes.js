import { curriculumData } from '../data.js';

export function renderClasses() {
  let middleSchoolCards = '';
  let highSchoolCards = '';

  for (const [classKey, classObj] of Object.entries(curriculumData.classes)) {
    const cardHtml = `
      <a href="#/class/${classKey}" class="class-card" style="background: ${classObj.theme || 'linear-gradient(135deg, #FF6B35, #1B3A5C)'}">
        <div>
          <div class="class-tagline">${classObj.tagline || 'Education for All'}</div>
          <div class="class-title">${classObj.name}</div>
        </div>
        <div class="class-action">
          <span>Explore Curriculum</span>
          <span>➜</span>
        </div>
      </a>
    `;

    // Categorize
    const num = parseInt(classKey);
    if (num >= 6 && num <= 10) {
      middleSchoolCards += cardHtml;
    } else {
      highSchoolCards += cardHtml;
    }
  }

  return `
    <div class="page-container">
      <div class="breadcrumb-container">
        <a href="#/" class="breadcrumb-item">Home</a>
        <span class="breadcrumb-separator">/</span>
        <span class="breadcrumb-item active">Classes Catalog</span>
      </div>

      <div class="subject-header-container">
        <h1 class="subject-header-title">Select Classroom Grade</h1>
        <p class="hero-desc" style="margin-bottom: 2rem;">
          Choose your grade below to explore syllabus topics, slide presentations, science activities, and practice quizzes.
        </p>
      </div>

      <h2 class="section-title" style="text-align: left; font-size: 1.75rem; margin-bottom: 1.5rem;">Middle School (Classes 6th - 10th)</h2>
      <div class="classes-grid" style="margin-bottom: 3.5rem;">
        ${middleSchoolCards}
      </div>

      <h2 class="section-title" style="text-align: left; font-size: 1.75rem; margin-bottom: 1.5rem;">High School & Streams (Classes 11th - 12th)</h2>
      <div class="classes-grid">
        ${highSchoolCards}
      </div>
    </div>
  `;
}
