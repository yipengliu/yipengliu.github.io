# Academic Website for Prof. Yipeng Liu

This is the source code for the academic website of Prof. Yipeng Liu (刘翼鹏) from the University of Electronic Science and Technology of China (UESTC).

## Features

- **Bilingual Support**: Complete Chinese/English language switching
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Academic Focus**: Clean, professional layout suitable for academic profiles
- **Easy Maintenance**: Data-driven content management
- **GitHub Pages Ready**: Direct deployment to GitHub Pages

## Structure

```
├── index.html          # Main page
├── css/
│   ├── style.css      # Main styles
│   └── responsive.css # Responsive design
├── js/
│   ├── data.js        # Academic data storage
│   ├── i18n.js        # Internationalization
│   └── main.js        # Main functionality
├── images/
│   ├── profile.svg    # Profile image (placeholder)
│   └── favicon.svg    # Website icon
└── README.md          # Original CV content
```

## Sections

1. **About**: Personal introduction and contact information
2. **Experience**: Academic career, education, and professional roles
3. **Research**: Research highlights and innovation areas
4. **Publications**: Complete list of papers, books, and book chapters
5. **Recognition**: Awards, honors, and media coverage
6. **Teaching**: Courses, student supervision, and teaching achievements

## Usage

### Local Development
```bash
# Clone the repository
git clone https://github.com/yipengliu/yipengliu.github.io.git

# Navigate to the directory
cd yipengliu.github.io

# Start a local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Deployment
This website is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be reflected on the live site.

## Customization

### Adding New Publications
Edit `js/data.js` and add new entries to the appropriate year section in `publicationData`.

### Updating Personal Information
Modify the relevant sections in `academicData` within `js/data.js`.

### Adding New Sections
1. Add the section data to `js/data.js`
2. Update the navigation in `index.html`
3. Implement the content loading in `js/i18n.js`

## Technical Details

- **Framework**: Vanilla HTML, CSS, JavaScript (no dependencies)
- **Icons**: Font Awesome 6.0
- **Responsive**: CSS Grid and Flexbox
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Performance**: Optimized for fast loading

## Language Support

The website supports seamless switching between English and Chinese:
- English: Default language, academic standard
- Chinese: Complete translation with preserved English terms where appropriate (journal names, technical terms)

## Contact

For questions about this website, please contact:
- **Email**: yipengliu(eta)uestc(dot)edu(dot)cn
- **Institution**: University of Electronic Science and Technology of China

---

© 2025 Yipeng Liu. All rights reserved.