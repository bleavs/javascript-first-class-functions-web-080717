function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(){
  var fn = function(){"named"}
  return fn;
}

function returnsAnAnonymousFunction(){
  return () => {};
}
