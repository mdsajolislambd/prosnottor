// =============================================
// common.js – Shared utilities for all pages
// =============================================

/**
 * Mobile hamburger menu toggle
 */
(function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  }
})();

/**
 * Helper: Check if a user is currently logged in.
 * Returns the Supabase session or null.
 * Requires the Supabase client to be initialized (see auth.js).
 */
async function getCurrentSession() {
  // Supabase client must be available globally as `supabase`
  if (typeof supabase === 'undefined') {
    console.warn('Supabase client not found. Make sure auth.js is loaded.');
    return null;
  }
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/**
 * Redirect to a URL (if you want a reusable function)
 */
function redirectTo(url) {
  window.location.href = url;
}
