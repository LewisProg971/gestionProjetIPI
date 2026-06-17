// Data Management
const Storage = {
    getProfiles: () => JSON.parse(localStorage.getItem('profiles')) || [],
    saveProfiles: (profiles) => localStorage.setItem('profiles', JSON.stringify(profiles)),
    
    getMeetings: () => JSON.parse(localStorage.getItem('meetings')) || [],
    saveMeetings: (meetings) => localStorage.setItem('meetings', JSON.stringify(meetings)),

    addProfile: (profile) => {
        const profiles = Storage.getProfiles();
        profile.id = Date.now();
        profile.status = 'available';
        profiles.push(profile);
        Storage.saveProfiles(profiles);
    },

    updateProfileStatus: (id, status) => {
        const profiles = Storage.getProfiles();
        const index = profiles.findIndex(p => p.id === id);
        if (index !== -1) {
            profiles[index].status = status;
            Storage.saveProfiles(profiles);
        }
    },

    addMeeting: (profileId, address) => {
        const meetings = Storage.getMeetings();
        meetings.push({ profileId, address });
        Storage.saveMeetings(meetings);
        Storage.updateProfileStatus(profileId, 'matched');
    },

    // Theme management
    getTheme: () => localStorage.getItem('theme') || 'light',
    setTheme: (theme) => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }
};

// UI Helpers
function createHTMLElement(tag, props = {}, children = []) {
    const el = document.createElement(tag);
    Object.assign(el, props);
    children.forEach(child => {
        if (typeof child === 'string') el.appendChild(document.createTextNode(child));
        else el.appendChild(child);
    });
    return el;
}

// Notifications Helper
const Notifications = {
    requestPermission: () => {
        if ("Notification" in window) {
            Notification.requestPermission();
        }
    },
    send: (title, body) => {
        if ("Notification" in window && Notification.permission === "granted") {
            new Notification(title, { body });
        }
    }
};

// Initialize Theme
Storage.setTheme(Storage.getTheme());

// Add Theme Toggle UI
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) {
        const toggle = createHTMLElement('button', { 
            className: 'theme-toggle',
            onclick: () => {
                const newTheme = Storage.getTheme() === 'light' ? 'dark' : 'light';
                Storage.setTheme(newTheme);
                toggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
            }
        }, [Storage.getTheme() === 'light' ? '🌙' : '☀️']);
        header.appendChild(toggle);
    }
});
