const _ = require('lodash')

module.exports = function ({
    theme,
    e,
    addUtilities,
}) {
    const gradients = theme('gradients', {})
    const utilities = _.map(gradients, ([start, end], name) => ({
        // console.log(start, end, name);
        [`.text-gr-${name}`]: {
            backgroundImage: `linear-gradient(50deg, ${start}, ${end})`,
            backgroundClip: 'text',
            textFillColor: 'transparent',
            color: 'transparent',
        },
    }))

    addUtilities(utilities, {
        variants: ['hover']
    })
}
