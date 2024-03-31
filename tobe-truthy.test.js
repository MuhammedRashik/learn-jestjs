test("toBeTruthy",()=>{
    const n=1
    expect(n).toBeTruthy()
})

test("not toBeTruthy",()=>{
    const n=0
    expect(n).not.toBeTruthy()
})