const { description } = require('../../package')

module.exports = {
  locales: {
    '/': {
      lang: 'tr-TR',
      title: 'Metkim Metal Kimya',
      description: 'Metkim Metal Kimya Websitesi'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Metkim',
      description: 'Metkim Official Website'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: 'kaantureyyen/metkim',
    smoothScroll: true,
    editLinks: false,
    logo: '/images/metkim.png',
    locales: {
      '/': {
        selectText: 'Diller',
        label: 'Türkçe',
        ariaLabel: 'Diller',
        algolia: {},
        nav: [
          {
            text: 'Rehber',
            link: '/about/',
          },
          {
            text: 'İletişim',
            link: '/contact/'
          }
        ],
        sidebar: {
          '/about/': [
            {
              title: 'Şirket',
              collapsable: false,
              children: [
                '',
                'references'
              ]
            }
          ],
          '/partners/': [
            {
              title: 'Çözüm Ortakları',
              collapsable: false,
              children: [
                '',
                'references'
              ]
            }
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          {
            text: 'Guide',
            link: '/en/about/',
          },
          {
            text: 'Contact',
            link: '/en/contact/'
          }
        ],
        sidebar: {
          '/en/about/': [
            {
              title: 'Company',
              collapsable: false,
              children: [
                ''
              ]
            }
          ]
        }
      }
    },
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
