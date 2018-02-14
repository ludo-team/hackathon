App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    // Load pets.
    $.getJSON('../users.json', function(data) {
      console.debug(data);
      for (i = 0; i < data.length; i ++) {
//        petsRow.append(petTemplate.html());
      }
    });

    return App.initWeb3();
  },

  initWeb3: function() {
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    var self = this;
    $.getJSON('MetaCoin.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var MetaCoinArtifact = data;
      App.contracts.MetaCoin = TruffleContract(MetaCoinArtifact);
      App.contracts.MetaCoin.setProvider(App.web3Provider);

      // Use our contract to retrieve and mark the adopted pets
      web3.eth.getAccounts(function(error, accs) {
        if (error != null) {
          alert("There was an error fetching your accounts.");
          return;
        }
        if (accs.length == 0) {
          alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
          return;
        }
        accounts = accs;
        account = accounts[0];
        self.refreshBalance();
      });
      return;
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleSendCoin);
  },

  refreshBalance: function() {
    var self = this;

    var meta;
    App.contracts.MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account, {from: account});
    }).then(function(value) {
      var balance_element = document.getElementById("balance");
      balance_element.innerHTML = value.valueOf();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting balance; see log.");
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  sendCoin: function() {
    var self = this;

    var amount = parseInt(document.getElementById("amount").value);
    var receiver = document.getElementById("receiver").value;

    this.setStatus("Initiating transaction... (please wait)");

    var meta;
    App.contracts.MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.sendCoin(receiver, amount, {from: account});
    }).then(function() {
      self.setStatus("Transaction complete!");
      self.refreshBalance();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending coin; see log.");
    });
  },

  handleSendCoin: function(event) {
    event.preventDefault();
    sendCoin();
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
