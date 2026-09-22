/**
 * Mariam Awny Portfolio - Mobile Application Logic
 * Pure Vanilla JavaScript ES6+
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------
  // 1. PROJECT DATA (Strictly sourced from verified CV data)
  // ------------------------------------------------------------------
  const projectsData = {
    'fruit-hub': {
      title: 'Fruit Hub App',
      category: 'E-Commerce Mobile Application',
      subtitle: 'Complete online grocery & fresh fruits ordering platform.',
      image: 'assets/images/Mariam_Awny_Flutter_Developer_CV.pdf - Google Chrome 9_18_2026 1_03_35 PM.png',
      problem: 'Consumers need an intuitive, secure mobile interface to order fresh produce and track orders effortlessly.',
      solution: 'Architected and built a mobile application with custom onboarding screens, Firebase Authentication, Cloud Firestore product feeds, and PayMob payment gateway integration.',
      result: 'Delivered a smooth shopping experience with real-time checkout and state management powered by Cubit.',
      features: [
        'Custom Onboarding & Authentication flow via Firebase Auth',
        'Product discovery with category filtering & real-time search',
        'Shopping cart state management using Cubit & Clean Architecture',
        'Integrated PayMob payment gateway for card/e-wallet transactions',
        'Firestore live database synchronization for orders'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'PayMob', 'Cubit', 'Clean Architecture'],
      role: 'Designed architecture, implemented UI screens, managed state with Cubit, and integrated Firebase and PayMob APIs.',
      github: 'https://github.com/mariamawny'
    },
    'bookly': {
      title: 'Bookly App',
      category: 'Reading & Digital Books Library',
      subtitle: 'Digital book explorer & previewer powered by Google Books API.',
      image: 'assets/images/Mariam_Awny_Flutter_Developer_CV.pdf - Google Chrome 9_18_2026 1_03_56 PM.png',
      problem: 'Readers need a convenient app to discover popular books, read instant sample previews, and explore recommendations.',
      solution: 'Developed a feature-rich Flutter application connecting to the Google Books API with Dio HTTP client, following MVVM / Clean Architecture and Cubit state management.',
      result: 'Users can quickly search, filter, and view book details and free sample previews with high response speed.',
      features: [
        'Live integration with Google Books REST API',
        'Featured books slider & top recommendations list',
        'Search screen with instant dynamic query results',
        'In-app PDF / Web sample preview viewer',
        'Clean Architecture layer separation (Data, Domain, Presentation)'
      ],
      technologies: ['Flutter', 'Dart', 'Google Books REST API', 'Dio', 'Cubit', 'Clean Architecture'],
      role: 'Built the complete app architecture, integrated external APIs, and crafted custom smooth transitions.',
      github: 'https://github.com/mariamawny'
    },
    'notes': {
      title: 'Notes App',
      category: 'Productivity & Local Database',
      subtitle: 'Fast, offline-first personal notes management application.',
      image: 'assets/images/Mariam_Awny_Flutter_Developer_CV.pdf - Google Chrome 9_18_2026 1_04_08 PM.png',
      problem: 'Users require a quick, private offline note-taking app to organize daily thoughts and tasks without relying on internet access.',
      solution: 'Built an offline-first Flutter application utilizing Hive NoSQL local database for high-performance CRUD note operations.',
      result: 'Provides instant local persistence and seamless note customization with custom colors and editing capabilities.',
      features: [
        'Create, read, edit, and delete notes instantly offline',
        'Color-coded note customization for easy categorization',
        'Hive local storage engine for ultra-fast load times',
        'Search and filter notes dynamically',
        'Cubit state management for reactivity'
      ],
      technologies: ['Flutter', 'Dart', 'Hive Local DB', 'Cubit', 'Custom Widgets'],
      role: 'Sole developer implementing UI, Cubit state reactive triggers, and Hive box storage management.',
      github: 'https://github.com/mariamawny'
    },
    'weather': {
      title: 'Weather App',
      category: 'Utility & Live API',
      subtitle: 'Real-time weather tracking application with adaptive UI.',
      image: 'assets/images/Mariam_Awny_Flutter Developer CV.pdf - Google Chrome 9_15_2026 8_20_59 PM.png',
      problem: 'Users want quick access to weather conditions across different global cities with a visual representation of atmospheric states.',
      solution: 'Created a responsive Flutter weather application that queries OpenWeather REST API and dynamically adapts the UI color theme based on returned weather data.',
      result: 'Delivers accurate weather details with dynamic atmospheric visuals.',
      features: [
        'City search with real-time OpenWeather API integration',
        'Dynamic background gradient theme shifting based on weather status',
        'Detailed metrics: Temperature, Humidity, Wind speed, and Condition',
        'Error handling & offline / loading state indicators'
      ],
      technologies: ['Flutter', 'Dart', 'OpenWeather API', 'Dio Client', 'Cubit'],
      role: 'Developed API integration, state management, and adaptive UI visual themes.',
      github: 'https://github.com/mariamawny'
    },
    'chat': {
      title: 'Flash Chat App',
      category: 'Social Messaging',
      subtitle: 'Real-time instant group chat application powered by Firebase.',
      image: 'assets/images/Mariam_Awny_Flutter Developer CV.pdf - Google Chrome 9_15_2026 8_21_19 PM.png',
      problem: 'Users need a simple, real-time communication platform for group text messaging.',
      solution: 'Developed a real-time messaging application using Firebase Authentication for secure sign-in and Cloud Firestore streams for instant message broadcasting.',
      result: 'Enables instant message sync across connected devices without delay.',
      features: [
        'User account registration & login with Firebase Auth',
        'Real-time message stream listening with Cloud Firestore',
        'Distinct chat bubble styling for sender vs recipient',
        'Animated hero screen transitions and clean UI'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore'],
      role: 'Built chat UI, connected Firebase Auth and Cloud Firestore streams.',
      github: 'https://github.com/mariamawny'
    }
  };

  // ------------------------------------------------------------------
  // 2. STATUS BAR LIVE CLOCK
  // ------------------------------------------------------------------
  const statusTimeElem = document.getElementById('status-time');
  function updateClock() {
    if (!statusTimeElem) return;
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    statusTimeElem.textContent = `${hours}:${minutes}`;
  }
  updateClock();
  setInterval(updateClock, 30000);

  // ------------------------------------------------------------------
  // 3. APP NAVIGATION & TAB SWITCHING
  // ------------------------------------------------------------------
  const navItems = document.querySelectorAll('.nav-item');
  const screens = document.querySelectorAll('.app-screen');
  const navIndicator = document.querySelector('.nav-indicator');

  function updateNavIndicator(activeTabElement) {
    if (!navIndicator || !activeTabElement) return;
    const tabIndex = Array.from(navItems).indexOf(activeTabElement);
    const percentage = tabIndex * 100;
    navIndicator.style.transform = `translateX(${percentage}%)`;
  }

  function switchTab(targetTabId) {
    // Hide active screens
    screens.forEach(screen => {
      screen.classList.remove('active');
    });

    // Deactivate nav items
    navItems.forEach(item => {
      item.classList.remove('active');
    });

    // Activate target screen
    const targetScreen = document.getElementById(`screen-${targetTabId}`);
    if (targetScreen) {
      targetScreen.classList.add('active');
    }

    // Activate matching nav item
    const targetNavItem = document.querySelector(`.nav-item[data-tab="${targetTabId}"]`);
    if (targetNavItem) {
      targetNavItem.classList.add('active');
      updateNavIndicator(targetNavItem);
    }

    // Scroll inner body to top on screen switch
    const appBody = document.querySelector('.app-content-body');
    if (appBody) appBody.scrollTop = 0;
  }

  // Add click listeners to bottom nav
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Action buttons triggering navigation (e.g. "View Projects" on Home)
  const navTriggers = document.querySelectorAll('.nav-trigger');
  navTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) switchTab(target);
    });
  });

  // Top header action icon triggers Contact screen
  const quickContactBtn = document.getElementById('btn-quick-contact');
  if (quickContactBtn) {
    quickContactBtn.addEventListener('click', () => {
      switchTab('contact');
    });
  }

  // Initialize indicator position
  const initialActiveNav = document.querySelector('.nav-item.active');
  if (initialActiveNav) {
    updateNavIndicator(initialActiveNav);
  }

  // ------------------------------------------------------------------
  // 4. PROJECT MODAL CASE STUDY SHEET
  // ------------------------------------------------------------------
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const projectTriggers = document.querySelectorAll('.project-card-trigger');

  // Modal elements
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalImage = document.getElementById('modal-image');
  const modalProblem = document.getElementById('modal-problem');
  const modalSolution = document.getElementById('modal-solution');
  const modalResult = document.getElementById('modal-result');
  const modalFeatures = document.getElementById('modal-features');
  const modalTech = document.getElementById('modal-tech');
  const modalRole = document.getElementById('modal-role');
  const modalGithubLink = document.getElementById('modal-github-link');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    // Populate data
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = `${data.title} Screenshot`;
    }
    if (modalProblem) modalProblem.textContent = data.problem;
    if (modalSolution) modalSolution.textContent = data.solution;
    if (modalResult) modalResult.textContent = data.result;

    // Features list
    if (modalFeatures) {
      modalFeatures.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        modalFeatures.appendChild(li);
      });
    }

    // Tech badges
    if (modalTech) {
      modalTech.innerHTML = '';
      data.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'mini-tag';
        span.style.padding = '4px 9px';
        span.style.fontSize = '0.74rem';
        span.textContent = tech;
        modalTech.appendChild(span);
      });
    }

    if (modalRole) modalRole.textContent = data.role;
    if (modalGithubLink) {
      modalGithubLink.href = data.github || 'https://github.com/mariamawny';
    }

    // Show modal sheet
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closeProjectModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  // Attach triggers to project cards
  projectTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // Prevent event if direct link clicked inside card
      if (e.target.closest('a')) return;
      const projectId = trigger.getAttribute('data-project-id');
      if (projectId) openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  // Close modal when clicking dark overlay outside sheet
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  // Keyboard Escape to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });
});
