/**
 * Mariam Awny Portfolio - Mobile Application Logic
 * Pure Vanilla JavaScript ES6+
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------
  // 1. PROJECT DATA (Strictly sourced from verified project portfolio)
  // ------------------------------------------------------------------
  const projectsData = {
    'travel-planner': {
      title: 'Travel Planner App',
      category: 'Travel & Itinerary Management',
      subtitle: 'Comprehensive mobile travel planning and itinerary management application.',
      image: 'assets/images/projects/travel_planner/tp_1.png',
      images: [
        'assets/images/projects/travel_planner/tp_1.png',
        'assets/images/projects/travel_planner/tp_2.png',
        'assets/images/projects/travel_planner/tp_3.png',
        'assets/images/projects/travel_planner/tp_4.png',
        'assets/images/projects/travel_planner/tp_5.png',
        'assets/images/projects/travel_planner/tp_6.png',
        'assets/images/projects/travel_planner/tp_7.png'
      ],
      problem: 'Travelers struggle to organize trip itineraries, budget details, and destination schedules in a single accessible mobile interface.',
      solution: 'Developed a mobile travel application enabling travelers to create, customize, and manage trip schedules with interactive visual flight, hotel, and destination cards.',
      result: 'Simplifies trip planning into an intuitive, centralized mobile experience for stress-free travel.',
      features: [
        'Interactive trip creation and customizable itinerary timeline',
        'Flight, hotel, and destination activity planning cards',
        'Budget tracking and destination management interface',
        'Clean, responsive mobile UI built with Flutter and Dart',
        'Modular state management for reactive screen updates'
      ],
      technologies: ['Flutter', 'Dart', 'Clean Architecture', 'Cubit', 'REST APIs', 'Widgets'],
      role: 'Designed and engineered the mobile app architecture, interactive itinerary widgets, and state management flow.',
      github: 'https://github.com/Mariamawny/travel_planner_app'
    },
    'uni2career': {
      title: 'Uni2Career — AI Recommendation App',
      category: 'AI & Career Development Platform',
      subtitle: 'Smart recommendation platform guiding students from university to career success.',
      image: 'assets/images/projects/uni2career.png',
      problem: 'University students and graduates often lack clear guidance on career paths aligned with their skills, interests, and academic background.',
      solution: 'Architected and built Uni2Career, an AI-powered cross-platform mobile application providing tailored career recommendations, skill gap analysis, and learning roadmaps.',
      result: 'Empowers students with actionable career insights and personalized pathways from university to professional employment.',
      features: [
        'AI-driven career path matching based on student profile and skills',
        'Personalized skill progression roadmaps and course suggestions',
        'Interactive candidate dashboard and assessment tracking',
        'Sleek modern user interface with smooth Flutter transitions',
        'Clean state management architecture'
      ],
      technologies: ['Flutter', 'Dart', 'FlutterFlow', 'AI Recommendation Engine', 'Firebase', 'REST APIs'],
      role: 'Lead Mobile Developer designing user experience, FlutterFlow architecture, API integrations, and user workflow.',
      github: 'https://github.com/mariamawny'
    },
    'language-learning': {
      title: 'Language Learning App',
      category: 'Education & Interactive Learning',
      subtitle: 'Engaging mobile language learning platform with interactive exercises.',
      image: 'assets/images/projects/language_learning.png',
      problem: 'Language learners need an interactive, structured mobile app to practice vocabulary and pronunciation consistently.',
      solution: 'Created an intuitive mobile learning application with bite-sized lessons, interactive practice modules, and progress tracking.',
      result: 'Provides language learners with an engaging daily practice environment.',
      features: [
        'Interactive vocabulary cards and flashcard practice',
        'Audio pronunciation playback and speech practice screens',
        'Lesson progress tracking and milestone badges',
        'Custom modular widgets designed in Flutter',
        'Fast local data caching for smooth offline study'
      ],
      technologies: ['Flutter', 'Dart', 'State Management', 'Custom UI Components', 'Local Storage'],
      role: 'Built mobile app interface, audio playback flows, and interactive lesson state management.',
      github: 'https://github.com/Mariamawny/codealpha_tasks_Languadge-Learining-App'
    },
    'flashcard': {
      title: 'FlashCard Learning App',
      category: 'Education & Memory Training',
      subtitle: 'Interactive flashcard study tool for effective memorization.',
      image: 'assets/images/projects/language_learning.png',
      problem: 'Students and self-learners need an efficient way to revise vocabulary and key facts through spaced active recall.',
      solution: 'Developed an interactive FlashCard mobile app supporting custom card decks, flip animations, and self-assessment scores.',
      result: 'Enhances retention speed and study efficiency for learners.',
      features: [
        'Custom flashcard deck creation and category organization',
        'Smooth 3D flip card animations in Flutter',
        'Active recall scoring and review tracking',
        'Clean lightweight UI built with Dart and Flutter'
      ],
      technologies: ['Flutter', 'Dart', 'Custom Animations', 'Local DB'],
      role: 'Sole developer creating custom flip card animations and state storage logic.',
      github: 'https://github.com/Mariamawny/codealpha_tasks_FlashCard'
    },
    'medical-equipment': {
      title: 'Smart Medical Equipment Management',
      category: 'Healthcare & Enterprise Solution',
      subtitle: 'Comprehensive lifecycle management platform for medical devices.',
      image: 'assets/images/projects/uni2career.png',
      problem: 'Hospitals and healthcare facilities require reliable tracking of medical equipment status, maintenance schedules, and lifecycle logs.',
      solution: 'Built a smart management application for medical equipment tracking lifecycle phases, maintenance alerts, and status reports.',
      result: 'Streamlines medical inventory oversight and preventive maintenance tracking.',
      features: [
        'Equipment registry and status lifecycle dashboard',
        'Maintenance scheduling and operational alert logs',
        'Search, filter, and detailed device specification view',
        'Secure data synchronization and clean user interface'
      ],
      technologies: ['Flutter', 'Dart', 'REST APIs', 'Clean Architecture', 'Cubit'],
      role: 'Mobile developer architecting equipment lifecycle UI and state flows.',
      github: 'https://github.com/Mariamawny/Smart-Medical-Equipment-Lifecycle-Management'
    },
    'days10': {
      title: 'Days 10 Challenge App',
      category: 'Habit Tracking & Lifestyle',
      subtitle: 'Minimalist habit building & digital wellness challenge tracker.',
      image: 'assets/images/projects/days10.png',
      problem: 'People struggle to build positive daily habits and reduce screen distraction without overwhelming habit trackers.',
      solution: 'Designed and developed Days 10, a sleek challenge-focused mobile app guiding users through structured 10-day digital wellness habits.',
      result: 'Helps users build lasting digital mindfulness habits through focused, simple daily challenges.',
      features: [
        'Structured 10-day daily habit and mindfulness challenges',
        'One-tap challenge starter and daily progress check-ins',
        'Clean, elegant typography and soothing dark/light luxury design',
        'Smooth state transitions and local challenge completion persistence'
      ],
      technologies: ['Flutter', 'Dart', 'Cubit', 'Hive Local DB', 'Clean UI'],
      role: 'Sole developer building UI, challenge state triggers, and local storage persistence.',
      github: 'https://github.com/Mariamawny/ten_days_flutter_app'
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

    const modalImageContainer = document.querySelector('.modal-image-container');
    if (modalImageContainer) {
      modalImageContainer.innerHTML = '';
      if (data.images && data.images.length > 0) {
        const galleryWrapper = document.createElement('div');
        galleryWrapper.className = 'screenshot-gallery';
        data.images.forEach((imgUrl, idx) => {
          const imgItem = document.createElement('div');
          imgItem.className = 'gallery-item';
          const img = document.createElement('img');
          img.src = imgUrl;
          img.alt = `${data.title} Screenshot ${idx + 1}`;
          img.className = 'gallery-img';
          imgItem.appendChild(img);
          galleryWrapper.appendChild(imgItem);
        });
        modalImageContainer.appendChild(galleryWrapper);
      } else if (data.image) {
        const img = document.createElement('img');
        img.src = data.image;
        img.alt = `${data.title} Screenshot`;
        img.className = 'modal-main-img';
        modalImageContainer.appendChild(img);
      }
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
