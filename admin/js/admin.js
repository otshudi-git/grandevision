// Admin functionality
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initDashboard();
});

function initAuth() {
    const loginForm = document.getElementById('loginForm');
    const loginContainer = document.getElementById('login-container');
    const adminDashboard = document.getElementById('admin-dashboard');
    const logoutButton = document.getElementById('logout');

    // Check if user is already logged in
    if (localStorage.getItem('adminLoggedIn')) {
        showDashboard();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication (replace with proper authentication in production)
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
            showDashboard();
        } else {
            alert('Identifiants incorrects');
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('adminLoggedIn');
        hideDashboard();
    });

    function showDashboard() {
        loginContainer.classList.remove('active');
        adminDashboard.classList.remove('hidden');
    }

    function hideDashboard() {
        loginContainer.classList.add('active');
        adminDashboard.classList.add('hidden');
    }
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li[data-section]');
    const sections = document.querySelectorAll('.admin-section');
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.admin-nav');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class to clicked link and corresponding section
            link.classList.add('active');
            const sectionId = `${link.dataset.section}-section`;
            document.getElementById(sectionId).classList.add('active');

            // Close sidebar on mobile after navigation
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

function initDashboard() {
    // Initialize delete buttons
    const deleteButtons = document.querySelectorAll('.btn-icon.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
                const row = button.closest('tr');
                row.remove();
            }
        });
    });

    // Initialize edit buttons
    const editButtons = document.querySelectorAll('.btn-icon:not(.delete)');
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Implement edit functionality
            alert('Fonctionnalité de modification à venir');
        });
    });

    // Initialize add buttons
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Implement add functionality
            alert('Fonctionnalité d\'ajout à venir');
        });
    });
}