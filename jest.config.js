module.exports = {
    rootDir: './src',
    transform: {
        '^.+\\.(ts?|tsx?)$': 'ts-jest'
    },
    testRegex: '.test.(ts?|tsx?)$',
    moduleFileExtensions: [
        '.ts', '.tsx', '.js', '.json'
    ] 
}