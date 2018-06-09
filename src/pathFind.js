const pathFind = function (object, path) {
  const value = 'something'
  if (path.length === 1) {
    object[path[0]] = v;
  } else {
    var key = path.shift();
    object[key] = pathFind(typeof object[key] === 'undefined' ? {} : object[key], path, value);
  }

  return object;
};

module.exports = {pathFind}
