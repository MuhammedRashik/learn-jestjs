function exeption(){
    throw new Error ("some error occure")
}
test("test exeptions",()=>{
    expect(()=>exeption()).toThrow()
    expect(()=>exeption()).toThrow(Error)

})