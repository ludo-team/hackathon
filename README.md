# Angular-Truffle

<p align="center">		
  <img src="https://betanews.com/wp-content/uploads/2016/02/Smartphone-Vote.jpg">		
 </p>		

 ------------------------		


An angular4 + [truffle](https://github.com/trufflesuite/truffle) starter app. Write, compile & deploy smart contracts for Ethereum.

Forked [State of the Dapps](https://dapps.ethercasts.com/dapp/angular2-truffle-starter-dapp)


## How to use
There are 2 small parts to successfully running this project.

### Part 1

1. `git clone https://github.com/ludo-team/hackaton.git`
2. `cd hackaton`
3. `npm install`

### Part 2
For the second part, you're going to need a working copy of [angular-cli](https://github.com/angular/angular-cli) (aka. `ng`) installed in your environment (`npm install -g @angular/cli`). And if you're new, install [ganache-cli](https://github.com/trufflesuite/ganache-cli) to run a local blockchain RPC server(`npm install -g ganache-cli`). After that, simply run `ganache-cli` in a new tab.

1. `ganache-cli --secure -u 0 -u 1 -u 2 -u 3 -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat" --networkId 1234`

Both of these cli-tools are required before moving forward, and be sure you're connected to an Ethereum client before running the commands below. A great browser based tool is [MetaMask.io](https://metamask.io) and will suit your needs for getting this demo and working quickly.  Be sure to SWITCH the Metamask network (in the upper left hand corner of the pop-up) to Localhost 8545. Otherwise you'll log an web-browser error when you navigate to app in a web browser.

And then in the original tab, run:

4. `truffle compile` to compile your contracts
5. `truffle migrate` to deploy those contracts to the network
6. `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
7. Make sure there are no errors in browser console

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

1. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
2. Run `truffle test` to run tests associated with your solidity smart contracts. The test folder for this can be found in the `test` directory at the root level of this project

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.



## Technologies & Languages Used
1. Angular4 (Typescript/Javascript)
2. Truffle (Solidity)
