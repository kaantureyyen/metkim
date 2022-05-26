const { description } = require('../../package')

module.exports = {
  base: '/metkim/',
  locales: {
    '/': {
      lang: 'tr-TR',
      title: 'Metkim',
      description: 'Metal Makine Kimya'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Metkim',
      description: 'Metal Makine Kimya'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    smoothScroll: true,
    editLinks: false,
    logo: '/images/metkim_logo.png',
    locales: {
      '/': {
        selectText: 'Diller',
        label: 'Türkçe',
        ariaLabel: 'Diller',
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
                ''
              ]
            },
            {
              title: 'Ürünler',
              collapsable: false,
              children: [
                'products/scrap',
                'products/radiation',
                'products/ferro'
              ]
            },
            {
              title: 'Çözüm Ortakları',
              collapsable: false,
              children: [
                'partners/scrap',
                'partners/radiation',
                'partners/engineering'
              ]
            },
            {
              title: 'Broşürler ve Yayınlar',
              collapsable: false,
              children: [
                'publications/brochures',
                'publications/videos',
                'publications/articles'
              ]
            },
            {
              title: 'Referanslarımız',
              collapsable: false,
              children: [
                'references'
              ]
            }
          ],
          // fallback
          '/': [
            'contact'
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
            },
            {
              title: 'Products',
              collapsable: false,
              children: [
                'products/scrap',
                'products/radiation',
                'products/ferro'
              ]
            },
            {
              title: 'Agencies',
              collapsable: false,
              children: [
                'partners/scrap',
                'partners/radiation',
                'partners/engineering'
              ]
            },
            {
              title: 'Brochures and Publications',
              collapsable: false,
              children: [
                'publications/brochures',
                'publications/videos',
                'publications/articles'
              ]
            }
          ],
          // fallback
          '/': [
            'en/contact'
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
