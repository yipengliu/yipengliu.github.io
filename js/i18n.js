// Internationalization (i18n) functionality
class I18n {
    constructor() {
        this.currentLang = 'en'; // Default language
        this.init();
    }

    init() {
        // Check URL parameter for language
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        
        // Check localStorage for saved language preference
        const savedLang = localStorage.getItem('preferredLanguage');
        
        // Set initial language (priority: URL param > localStorage > default)
        if (langParam && (langParam === 'en' || langParam === 'zh')) {
            this.currentLang = langParam;
        } else if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
            this.currentLang = savedLang;
        }
        
        this.setupLanguageButtons();
        this.translatePage();
    }

    setupLanguageButtons() {
        const enBtn = document.getElementById('lang-en');
        const zhBtn = document.getElementById('lang-zh');
        
        if (enBtn && zhBtn) {
            // Set initial active button
            this.updateActiveButton();
            
            // Add event listeners
            enBtn.addEventListener('click', () => this.switchLanguage('en'));
            zhBtn.addEventListener('click', () => this.switchLanguage('zh'));
        }
    }

    switchLanguage(lang) {
        if (lang !== this.currentLang) {
            this.currentLang = lang;
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
            
            // Update URL without reload
            const url = new URL(window.location);
            url.searchParams.set('lang', lang);
            window.history.replaceState({}, '', url);
            
            // Update UI
            this.updateActiveButton();
            this.translatePage();
            this.loadDynamicContent();
        }
    }

    updateActiveButton() {
        const enBtn = document.getElementById('lang-en');
        const zhBtn = document.getElementById('lang-zh');
        
        if (enBtn && zhBtn) {
            enBtn.classList.toggle('active', this.currentLang === 'en');
            zhBtn.classList.toggle('active', this.currentLang === 'zh');
        }
    }

    translatePage() {
        // Translate all elements with data-en and data-zh attributes
        const elements = document.querySelectorAll('[data-en][data-zh]');
        
        elements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLang}`);
            if (text) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update document title
        if (this.currentLang === 'zh') {
            document.title = '刘翼鹏 - 电子科技大学教授';
        } else {
            document.title = 'Yipeng Liu - Professor, UESTC';
        }

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            if (this.currentLang === 'zh') {
                metaDescription.setAttribute('content', '刘翼鹏，电子科技大学信息与通信工程学院教授、博士生导师、国家级青年人才，专注于机器学习、计算成像、无线感知和智能医疗研究。');
            } else {
                metaDescription.setAttribute('content', 'Yipeng Liu, Professor at University of Electronic Science and Technology of China (UESTC), specializing in machine learning, computational imaging, wireless sensing, and intelligent healthcare.');
            }
        }
    }

    loadDynamicContent() {
        // Load content for the currently active section
        const activeSection = document.querySelector('.content-section.active');
        if (activeSection) {
            const sectionId = activeSection.id;
            this.loadSectionContent(sectionId);
        }
    }

    loadSectionContent(sectionId) {
        switch (sectionId) {
            case 'about':
                this.loadAboutContent();
                break;
            case 'experience':
                this.loadExperienceContent();
                break;
            case 'research':
                this.loadResearchContent();
                break;
            case 'publications':
                this.loadPublicationsContent();
                break;
            case 'recognition':
                this.loadRecognitionContent();
                break;
            case 'teaching':
                this.loadTeachingContent();
                break;
        }
    }

    loadAboutContent() {
        const bioElement = document.querySelector('.bio-text');
        if (bioElement && academicData.bio) {
            bioElement.textContent = academicData.bio[this.currentLang];
        }
    }

    loadExperienceContent() {
        const container = document.querySelector('.experience-content');
        if (!container) return;

        let html = '';
        
        // Academic Experience
        html += `<div class="experience-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '学术经历' : 'Academic Experience'}</h3>`;
        html += `<div class="timeline">`;
        
        academicData.experience.academic.forEach(item => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-title">${item.title[this.currentLang]}</div>
                    <div class="timeline-subtitle">${item.institution[this.currentLang]}</div>
                    <div class="timeline-content">${item.description[this.currentLang]}</div>
                </div>
            `;
        });
        html += `</div></div>`;

        // Education
        html += `<div class="experience-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '教育背景' : 'Education'}</h3>`;
        html += `<div class="timeline">`;
        
        academicData.experience.education.forEach(item => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-title">${item.title[this.currentLang]}</div>
                    <div class="timeline-subtitle">${item.institution[this.currentLang]}</div>
                    <div class="timeline-content">${item.description[this.currentLang]}</div>
                </div>
            `;
        });
        html += `</div></div>`;

        // Academic Service
        html += `<div class="experience-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '学术兼职' : 'Academic Service'}</h3>`;
        html += `<div class="timeline">`;
        
        academicData.service.forEach(item => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-year">${item.year}</div>
                    <div class="timeline-title">${item.role[this.currentLang]}</div>
                    <div class="timeline-content">${item.organization[this.currentLang]}</div>
                </div>
            `;
        });
        html += `</div></div>`;

        // Major Projects
        html += `<div class="experience-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '主要项目' : 'Major Projects'}</h3>`;
        html += `<div class="timeline">`;
        
        academicData.projects.forEach(item => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-year">${item.period}</div>
                    <div class="timeline-title">${item.title[this.currentLang]}</div>
                    <div class="timeline-subtitle">${item.role[this.currentLang]}</div>
                    <div class="timeline-content">${item.description[this.currentLang]}</div>
                </div>
            `;
        });
        html += `</div></div>`;

        container.innerHTML = html;
    }

    loadResearchContent() {
        const container = document.querySelector('.research-content');
        if (!container) return;

        let html = '';

        // Research Highlights
        html += `<div class="research-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '研究亮点' : 'Research Highlights'}</h3>`;
        html += `<div class="achievement-grid">`;
        
        academicData.research.highlights.forEach(item => {
            html += `
                <div class="achievement-item">
                    <div class="achievement-icon"><i class="${item.icon}"></i></div>
                    <div class="achievement-title">${item.title[this.currentLang]}</div>
                    <div class="achievement-description">${item.description[this.currentLang]}</div>
                </div>
            `;
        });
        html += `</div></div>`;

        // Innovation Areas
        html += `<div class="research-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '创新领域' : 'Innovation Areas'}</h3>`;
        
        academicData.research.innovations.forEach(item => {
            html += `
                <div class="card">
                    <h3>${item.area[this.currentLang]}</h3>
                    <p>${item.description[this.currentLang]}</p>
                </div>
            `;
        });
        html += `</div>`;

        container.innerHTML = html;
    }

    loadPublicationsContent() {
        const container = document.querySelector('.publications-content');
        if (!container) return;

        let html = '';

        // Books
        html += `<div class="publication-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '专著与编著' : 'Books and Edited Volumes'}</h3>`;
        
        publicationData.books.forEach(book => {
            html += `
                <div class="publication-item">
                    <div class="publication-title">${book.title}</div>
                    <div class="publication-authors">${book.authors}</div>
                    <div class="publication-venue">${book.publisher}${book.isbn ? `, ISBN: ${book.isbn}` : ''}${book.year ? `, ${book.year}` : ''}</div>
                    ${book.details ? `<div class="publication-details">${book.details}</div>` : ''}
                </div>
            `;
        });
        html += `</div>`;

        // Book Chapters
        if (publicationData.book_chapters) {
            html += `<div class="publication-section">`;
            html += `<h3>${this.currentLang === 'zh' ? '专著章节' : 'Book Chapters'}</h3>`;
            
            publicationData.book_chapters.forEach(chapter => {
                html += `
                    <div class="publication-item">
                        <div class="publication-title">${chapter.title}</div>
                        <div class="publication-authors">${chapter.authors}</div>
                        <div class="publication-venue">${chapter.book}, ${chapter.publisher}${chapter.year ? `, ${chapter.year}` : ''}</div>
                    </div>
                `;
            });
            html += `</div>`;
        }

        // Journal Papers by Year
        const years = Object.keys(publicationData).filter(key => !isNaN(key)).sort((a, b) => b - a);
        
        years.forEach(year => {
            if (publicationData[year] && publicationData[year].length > 0) {
                html += `<div class="publication-year"><h3>${year}</h3></div>`;
                
                publicationData[year].forEach(paper => {
                    const highlightClass = paper.highlight ? ' highlight' : '';
                    html += `
                        <div class="publication-item${highlightClass}">
                            <div class="publication-title">${paper.title}</div>
                            <div class="publication-authors">${paper.authors}</div>
                            <div class="publication-venue">${paper.venue}</div>
                            ${paper.note ? `<div class="publication-note"><strong>${paper.note}</strong></div>` : ''}
                        </div>
                    `;
                });
            }
        });

        container.innerHTML = html;
    }

    loadRecognitionContent() {
        const container = document.querySelector('.recognition-content');
        if (!container) return;

        let html = '';

        // Awards and Honors
        html += `<div class="recognition-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '奖项与荣誉' : 'Awards and Honors'}</h3>`;
        html += `<div class="timeline">`;
        
        academicData.awards.forEach(award => {
            const iconMap = {
                'paper': 'fas fa-file-alt',
                'demo': 'fas fa-desktop',
                'honor': 'fas fa-star',
                'recognition': 'fas fa-trophy',
                'award': 'fas fa-medal',
                'membership': 'fas fa-users'
            };
            
            html += `
                <div class="timeline-item">
                    <div class="timeline-year">${award.year}</div>
                    <div class="timeline-title">
                        <i class="${iconMap[award.type] || 'fas fa-award'}"></i>
                        ${award.title[this.currentLang]}
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;

        // Media Coverage
        html += `<div class="recognition-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '媒体报道' : 'Media Coverage'}</h3>`;
        
        academicData.media.forEach(item => {
            html += `
                <div class="card">
                    <h3>${item.title[this.currentLang]}</h3>
                    <p><a href="${item.url}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i>
                        ${this.currentLang === 'zh' ? '查看报道' : 'View Article'}
                    </a></p>
                </div>
            `;
        });
        html += `</div>`;

        container.innerHTML = html;
    }

    loadTeachingContent() {
        const container = document.querySelector('.teaching-content');
        if (!container) return;

        let html = '';

        // Courses
        html += `<div class="teaching-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '主讲课程' : 'Courses Taught'}</h3>`;
        
        academicData.teaching.courses.forEach(course => {
            html += `
                <div class="card">
                    <h3>${course.title[this.currentLang]}</h3>
                    <p><strong>${course.level[this.currentLang]}</strong> - ${course.type[this.currentLang]}</p>
                </div>
            `;
        });
        html += `</div>`;

        // Online Course
        const onlineCourse = academicData.teaching.online_course;
        html += `<div class="teaching-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '在线课程' : 'Online Course'}</h3>`;
        html += `
            <div class="card">
                <h3>${onlineCourse.title[this.currentLang]}</h3>
                <p><strong>${onlineCourse.platform[this.currentLang]}</strong></p>
                <p><a href="${onlineCourse.url}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                    ${this.currentLang === 'zh' ? '访问课程' : 'Access Course'}
                </a></p>
            </div>
        `;
        html += `</div>`;

        // Research Projects
        if (academicData.teaching.research_projects) {
            html += `<div class="teaching-section">`;
            html += `<h3>${this.currentLang === 'zh' ? '研究生教改项目' : 'Graduate Education Reform Projects'}</h3>`;
            
            academicData.teaching.research_projects.forEach((project, index) => {
                html += `
                    <div class="card">
                        <h3>${this.currentLang === 'zh' ? `项目${index + 1}` : `Project ${index + 1}`}: ${project.title[this.currentLang]}</h3>
                    </div>
                `;
            });
            html += `</div>`;
        }

        // Teaching Achievements
        html += `<div class="teaching-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '教学成果' : 'Teaching Achievements'}</h3>`;
        html += `<div class="timeline">`;
        
        academicData.teaching.achievements.forEach(achievement => {
            html += `
                <div class="timeline-item">
                    <div class="timeline-year">${achievement.year || ''}</div>
                    <div class="timeline-title">${achievement.title[this.currentLang]}</div>
                </div>
            `;
        });
        html += `</div></div>`;

        // Student Supervision
        html += `<div class="teaching-section">`;
        html += `<h3>${this.currentLang === 'zh' ? '学生培养' : 'Student Supervision'}</h3>`;
        
        academicData.teaching.students.forEach(student => {
            html += `
                <div class="card">
                    <p><i class="fas fa-graduation-cap"></i> ${student.achievement[this.currentLang]}</p>
                </div>
            `;
        });
        html += `</div>`;

        container.innerHTML = html;
    }

    // Utility method to get translated text
    getText(enText, zhText) {
        return this.currentLang === 'zh' ? zhText : enText;
    }
}

// Export for use in other scripts
window.i18n = new I18n();