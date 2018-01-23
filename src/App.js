import React, { Component } from 'react';
import CustomImage from './Components/CustomImage/customImage';
import Star from './Images/Star.png';
import ColoredStar from './Images/coloredStar.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomImage 
        selectedImage={ColoredStar}
        image={Star}
        Imagecount='5' />
      </div>
    );
  }
}

export default App;
