
function resolve(color) {
    if (typeof color === 'string' && color.startsWith("#")){
        const rawHex = color.split('#')[1];

        return parseInt(rawHex, 16);
    }
    else {
        return Number(color);
    };
};

module.exports = resolve;