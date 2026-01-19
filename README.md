# FiveM Custom Loading Screen 🎮

A modern, feature-rich, and fully customizable loading screen for your FiveM server. Impress your players with a beautiful loading experience featuring direct-audio playback, video backgrounds, staff display, social media integration, and server updates.

![FiveM](https://img.shields.io/badge/FiveM-Compatible-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎵 **Music Player** - Direct audio (mp3/ogg) with play/pause, mute, and volume controls
- 🎬 **Dynamic Backgrounds** - Support for video, image, or solid color backgrounds
- 👥 **Staff Display** - Showcase your server team with avatars and roles
- 🔗 **Social Media Links** - Discord, X (Twitter), Instagram, TikTok integration
- 📢 **Announcements** - Scrollable list with detailed popup modals
- 📖 **Rules Link** - Direct link to your server rules page
- 🎨 **Modern UI/UX** - Beautiful animations, gradients, and smooth transitions
- 📱 **Fully Responsive** - Works on all screen sizes
- ⚙️ **100% Customizable** - Everything configurable via `config.js`
- 🎭 **Theme Support** - Custom color schemes

## 📸 Preview

The loading screen features:
- Animated floating server logo
- Gradient text effects
- Smooth loading bar animation
- Interactive cards with hover effects
- Glass morphism design elements
- Custom scrollbars
- Modal popups for detailed announcements

## 🚀 Installation

1. **Download** this repository
2. **Copy** the folder to your FiveM server's `resources` directory
3. **Add** to your `server.cfg`:
   ```cfg
   ensure FiveM_Load
   ```
4. **Customize** the configuration files (see below)
5. **Restart** your server

## ⚙️ Configuration

### Configuration File

#### `config.js` (Single Source)
All customizable settings for the loading screen live here:

```javascript
const Config = {
    ServerName: "Your Awesome Server",
    ServerLogo: "URL_to_your_logo",
    BackgroundType: "video", // "video", "image", or "color"
    BackgroundVideo: "YouTube_Embed_URL",
    BackgroundImage: "Image_URL",
    BackgroundColor: "#1a1a2e",
    EnableMusic: true,
    AudioURL: "https://your-domain.com/audio.mp3", // direct mp3/ogg
    // Staff, Social Media, Updates, and Theme settings...
};
```

## 🎨 Customization Guide

### Changing the Background

**For Video Background:**
```javascript
Config.BackgroundType = "video";
Config.BackgroundVideo = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID";
```

**For Image Background:**
```javascript
Config.BackgroundType = "image";
Config.BackgroundImage = "https://your-domain.com/background.jpg";
```

**For Solid Color:**
```javascript
Config.BackgroundType = "color";
Config.BackgroundColor = "#1a1a2e";
```

### Adding Music (Direct Audio)

1. Host or pick a direct audio file (mp3/ogg)
2. Set the URL:
```javascript
Config.EnableMusic = true;
Config.AudioURL = "https://your-domain.com/audio.mp3";
Config.MusicVolume = 0.3; // 0.0 - 1.0
```

Notes:
- Use direct links only (no YouTube). CDN-hosted mp3/ogg is best.
- The built-in player provides play/pause, mute, and volume.

### Managing Staff Members

Add or modify staff in the `Config.Staff` array:
```javascript
Config.Staff = [
    {
        name: "John Doe",
        role: "Owner",
        avatar: "https://avatar-url.com/image.png",
    },
    // Add more staff members...
];
```

### Social Media Links

Customize your social links:
```javascript
Config.SocialMedia = [
    {
        name: "Discord",
        icon: "fab fa-discord",
        url: "https://discord.gg/yourserver",
        color: "#5865F2",
    },
    // Add more platforms...
];
```

**Supported Icons:** Uses Font Awesome 6.5.1 - check [Font Awesome](https://fontawesome.com/icons) for icon names.

### Announcements

```javascript
Config.Updates = [
    {
        date: "January 2, 2026",
        title: "Announcement Title",
        description: "Short preview text",
        details: `
            <h3>📋 Full Details</h3>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Bug fixes</li>
            </ul>
            <p>Additional information here...</p>
        `,
    },
];
```

### Customizing Theme Colors

```javascript
Config.Theme = {
    primary: "#6c5ce7", // Main accent color
    secondary: "#a29bfe", // Secondary accents
    accent: "#fd79a8", // Highlight color
    background: "rgba(26, 26, 46, 0.95)",
    text: "#ffffff",
    textSecondary: "#b2bec3",
};
```

## 📝 File Structure

```
FiveM_Load/
├── fxmanifest.lua     # FiveM resource manifest
├── config.js          # Configuration (single source)
├── index.html         # Main HTML structure
├── style.css          # Styling and animations
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🎥 YouTube Embed Tips

### Getting the Correct URL Format

1. Go to your YouTube video
2. Extract the video ID (e.g., `dQw4w9WgXcQ` from `youtube.com/watch?v=dQw4w9WgXcQ`)
3. Format as embed URL:
   ```
   https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0
   ```

### Parameters Explained:
- `autoplay=1` - Starts playing automatically
- `mute=1` - Mutes the video (required for autoplay)
- `loop=1` - Enables looping
- `playlist=VIDEO_ID` - Required for loop to work
- `controls=0` - Hides player controls
- `showinfo=0` - Hides video information

## 🔧 Troubleshooting

### Music Not Playing
- ✅ Check `Config.EnableMusic = true`
- ✅ Confirm `Config.AudioURL` is a direct, publicly reachable mp3/ogg link
- ✅ Verify CORS allows access to the audio file
- ✅ Try another audio URL to rule out hosting issues

### Background Video Not Showing
- ✅ Verify the YouTube URL format is correct
- ✅ Ensure the video is public and embeddable
- ✅ Check that `BackgroundType = "video"`
- ✅ Include the `&mute=1` parameter

### Loading Screen Not Appearing
- ✅ Check server console for errors
- ✅ Verify resource is in the `resources` folder
- ✅ Ensure `ensure FiveM_Load` is in `server.cfg`
- ✅ Restart the server after changes

### Configuration Not Updating
- ✅ Edit `config.js` and ensure the resource reloaded
- ✅ Clear your browser cache (F5 or Ctrl+Shift+R)
- ✅ Restart the FiveM server

## 🌐 Browser Compatibility

- ✅ Chrome/Edge - Full support
- ✅ Firefox - Full support  
- ✅ Safari - Full support (some autoplay restrictions may apply)
- ✅ Opera - Full support

## 📱 Responsive Design

The loading screen automatically adapts to different screen sizes:
- **Desktop** - Full 2-column layout
- **Tablet** - Single column with optimized spacing
- **Mobile** - Condensed layout with touch-friendly elements

## 🎯 Performance

- Lightweight and optimized
- Smooth animations (60 FPS)
- Minimal resource usage
- Fast loading times
- Optimized for FiveM

## 📄 License

This project is free to use and modify for your FiveM server.

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 💬 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the configuration files
3. Open an issue on GitHub

## 🌟 Credits

Created with ❤️ for the FiveM community

---

**Made for FiveM Servers** | **Modern Design** | **Easy to Customize**