// Mahsulotlarni filtr qilish funksiyasi
function filterProducts(cat, btn) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(c => {
    if (cat === 'barchasi' || c.dataset.cat === cat) {
      c.classList.remove('hidden');
    } else {
      c.classList.add('hidden');
    }
  });
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
}

// Menyu ochish funksiyasi
function toggleMenu() {
  alert('Menyu: Do\'kon | To\'plamlar | Biz haqimizda | Aloqa\n\nBuyurtma: +998 91 513 08 08');
}

// Skroll paytida elementlarni animatsiyalash
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Har bir kartaga animatsiya qo'shish
document.querySelectorAll('.product-card, .cat-card, .review-card, .feature-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Harakat sensor (Desktop uchun)
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  const hero = document.querySelector('.hero-bg');
  if (hero) {
    hero.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
  }
});

// Smooth scroll link'lari uchun
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Telefon uchun menyuni yopyshtirish
if (window.innerWidth < 768) {
  document.querySelector('.nav-links').style.display = 'none';
}

// Toast bildirishnomasi (ixtiyoriy)
function showNotification(message) {
  const notif = document.createElement('div');
  notif.textContent = message;
  notif.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--gold);
    color: var(--dark);
    padding: 1rem 1.5rem;
    border-radius: 4px;
    font-weight: 500;
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}

// Kirish funksiyasi (Telegram uchun simulyatsiya)
document.addEventListener('DOMContentLoaded', () => {
  // Qo'shimcha skript yuzalari
  const buyurtmaButtons = document.querySelectorAll('.btn-order');
  buyurtmaButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Telegramga yo'naltirish
      window.open('https://t.me/+998915130808', '_blank');
    });
  });
});