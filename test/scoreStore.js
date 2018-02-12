var ScoreStore = artifacts.require("./ScoreStore.sol");


contract('ScoreStore', function(accounts) {

  it("should have none score for the first account", function() {
    return ScoreStore.deployed().then(function(instance) {
      return instance.getPersonScore.call(accounts[0]);
    }).then(function(score) {
      assert.equal(score.valueOf(), 0, "score wasn't empty in the first account");
    });
  });

  it("should have a score for the first account after add it", function() {

    var expected_basic_state = 0;
    var expected_score = 10;
    var expected_name = accounts[0];
    var _instance;

    return ScoreStore.deployed().then(function(instance) {
      _instance = instance;
      return _instance.getPersonScore.call(expected_name);
    }).then(function(basicState) {
      expected_basic_state = basicState;
      return _instance.addPersonScore(expected_name, expected_score);
    }).then(function() {
      return _instance.getPersonScore.call(expected_name);
    }).then(function(score) {

      assert.equal(expected_basic_state, 0, "score wasn't empty in the first account");
      assert.equal(score.valueOf(), expected_score, expected_score + " wasn't in the first account");
    });
  });

  it("should have exception for the second account", function() {

    var expected_name = accounts[1];
    var expected_score = 10;
    var _instance;


    return ScoreStore.deployed().then(function(instance) {
      _instance = instance;
      return _instance.addPersonScore(expected_name, expected_score);
    }).then(function() {
      return _instance.addPersonScore(expected_name, expected_score + 42);
    }).then(function() {
      return _instance.getPersonScore.call(expected_name);
    }).then(function(score) {
      assert.equal(score.valueOf(), expected_score, expected_score + " wasn't in the second account");
    });
  });

// END of Contract ScoreStore
});
