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
