import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import { predictionReducer } from './prediction/prediction.reducer'

export default combineReducers({
    intl: intlReducer,
    prediction: predictionReducer,
})
