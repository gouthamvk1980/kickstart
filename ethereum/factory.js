import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0xCa9166B5589B127ec432284fDF8DDE2b2cC7D77A'
);

export default instance;