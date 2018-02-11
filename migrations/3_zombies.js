var Ownable = artifacts.require("./Ownable.sol");
var ZombieFactory = artifacts.require("./ZombieFactory.sol");
var ZombieFeeding = artifacts.require("./ZombieFeeding.sol");
var ZombieHelper = artifacts.require("./ZombieHelper.sol");
var ZombieBattle = artifacts.require("./ZombieBattle.sol");

module.exports = function(deployer, network, accounts) {

  deployer.deploy(Ownable);

  deployer.link(Ownable, ZombieFactory);
  deployer.deploy(ZombieFactory);

  deployer.link(ZombieFactory, ZombieFeeding);
  deployer.deploy(ZombieFeeding);

  deployer.link(ZombieFeeding, ZombieHelper);
  deployer.deploy(ZombieHelper);

  deployer.link(ZombieHelper, ZombieBattle);
  deployer.deploy(ZombieBattle);
};
