// Wait for page to load
        document.addEventListener('DOMContentLoaded', function() {
            
            // 1. SMOOTH SCROLLING
            const navLinks = document.querySelectorAll('.nav-links a');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // 2. HIGHLIGHT ACTIVE LINK
            const sections = document.querySelectorAll('section');
            
            function highlightNavLink() {
                let currentSection = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (window.pageYOffset >= sectionTop - 100) {
                        currentSection = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + currentSection) {
                        link.classList.add('active');
                    }
                });
            }
            
            window.addEventListener('scroll', highlightNavLink);
            
            // 3. SET HOME ACTIVE ON LOAD
            const homeLink = document.querySelector('a[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }

            // 4. RESUME BUTTON
            const resumeBtn = document.querySelector('.btn');
            if (resumeBtn) {
                resumeBtn.addEventListener('click', function() {
                    alert('Downloading resume...');
                });
            }

            // 5. CONTACT FORM
            const contactForm = document.querySelector('.quick-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function() {
                    alert('Sending message... You will be redirected to Formspree');
                });
            }

        });
   
