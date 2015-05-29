describe('findAndReplace', function() {

//No longer functions after code has been advanced, since returning more than simply the sentence:

  // it("Breaks a given phrase up into its individual word components", function() {
  //   expect(findAndReplace("Test phrase here", "test", "spec")).to.eql(["Test", "phrase", "here"])
  // });

  it("Replaces any word within a given phrase with a new word", function() {
      expect(findAndReplace("Test phrase here", "Test", "Spec")).to.equal("Spec phrase here")
  });

  it("Replaces any word within a given phrase with a new word, regardless of casing", function(){
      expect(findAndReplace("Test phrase here", "test", "spec")).to.equal("spec phrase here")
  });

  it("Replaces multiple instances of a word within a given phrase", function(){
      expect(findAndReplace("I love love love love vegan food", "love", "hate")).to.equal("I hate hate hate hate vegan food")
  });

});
