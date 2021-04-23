const LIST_BEGIN = { 'data source': 'begin list' }
const LIST_END = { 'data source': 'end list' }

const Source = (data) => {
    let keys = undefined
    return () => {
        if (keys === undefined) {
            keys = Object.keys(data)
            return LIST_BEGIN
        }
        return LIST_END
    }
}

module.exports = {
    Source,
    LIST_BEGIN,
    LIST_END
}
