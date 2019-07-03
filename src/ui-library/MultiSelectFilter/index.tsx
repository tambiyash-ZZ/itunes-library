import * as React from 'react';
import { Select as StyledSelect } from './style';
import { Label } from '../Label';

export { SelectWrapper } from './style';

export interface ISelect {
  type: string;
  values: string[];
}

interface ISelectProps {
  select: ISelect;
  onChange(selectData: ISelect): void;
}

export default class Select extends React.Component<ISelectProps, {}> {
  public render() {
    const { select } = this.props;
    return (
      <React.Fragment>
        <Label>{`${select.type} `}</Label>
        <StyledSelect name={select.type} onChange={this.handleChange}>
          <option value=''>Select</option>
          {this.getSelectOptions(select)}
        </StyledSelect>
      </React.Fragment>  
      
    )
  }
 
  private getSelectOptions = (select: ISelect) => {
    return select.values.map(value => <option key={value} value={value}>{value}</option>);
  }

  private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { onChange } = this.props;
    event.target.value !== '' && onChange({type: event.target.name, values: [event.target.value]}); 
  }
}