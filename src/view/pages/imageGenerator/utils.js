
export const objectToArray = (obj) => {
    const result = [];
    for (const key in obj) {
        result.push({traitType: key, value: obj[key]});
    }
    return result;
};