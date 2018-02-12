pragma solidity ^0.4.18;

contract ScoreStore {
    
    mapping (string => int) PersonScores;
    
    function addPersonScore(string name, int startingScore) public {
        if (PersonScores[name] > 0) {
            revert();
        } else {
            PersonScores[name] = startingScore;
        }
    }

    function getPersonScore(string name) public view returns(int) {
        return PersonScores[name];
    }
}