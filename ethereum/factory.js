import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0x936C55d7EC898e0d43f3A837FF1E569043F9C638'
);

export default instance;