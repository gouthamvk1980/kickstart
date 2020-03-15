const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json'); 

const provider = new HDWalletProvider(
'expand code clap draft will message chest cup enrich huge before citizen',
'https://rinkeby.infura.io/v3/da69307b72de4258a570781e1fdcf8b4'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying using account ',accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployment done to ',result.options.address);
};

deploy();