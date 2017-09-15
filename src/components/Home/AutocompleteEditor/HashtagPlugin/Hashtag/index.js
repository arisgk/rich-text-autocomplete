import React from 'react';
import { fromJS } from 'immutable';
import unionClassNames from 'union-class-names';

const Link = ({ model, children, className }) =>
  (<a
    href={model.get('link')}
    className={className}
    spellCheck={false}
  >
    {children}
  </a>);

const Text = ({ children, className }) =>
  (<span
    className={className}
    spellCheck={false}
  >
    {children}
  </span>);

const Hashtag = (props) => {
  const {
    entityKey,
    theme = {},
    component,
    children,
    decoratedText,
    className,
    contentState,
  } = props;

  const combinedClassName = unionClassNames(theme.hashtag, className);
  const hashtag = fromJS(contentState.getEntity(entityKey).getData().hashtag);

  const Component = (
    component || (hashtag.has('link') ? Link : Text)
  );

  return (
    <Component
      entityKey={entityKey}
      hashtag={hashtag}
      theme={theme}
      className={combinedClassName}
      decoratedText={decoratedText}
    >
      {children}
    </Component>
  );
};

export default Hashtag;
