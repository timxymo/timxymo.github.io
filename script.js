const projects = [
  { title: '“SMS” Whiskey Cabinet', category: 'furniture', label: 'Furniture', materials: 'Walnut, maple inlay & brass', cover: 'images/whiskey-cabinet-2.JPG', images: ['images/whiskey-cabinet-2.JPG', 'images/whiskey-cabinet-1.JPG', 'images/sms-whiskey-cabinet-detail.jpg', 'images/sms-whiskey-cabinet-angle.jpg'], description: 'A whiskey cabinet built as a gift of gratitude. Its geometric inlay follows the solution path of the Shifted Maximum Subarray algorithm, bringing personal research into the physical language of the piece.' },
  { title: '“Tantalus” Whiskey Cabinet', category: 'furniture', label: 'Furniture', materials: 'Walnut & solid brass hinges', cover: 'images/tantalus-whiskey-cabinet-1.jpg', images: ['images/tantalus-whiskey-cabinet-1.jpg', 'images/tantalus-whiskey-cabinet-2.jpg'], description: 'A whiskey cabinet with hand-cut dovetail joints, a cove-cut front, and solid brass hinges. Made to hold good whiskey and even better moments.' },
  { title: 'Coffee Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood', cover: 'images/coffee-table-2.JPG', images: ['images/coffe-table-1.JPG', 'images/coffee-table-2.JPG', 'images/coffee-table-3.JPG'], description: 'A low, functional table built to bring warmth and a quiet focal point to a living space.' },
  { title: 'Entryway Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood', cover: 'images/entry-way-table-1.jpeg', images: ['images/entry-way-table-1.jpeg', 'images/entry-way-table-2.jpeg', 'images/entry-way-table-3.jpeg'], description: 'A custom entryway piece designed for the small rituals of arriving home.' },
  { title: 'Desk', category: 'furniture', label: 'Furniture', materials: 'Solid wood', cover: 'images/desk-1.jpeg', images: ['images/desk-1.jpeg'], description: 'A dedicated workspace made with durable materials and an emphasis on everyday use.' },
  { title: 'Bookshelf', category: 'storage', label: 'Storage & display', materials: 'Solid wood', cover: 'images/bookshelf-1.JPG', images: ['images/bookshelf-1.JPG', 'images/bookshelf-2.JPG', 'images/bookshelf-3.JPG', 'images/bookshelf-4.JPG', 'images/bookshelf-5.jpeg'], description: 'A bookshelf made to give books, records, and everyday objects a considered home.' },
  { title: 'Wall Organizer', category: 'storage', label: 'Storage & display', materials: 'Solid wood', cover: 'images/wall-organizer-1.JPG', images: ['images/wall-organizer-1.JPG', 'images/wall-organizer-2.JPG', 'images/wall-organizer-3.JPG'], description: 'A compact wall organizer that puts the essentials within reach without taking over the room.' },
  { title: 'Monitor Shelf', category: 'storage', label: 'Storage & display', materials: 'Solid wood', cover: 'images/monitor-shelf-1.jpeg', images: ['images/monitor-shelf-1.jpeg'], description: 'A clean desktop riser for a more useful and grounded workspace.' },
  { title: 'Whiskey Humidor', category: 'objects', label: 'Small objects', materials: 'Wood & brass accents', cover: 'images/whiskey-humidor-1.jpeg', images: ['images/whiskey-humidor-1.jpeg', 'images/whiskey-humidor-2.jpeg', 'images/whiskey-humidor-3.jpeg', 'images/whiskey-humidor-4.jpeg', 'images/whiskey-humidor-5.jpeg'], description: 'A small cabinet for the ritual of a good drink, made with attention to the exterior and the details inside.' },
  { title: 'Cutting Boards', category: 'objects', label: 'Small objects', materials: 'Hardwood', cover: 'images/cutting-board-1.jpeg', images: ['images/cutting-board-1.jpeg', 'images/cutting-board-2.jpeg', 'images/cutting-board-3.jpeg', 'images/cutting-board-4.jpeg', 'images/cutting-board-5.JPG', 'images/cutting-board-6.jpeg', 'images/cutting-board-7.jpeg'], description: 'Handmade hardwood cutting boards built for daily use in the kitchen.' },
  { title: 'Jewelry Box', category: 'objects', label: 'Small objects', materials: 'Solid wood', cover: 'images/jewelry-box-1.JPG', images: ['images/jewelry-box-1.JPG', 'images/jewelry-box-2.JPG', 'images/jewelry-box-3.jpg', 'images/jewelry-box-4.JPG', 'images/jewelry-box-5.JPG', 'images/jewelry-box-6.JPG', 'images/jewelry-box-7.JPG'], description: 'A small keepsake box with thoughtful proportions, made to be opened and used for years.' },
  { title: '“Sonoran” Tissue Box', category: 'objects', label: 'Small objects', materials: 'Walnut, quarter-sawn white oak & handmade tile', cover: 'images/sonoran-tissue-box-1.jpg', images: ['images/sonoran-tissue-box-1.jpg', 'images/sonoran-tissue-box-2.jpg'], description: 'A collaboration inspired by Arizona: a walnut carcass joined with half-blind dovetails, a quarter-sawn white-oak lid, and handmade ceramic tiles carrying cactus and flower impressions.' }
];

const grid = document.querySelector('#project-grid');
const modal = document.querySelector('#project-modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('.modal-close');

function projectCard(project, index) {
  return `<article class="project" data-category="${project.category}"><button class="project-trigger" type="button" data-project="${index}" aria-label="View ${project.title}"><span class="project-image"><img src="${project.cover}" alt="${project.title}"></span><span class="project-meta"><span><span class="project-title">${project.title}</span><span class="project-label">${project.label}</span></span><span class="project-open">View project ↗</span></span></button></article>`;
}
function renderProjects(filter = 'all') {
  grid.innerHTML = projects.map(projectCard).join('');
  grid.querySelectorAll('.project').forEach(project => { project.hidden = filter !== 'all' && project.dataset.category !== filter; });
}
function openProject(index) {
  const project = projects[index];
  modalContent.innerHTML = `<div class="modal-heading"><p class="eyebrow">${project.label}</p><h2 id="modal-title">${project.title}</h2><p class="modal-materials">${project.materials}</p><p class="modal-description">${project.description}</p></div><div class="gallery">${project.images.map((image, imageIndex) => `<figure class="gallery-image ${imageIndex === 0 ? 'gallery-lead' : ''}"><img src="${image}" alt="${project.title}${imageIndex ? ` detail ${imageIndex + 1}` : ''}" loading="${imageIndex > 1 ? 'lazy' : 'eager'}"></figure>`).join('')}</div>`;
  modal.classList.add('active'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('modal-open'); closeModal.focus();
}
function dismissModal() { modal.classList.remove('active'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('modal-open'); }

renderProjects();
grid.addEventListener('click', event => { const trigger = event.target.closest('.project-trigger'); if (trigger) openProject(trigger.dataset.project); });
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelector('.filter.active').classList.remove('active'); button.classList.add('active'); renderProjects(button.dataset.filter); }));
closeModal.addEventListener('click', dismissModal);
modal.addEventListener('click', event => { if (event.target === modal) dismissModal(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('active')) dismissModal(); });

const heroSlides = projects.map(project => ({ image: project.cover, title: project.title }));
const heroImage = document.querySelector('#hero-slide');
const heroCaption = document.querySelector('#hero-caption');
const heroCount = document.querySelector('#hero-count');
let currentSlide = 0;
function showHeroSlide(index) {
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[currentSlide];
  heroImage.style.opacity = '0';
  window.setTimeout(() => { heroImage.src = slide.image; heroImage.alt = slide.title; heroCaption.textContent = slide.title; heroCount.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(heroSlides.length).padStart(2, '0')}`; heroImage.style.opacity = '1'; }, 180);
}
document.querySelector('#hero-previous').addEventListener('click', () => showHeroSlide(currentSlide - 1));
document.querySelector('#hero-next').addEventListener('click', () => showHeroSlide(currentSlide + 1));
window.setInterval(() => showHeroSlide(currentSlide + 1), 5000);
