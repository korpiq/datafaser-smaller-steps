const LIST_BEGIN = { 'data source': 'begin list' }
const LIST_END = { 'data source': 'end list' }
const DICTIONARY_BEGIN = { 'data source': 'begin dictionary' }
const DICTIONARY_END = { 'data source': 'end dictionary' }

const Source = (data) => {
    let keys = undefined
    return Array.isArray(data) ?
        () => {
            if (keys === undefined) {
                keys = Object.keys(data)
                return LIST_BEGIN
            }
            return LIST_END
        }
        : () => {
            if (keys === undefined) {
                keys = Object.keys(data)
                return DICTIONARY_BEGIN
            }
            return DICTIONARY_END
        }
}

module.exports = {
    Source,
    LIST_BEGIN,
    LIST_END,
    DICTIONARY_BEGIN,
    DICTIONARY_END
}
