var Api = require('../utils/api');
var Reflux = require('reflux');

module.exports = Reflux.createStore({
  getTopics: function(){
    return Api.get("topics/defaults")
      .then(function(res){
        this.topics = res.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function(){
    //this in fact is calling the function onChange in topic-list.jsx
    this.trigger('change',this.topics);
  }
});