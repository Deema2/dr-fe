import * as types from './prediction.types'
import { RSAA } from 'redux-api-middleware'




export const predict = (imgBase64) =>{



    console.log(imgBase64)
    imgBase64 = imgBase64.replace("data:image/png;base64,", "");
    imgBase64 = imgBase64.replace("data:image/jpeg;base64,", "");
    imgBase64 = imgBase64.replace("data:image/jpg;base64,", "");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "application/json");
    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: imgBase64,
    //     redirect: 'follow'
    //   };
      
    //   fetch("https://84qndld5j6.execute-api.us-east-2.amazonaws.com/testing", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log("ddddddddddddddddddddd",result))
    //     .catch(error => console.log('error', error));








    // var raw = getBase64(imgData.get('retina_img')).then(
    //     data => {console.log(data)
    //      raw = raw.replace("data:image/png;base64,", "");
    //     raw = raw.replace("data:image/jpeg;base64,", "");
    //      raw = raw.replace("data:image/jpg;base64,", "");

    //     }
    //   );
    // console.log("------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxx-----------")
    // console.log(raw)
    // raw = raw.replace("data:image/png;base64,", "");
    // raw = raw.replace("data:image/jpeg;base64,", "");
    // raw = raw.replace("data:image/jpg;base64,", "");

    return {
        [RSAA]: {
            types: [
                types.PREDICTION_REQUEST,
                types.PREDICTION_SUCCESS,
                {
                    type: types.PREDICTION_FAIL,
                    payload: async (action, state, res) => {
                        return await res;
                    }
                }
            ],
            // endpoint: '/testing',
            endpoint: 'https://84qndld5j6.execute-api.us-east-2.amazonaws.com/testing',
            method: 'POST',
            headers: { 'Content-Type': 'application/json',

         },
            body: imgBase64,
        },
    };
}

export const returnStateToDefault = () =>{
    console.log("returnStateToDefault")
    return {
        type: types.DEFAULT_STATE,
        body: {}
      };

}