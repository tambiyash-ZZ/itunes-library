import { SearchWrapper, SearchInput, SearchButton } from './style';
import * as React from 'react';

interface ISearchProps {
  placeholder?: string;
  value: string;
  onSubmit(value: string): void;
}

interface ISearchState {
  value: string;
}

export default class SearchBox extends React.Component<ISearchProps, ISearchState> {
  public state: ISearchState = {
    value: this.props.value,
  }

  public render() {
    const { placeholder } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <SearchWrapper>
          <SearchButton iconButton={true} type="submit"><span className={'fa fa-search'} /></SearchButton>
          <SearchInput type='text' placeholder={placeholder || 'Search..'} value={this.state.value} onChange={this.handleChange} />
        </SearchWrapper>
      </form>
    )
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ value: event.currentTarget.value });
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return this.props.onSubmit(this.state.value);
  }
}