// ================================================================
// ATLAS VET – JavaScript principal
// Interactividad, smooth scroll, filtros y mejoras UX
// ================================================================

(function () {
  'use strict';

  // ===== 1. SMOOTH SCROLL PARA ENLACES INTERNOS =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== 2. ACTIVAR ENLACE NAVBAR SEGÚN PÁGINA ACTUAL =====
  function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const linkPage = href.split('/').pop();

      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setActiveNavLink);
  } else {
    setActiveNavLink();
  }

  // ===== 3. FILTROS EN CATÁLOGO =====
  const catalogPills = document.querySelectorAll('.catalog-pill');
  const cardSoft = document.querySelectorAll('.card-soft');

  if (catalogPills.length > 0) {
    catalogPills.forEach((pill) => {
      pill.addEventListener('click', function () {
        const speciesText = this.textContent.trim().toLowerCase();

        // Remover clase active de todos
        catalogPills.forEach((p) => p.classList.remove('active'));
        // Agregar clase active al actual
        this.classList.add('active');

        // Filtrar tarjetas (simple demo)
        cardSoft.forEach((card) => {
          const cardText = card.textContent.toLowerCase();
          if (
            speciesText === 'todas' ||
            cardText.includes(speciesText)
          ) {
            card.style.opacity = '1';
            card.style.pointerEvents = 'auto';
          } else {
            card.style.opacity = '0.5';
            card.style.pointerEvents = 'none';
          }
        });
      });
    });
  }

  // ===== 4. CHIPS DE FILTRO EN ATLAS =====
  const atlasChips = document.querySelectorAll('.atlas-chip');
  const atlasItems = document.querySelectorAll('.atlas-item');

  if (atlasChips.length > 0) {
    atlasChips.forEach((chip) => {
      chip.addEventListener('click', function () {
        const filterText = this.textContent.trim().toLowerCase();

        // Toggle active
        const isActive = this.classList.contains('active');
        this.classList.toggle('active');

        // Filtrar items
        atlasItems.forEach((item) => {
          const itemText = item.textContent.toLowerCase();
          if (itemText.includes(filterText) || !document.querySelector('.atlas-chip.active')) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
            }, 10);
          } else {
            item.style.opacity = '0.5';
          }
        });
      });
    });
  }

  // ===== 5. BÚSQUEDA EN ATLAS =====
  const atlasSearch = document.querySelector('.atlas-search input');

  if (atlasSearch) {
    atlasSearch.addEventListener('input', function () {
      const searchText = this.value.toLowerCase();
      const items = document.querySelectorAll('.atlas-item');

      items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchText) || searchText === '') {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.opacity = '0.3';
        }
      });
    });
  }

  // ===== 6. ANIMACIÓN DE ENTRADA PARA CARDS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observamos tarjetas, items y cabeceras de sección para animar entradas
  document.querySelectorAll('.card-soft, .module-card, .resource-card, .atlas-item, .section-header').forEach((el) => {
    observer.observe(el);
  });

  // ===== 7. CERRAR NAVBAR AL HACER CLIC EN ENLACE =====
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      // Cerrar navbar si está abierto (solo en mobile)
      if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });

  console.log('✓ Atlas Vet – Interactividad iniciada');
})();
