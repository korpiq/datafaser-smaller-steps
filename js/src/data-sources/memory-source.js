const LIST_BEGIN = { 'data source': 'begin list' }
const LIST_END = { 'data source': 'end list' }
const DICTIONARY_BEGIN = { 'data source': 'begin dictionary' }
const DICTIONARY_END = { 'data source': 'end dictionary' }
const EMPTY = { 'data source': 'empty' }
const LIST_MARKERS = {
    begin: LIST_BEGIN,
    end: LIST_END
}
const DICTIONARY_MARKERS = {
    begin: DICTIONARY_BEGIN,
    end: DICTIONARY_END
}

const CollectionSource = (data) => {
    let keys = undefined
    const markers = Array.isArray(data) ?
        LIST_MARKERS
        : DICTIONARY_MARKERS
    return () => {
        if (keys === undefined) {
            keys = Object.keys(data)
            return markers.begin
        }
        if (keys) {
            keys = false
            return markers.end
        }
        return EMPTY
    }
}

const ScalarSource = (data) => {
    const returnable = data == undefined ? [] : [data]
    return () => 
        returnable.length ? returnable.shift() : EMPTY
}

const Source = (data) => {
    return typeof data === 'object' ?
        CollectionSource(data)
        : ScalarSource(data)
}

module.exports = {
    Source,
    LIST_BEGIN,
    LIST_END,
    DICTIONARY_BEGIN,
    DICTIONARY_END,
    EMPTY
}
