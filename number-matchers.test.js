test('number  Matchers',()=>{
    const number=2+3
    expect(number).toBeGreaterThan(4)
    expect(number).toBeGreaterThanOrEqual(5)
    expect(number).toBeLessThan(8)
    expect(number).toBeLessThanOrEqual(8)
    expect(number).toEqual(5)
    expect(number).toBe(5)
})