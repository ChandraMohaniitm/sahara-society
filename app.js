/**
 * Application Core Setup & UI State Management
 */
class SaharaApp {
    constructor() {
        this.state = {
            initialized: false,
            activeTab: 'home',
            theme: 'light',
            timestamp: null
        };
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.state.initialized = true;
            this.state.timestamp = new Date().toISOString();
            this.setupEventListeners();
            this.applyInitialTheme();
            console.log('Sahara App initialized successfully:', this.state);
        });
    }

    setupEventListeners() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleTheme());
        }

        window.addEventListener('resize', this.debounce(() => {
            console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        }, 250));
    }

    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        document.body.classList.toggle('dark-theme', this.state.theme === 'dark');
        console.log(`Theme switched to: ${this.state.theme}`);
    }

    applyInitialTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            this.state.theme = 'dark';
            document.body.classList.add('dark-theme');
        }
    }

    debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
}

// Instantiate core application
const app = new SaharaApp();