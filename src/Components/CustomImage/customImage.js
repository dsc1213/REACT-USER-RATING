import React, {Component, PropTypes} from 'react';
import './customImage.css';

export default class CustomImage extends Component {
  static propTypes = {
      image: PropTypes.isRequired,
      selectedImage: PropTypes.isRequired,
      Imagecount: PropTypes.number.isRequired
  }
  constructor(props) {
      super(props);
      this.state = {
          image: this.props.image,
          selectedImage: this.props.selectedImage,
          Imagecount: this.props.Imagecount,
          clickedImageNumber: 0
      }
      //  this.onImageClick =  this.onImageClick.bind(this);
  }

  onImageClick(clickedImageNumber) {
      this.setState({clickedImageNumber: clickedImageNumber});
  }

  render() {
      const {image, selectedImage, Imagecount, clickedImageNumber} = this.state;
      let imageNumber = 1;
      let customImages = [];
      while (imageNumber <= Imagecount) {
          if (imageNumber <= clickedImageNumber) {
              customImages.push(<img
                  src={selectedImage}
                  alt="logo"
                  className='CustomImage'
                  key={imageNumber}
                  onClick={this
                  .onImageClick
                  .bind(this, imageNumber)}/>);
          } else {
              customImages.push(<img
                  src={image}
                  alt="logo"
                  className='CustomImage'
                  key={imageNumber}
                  onClick={this
                  .onImageClick
                  .bind(this, imageNumber)}/>);
          }

          imageNumber++;
      }
      return (
          <div >
              <div className="App-header">
                  <h2>Welcome to React User Rating</h2>
                  {customImages}
              </div>
          </div>
      );
  }
}
