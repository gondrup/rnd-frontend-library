module.exports = {
    mode: 'development',
    entry: './src/emojify.js',
    output: {
        filename: 'emojify.js',
        library: {
            type: 'umd',
            name: 'emojify',
        },
        // prevent error: `Uncaught ReferenceError: self is not define`
        globalObject: 'this',
    },
};