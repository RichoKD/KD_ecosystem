// Valid categories cache
const validCategoriesCache = [];

// Load valid categories
async function loadCategories() {
    try {
        const response = await fetch('categories.json');
        const data = await response.json();
        validCategoriesCache.push(...data.categories);
    } catch (error) {
        console.error('Error loading categories:', error);
        // Fallback to hardcoded list if fetch fails
        const fallbackCategories = [
            "Web App", "Mobile App", "SaaS", "E-commerce", "EdTech",
            "FinTech", "Gaming", "HealthTech", "AgriTech", "AI/ML", "IoT",
            "Developer Tools", "Community", "Other"
        ];
        validCategoriesCache.push(...fallbackCategories);
    }
}

let allProjects = [];
let currentCategory = 'All';

// Load and display projects
async function loadProjects() {
    try {
        // Load categories and projects in parallel for better performance
        const [_, projectsResponse] = await Promise.all([
            loadCategories(),
            fetch('projects.json')
        ]);

        const data = await projectsResponse.json();
        allProjects = data.projects || [];

        // Validate categories
        if (allProjects.length > 0) {
            allProjects.forEach(project => {
                if (!isValidCategory(project.category)) {
                    console.warn(`Invalid category "${project.category}" for project "${project.name}". Valid categories are: ${validCategoriesCache.join(', ')}`);
                }
            });
        }

        renderCategoryFilters();
        // Initial display
        filterProjects('All');
        updateStats(allProjects);
    } catch (error) {
        console.error('Error loading projects:', error);
        displayNoProjects();
    }
}

function renderCategoryFilters() {
    const filtersContainer = document.getElementById('category-filters');
    const categories = ['All', ...validCategoriesCache];

    filtersContainer.innerHTML = categories.map(category => `
        <button class="filter-btn ${category === 'All' ? 'active' : ''}" 
                onclick="filterProjects('${category}')">
            ${category}
        </button>
    `).join('');
}

function filterProjects(category) {
    currentCategory = category;

    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === category);
    });

    const filtered = category === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === category);

    displayProjects(filtered);
}

function isValidCategory(category) {
    return validCategoriesCache.includes(category);
}

function displayProjects(projects) {
    const container = document.getElementById('projects-container');

    if (!projects || projects.length === 0) {
        if (currentCategory !== 'All') {
            container.innerHTML = `
                <div class="no-projects">
                    <h3>No projects found</h3>
                    <p>There are no projects in the "${currentCategory}" category yet.</p>
                </div>
            `;
        } else {
            displayNoProjects();
        }
        return;
    }

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <h3>${escapeHtml(project.name)}</h3>
            <span class="category">${escapeHtml(project.category)}</span>
            <p class="description">${escapeHtml(project.description)}</p>
            
            ${project.techStack && project.techStack.length > 0 ? `
                <div class="tech-stack">
                    <strong>Tech Stack:</strong>
                    <div class="tags">
                        ${project.techStack.map(tech => `<span class="tag">${escapeHtml(tech)}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="contact">
                <strong>Contact:</strong> ${escapeHtml(project.contactName)}
            </div>
            
            <div class="project-links">
                ${project.website && isValidUrl(project.website) ? `<a href="${escapeHtml(project.website)}" class="project-link" target="_blank" rel="noopener noreferrer">Website</a>` : ''}
                ${project.github && isValidUrl(project.github) ? `<a href="${escapeHtml(project.github)}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                ${project.twitter && isValidUrl(project.twitter) ? `<a href="${escapeHtml(project.twitter)}" class="project-link" target="_blank" rel="noopener noreferrer">Twitter</a>` : ''}
            </div>
        </div>
    `).join('');
}

function displayNoProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = `
        <div class="no-projects">
            <h3>No projects yet!</h3>
            <p>Be the first to submit your project to the Kaduna Tech Ecosystem.</p>
        </div>
    `;
}

function updateStats(projects) {
    const projectCount = projects ? projects.length : 0;
    const categories = projects ? new Set(projects.map(p => p.category)).size : 0;

    document.getElementById('project-count').textContent = projectCount;
    document.getElementById('category-count').textContent = categories;
}

function escapeHtml(text) {
    if (text === null || text === undefined) {
        return '';
    }
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function isValidUrl(url) {
    if (!url) return false;
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch {
        return false;
    }
}

// Load projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupThemeToggle();

    // Expose filterProjects to global scope for the inline onclick handlers
    window.filterProjects = filterProjects;
});

// Theme Toggle Logic
function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    const sunIcon = toggleButton.querySelector('.sun-icon');
    const moonIcon = toggleButton.querySelector('.moon-icon');

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    // Toggle theme on click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');

        // Update icons
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';

        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
