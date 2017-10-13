export default ({dispatch, component, params}) => {
  const promises = (component
    && component.serverConnect
    && component.serverConnect
      .map(c => dispatch(c(params))));
  return Promise.all(promises || [Promise.resolve()]);
};
