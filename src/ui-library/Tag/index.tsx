import * as React from 'react';
import { Tag as TagSpan, RemoveButton, TagText, ButtonIcon } from './style';

export interface ITagProps {
    primary?: boolean;
    round?: boolean;
    value: string;
    type?: string;
    onRemove?(value: string, type: string): void;
}

export default class Tag extends React.Component<ITagProps, {}> {
  public render() {
    const { value, onRemove, type } = this.props;

    return (
      <TagSpan>
        <TagText>{value}</TagText>
        { onRemove && 
          <RemoveButton name={type} type={'button'} onClick={this.handleClick}>
            <ButtonIcon className={'fa fa-times'} />
          </RemoveButton>
        }
      </TagSpan>
    )
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.props.onRemove ? this.props.onRemove(this.props.value, event.currentTarget.name) : undefined;
  }
}

