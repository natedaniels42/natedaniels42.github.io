const homeButton = document.getElementById('home-button');
const banner = document.getElementById('banner');
const projectButton = document.getElementById('projects-button');
const projects = document.getElementById('projects');
const socialButton = document.getElementById('social-button');
const social = document.getElementById('social');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
const projectLength = document.getElementsByClassName('project-card').length;
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const nav = document.getElementById('nav');
const projectCard = document.getElementsByClassName('project-card');
let currentSection = banner;
let projectId = 2;



back.addEventListener('click', () => {
    if (projectId > 2) {
        projectId--; 
        for (let i = 1; i <= projectLength; i++) {
            const currentProject = document.getElementById(`card${i}`);
            if (i < projectId - 1 || i > projectId + 1) {
                currentProject.style.display = 'none';
            } else {
                currentProject.removeAttribute('style');
            }
        }
        if (projectId === 2) {
            back.style.visibility = 'hidden';
        }
        if (projectId < projectLength - 1) {
            forward.style.visibility = 'visible';
        }
    }
})

forward.addEventListener('click', () => {
    if (projectId < projectLength - 1) {
        projectId++; 
        for (let i = 1; i <= projectLength; i++) {
            const currentProject = document.getElementById(`card${i}`);
            if (i < projectId - 1 || i > projectId + 1) {
                currentProject.style.display = 'none';
            } else {
                currentProject.removeAttribute('style');
            }
        }
        if (projectId === projectLength - 1) {
            forward.style.visibility = 'hidden';
        }
        if (projectId > 2) {
            back.style.visibility = 'visible';
        }
    }
})

projectButton.addEventListener('click', () => {
    if (currentSection !== projects) {
        setTimeout(() => {
            currentSection.style.visibility = 'hidden';
            currentSection = projects;
        }, 2000)
        projects.style.visibility = 'visible';
        projects.style.opacity = '1';
        projects.style.transition = 'opacity 2s';
        currentSection.style.opacity = '0';
        currentSection.style.transition = 'opacity 2s';
        //currentSection.style.visibility = 'hidden';
        //currentSection = projects;
    }
})

homeButton.addEventListener('click', () => {
    if (currentSection !== banner) {
        setTimeout(() => {
            currentSection.style.visibility = 'hidden';
            currentSection = banner;
        }, 2000)
        banner.style.visibility = 'visible';
        banner.style.opacity = '1';
        banner.style.transition = 'opacity 2s';
        currentSection.style.opacity = '0';
        currentSection.style.transition = 'opacity 2s';
        //currentSection.style.visibility = 'hidden';
        //currentSection = banner;
    }
})

socialButton.addEventListener('click', () => {
    if (currentSection !== social) {
        setTimeout(() => {
            currentSection.style.visibility = 'hidden';
            currentSection = social;
        }, 2000)
        social.style.visibility = 'visible';
        social.style.opacity = '1';
        social.style.transition = 'opacity 2s';
        currentSection.style.opacity = '0';
        currentSection.style.transition = 'opacity 2s';
        //currentSection.style.visibility = 'hidden';
        //currentSection = social;
    }
})

