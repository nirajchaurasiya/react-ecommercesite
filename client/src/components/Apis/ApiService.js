import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const ApiService = {


    getAllUpdates: () => {
        // API call for login
        return axios.get(`${REACT_APP_API_URL}/api/updates/getallupdates`)
    },
    // register: () => {
    //     // API call for registration
    //     return axios.post('/api/register', data);
    // },
};

export default ApiService;
