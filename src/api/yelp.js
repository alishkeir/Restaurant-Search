import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer dnQERzVW5MyGxDO1UaC7TS4nfDEBEsW4f8oRwJsJBZLMwbyA5CUutANr2dIQR8y2fCORBhwhXUXTANuAAMF_shDJ5KNgtbz5ASvBjdy8dF8kxGBOR0-2KBzKakm7Y3Yx',

        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept',
    },
});
