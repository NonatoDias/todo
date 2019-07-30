import axios from 'axios';

export const fetchItems = () => {
	return axios.get('http://www.mocky.io/v2/5d3f9d4133000075209d2687');
}
