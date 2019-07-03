import * as React from 'react';
import { SliderInput } from './style';

interface ISliderProps {
  value: number;
  min: number;
  max: number;
  onChange(value: number): void;
}

export default class Slider extends React.Component<ISliderProps, {}> {
  public render() {
    return (
      <SliderInput type={'range'} {...this.props} onChange={this.handleChange} />
    )
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(parseInt(event.target.value));
  }
}
