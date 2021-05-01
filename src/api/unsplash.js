import axios from 'axios';

export default axios.create({
    baseUrl:"https://api.unsplash.com/",
    headers: {
        Authorization:"Client-ID zWKQJAeeDGwEL2yz6J9R-9Jv5eMl2g508dm42OEh5WI"
    }
})