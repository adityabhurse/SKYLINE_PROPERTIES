// Near Me
document.getElementById('nearMeBtn').addEventListener('click', () => {
    const loc = document.getElementById('locationInfo');
    loc.innerHTML = `<div class="alert alert-info">Finding your location...</div>`;
    
    navigator.geolocation.getCurrentPosition(() => {
        loc.innerHTML = `<div class="alert alert-success">✅ Properties near you in Nagpur are shown above.</div>`;
    });
});

// Form Submit with Loading State
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
    btn.disabled = true;

    setTimeout(() => {
        alert("✅ Thank you! We'll contact you soon.");
        e.target.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
});

// Populate Property Modal
document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h5').innerText;
        const location = card.querySelector('.text-light').innerText;
        const desc = card.querySelector('.small').innerText;
        const price = card.querySelector('.price-tag').innerText;
        const imgSrc = card.querySelector('img').src;

        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalLocation').innerText = location;
        document.getElementById('modalDesc').innerText = desc;
        document.getElementById('modalPrice').innerText = price;
        document.getElementById('modalImg').src = imgSrc;
    });
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('nav');
        if (navbarCollapse.classList.contains('show')) {
            bootstrap.Collapse.getInstance(navbarCollapse).hide();
        }
    });
});