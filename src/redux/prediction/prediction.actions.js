import * as types from './prediction.types'
import { RSAA } from 'redux-api-middleware'

export const predict = (imgData) =>{
    console.log(imgData)
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
            endpoint: '/predict',
            method: 'POST',
            headers: {},
            body: imgData,
        },
    };
}

