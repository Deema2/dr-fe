import { connect } from 'react-redux';
import PredictionComponent from './PredictionComponent';
import { predict, returnStateToDefault } from '../../../redux/prediction/prediction.actions'

const mapStateToProps = (state) => {
    return {
        predictionProps: state.prediction,
    }
};
const mapDispatchToProps = dispatch => ({
    predict: (predictionData) => dispatch(predict(predictionData)),
    returnStateToDefault: () => dispatch(returnStateToDefault())
});


export const PredictionContainer = connect(mapStateToProps, mapDispatchToProps)(PredictionComponent);