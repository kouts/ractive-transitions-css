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

export default ractiveTransitionsCss;
//# sourceMappingURL=ractive-transitions-css.es.js.map
