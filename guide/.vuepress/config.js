<<<<<<< HEAD
const sidebar = require('./components/Sidebar.js');
const nav = require('./components/Navbar.js');
const head = require('./components/Head.js');

const config = {
    title: 'MenuDocs Guide',
    head,
    theme: 'reco',
    themeConfig: {
        blogConfig: {
            category: {
              location: 2,
              text: 'Guides'
            }
        },
        logo: '/images/logo.png',
        author: 'MenuDocs Community',
        noFoundPageByTencent: false,
        nav,
        sidebar,
        smoothScroll: true,
        sidebarDepth: 3,
        search: false,
        lastUpdated: 'Last Updated',
        repo: 'menudocs/guides',
        editLinks: true,
        docsBranch: 'master',
        editLinkText: 'Contribute on Github!',
        startYear: '2018'
    }
};

module.exports = config;
=======
const sidebar = require('./components/Sidebar.js');
const nav = require('./components/Navbar.js');
const head = require('./components/Head.js');

const config = {
    title: 'MenuDocs Guide',
    head,
    theme: 'reco',
    themeConfig: {
        blogConfig: {
            category: {
              location: 2,
              text: 'Guides'
            }
        },
        author: 'MenuDocs Community',
        noFoundPageByTencent: false,
        nav,
        sidebar,
        smoothScroll: true,
        sidebarDepth: 3,
        search: false,
        lastUpdated: 'Last Updated',
        repo: 'menudocs/guides',
        editLinks: true,
        docsBranch: 'master',
        editLinkText: 'Contribute on Github!',
        startYear: '2018',
        notFoundMessages: [
            `Fun Fact: MenuDocs was founded in 2018 by Connor.`,
            `Fun Fact: We're here to stay, the end game doesnt exist. Many more games to play!`,
            `Fun Fact: We're happily sponsored by Oxide Hosting, they're one of the best sponsors any organisations could ask for! `,
            `Fun Fact: You found a dead end.`
        ],
    }
};

module.exports = config;
>>>>>>> master
