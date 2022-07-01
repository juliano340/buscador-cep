import axios  from "axios";

//https://viacep.com.br/ws/91510490/json
const api = axios.create(

    {
     
        baseURL: "https://viacep.com.br/ws/"
        
    }
);

export default api;