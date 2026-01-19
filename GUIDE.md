# Content Guide: Announcements and Staff

This guide shows how to add, remove, and update Announcements and Staff for your loading screen. All edits are done in the single configuration file: [config.js](config.js).

## Announcements

Announcements appear in the right column as a scrollable list. Clicking an announcement opens a modal with full details.

- Location: `Config.Updates` in [config.js](config.js)
- Type: Array of objects
- Fields:
  - `date`: string (e.g., "January 2, 2026")
  - `title`: string (short headline)
  - `description`: string (short preview shown in the list)
  - `details`: string (supports HTML; shown in the modal)

### Add a New Announcement

1. Open [config.js](config.js).
2. Find `Config.Updates`.
3. Add a new object to the array, for example:

```javascript
Config.Updates = [
  // Existing announcements...
  {
    date: "February 10, 2026",
    title: "Valentine's Event",
    description: "Limited-time rewards and themed missions!",
    details: `
      <h3>💖 Valentine's Event</h3>
      <ul>
        <li>Special missions with unique rewards</li>
        <li>Themed decorations around the city</li>
        <li>Community challenges</li>
      </ul>
      <p>Join the event and earn exclusive items!</p>
    `,
  },
];
```

### Edit or Remove an Announcement

- Edit: Update the fields of the existing object in `Config.Updates`.
- Remove: Delete the object from the `Config.Updates` array.

### Tips

- Prefer concise `title` and `description` for readability.
- Use simple, semantic HTML inside `details` (e.g., `<h3>`, `<ul>`, `<p>`).
- The list shows announcements in the order they appear in the array (top to bottom).

## Staff Management

Staff members appear in the left column as a vertical, scrollable list with the avatar on the left and name/role on the right.

- Location: `Config.Staff` in [config.js](config.js)
- Type: Array of objects
- Fields:
  - `name`: string (e.g., "John Doe")
  - `role`: string (e.g., "Admin", "Moderator", "Developer")
  - `avatar`: string (URL to an image)

### Add a Staff Member

1. Open [config.js](config.js).
2. Find `Config.Staff`.
3. Add a new object to the array, for example:

```javascript
Config.Staff = [
  // Existing staff...
  {
    name: "Alex Rivera",
    role: "Moderator",
    avatar: "https://example.com/avatars/alex.png",
  },
];
```

### Update or Remove a Staff Member

- Update: Modify fields in the existing staff object.
- Remove: Delete the object from the `Config.Staff` array.

### Tips

- Recommended avatar size ~80×80; square images display best.
- Use stable, direct image URLs (CDN or server-hosted).
- Order matters: staff are shown in the array’s order.

## Quick Checklist

- Edited [config.js](config.js) and saved changes
- Reloaded the resource or server to apply updates
- Verified announcements open in the modal and staff avatars render correctly

## FAQ

- Where is the config? All settings are in [config.js](config.js).
- Can I use Markdown in `details`? Use HTML (e.g., `<ul>`, `<p>`, `<h3>`). Markdown is not parsed.
- How do I change the section titles? Edit the header text in [index.html](index.html). The "Latest Updates" header was renamed to "Announcements".
