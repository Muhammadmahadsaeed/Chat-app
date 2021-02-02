// import axios from 'axios';

const baseURL = 'http://192.168.0.96:401/bwccrm/';

// export const api = axios.create({
//     baseURL,
//     timeout: 10000,
// });

export const user_image = baseURL + 'public/userpicture/';
export const campaign_logo = baseURL + 'public/campaignlogo/';
export const campaign_banner = baseURL + 'public/campaignbanner/';
export const order_attachment = baseURL + 'public/order/';
export const work_attachment = baseURL + 'public/workorder/';
export const download_client_attachment = baseURL + 'downloadclientattachment/';
export const download_work_attachment = baseURL + 'downloadworkattachment/';