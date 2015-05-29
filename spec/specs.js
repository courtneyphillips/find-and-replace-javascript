describe('findAndReplace', function() {

  it("Breaks a given phrase up into its individual word components", function() {
    expect(findAndReplace("Test phrase here", "test", "spec")).to.eql(["Test", "phrase", "here"])
  });

  

});
