// Ensure Config exists (fallback)
function parseConfig() {
    const script = document.createElement('script');
    script.textContent = `
        // Fallback: Config should be defined in config.js
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
        initializeCustomCursor();
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
    const playerDisplay = document.getElementById('player-display');
    const musicToggle = document.getElementById('music-toggle');
    const playerClose = document.getElementById('player-close');
    
    // Create hidden music iframe for autoplay
    const hiddenIframe = document.createElement('iframe');
    hiddenIframe.src = Config.MusicURL;
    hiddenIframe.frameborder = '0';
    hiddenIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    hiddenIframe.referrerPolicy = 'strict-origin-when-cross-origin';
    hiddenIframe.style.display = 'none';
    hiddenIframe.style.width = '0';
    hiddenIframe.style.height = '0';
    musicContainer.appendChild(hiddenIframe);
    
    // Create visible media player
    const playerIframe = document.createElement('iframe');
    playerIframe.src = Config.MusicURL + (Config.MusicURL.includes('?') ? '&' : '?') + 'controls=1';
    playerIframe.frameborder = '0';
    playerIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    playerIframe.referrerPolicy = 'strict-origin-when-cross-origin';
    playerIframe.style.width = '100%';
    playerIframe.style.height = '100%';
    playerIframe.style.borderRadius = '10px';
    playerDisplay.appendChild(playerIframe);
    
    let isMuted = false;
    
    // Toggle music mute
    musicToggle.addEventListener('click', function() {
        isMuted = !isMuted;
        
        if (isMuted) {
            musicToggle.classList.add('muted');
            musicToggle.innerHTML = '<i class="fas fa-volume-xmark"></i>';
            playerDisplay.style.opacity = '0.5';
        } else {
            musicToggle.classList.remove('muted');
            musicToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            playerDisplay.style.opacity = '1';
        }
    });
    
    // Close media player
    playerClose.addEventListener('click', function() {
        document.getElementById('media-player').style.display = 'none';
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
            <div class="staff-info">
                <div class="staff-name">${staff.name}</div>
                <div class="staff-role">${staff.role}</div>
            </div>
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
        link.title = social.name;
        link.style.borderColor = social.color;
        link.innerHTML = `
            <i class="${social.icon}" style="color: ${social.color}"></i>
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

// Custom Cursor
function initializeCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (!cursorDot || !cursorOutline) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update dot position immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth animation for outline
    function animateOutline() {
        // Smooth following effect
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;
        
        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';
        
        requestAnimationFrame(animateOutline);
    }
    animateOutline();
    
    // Click effect
    document.addEventListener('mousedown', function() {
        cursorDot.classList.add('click');
        cursorOutline.classList.add('click');
    });
    
    document.addEventListener('mouseup', function() {
        cursorDot.classList.remove('click');
        cursorOutline.classList.remove('click');
    });
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .update-item, .social-link, .staff-member, .card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--accent');
        });
        
        el.addEventListener('mouseleave', function() {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
        });
    });
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', function() {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '0.6';
    });
}
