const RuleTester = require('eslint').RuleTester;
const rule = require('../no-deprecated-onyx-methods');
const message = require('../CONST').MESSAGE.NO_DEPRECATED_ONYX_METHODS;

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
});

ruleTester.run('no-deprecated-onyx-methods', rule, {
    valid: [
        {
            code: `
                useOnyx(() => {});
            `,
        },
    ],
    invalid: [
        {
            code: `
                withOnyx(() => {});
            `,
            errors: [{
                message: message.replace('{{name}}', 'withOnyx').replace('{{replacement}}', 'useOnyx')
            }],
        },
    ],
});