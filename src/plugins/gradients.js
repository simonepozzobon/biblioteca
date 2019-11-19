const _ = require('lodash')

module.exports = function ({
    theme,
    e,
    addUtilities,
}) {
    const gradients = theme('gradients', {})
    const utilities = _.map(gradients, ([start, end], name) => ({
        // console.log(start, end, name);
        [`.gr-${name}`]: {
            backgroundImage: `linear-gradient(50deg, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, {
        variants: ['hover']
    })
}
