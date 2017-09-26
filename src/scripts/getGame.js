import axios from 'axios';

const api = 'https://steam-random.herokuapp.com/';

export const GetGame = (steamid, callback) => {
    console.log('steamid', steamid);
    axios.post(api, {
        'steamid': steamid
    })
    .then(function(res){
        callback(res);
    })
    .catch(function(err){
      callback(err);  
    })
};