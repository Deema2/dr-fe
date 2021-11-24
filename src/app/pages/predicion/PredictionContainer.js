import { connect } from 'react-redux';
import PredictionComponent from './PredictionComponent';
import { predict } from '../../../redux/prediction/prediction.actions'

const mapStateToProps = (state) => {
    return {
        predictionProps: state.prediction,
    }
};
const mapDispatchToProps = dispatch => ({
    predict: (predictionData) => dispatch(predict(predictionData)),
});


export const PredictionContainer = connect(mapStateToProps, mapDispatchToProps)(PredictionComponent);