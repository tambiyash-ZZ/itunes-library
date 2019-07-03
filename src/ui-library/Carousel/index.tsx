import * as React from 'react';
import {
    CarouselContainer,
    Slider,
    SlideControl,
    ISliderProps,
} from './style';

import {getReactChildrenCount} from '../../utils/helpers';

interface ICarouselProps {}

interface ICarouselState {
  currentSlideIndex: number;
}

export default class Carousel extends React.Component<ICarouselProps, ICarouselState> {
  public state: ICarouselState = {
    currentSlideIndex: 1,
  }

  public render() {
    return (
      <CarouselContainer>
        {this.getSlides()}
        <SlideControl rightControl={false} onClick={this.previous}>&#10094;</SlideControl>
        <SlideControl rightControl={true} onClick={this.next}>&#10095;</SlideControl>
      </CarouselContainer>
    )
  }

  private next = () => {
    const { children } = this.props;
    // Set the index to the next index or the first index
    this.setState(prevState => {
      const nextIndex = prevState.currentSlideIndex + 1;
      return {
        ...prevState,
        currentSlideIndex: nextIndex > getReactChildrenCount(children) ? 1 : nextIndex,
      };
    });
  }

  private previous = () => {
    const { children } = this.props;
    // Set the index to the previous index or the last index
    this.setState(prevState => {
      const prevIndex = prevState.currentSlideIndex - 1;
      return {
        ...prevState,
        currentSlideIndex: prevIndex < 1 ? getReactChildrenCount(children) : prevIndex,
      };
    });
  }

  private getSlides = (): JSX.Element[] => {
    const { children } = this.props;
    const { currentSlideIndex } = this.state;

    return React.Children.map(children, (child, index) => {
      return(
        <Slider active={currentSlideIndex - 1 === index}>
          {child}
        </Slider>
      );
    });
  }
}

