// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant": false,"inputs": [{"name": "x","type": "uint256"}],"name": "set","outputs": [],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "get","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]')
TestContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = TestContract.at('0x9c1c5cf1bb60e7fbefbc25d9d2ee3968a5ca081f');

function set() {
  contractInstance.set(5, function() {
    window.alert('done');
  });
}

function get() {
  window.alert(contractInstance.get.call().toString());
}
