const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  test("array condain milk",()=>{
    expect(shoppingList).toContain("milk")
  })