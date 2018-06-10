const pathFind = (path,object) => {
  const reducer = (acc, key) => ((acc && acc[key] !== 'undefined') ? acc[key] : undefined);
  return path.reduce(reducer, object);
};

module.exports = {pathFind}