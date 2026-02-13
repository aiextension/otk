// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active nav link highlighting
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Sidebar navigation active state
const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Copy code button functionality
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'btn btn-sm btn-outline-light copy-btn';
        button.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';
        
        block.style.position = 'relative';
        block.appendChild(button);
        
        button.addEventListener('click', () => {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="bi bi-check"></i> Copied!';
                button.classList.remove('btn-outline-light');
                button.classList.add('btn-success');
                setTimeout(() => {
                    button.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
                    button.classList.remove('btn-success');
                    button.classList.add('btn-outline-light');
                }, 2000);
            });
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    addCopyButtons();
    
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
});

// Search functionality (if search box is added)
function searchDocs(query) {
    const sections = document.querySelectorAll('.content-section h2, .content-section h3');
    query = query.toLowerCase();
    
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.backgroundColor = '#fff3cd';
            setTimeout(() => {
                section.style.backgroundColor = '';
            }, 2000);
        }
    });
}

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
backToTopButton.className = 'btn btn-primary btn-floating';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    z-index: 1000;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
