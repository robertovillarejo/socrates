module.exports = {
    toFieldValueFormat = function (obj) {
        if (!obj) return null;
        let result = [];
        for (key in Object.keys(obj)) {
            result.push({
                Field: key,
                Value: obj[key]
            });
        }
        return result;
    },
    fromFieldValueFormat= function (obj) {
        if (!Array.isArray(obj)) {
            return null;
        }
        let result = {};
        for (e in obj) {
            result[e.Field] = e.Value;
        }
        return result;
    }
}