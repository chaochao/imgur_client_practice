var Reflux = require('Reflux');
//3. listen to any store that have this set of actions
//then go to topic-store.jsx
module.exports = Reflux.createActions([
  'getTopics'
  ]);