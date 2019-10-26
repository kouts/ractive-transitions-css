(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.Ractive = global.Ractive || {}, global.Ractive.transitions = global.Ractive.transitions || {}, global.Ractive.transitions.css = factory()));
}(this, (function () { 'use strict';

  function ractiveTransitionsCss(t, params) {
    var opts = Object.assign({
      in: 'r-in-class',
      out: 'r-out-class'
    }, params || {});

    var handler = function(e) {
      t.node.removeEventListener('animationend', handler);
      t.node.classList.remove(opts.in);
      t.node.classList.remove(opts.out);
      t.complete();
    };

    if(t.isIntro){
      t.node.classList.remove(opts.out);
      t.node.classList.add(opts.in);
    } else {
      t.node.classList.remove(opts.in);
      t.node.classList.add(opts.out);
    }
    t.node.addEventListener('animationend', handler);
  }

  return ractiveTransitionsCss;

})));
//# sourceMappingURL=ractive-transitions-css.umd.js.map
