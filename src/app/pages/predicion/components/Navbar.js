import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import '../style/index.scss'
import { withStyles } from '@material-ui/core/styles';
import leanlogo from '../../../../assets/imgs/Lean Logo.svg'
import kkeshlogo from '../../../../assets/imgs/kkeshlogo.png'
import eye from '../../../../assets/imgs/eye.svg'

const styles = theme => ({
    button: {
      borderRadius: 10,
      backgroundColor: "#af8f61",
    },
 
  });
  

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
        <Row>
            <Col>
                <img alt="eye"
                src = {eye}
                width = "125px" height = "105px" />
            </Col>

            <Col>
            <Row>

            <Col style = {{display:'flex',justifyContent:'right'}}>
                 <img alt = "retina"
                src={kkeshlogo}
                width="180px" height="80px"
                />
                </Col>
            
            <Col style = {{display:'flex', justifyContent:'left'}}>
                <img alt = "retina"
                src={leanlogo}
                width="90px" height="80px"
                />
                </Col>
              
               
                </Row>
            </Col>

            <Col>
            <p className = "nav-title">
            تنبؤ العين السكرية
            </p>
                
            </Col>
        </Row>     
        )
    }
}

export default withStyles(styles)(Navbar);