import react from 'react';
import axios from '../../axios';

export default function GetGraph(endpoint, callback) {
    axios.get("/chart/" + endpoint).then(
        (response) => {
            console.log("getgraph.js");
            return response.data;
        }
    );

}

