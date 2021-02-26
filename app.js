const homeButton = document.getElementById('home-button');
const banner = document.getElementById('banner');
const projectButton = document.getElementById('projects-button');
const projects = document.getElementById('projects');
const socialButton = document.getElementById('social-button');
const social = document.getElementById('social');
let currentSection = banner;

projectButton.addEventListener('click', () => {
    projects.style.opacity = '1';
    projects.style.transition = 'opacity 2s';
    currentSection.style.opacity = '0';
    currentSection.style.transition = 'opacity 2s';
    currentSection = projects;
})

homeButton.addEventListener('click', () => {
    banner.style.opacity = '1';
    banner.style.transition = 'opacity 2s';
    currentSection.style.opacity = '0';
    currentSection.style.transition = 'opacity 2s';
    currentSection = banner;
})

socialButton.addEventListener('click', () => {
    social.style.opacity = '1';
    social.style.transition = 'opacity 2s';
    currentSection.style.opacity = '0';
    currentSection.style.transition = 'opacity 2s';
    currentSection = social;
})