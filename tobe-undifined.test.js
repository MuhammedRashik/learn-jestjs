test("toBeUndefined",()=>{
    const n=undefined
    expect(n).toBeUndefined()

})

test('not toBeUndefined',()=>{
    const n=null
    expect(n).not.toBeUndefined()
})