import axios from 'axios'

class TrailService {

    getAll() {
        return axios.get('/api/trails');
    }
}

export default new TrailService()