const homeButton = document.getElementById('home-button');
const banner = document.getElementById('banner');
const aboutButton = document.getElementById('about-button');
const about = document.getElementById('about');
const aboutBox = document.getElementById('about-box');
const sampleImages = document.getElementsByClassName('')
const projectButton = document.getElementById('projects-button');
const projects = document.getElementById('projects');
const techButton = document.getElementById('tech-button');
const tech = document.getElementById('tech');
const logos = document.getElementsByClassName('logo');
const hoveredTech = document.getElementById('hovered-tech');
const socialButton = document.getElementById('social-button');
const social = document.getElementById('social');
const back = document.getElementById('back');
const forward = document.getElementById('forward');
const projectLength = document.getElementsByClassName('project-card').length;
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const nav = document.getElementById('nav');
const projectCard = document.getElementsByClassName('project-card');

const aboutImages = ["url('./images/nate-outdoors.jpg')", "url('./images/nate-bassoon.jpg')", "url('./images/alfine-tongue.jpg')"];
const random = Math.floor(Math.random() * aboutImages.length);
let currentSection = banner;
let projectId = 2;


hamburger.addEventListener('click', () => {
    if (navLinks.style.visibility === 'hidden' || !navLinks.style.visibility) {
        navLinks.style.visibility = 'visible';
        projectCard.forEach(card => card.style.opacity = '0.5');
    } else {
        navLinks.style.visibility = 'hidden';
        projectCard.forEach(card => card.style.opacity = '1');
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        navLinks.style.visibility = 'visible';
    } else {
        navLinks.style.visibility = 'hidden';
        for (let i = 0; i < projectCard.length; i++) {
            projectCard[i].removeAttribute('style');
        }
    }
})

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
    }
    if (window.innerWidth < 800) {
        navLinks.style.visibility = 'hidden';
    }
})

aboutButton.addEventListener('click', () => {
    if (currentSection !== about) {
        setTimeout(() => {
            currentSection.style.visibility = 'hidden';
            currentSection = about;
        }, 2000)
        about.style.visibility = 'visible';
        about.style.opacity = '1';
        about.style.transition = 'opacity 2s';
        currentSection.style.opacity = '0';
        currentSection.style.transition = 'opacity 2s';
        aboutBox.style.backgroundImage = aboutImages[random];
    }
    if (window.innerWidth < 800) {
        navLinks.style.visibility = 'hidden';
    }
})

for (let i = 1; i <= 3; i++) {
    const sample = document.getElementById(`sample-image${i}`);
    sample.addEventListener('click', () => {
        aboutBox.style.backgroundImage = aboutImages[i - 1];
        aboutBox.style.animation = '4s fade-in-out';
        setTimeout(() => {
            aboutBox.removeAttribute('style');
        }, 4000);
    })
}

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
    }
    if (window.innerWidth < 800) {
        navLinks.style.visibility = 'hidden';
    }
})


techButton.addEventListener('click', () => {
    if (currentSection !== tech) {
        setTimeout(() => {
            currentSection.style.visibility = 'hidden';
            currentSection = tech;
        }, 2000)
        tech.style.visibility = 'visible';
        tech.style.opacity = '1';
        tech.style.transition = 'opacity 2s';
        currentSection.style.opacity = '0';
        currentSection.style.transition = 'opacity 2s';
    }
    if (window.innerWidth < 800) {
        navLinks.style.visibility = 'hidden';
    }
})

for (let i = 0; i < logos.length; i++) {
    logos[i].addEventListener('click', (event) => {
        for (let j = 0; j < logos.length; j++) {
            logos[j].style.border = 'none';
        }
        hoveredTech.innerHTML = event.target.id;
        logos[i].style.border = '2px solid white';
    })
}

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
    }
    if (window.innerWidth < 800) {
        navLinks.style.visibility = 'hidden';
    }
})
