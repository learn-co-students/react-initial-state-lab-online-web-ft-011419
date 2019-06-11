

import React from 'react';

class ImageSlider extends React.Component {

    // create constructor
    constructor() {
        super()
        // set initial state to property currentSlideIndex equal to the first in index [0]
        this.state = {
            currentSlideIndex: 0
        }
    }

    // ImageSlider should render the text "I am on a slide {currentSlideIndex}"
    render() {
        return (
            <h1>I am on slide {this.state.currentSlideIndex}</h1>
            )
        }
    }

    export default ImageSlider;