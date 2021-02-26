const homeButton = document.getElementById('home-button');
const banner = document.getElementById('banner');
const projectButton = document.getElementById('projects-button');
const projects = document.getElementById('projects');
let currentSection = banner;

projectButton.addEventListener('click', () => {
    projects.style.opacity = '1';
    projects.style.transition = 'opacity 2s';
    currentSection.style.opacity = '0';
    currentSection.style.trnasition = 'opacity 2s';
    currentSection = projects;
})

homeButton.addEventListener('click', () => {
    banner.style.opacity = '1';
    banner.style.transition = 'opacity 2s';
    currentSection.style.opacity = '0';
    currentSection.style.trnasition = 'opacity 2s';
    currentSection = banner;
})