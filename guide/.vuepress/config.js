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
        sidebarDepth: 1,
        search: false,
        base: '/',
        lastUpdated: 'Last Updated',
        repo: 'MenuDocs/guides',
        editLinks: true,
        docsBranch: 'master',
        docsDir: 'guide',
        editLinkText: 'Contribute on Github!',
        displayAllHeaders: true,
        startYear: '2018',
        notFoundMessages: [
            `Fun Fact: MenuDocs was founded in 2018 by Connor.`,
            `Fun Fact: We're here to stay, the end game doesnt exist. Many more games to play!`,
            `Fun Fact: We're happily sponsored by Oxide Hosting, they're one of the best sponsors any organisations could ask for! `,
            `Fun Fact: You found a dead end.`
        ],
    },
    plugins: [
        'vuepress-plugin-element-tabs'
      ]
};

module.exports = config;
