const { calculateTip } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, 0.3)
    expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Async test demo', (done) => {
    setTimeout(() => {
        try {
            expect(1).toBe(1)
        } finally {
            done()
        }
    }, 2000);
})