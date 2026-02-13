# Open OTK Documentation Website

A modern, responsive documentation website for Open OTK built with Bootstrap 5.

## Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Modern UI** - Clean, professional Bootstrap 5 design
- **Easy Navigation** - Sidebar navigation and smooth scrolling
- **Copy Code Buttons** - One-click code copying
- **Dark Theme** - Eye-friendly dark code blocks
- **Fast Loading** - Minimal dependencies, CDN-hosted resources

## Pages

1. **index.html** - Landing page with features and overview
2. **installation.html** - Complete installation guide
3. **quickstart.html** - Quick start tutorial
4. **api.html** - Full API reference
5. **examples.html** - Code examples and templates

## How to Use

### Option 1: Open Locally

Simply open `index.html` in your web browser:

```bash
# From the ui directory
cd ui

# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Serve with Python

```bash
# From the ui directory
cd ui

# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 3: Serve with Node.js

```bash
# Install http-server globally
npm install -g http-server

# From the ui directory
cd ui
http-server

# Then open: http://localhost:8080
```

### Option 4: Use VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Structure

```
ui/
├── index.html           # Home page
├── installation.html    # Installation guide
├── quickstart.html      # Quick start tutorial
├── api.html            # API reference
├── examples.html       # Code examples
├── css/
│   └── style.css       # Custom styles
└── js/
    └── script.js       # Custom JavaScript
```

## Customization

### Colors

Edit `css/style.css` to change colors:

```css
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --dark-bg: #1a1d20;
}
```

### Navigation

Edit the navbar in each HTML file to add/remove pages.

### Content

All content is in the HTML files. Simply edit the sections you want to update.

## Technologies Used

- **Bootstrap 5.3.0** - UI framework
- **Bootstrap Icons** - Icon library
- **Vanilla JavaScript** - Interactive features
- **CSS3** - Custom styling

## Features Included

- ✅ Responsive navigation
- ✅ Hero section with call-to-action
- ✅ Feature cards with hover effects
- ✅ Code syntax highlighting
- ✅ Copy-to-clipboard buttons
- ✅ Smooth scrolling
- ✅ Back-to-top button
- ✅ Active navigation highlighting
- ✅ Sidebar navigation for docs
- ✅ Mobile-friendly design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - Same as Open OTK

## Author

Created for Open OTK by Md. Abid Hasan Rafi
