/**
 * Convierte un objeto al formato { Field: nombreCampo, Value: valorCampo }
 */
function toFieldValueFormat(obj) {
    if (!obj) return null;
    let result = [];
    Object.keys(obj).forEach(key => {
        let value = null;
        if (Array.isArray(obj[key])) {
            value = toFieldValueFormat(obj[key]);
        } else {
            value = obj[key];
        }
        result.push({
            Field: key,
            Value: value
        });
    });
    return result;
}

/**
 * Convierte un objeto en formato { Field: nombreCampo, Value: valorCampo }
 * a un objeto { nombreCampo: valorCampo }
 */
function fromFieldValueFormat(obj) {
    if (!obj) {
        return null;
    }
    if (!Array.isArray(obj)) {
        return fromFieldValueFormat([obj]);
    }
    let result = {};
    obj.forEach(e => {
        result[e.Field] = e.Value;
    });
    return result;
}

module.exports = {
    toFieldValueFormat,
    fromFieldValueFormat
}