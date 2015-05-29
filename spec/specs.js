describe('findAndReplace', function() {

//No longer functions after code has been advanced, since returning more than simply the sentence:

  // it("Breaks a given phrase up into its individual word components", function() {
  //   expect(findAndReplace("Test phrase here", "test", "spec")).to.eql(["Test", "phrase", "here"])
  // });

  it("Replaces a word within a given phrase with a new word", function() {
        expect(findAndReplace("Test phrase here", "Test", "Spec")).to.equal("Spec phrase here")
  });

});
