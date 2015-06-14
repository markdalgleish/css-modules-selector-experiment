// This could form the basis of a loader that consumes the output of 'css-loader'
// and returns a copy of React with a wrapped `createElement` method.

import React from 'react';

const computeClass = (styles, tag, attrs) => {
  const tagClass = `TAG__${tag}`;

  return (

    (styles.TAG__ALL && styles.TAG__ALL + ' ' || '') +

    (styles[tagClass] && styles[tagClass] + ' ' || '') +

    (attrs && attrs.className && attrs.className || '')

  ).trim();
};

const lowercaseRegExp = /[a-z]/;

const createElement = (styles) => (tag, attrs, ...children) => {
  const computedAttrs = typeof tag === 'string' && lowercaseRegExp.test(tag[0]) ?
    { ...attrs, ...{ className: computeClass(styles, tag, attrs) }} :
    attrs;
  return React.createElement(tag, computedAttrs, ...children);
};

export default (styles) => {
  return { ...React, ...{ createElement: createElement(styles) } }
};
