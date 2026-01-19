// Main configuration for the loading screen (single source)
// Edit this file to customize your loading screen

const Config = {
    ServerName: "Your Awesome Server",
    ServerLogo: "https://via.placeholder.com/150",
    
    BackgroundType: "video",
    BackgroundVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&modestbranding=1",
    BackgroundImage: "https://via.placeholder.com/1920x1080",
    BackgroundColor: "#1a1a2e",
    
    EnableMusic: true,
    // Direct audio file (mp3/ogg). Replace with your own hosted audio URL.
    AudioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    MusicVolume: 0.3,
    
    Staff: [
        {
            name: "John Doe",
            role: "Owner",
            avatar: "https://via.placeholder.com/80"
        },
        {
            name: "Jane Smith",
            role: "Admin",
            avatar: "https://via.placeholder.com/80"
        },
        {
            name: "Mike Johnson",
            role: "Moderator",
            avatar: "https://via.placeholder.com/80"
        },
        {
            name: "Sarah Williams",
            role: "Developer",
            avatar: "https://via.placeholder.com/80"
        }
    ],
    
    SocialMedia: [
        {
            name: "Discord",
            icon: "fab fa-discord",
            url: "https://discord.gg/yourserver",
            color: "#5865F2"
        },
        {
            name: "X (Twitter)",
            icon: "fab fa-x-twitter",
            url: "https://twitter.com/yourserver",
            color: "#000000"
        },
        {
            name: "Instagram",
            icon: "fab fa-instagram",
            url: "https://instagram.com/yourserver",
            color: "#E4405F"
        },
        {
            name: "TikTok",
            icon: "fab fa-tiktok",
            url: "https://tiktok.com/@yourserver",
            color: "#000000"
        }
    ],
    
    RulesURL: "https://yourserver.com/rules",
    
    Updates: [
        {
            date: "January 2, 2026",
            title: "New Year Update!",
            description: "Happy New Year! We've added new features and improvements.",
            details: `
                <h3>🎉 New Year Update</h3>
                <ul>
                    <li>Added new weapons and vehicles</li>
                    <li>Improved server performance</li>
                    <li>New jobs and activities</li>
                    <li>Bug fixes and optimizations</li>
                    <li>New custom scripts and features</li>
                </ul>
                <p>Thank you for being part of our community!</p>
            `
        },
        {
            date: "December 20, 2025",
            title: "Holiday Event",
            description: "Special holiday event with exclusive rewards!",
            details: `
                <h3>🎄 Holiday Event</h3>
                <ul>
                    <li>Special holiday-themed missions</li>
                    <li>Exclusive Christmas vehicles</li>
                    <li>Limited time rewards</li>
                    <li>Festive decorations around the city</li>
                </ul>
            `
        },
        {
            date: "December 1, 2025",
            title: "Server Launch",
            description: "Welcome to our server! Join us for an amazing experience.",
            details: `
                <h3>🚀 Server Launch</h3>
                <ul>
                    <li>Grand opening celebration</li>
                    <li>Starting bonuses for all players</li>
                    <li>Custom scripts and features</li>
                    <li>Active and friendly community</li>
                </ul>
            `
        }
    ],
    
    Theme: {
        primary: "#6c5ce7",
        secondary: "#a29bfe",
        accent: "#fd79a8",
        background: "rgba(26, 26, 46, 0.95)",
        text: "#ffffff",
        textSecondary: "#b2bec3"
    }
};
