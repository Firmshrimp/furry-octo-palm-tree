module.exports = {
    layout: 'layouts/default.njk',
    url: 'https://www.example.com',
    name: `Brad's Website`,
    subtitle: `Showing Me, To You`,
    author: {
        fullName: 'Brad Kremers',
        biography:"Brad is a rock climbing instructor and curious computer user. He lives in a van with his fiance and basset hound wherever they can find a place to park."
    },
    primaryNav: [
        { title: 'Uses', subtitle: 'How I Work', url: '/uses' },
        { title: 'Now', subtitle: "What I'm Doing", url: '/now' }
    ],
    socialMedia: [
        { title: 'Facebook', subtitle: 'where is facebook?', url: '//www.facebook.com' },
        { title: 'Instagram', subtitle: '', url: '//www.instagram.com' },
        { title: 'Twitter', subtitle: '', url: '//www.twitter.com' },
        { title: 'LinkedIn', subtitle: '', url: '//www.linkedin.com' },
        { title: 'Twitch', subtitle: '', url: '//www.twitch.tv' },
        { title: 'YouTube', subtitle: '', url: '//www.youtube.com' }
    ],
    copyright: new Date(),
    lastMod: new Date(),
    changeFreq: 'daily'
};
