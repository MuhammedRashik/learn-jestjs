const data=require('./object')

test('object valid',()=>{
    expect(data).toEqual({one:1,two:2})
})