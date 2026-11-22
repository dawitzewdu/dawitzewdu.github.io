/**
 * DAWIT ZEWDU MENAS — PORTFOLIO & RESUME INTERACTION SCRIPT
 * Features: Dark/Light Mode, ScrollSpy, Skills Filter, Interactive Modals, Toast Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light Mode)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  const mobileThemeText = document.getElementById('mobileThemeText');
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('dz_theme') || 'dark';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dz_theme', theme);

    // Update Desktop Theme Button
    if (themeToggleBtn) {
      const themeIcon = themeToggleBtn.querySelector('i');
      if (themeIcon) {
        themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      }
      themeToggleBtn.setAttribute('title', theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode');
    }

    // Update Mobile Drawer Theme Button
    if (mobileThemeToggleBtn) {
      const mobileIcon = mobileThemeToggleBtn.querySelector('i');
      if (mobileIcon) {
        mobileIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      }
      if (mobileThemeText) {
        mobileThemeText.textContent = theme === 'light' ? 'Dark Mode' : 'Light Mode';
      }
    }
  }

  function toggleCurrentTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleCurrentTheme);
  }
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', toggleCurrentTheme);
  }

  // 2. Sticky Navbar & Header Blur
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Mobile Navigation Toggle & Drawer Controller
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMobileDrawer() {
    if (navMenu && mobileToggle) {
      navMenu.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  function openMobileDrawer() {
    if (navMenu && mobileToggle) {
      navMenu.classList.add('active');
      mobileToggle.classList.add('active');
      mobileToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isCurrentlyActive = navMenu.classList.contains('active');
      if (isCurrentlyActive) {
        closeMobileDrawer();
      } else {
        openMobileDrawer();
      }
    });

    // Close menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });

    // Close menu on pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileDrawer();
      }
    });
  }

  // 4. Interactive Skills Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Contact Form Handler (Direct Mailto / Feedback)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value || 'Inquiry from Portfolio';
      const message = document.getElementById('message').value;

      // Construct mailto link
      const mailtoUrl = `mailto:dawitzewdu00@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      
      showToast('Opening your email client to deliver message...');
      window.location.href = mailtoUrl;
      contactForm.reset();
    });
  }

  // 6. Copy to Clipboard Utility
  window.copyText = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copied ${label} to clipboard!`);
    }).catch(err => {
      console.error('Copy failed', err);
    });
  };

  // 7. Toast Notification System
  function showToast(message) {
    let toast = document.getElementById('dz-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'dz-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '2rem';
      toast.style.right = '2rem';
      toast.style.background = 'rgba(15, 23, 42, 0.95)';
      toast.style.backdropFilter = 'blur(12px)';
      toast.style.color = '#38bdf8';
      toast.style.border = '1px solid rgba(56, 189, 248, 0.4)';
      toast.style.borderRadius = '12px';
      toast.style.padding = '0.9rem 1.4rem';
      toast.style.fontSize = '0.92rem';
      toast.style.fontWeight = '600';
      toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      toast.style.zIndex = '9999';
      toast.style.transition = 'all 0.3s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      document.body.appendChild(toast);
    }

    toast.innerText = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
    }, 3500);
  }

  // 8. Navigation ScrollSpy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
});
