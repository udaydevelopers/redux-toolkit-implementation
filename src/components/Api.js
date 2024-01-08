// api.js
import axios from 'axios';

const Api = {
  getData: async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Api;
