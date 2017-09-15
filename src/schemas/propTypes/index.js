export const mentionSuggestions = (props, propName, componentName) => {
  if (!List.isList(props[propName])) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. should be an instance of immutable list.`
    );
  }
  return undefined;
},
