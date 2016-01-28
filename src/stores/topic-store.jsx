var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  // 4. here listen to the actions
  //listenables is belong to reflux
  //anything triggerd in the actions
  //it will run the same name function
  listenables:[Actions],

  getTopics: function(){
    //5. this will trigger a api call
    return Api.get("topics/defaults")
      .then(function(res){
        this.topics = res.data;
        //6. trigger event
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function(){
    //7. this in fact is calling the function onChange in topic-list.jsx
    this.trigger('change',this.topics);
  }
});