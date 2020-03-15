import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), 
    '0xD79dc3bFc707DaCa3856520Db886B1Aff2bc3E34'
);

export default instance;