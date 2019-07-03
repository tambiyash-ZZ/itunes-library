import * as React from 'react';
import { CalloutWrapper, Callout, CalloutIcon} from './style';

export interface ICalloutProps {
  withIcon?: boolean;
}

export default class index extends React.Component<ICalloutProps, {}> {
  render() {
    const {withIcon, children} = this.props;
    return (
      <CalloutWrapper>
        <CalloutIcon className={'fa fa-warning'} />
        {withIcon && <Callout>
          {children}
        </Callout>}
      </CalloutWrapper>
    )
  }
}

