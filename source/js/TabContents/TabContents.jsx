import React from 'react';
import classNames from 'classnames';

import TabContentsWeb from './TabContentsWeb.jsx';
import TabContentsHTTP from './TabContentsHTTP.jsx';


export default class TabContents extends React.Component {


  // Component constructor.
  constructor() {
    super();
  }

  // Component render.
  render() {
    return (
      <div className='container-tab-contents'>
        <TabContentsWeb active={this.props.activeTab == 0} />
        <TabContentsHTTP active={this.props.activeTab == 1} />
      </div>
    )
  }

}
