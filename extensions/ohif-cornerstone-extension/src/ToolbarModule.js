import React, { Component } from 'react';
import ConnectedToolbarSection from './ConnectedToolbarSection';
import { ToolbarButton } from 'react-viewerbase';
import ConnectedCineDialog from './ConnectedCineDialog';

class ToolbarModule extends Component {
  state = {
    cineDialogOpen: false
  };

  onClickCineToolbarButton = () => {
    this.setState({
      cineDialogOpen: !this.state.cineDialogOpen
    });
  };

  render() {
    const cineDialogContainerStyle = {
      display: this.state.cineDialogOpen ? 'block' : 'none',
      position: 'absolute',
      top: '82px',
      zIndex: 999
    };

    return (
      <div className="ToolbarModule">
        <ConnectedToolbarSection />
        <ToolbarButton
          active={this.state.cineDialogOpen}
          onClick={this.onClickCineToolbarButton}
          text={'CINE'}
          iconClasses={'fab fa-youtube'}
        />
        <div className="CineDialogContainer" style={cineDialogContainerStyle}>
          <ConnectedCineDialog />
        </div>
      </div>
    );
  }
}

export default ToolbarModule;
