import * as types from './prediction.types'
import { RSAA } from 'redux-api-middleware'




const getBase64 = (file) => {
    console.log(file)
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });}

export const predict = (imgBase64) =>{
    console.log(imgBase64)
    imgBase64 = imgBase64.replace("data:image/png;base64,", "");
    imgBase64 = imgBase64.replace("data:image/jpeg;base64,", "");
    imgBase64 = imgBase64.replace("data:image/jpg;base64,", "");

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
            endpoint: 'https://84qndld5j6.execute-api.us-east-2.amazonaws.com/testing',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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