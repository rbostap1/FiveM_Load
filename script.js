// Convert Lua config to JavaScript
function parseConfig() {
    const script = document.createElement('script');
    script.textContent = `
        // This will be replaced by config.js
        if (typeof Config === 'undefined') {
            Config = {};
        }
    `;
    document.head.appendChild(script);
}

// Initialize the loading screen
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeLoadingScreen();
    }, 100);
});

function initializeLoadingScreen() {
    // Apply theme colors
    applyTheme();
    
    // Set server name and logo
    document.getElementById('server-name').textContent = Config.ServerName;
    document.getElementById('server-logo').src = Config.ServerLogo;
    
    // Set background
    setBackground();
    
    // Initialize music
    if (Config.EnableMusic) {
        initializeMusic();
    } else {
        document.getElementById('music-toggle').style.display = 'none';
    }
    
    // Load staff
    loadStaff();
    
    // Load social media links
    loadSocialMedia();
    
    // Load updates
    loadUpdates();
    
    // Set rules link
    document.getElementById('rules-link').href = Config.RulesURL;
    
    // Initialize modal
    initializeModal();
}

function applyTheme() {
    if (Config.Theme) {
        const root = document.documentElement;
        root.style.setProperty('--primary', Config.Theme.primary);
        root.style.setProperty('--secondary', Config.Theme.secondary);
        root.style.setProperty('--accent', Config.Theme.accent);
        root.style.setProperty('--background', Config.Theme.background);
        root.style.setProperty('--text', Config.Theme.text);
        root.style.setProperty('--text-secondary', Config.Theme.textSecondary);
    }
}

function setBackground() {
    const bgContainer = document.getElementById('background-container');
    
    if (Config.BackgroundType === 'video') {
        const iframe = document.createElement('iframe');
        iframe.id = 'background-video';
        iframe.src = Config.BackgroundVideo;
        iframe.frameborder = '0';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowfullscreen = true;
        iframe.style.pointerEvents = 'none';
        bgContainer.insertBefore(iframe, bgContainer.firstChild);
    } else if (Config.BackgroundType === 'image') {
        const img = document.createElement('img');
        img.id = 'background-image';
        img.src = Config.BackgroundImage;
        bgContainer.insertBefore(img, bgContainer.firstChild);
    } else if (Config.BackgroundType === 'color') {
        const colorDiv = document.createElement('div');
        colorDiv.id = 'background-color';
        colorDiv.style.background = Config.BackgroundColor;
        bgContainer.insertBefore(colorDiv, bgContainer.firstChild);
    }
}

function initializeMusic() {
    const musicContainer = document.getElementById('music-container');
    const musicToggle = document.getElementById('music-toggle');
    
    const iframe = document.createElement('iframe');
    iframe.src = Config.MusicURL;
    iframe.frameborder = '0';
    iframe.allow = 'autoplay; encrypted-media';
    iframe.style.display = 'none';
    musicContainer.appendChild(iframe);
    
    let isMuted = false;
    
    musicToggle.addEventListener('click', function() {
        isMuted = !isMuted;
        
        if (isMuted) {
            musicToggle.classList.add('muted');
            musicToggle.innerHTML = '<i class="fas fa-volume-xmark"></i>';
            // Try to mute the iframe (limited control over YouTube embeds)
            musicContainer.innerHTML = '';
        } else {
            musicToggle.classList.remove('muted');
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            // Recreate iframe
            const newIframe = document.createElement('iframe');
            newIframe.src = Config.MusicURL;
            newIframe.frameborder = '0';
            newIframe.allow = 'autoplay; encrypted-media';
            newIframe.style.display = 'none';
            musicContainer.appendChild(newIframe);
        }
    });
}

function loadStaff() {
    const staffList = document.getElementById('staff-list');
    staffList.innerHTML = '';
    
    Config.Staff.forEach(staff => {
        const staffMember = document.createElement('div');
        staffMember.className = 'staff-member';
        staffMember.innerHTML = `
            <img src="${staff.avatar}" alt="${staff.name}" class="staff-avatar">
            <div class="staff-name">${staff.name}</div>
            <div class="staff-role">${staff.role}</div>
        `;
        staffList.appendChild(staffMember);
    });
}

function loadSocialMedia() {
    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = '';
    
    Config.SocialMedia.forEach(social => {
        const link = document.createElement('a');
        link.className = 'social-link';
        link.href = social.url;
        link.target = '_blank';
        link.style.borderColor = social.color;
        link.innerHTML = `
            <i class="${social.icon}" style="color: ${social.color}"></i>
            <span>${social.name}</span>
        `;
        
        link.addEventListener('mouseenter', function() {
            this.style.background = social.color + '20';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.05)';
        });
        
        socialLinks.appendChild(link);
    });
}

function loadUpdates() {
    const updatesList = document.getElementById('updates-list');
    updatesList.innerHTML = '';
    
    Config.Updates.forEach((update, index) => {
        const updateItem = document.createElement('div');
        updateItem.className = 'update-item';
        updateItem.innerHTML = `
            <div class="update-date">${update.date}</div>
            <div class="update-title">${update.title}</div>
            <div class="update-description">${update.description}</div>
            <div class="view-more">
                View Details <i class="fas fa-arrow-right"></i>
            </div>
        `;
        
        updateItem.addEventListener('click', () => {
            showUpdateDetails(update);
        });
        
        updatesList.appendChild(updateItem);
    });
}

function initializeModal() {
    const modal = document.getElementById('update-modal');
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

function showUpdateDetails(update) {
    const modal = document.getElementById('update-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="update-date">${update.date}</div>
        <div class="update-title" style="font-size: 1.5rem; margin: 15px 0;">${update.title}</div>
        ${update.details}
    `;
    
    modal.classList.add('active');
}

// Handle FiveM events
window.addEventListener('message', function(event) {
    if (event.data.eventName === 'loadProgress') {
        // You can update loading bar here if needed
        console.log('Loading progress:', event.data.loadFraction);
    }
});
