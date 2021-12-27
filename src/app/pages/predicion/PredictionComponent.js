import React, { Component } from 'react'
// import NavBar from '../../shared/components/NavBar'
// import LoginForm from './components/LoginForm'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap';
import './style/index.scss'
import Navbar from './components/Navbar'
import Draganddrop from './components/Draganddrop'
import pred1 from '../../../assets/imgs/pred1.png'
import pred2 from '../../../assets/imgs/pred2.png'
import pred3 from '../../../assets/imgs/pred3.png'
import pred4 from '../../../assets/imgs/pred4.png'
import footer from '../../../assets/imgs/footerimg.png'
import Spinner from 'react-bootstrap/Spinner'
const styles = theme => ({
    button: {
      borderRadius: 10,
      backgroundColor: "#1B204C",
      color: 'white',
      width: '100%',
      height: '30%',
      fontSize: '15px'
    },
    loader: {
      color: '#6798e5',
      animationDuration: '600ms',
    },
  });

class PredictionComponent extends Component {
    // login = (loginData) => {
    //     this.props.login(loginData)
    // }

    constructor(props) {
        super(props);
        this.state = {
         retinaImg:"",
         retinaImgName:"",
         displayPred:false,
         displayDefault: true
        }
    
      }


    onImgUpload = (e) =>{
      var image = this.ddl.get_image()
      //TODO: Add error msg & handling
      // console.log(image.name)
      // console.log(image.name)
        // console.log(e.target.name)
        // console.log(e.target.files[0].name)
        if (image !== undefined) {
        //   this.setState({retinaImgName: e.target.files[0].name, retinaImg: e.target.files[0]})
  
          // var formdata = new FormData();
          // formdata.append("retina_img", image, image.name);
          this.props.predict(image)
          this.setState({displayPred:true})
        }
    }

    onPredictionClick = () => {


          var formdata = new FormData();
          formdata.append("retina_img",this.state.retinaImg);
          // this.props.predict(formdata)
          window.scrollTo(0, 0)
    
      }

      getPredClassImage = (_class) => {
        switch (_class) {
          case ("1"):
            return pred1
          case ("2"):
            return pred2
          case ("3"):
            return pred3
          case ("4"):
            return pred4         
        }

      }




      changeStatusOfPredBlock = () =>{
        if (this.props.predictionProps.ok)
          this.setState({displayPred:true})
        else
         this.setState({displayPred:true})
      }

      updateComponents = () =>{
        console.log("returnStateToDefault")
        this.turnOnDefDisplay()
        this.props.returnStateToDefault()
      }

      turnOffDefDisplay = () =>{
        this.setState({displayDefault: false})
      }

      turnOnDefDisplay = () =>{
        this.setState({displayDefault: true})
      }


      getMessage = (label) =>{
        if (label === "0"){
          return (<p className = "predResultTxt">
          The model predicts that you have <span className = "predProbabilityTxt0"> no risk </span>  of developing diabetic retinopathy
        </p>)
        }
        else{
          return(<p className = "predResultTxt">
                    {/* {this.props.predictionProps.predictionMsg} */}
                    There is a probability of <span className = "predProbabilityTxt">{this.props.predictionProps.predProbability}</span> that the patient has diabetic retinopathy with severity of
                  </p>)
        }
      }

    render() {
        // console.log(this.props.predictionProps.predictionMsg)
        // this.changeStatusOfPredBlock()
        const { classes } = this.props;
        console.log("---")
        console.log(this.props.predictionProps.predProbability === "")
        return (
            <div className = "outer-cont" >
              <Navbar />
              <hr />
            <Container className = "inner-cont">

              <Col>
                <Row>
                  <Col className = "displayBox">
                  <div className = "ddlBox">
                  <Draganddrop onRef={ref => (this.ddl = ref)} 
                  turnOffDefDisplay = {this.turnOffDefDisplay}
                  defaultPrev = {this.state.displayDefault}/>
                  </div>
                  <div className = "resultBox" style = {{display: this.props.predictionProps.ok? 'block' : 'none'}} >
                  <div style = {{display: this.props.predictionProps.predProbability === ""? 'none': 'block'}}>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  {this.getMessage(this.props.predictionProps.predClass)}
                  {/* <p className = "predResultTxt">
                    {/* {this.props.predictionProps.predictionMsg} */}
                
                  </div>
                  <br />
                  {this.props.predictionProps.predClass !== "0"?
                  <div className="displayBox">
                    <img src={this.getPredClassImage(this.props.predictionProps.predClass)} height = "300px" width = "450px"/>
                    </div>: ""}
                  </div>
                  </Col>
                </Row>
                <br />
                <div style = {{display: this.props.predictionProps.ok? 'none' : 'block'}}>
                  
                  <Row
                  className="runBtnContainer"
                  className = "justify-content-center"
                  >
                      <Row
                      className = "runBtnInnerContainer"
                      >
                    <Button
                        variant="contained"
                        component="label"
                        className={classes.button}
                        onClick={this.onImgUpload}
                        >
                          {this.props.predictionProps.loading?
                          <Spinner animation="grow" variant="secondary" />: <p className="buttonTxt">
                          Run
                            </p>
                        }
                       
                          
                        </Button> 
                     </Row>                 
                     </Row>
                </div>
                <br/>
                <br/>
                <Row>
                  <Col className="footer" lg={9} md={9}>
                    {/* <img src = {footer} /> */}
                    
                  </Col>
                  <Col lg={3} md={3}>
                    <button onClick = {this.updateComponents} className="uploadAnotherImgBtn">
                    Upload another image
                    </button>
                   
                  </Col>
                </Row>
                <br/>
                <br/>
                <br/>

              </Col>               
               
        </Container>   
             </div>
        )
    }
}
export default withStyles(styles)(PredictionComponent);
