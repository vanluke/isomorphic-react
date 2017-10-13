import React from 'react';

const withSSR = (Component, epics) => {
  const ComponentWithEpic = props => (<Component {...props} />);

  ComponentWithEpic.epics = [...epics];

  return ComponentWithEpic;
};

export default withSSR;
