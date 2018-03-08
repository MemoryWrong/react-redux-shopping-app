import * as constants from "./constant";

// class Service {
    export function getItems(params){
        let url = constants.API_ENDPOINT + constants.API_KEY;
        console.log(url);
        fetch(url).then((res)=>{
           return res.json();
        }).then((result)=>{
            console.log(result);
        });
    }
// }
// export default Service;