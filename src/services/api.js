import config from "../config";
import axios from "axios";
import {  useHistory } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";

const api_url = config.server.ip + config.server.port+"/";

const ApiServiceCall = {
    login: async function(value){
        return await axios.post(api_url + "login",value).then(function (response) {
            return response
        })
        .catch(function (response) {
           return response;
        });
    },
    getAllQuestion: async function(value){
        //set token in header option
        setAuthToken(); 
        return await axios.get(api_url + "getAllQuestion",value).then(function (response) {
            return response
        })
        .catch(function (response) {
           return response;
        });
    }
}

export default ApiServiceCall;