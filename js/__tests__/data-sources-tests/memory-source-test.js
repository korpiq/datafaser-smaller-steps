var tester = require('@jest/globals')
var DataSource = require('../../src/data-sources/memory-source.js')

tester.describe('data-sources/memory-source', () => {
    tester.it('returns a function', () => {
        tester.expect(DataSource.Source([])).toBeInstanceOf(Function)
    })
    
    tester.it('reports start and end for an empty list', () => {
        const dataSource = DataSource.Source([])
        tester.expect(dataSource()).toBe(DataSource.LIST_BEGIN)
        tester.expect(dataSource()).toBe(DataSource.LIST_END)
    })

    tester.it('reports start and end for an empty object', () => {
        const dataSource = DataSource.Source({})
        tester.expect(dataSource()).toBe(DataSource.DICTIONARY_BEGIN)
        tester.expect(dataSource()).toBe(DataSource.DICTIONARY_END)
    })
})
