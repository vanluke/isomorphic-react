import React from 'react';
import PropTypes from 'prop-types';

export const makeComponentSync = (chunkName, module) => {
  const Component = module.default ? module.default : module;

  const SyncComponent = (props) => {
    if (props.staticContext.splitPoints) {
      props.staticContext.splitPoints.push(chunkName);
    }
    return (<Component {...props} />);
  };

  SyncComponent.displayName = Component.name || 'Component';
  SyncComponent.serverConnect = Component.epics;

  SyncComponent.propTypes = {
    staticContext: PropTypes.shape({
      splitPoints: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  };

  return SyncComponent;
};

export default makeComponentSync;
