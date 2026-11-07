/**
 * UI Interactions, Animations & Dynamic Component Helpers
 */
(function() {
    'use strict';

    // Helper selector utility
    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    // Handle smooth scrolling for anchor links
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = $(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Dynamic greeting banner generator
    function renderDynamicBanner() {
        const header = $('header') || document.body;
        const banner = document.createElement('div');
        banner.className = 'dynamic-banner';
        
        const hour = new Date().getHours();
        let greeting = 'Welcome to Sahara Society';
        if (hour < 12) greeting = 'Good Morning & Welcome to Sahara Society';
        else if (hour < 18) greeting = 'Good Afternoon & Welcome to Sahara Society';
        else greeting = 'Good Evening & Welcome to Sahara Society';

        banner.innerText = greeting;
        banner.style.cssText = 'padding: 8px; text-align: center; font-size: 0.9rem; opacity: 0.8;';
        
        header.prepend(banner);
    }

    // Initialize scripts on load
    document.addEventListener('DOMContentLoaded', () => {
        initSmoothScroll();
        renderDynamicBanner();
        console.log('Script.js loaded and executed.');
    });
})();