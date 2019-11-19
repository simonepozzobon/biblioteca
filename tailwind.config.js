const {
    colors,
    opacity,
    borderRadius,
} = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            colors: {
                ...colors,
                dark: {
                    '300': '#332D2D',
                    '400': '#2E2828',
                    '500': '#282323',
                    default: '#282323',
                },
                light: {
                    '100': '#ffffff',
                    '200': '#F9F9F9',
                    '300': '#F2F2F2',
                    '400': '#ECECEC',
                    '500': '#E6E6E6',
                    '600': '#DBDBDB',
                    default: '#E6E6E6',
                },
                orange: {
                    ...colors.orange,
                    '400': '#FF5900',
                    '500': '#FF2A00',
                    default: '#FF2A00',
                }
            },
            spacing: {
                '28': '7rem',
            },
            borderRadius: {
                'xl': '1.25rem',
            },
        },

        minHeight: {
            'slide': 'calc(100vh - 10rem)',
        },
        maxHeight: {
            'slide': 'calc(100vh - 10rem)',
        },
        gradients: theme => ({
            'transparent': ['transparent', 'transparent'],
            'orange': [theme('colors.orange.500'), theme('colors.orange.400')],
            'dark': [theme('colors.dark.500'), theme('colors.dark.300')],
            'light': [theme('colors.light.300'), theme('colors.light.600')]
        }),
    },
    variants: {},
    plugins: [
        require('./src/plugins/gradients'),
        require('./src/plugins/textGradients')
    ]
}
