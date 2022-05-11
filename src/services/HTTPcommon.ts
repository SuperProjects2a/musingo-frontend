import axios from "axios";

export default axios.create({
    baseURL: "https://musingo-backend.azurewebsites.net/api",
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})
//https://localhost:7062/api
//https://musingo-backend.azurewebsites.net/api