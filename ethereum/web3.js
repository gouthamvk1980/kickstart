import Web3 from 'web3';

let web3;


if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are not on browser and metamask is not running

//   window.web3.currentProvider.enable();
//   web3 = new Web3(window.web3.currentProvider);  
 
    web3 = new Web3(window.ethereum);
    window.ethereum.enable();

    // window.web3.currentProvider.enable();
    // web3 = new Web3(window.web3.currentProvider);
    

} else {
    
    // we are on the server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/da69307b72de4258a570781e1fdcf8b4'
    );
    web3 = new Web3(provider);
}

export default web3;