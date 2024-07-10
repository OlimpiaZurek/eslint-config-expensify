const message = require('./CONST').MESSAGE.NO_DEPRECATED_ONYX_METHODS;

module.exports = {
    create(context) {
        const deprecatedMethods = {
            withOnyx: "useOnyx"
        };
        return {
            CallExpression(node) {
                const callee = node.callee;

                if (callee.type === "Identifier" && deprecatedMethods[callee.name]) {
                    context.report({
                        node,
                        message,
                        data: {
                            name: callee.name,
                            replacement: deprecatedMethods[callee.name]
                        }
                    });
                }
            }
        };
    }
}