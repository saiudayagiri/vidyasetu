// Simple, lightweight, offline-friendly client-side router
export function parseHash() {
  const hash = window.location.hash || '#/';
  const path = hash.substring(1); // Remove the '#'
  
  // Clean trailing slashes
  const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  
  // Split path into segments
  const segments = cleanPath.split('/').filter(Boolean);
  
  // Match Routes
  if (segments.length === 0) {
    return { route: 'home', params: {} };
  }
  
  if (segments[0] === 'about') {
    return { route: 'about', params: {} };
  }
  
  if (segments[0] === 'classes') {
    return { route: 'classes', params: {} };
  }
  
  // e.g., #/class/6
  if (segments[0] === 'class' && segments[1]) {
    const classId = segments[1];
    
    // e.g., #/class/6/subject/science
    if (segments[2] === 'subject' && segments[3]) {
      const subjectId = segments[3];
      
      // e.g., #/class/6/subject/science/topic/6s-1-1
      if (segments[4] === 'topic' && segments[5]) {
        const topicId = segments[5];
        return {
          route: 'topic-detail',
          params: { classId, subjectId, topicId }
        };
      }

      // e.g., #/class/10/subject/science/chapter/10s-1/textbook
      if (segments[4] === 'chapter' && segments[5] && segments[6] === 'textbook') {
        const chapterId = segments[5];
        return {
          route: 'chapter-textbook',
          params: { classId, subjectId, chapterId }
        };
      }

      return {
        route: 'subject-detail',
        params: { classId, subjectId }
      };
    }
    
    return {
      route: 'class-detail',
      params: { classId }
    };
  }
  
  // Fallback to home
  return { route: 'home', params: {} };
}

// Helper to navigate programmatically
export function navigateTo(hash) {
  window.location.hash = hash;
}
