import axios from "axios"

// export function api() {
//     return axios.create({
//         baseUrl: "https://react-yazi-yorum.herokuapp.com",
//     });
// }
const instance = axios.create({ baseURL: 'https://react-yazi-yorum.herokuapp.com' });
export default instance

export const BASE_URL = "https://react-yazi-yorum.herokuapp.com";