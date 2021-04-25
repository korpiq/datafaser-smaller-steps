var tester = require('@jest/globals')
var DataSource = require('../../src/data-sources/memory-source.js')

tester.describe('data-sources/memory-source', () => {
    tester.it('returns a function', () => {
        tester.expect(DataSource.Source([])).toBeInstanceOf(Function)
    })

    tester.it('reports empty for an empty value', () => {
        const getNextToken = DataSource.Source()
        tester.expect(getNextToken()).toBe(DataSource.EMPTY)
        tester.expect(getNextToken()).toBe(DataSource.EMPTY)
    })

    tester.it('reports start, end, then empty for an empty list', () => {
        const getNextToken = DataSource.Source([])
        tester.expect(getNextToken()).toBe(DataSource.LIST_BEGIN)
        tester.expect(getNextToken()).toBe(DataSource.LIST_END)
        tester.expect(getNextToken()).toBe(DataSource.EMPTY)
        tester.expect(getNextToken()).toBe(DataSource.EMPTY)
    })

    tester.it('reports start, end, then empty for an empty object', () => {
        const getNextToken = DataSource.Source({})
        tester.expect(getNextToken()).toBe(DataSource.DICTIONARY_BEGIN)
        tester.expect(getNextToken()).toBe(DataSource.DICTIONARY_END)
        tester.expect(getNextToken()).toBe(DataSource.EMPTY)
        tester.expect(getNextToken()).toBe(DataSource.EMPTY)
    })
})
