/**
 * Tim Mo | Woodworking Portfolio - Interactive Functionality
 */

 document.addEventListener('DOMContentLoaded', () => {
    // Project Data for Lightbox Modal
    const projectDatabase = {
      1: {
        title: '"SMS" Whiskey Cabinet',
        category: 'Furniture',
        species: 'American Black Walnut & White Oak',
        joinery: 'Mortise & Tenon, Custom Geometric Inlays',
        finish: 'Rubio Monocoat Pure 2C',
        dimensions: '34" W x 16" D x 42" H',
        image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80',
        description: 'Dedicated handmade whiskey cabinet featuring geometric inlay lines inspired by the Shifted Maximum Subarray algorithm solution path. Built with solid walnut casework, custom white oak glassware dividers, and magnetic push latches.'
      },
      2: {
        title: 'Coopered White Oak Bench',
        category: 'Furniture',
        species: 'Domestic White Oak',
        joinery: 'Coopered Convex Seat Panel, Wedged Through-Tenons',
        finish: 'Odie\'s Oil Satin Luster',
        dimensions: '48" W x 14" D x 18" H',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
        description: 'An ergonomic entryway bench featuring a coopered seat panel planed to a gentle convex arc for comfort. The trestle base is secured with traditional wedged walnut through-tenons.'
      },
      3: {
        title: 'Mid-Century Record Console',
        category: 'Furniture',
        species: 'Solid Black Walnut',
        joinery: 'Waterfall Miter, Half-Blind Dovetail Drawers',
        finish: 'Hand-Rubbed Danish Oil & Carnauba Wax',
        dimensions: '56" W x 18" D x 30" H',
        image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1000&q=80',
        description: 'A custom Hi-Fi console featuring a continuous grain waterfall miter wrapping the casework. Includes full-extension soft-close pull-out drawers designed specifically for 12" vinyl storage.'
      },
      4: {
        title: 'Mosaic End-Grain Cutting Board',
        category: 'Home & Kitchen',
        species: 'Hard Rock Maple, Black Walnut, Black Cherry',
        joinery: 'Waterproof End-Grain Glue-Up (Type III)',
        finish: 'Organic USP Mineral Oil & Beeswax Conditioner',
        dimensions: '18" L x 12" W x 1.75" Thick',
        image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80',
        description: 'A heavy-duty end-grain butcher block designed to preserve knife edges. Features integrated continuous hand-holds along the underside and recessed non-slip silicone feet.'
      },
      5: {
        title: 'Cookie Slab Accent Table',
        category: 'Furniture',
        species: 'Cross-Cut White Oak Slab & Blackened Steel',
        joinery: 'Hand-Chiseled Walnut Butterfly Inlays (Dutchmen)',
        finish: 'Ceramic Hardwax Hybrid Finish',
        dimensions: '22" Dia x 20" H (3.5" Thick Slab)',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
        description: 'Preserving the natural radial checking and growth ring story of a fallen oak tree. Natural drying checks are stabilized with hand-cut walnut bowties and mounted to a minimal steel base.'
      },
      6: {
        title: 'Bent Lamination Valet Tray',
        category: 'Specialty & Inlays',
        species: 'White Ash & Walnut Veneers',
        joinery: '7-Layer Bent Lamination, Formed Mold',
        finish: 'Satin Polyurethane & Natural Beeswax',
        dimensions: '11" L x 7" W x 1.5" H',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
        description: 'Sculptural tabletop tray created by laminating multiple thin hardwood veneers in a custom CNC two-part bending mold. Lined with dark micro-suede.'
      },
      7: {
        title: 'Ceramic Inlay Hot Trivet',
        category: 'Home & Kitchen',
        species: 'Black Cherry & Handcrafted Ceramic Tile',
        joinery: 'Precision Routed Recesses, Chamfered Edges',
        finish: 'Heat & Water Resistant Poly-Wax',
        dimensions: '8" x 8" x 0.875"',
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1000&q=80',
        description: 'Designed as functional kitchen art to protect surfaces from hot cookware. The solid cherry frame surrounds a centered glazed ceramic tile.'
      },
      8: {
        title: 'Lathe-Turned Hardwood Platter',
        category: 'Specialty & Inlays',
        species: 'Figured Ambrosia Maple',
        joinery: 'Solid Faceplate Turning',
        finish: 'Friction-Polished Shellac & Carnauba Wax',
        dimensions: '14" Dia x 1.25" H',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
        description: 'Turned on the wood lathe from a dry hardwood blank. Features a beaded rim, smooth foot, and natural ambrosia figuring.'
      }
    };
  
    // Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
  
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
      });
  
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  
    // Portfolio Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
  
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const filterValue = btn.getAttribute('data-filter');
  
        projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  
    // Project Modal / Lightbox Logic
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
  
    const openModal = (projectId) => {
      const data = projectDatabase[projectId];
      if (!data || !modal || !modalBody) return;
  
      modalBody.innerHTML = `
        <div class="modal-grid">
          <div class="modal-img-col">
            <img src="${data.image}" alt="${data.title}" class="modal-img">
          </div>
          <div class="modal-info-col">
            <span class="modal-tag">${data.category}</span>
            <h2 class="modal-title">${data.title}</h2>
            <div class="modal-meta-chips">
              <span class="chip">${data.species}</span>
              <span class="chip">${data.finish}</span>
            </div>
            <p class="modal-desc">${data.description}</p>
            <div class="modal-specs">
              <div class="modal-spec-row">
                <span class="modal-spec-label">Joinery:</span>
                <span class="modal-spec-val">${data.joinery}</span>
              </div>
              <div class="modal-spec-row">
                <span class="modal-spec-label">Dimensions:</span>
                <span class="modal-spec-val">${data.dimensions}</span>
              </div>
              <div class="modal-spec-row">
                <span class="modal-spec-label">Status:</span>
                <span class="modal-spec-val" style="color: var(--accent-oak);">Custom Commission</span>
              </div>
            </div>
          </div>
        </div>
      `;
  
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
  
    const closeModal = () => {
      if (!modal) return;
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
  
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openModal(id);
      });
    });
  
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener('click', closeModal);
    }
  
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
      }
    });
  });