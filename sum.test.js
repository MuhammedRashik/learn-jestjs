const sum=require('./sum')

test('add 1 + 1 equls 2',()=>{
 expect(sum(1,1)).toBe(2)
})
