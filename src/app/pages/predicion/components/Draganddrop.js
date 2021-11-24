import React, { Component } from 'react'
// import NavBar from '../../shared/components/NavBar'
// import LoginForm from './components/LoginForm'
import { withStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/index.scss'

const styles = theme => ({
    loader: {
    },
  });


class Draganddrop extends Component {
  constructor() {
    super();
    this.state = {
      className: 'drop-zone-hide',
      fileURL: "",
      image: ""
    }
    this._onDragEnter = this._onDragEnter.bind(this);
    this._onDragLeave = this._onDragLeave.bind(this);
    this._onDragOver = this._onDragOver.bind(this);
    this._onDrop = this._onDrop.bind(this);
  }

    
  componentDidMount() {
    document.getElementById('dragbox').addEventListener('mouseup', this._onDragLeave);
    document.getElementById('dragbox').addEventListener('dragenter', this._onDragEnter);
    document.getElementById('dragbox').addEventListener('dragover', this._onDragOver);
    document.getElementById('dragbox').addEventListener('dragleave', this._onDragLeave);
    document.getElementById('dragbox').addEventListener('drop', this._onDrop);
    this.props.onRef(this)

  }


  _onDragEnter(e) {
    this.setState({ className: 'drop-zone-show' });
    e.stopPropagation();
    e.preventDefault();
    console.log("_onDragEnter HIII")
    return false;
  }

  _onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("_onDragOver HII")
    return false;
  }
  
  _onDragLeave(e) {
    this.setState({className: 'drop-zone-hide'});
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  
  _onDrop(e) {
    e.preventDefault();
    let files = e.dataTransfer.files;
    console.log('Files dropped: ', files);
    // Upload files
    this.setState({className: 'drop-zone-hide', image: files[0]});
    this.showFile(files[0])
    return false;
  }

  get_image(){
      return this.state.image
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this._onDragLeave);
    window.removeEventListener('dragenter', this._onDragEnter);
    window.addEventListener('dragover', this._onDragOver);
    document.getElementById('dragbox').removeEventListener('dragleave', this._onDragLeave);
    window.removeEventListener('drop', this._onDrop);
    this.props.onRef(null)
  }

   showFile(file){
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if(validExtensions.includes(fileType)){ //if user selected file is an image file
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
          // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
        // let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
        // dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
        this.setState({fileURL: fileURL})
      }
      fileReader.readAsDataURL(file);
    }else{
      alert("This is not an Image File!");
    //   dropArea.classList.remove("active");
    //   dragText.textContent = "Drag & Drop to Upload File";
    }
  }

  render() {
    const { classes } = this.props;
    return (
       <div id="dragbox" className="drag-area">
          <div className="icon"><i className="fas fa-cloud-upload-alt"></i></div>
          <p className = "dnd-txt1">Drag your image here</p> 
          <p className = "dnd-txt2">PNG and JPEG are allowed </p>
          <img src = {this.state.fileURL? this.state.fileURL: ""} />
          <input type="file" hidden />
        </div>
    )
}

}

  export default withStyles(styles)(Draganddrop);
