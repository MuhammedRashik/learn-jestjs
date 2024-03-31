test('string',()=>{
    expect("hello").toMatch('llo')
    expect('hello').not.toMatch("HHI")
})