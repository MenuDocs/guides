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
        startYear: '2018'
    }
};

module.exports = config;
