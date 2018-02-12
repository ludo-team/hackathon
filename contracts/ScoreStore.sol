pragma solidity ^0.4.19;

contract ScoreStore {

    mapping (string => uint) PersonScores;

    function addPersonScore(string name, uint startingScore) public {
        if (PersonScores[name] > 0) {
            //revert();
        } else {
            PersonScores[name] = startingScore;
        }
    }

    function getPersonScore(string name) public view returns(uint) {
        return PersonScores[name];
    }
}
