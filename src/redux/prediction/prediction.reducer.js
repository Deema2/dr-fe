import * as types from './prediction.types';
// import * as functions from '../reduxFunctions'
// import { Container, Row, Col } from 'react-bootstrap';

const initialState = {
    errorCode: "",
    errorMsg: "",
    loading: false,
    ok: false,
    token: "",
    code: "",
    // predictionMsg:"",
    predProbability:"",
    predClass:""
};

export const predictionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.PREDICTION_REQUEST:
            return {
                ...state,
                loading: true,
                errorMsg: "",
                errorCode: "",
                predProbability:"",
                predClass:"",
                ok: false
                // predictionMsg:"",
            };
        case types.PREDICTION_SUCCESS:
            console.log("REDUX",action.payload['Probability:'])
            //TODO: add condition
            return {
                ...state,
                loading: false,
                ok: true,
                // predictionMsg: action.payload,
                predProbability: action.payload['Probability:'],
                predClass: action.payload['Class:'],
                errorMsg: action.payload.message,
            };
        case types.PREDICTION_FAIL:
            return {
                ...state,
                loading: false,
                predProbability:"",
                predClass:"",
                ok: false,
                errorCode: action.payload.status,
                // errorMsg: functions.getErrorMessage(action.payload.status)
            };

        default:
            return state;
    }
};