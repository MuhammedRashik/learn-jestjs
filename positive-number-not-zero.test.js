test('adding positive number not tobe zeo',()=>{
    for(let i=1;i<10;i++){
        for(let j=1;j<10 ;j++){
            expect(i+j).not.toBe(0)
        }
    }
})