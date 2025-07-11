// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';

// Helper function to create API URLs
export const createApiUrl = (endpoint) => {
  // Ensure endpoint starts with /
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

// Export common API endpoints
export const API_ENDPOINTS = {
  GENERATE_OUTLINE: '/lc_generate_outline',
  SAVE_OUTLINE: '/save_outline',  // New endpoint for saving edited outline
  GENERATE_CHAPTER: '/lc_generate_chapter',
  SAVE_STORY: '/Stories/save',
  GENERATE_NEXT_CHAPTER: '/generate_next_chapter',
  SAVE_CHAPTER: '/save_chapter_with_summary',
  STORY_CHAT: '/story_chat',
  HEALTH: '/health',
  GET_Stories: '/Stories',
  ENSURE_EMBEDDINGS: '/Stories/{story_id}/ensure_embeddings',
  // New branching choices endpoints
  GENERATE_CHOICES: '/generate_choices',
  GENERATE_CHAPTER_WITH_CHOICE: '/generate_chapter_with_choice',
  CHOICE_HISTORY: '/story/{story_id}/choice_history'
};