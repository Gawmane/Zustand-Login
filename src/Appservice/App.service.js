import Axios from "axios";

import API_URL from "./API_URL";
import { authHeader } from "./auth-header";

//Get - Henter alt (list)
const getList = endpoint => {
  return Axios.get(`${API_URL}/${endpoint}`, {
    // Tjekker hvis den er logget ind hvis det er nødvendigt (authHeader fra auth-header.js)
    headers: authHeader(),
  });
};

//Henter et argument ex artist ud fra id
const getDetails = (endpoint, id) => {
  return Axios.get(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};

//Opretter - Endpoint= hvad vil du hente (fx stages, artist) Data = ararry af vores værdier
const create = (endpoint, data) => {
  return Axios.post(`${API_URL}/${endpoint}`, data, {
    headers: authHeader(),
  });
};

//Hvis username og passeword passer for vi token og vi er logget ind
const login = async (username, password) => {
  return await Axios.post(`https://api.mediehuset.net/token`, { username, password });
};

// Sletter token fra databasen (kun frontendt - da den kræver backend)
const logout = async () => {
  return await Axios.post(`${API_URL}/logout`, {
    headers: authHeader(),
  });
};

// Endpoint = Hvad vil du opdatere (artist eks -Agument) Id= hvilket id skal opdateres Data= vores værdier der skal opdater (nydata)
const update = (endpoint, id, data) => {
  return Axios.put(`${API_URL}/${endpoint}/${id}`, data, {
    headers: authHeader(),
  });
};

// Slet med id ("artist" , 23)
const remove = (endpoint, id) => {
  return Axios.delete(`${API_URL}/${endpoint}/${id}`, {
    headers: authHeader(),
  });
};


//Export alle sammen som metoder i vores obejkt appservice 
const appService = {
  getList,
  getDetails,
  create,
  update,
  remove,
  login,
  logout,
};

export default appService;
