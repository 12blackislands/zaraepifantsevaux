  document.addEventListener('DOMContentLoaded', function() {
            // Variables
            const pageTransition = document.querySelector('.page-transition');
            const fontCards = document.querySelectorAll('.font-card');
            const zaraPage = document.querySelector('.zara-page');
            const xButton = document.querySelector('.x-button');
            const logoContainer = document.querySelector('.logo-container');
            const infoButton = document.querySelector('.info-button-compartment');
            const infoContainer = document.querySelector('.info-container');
            const projectButton = document.querySelector('.project-button-compartment');
            const projectDetails = document.querySelector('.project-details');
            const hamburger = document.getElementById('hamburger');
            const dropdown = document.getElementById('dropdown');
            const filterButtons = document.querySelectorAll('.filter-button');
            const mobileMenuButton = document.querySelector('.mobile-menu-button');
            const mobileDropdown = document.querySelector('.mobile-dropdown');
            
            // Add dynamic wave effect to grid items
            fontCards.forEach((card, index) => {
                // Set a unique delay for each card based on its position
                const delay = index * 0.2;
                card.style.animationDelay = `${delay}s`;
            });
            
            // Filter functionality
            // filterButtons.forEach(button => {
            //     button.addEventListener('click', function() {
            //         // Remove active class from all buttons
            //         filterButtons.forEach(btn => btn.classList.remove('active'));
                    
            //         // Add active class to clicked button
            //         this.classList.add('active');
                    
            //         const category = this.textContent.toLowerCase();
                    
            //         // Show all cards if "All" is selected
            //         if (category === 'all') {
            //             fontCards.forEach(card => {
            //                 card.style.display = 'block';
            //             });
            //             return;
            //         }
                    
                    // Filter cards based on category
            //         fontCards.forEach(card => {
            //             if (card.dataset.category === category) {
            //                 card.style.display = 'block';
            //             } else {
            //                 card.style.display = 'none';
            //             }
            //         });
            //     });
            // });
            
            // Mobile menu toggle
            mobileMenuButton.addEventListener('click', function() {
                this.classList.toggle('active');
                mobileDropdown.classList.toggle('active');
            });
            
            // Font Card Click - Transition to Zara Page
            fontCards.forEach(card => {
                card.addEventListener('click', function() {
                    // First activate the page transition
                    pageTransition.classList.add('active');
                    
                    // After transition completes, show Zara page
                    setTimeout(() => {
                        zaraPage.classList.add('active');
                        logoContainer.classList.add('active');
                        xButton.classList.add('active');
                        
                        // Wait a moment then hide the transition overlay
                        setTimeout(() => {
                            pageTransition.classList.remove('active');
                        }, 500);
                    }, 500);
                });
            });
            
            // X Button Click - Back to Typography Page
            xButton.addEventListener('click', function() {
                // First activate the page transition
                pageTransition.classList.add('active');
                
                // After transition completes, hide Zara page
                setTimeout(() => {
                    zaraPage.classList.remove('active');
                    logoContainer.classList.remove('active');
                    xButton.classList.remove('active');
                    
                    // Wait a moment then hide the transition overlay
                    setTimeout(() => {
                        pageTransition.classList.remove('active');
                    }, 500);
                }, 500);
            });
            
            // Hamburger menu toggle
            hamburger.addEventListener('click', function() {
                dropdown.classList.toggle('active');
            });
            
            // Info button toggle
            infoButton.addEventListener('click', function() {
                infoContainer.classList.toggle('active');
            });
            
            // Project button toggle
            projectButton.addEventListener('click', function() {
                projectDetails.classList.toggle('active');
            });
        });









  // --------
  // Replace the filterButtons event handlers with this code
const categoryLinks = document.querySelectorAll('.category-link');
const fontCards = document.querySelectorAll('.font-card');

categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        categoryLinks.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Get category from href
        const category = this.getAttribute('href').substring(1);
        
        // Show all cards if "all" is selected
        if (category === 'all') {
            fontCards.forEach(card => {
                card.style.display = 'block';
                // Optional: add a fade-in animation
                card.style.opacity = 0;
                setTimeout(() => {
                    card.style.opacity = 1;
                }, 50);
            });
            return;
        }
        
        // Filter cards based on category
        fontCards.forEach(card => {
            if (card.dataset.category === category) {
                card.style.display = 'block';
                // Optional: add a fade-in animation
                card.style.opacity = 0;
                setTimeout(() => {
                    card.style.opacity = 1;
                }, 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
});



// -------

// Mobile menu toggle - updated version
mobileMenuButton.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileDropdown.classList.toggle('active');
    
    // Toggle the no-scroll class on the body
    document.body.classList.toggle('no-scroll');
});







// ----------




