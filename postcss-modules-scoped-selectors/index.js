var postcss = require('postcss');

module.exports = postcss.plugin('postcss-modules-scoped-selectors', function (options) {
  return function(css) {
    css.eachRule(function(rule) {
      if(rule.parent.type === "atrule" && /keyframes$/.test(rule.parent.name)) {
        // ignore keyframe rules
        return;
      }

      // This is an obviously temporary hack
      if (rule.selector === '*') {
        rule.selector = '.TAG__ALL';
      } else if (rule.selector[0] !== '.') {
        rule.selector = '.TAG__' + rule.selector;
      }
    });
  };
});
