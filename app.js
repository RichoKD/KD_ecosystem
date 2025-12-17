// Load and display projects
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        
        displayProjects(data.projects);
        updateStats(data.projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        displayNoProjects();
    }
}

function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    
    if (!projects || projects.length === 0) {
        displayNoProjects();
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
document.addEventListener('DOMContentLoaded', loadProjects);
