import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-cbdaa/us-central1/api'
});

export default instance;


//For actual payments use this URL --> 'https://us-central1-clone-cbdaa.cloudfunctions.net/api'

//For testing and debugging purposes, we can use this URL --> 'http://localhost:5001/clone-cbdaa/us-central1/api'