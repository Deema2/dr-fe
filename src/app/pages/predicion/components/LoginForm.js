import React, { Component } from 'react'
import InputField from '../../../shared/components/InputField'
import Button from '@material-ui/core/Button';
import { Container, Row } from 'react-bootstrap';
import '../style/index.scss'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      borderRadius: 10,
      backgroundColor: "#af8f61",
      color: 'white',
      width: '50%',
      height: '10%',
      fontSize: '15px'
    },
    loader: {
      color: '#6798e5',
      animationDuration: '600ms',
    },
    registerButton:{
    color:'#102129',
    textDecoration: 'underline !important',
    fontWeight: '700',
    'margin':0,
    'padding':0,
    }
  });
  

class LoginForm extends Component {


    onLoginClick = () => {
    //  this.props.getCities()
        if (this.EmailField.getErrorStatus() || this.PasswordField.getErrorStatus()) {
          document.getElementById("msg-p").innerHTML = "Please fill all required fields";
        }
        else {
          var loginData = {
            email: this.EmailField.getInputValue(),
            pwd: this.PasswordField.getInputValue()
        }
          this.props.login(loginData)
        }
    
      }

      renderErrorMsg = () => {
        if (this.props.loginState.loading)
          return ""
        else if (!this.props.loginState.ok)
          return this.props.loginState.errorMsg
        else if (this.props.loginState.errorCode !== "")
          return this.props.loginState.errorMsg
    
      }
    
      onRegisterClick = () =>{
        this.props.history.push('/register')
      }

    render() {
        const { classes, loginState, t } = this.props;
          console.log(t)
        return (
        <Container className = "login-cont">
            <Row className = "centered-container">
            <p className = "login-title">{t('LoginPage.loginTitle')}</p>
                </Row>
              <Row className = "centered-container">
            <p id="msg-p" className="error-msg">
              {this.renderErrorMsg()}
            </p>
          </Row>

        <Row dir={this.props.generalProps.is_rtl? "rtl":""}>
           <p className="form-label">
               
               {t('LoginPage.email')}
           </p>
        </Row>
  
        <Row dir={this.props.generalProps.is_rtl? "rtl":""}>
            <InputField 
            placeholder = {t('LoginPage.emailFieldMsg')}
            onRef={ref => (this.EmailField = ref)}
            maxLength = {50}
            inputName = {"email"}
            type = {""}
            />
           
           </Row>
           <br />
           <Row dir={this.props.generalProps.is_rtl? "rtl":""}>
           <p className="form-label">
               {t('LoginPage.password')}
           </p>
           </Row>
           <Row dir={this.props.generalProps.is_rtl? "rtl":""}>
           <InputField 
           
           placeholder = {t('LoginPage.passwordFieldMsg')}
           onRef={ref => (this.PasswordField = ref)}
           inputName = {"password"}
           maxLength = {50}
           type = {"password"}

           />
           </Row>
           <br />
           <br />
           <Row className = "centered-container">
           <Button
              onClick={() => this.onLoginClick()}
              variant="contained"
              className={classes.button}
              disabled={loginState.loading ? true : false}
            >
              {loginState.loading ?
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  className={classes.loader}
                  size={25}
                  thickness={4}
                /> : t('LoginPage.signIn')}
            </Button>
           
           </Row>

           <Row>
             
             <Button  onClick = {()=>{this.props.history.push('/forget-password')}} 
              style={{ backgroundColor: 'transparent' }}
             className= {this.props.generalProps.is_rtl? "forget-pw text-left":"forget-pw text-right"} >
             
             {t('LoginPage.forgetPassword')}
             </Button>
     

         </Row>
           <br />
           <br />
           <Row className = "centered-container" style = {{flexDirection:this.props.generalProps.is_rtl?'row-reverse':'row'}}>
              <span> {t('LoginPage.newMember')}</span> 
              &nbsp;
               <span> <Button onClick={() => this.onRegisterClick()} className ={classes.registerButton}>{t('LoginPage.registerNow')}</Button></span>
           </Row>
           <br />
        </Container>
        )
    }
}

export default withStyles(styles)(LoginForm);