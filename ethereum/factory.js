import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0xA27a639FDF886043a5d2Ae52a9B6B1775dc51AA5'
);

export default instance;