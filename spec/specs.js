describe('find', function() {

  it("Breaks a given phrase up into its individual word components", function() {
    expect(findAndReplace("Test phrase here", "test", "spec")).to.eql(["Test", "phrase", "here"])
  });

});

// 
// describe('replace', function(){
//
//   it("Locates instances of the word to be replaced", function() {
//     expect(findAndReplace("Test phrase here", "test", "spec"))
//   });
//
//
// });
