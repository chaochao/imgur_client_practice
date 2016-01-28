var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
module.exports = React.createClass({
  mixins:[
    //8. listen to any event in TopicStore trigger onChange function
    Reflux.listenTo(TopicStore,'onChange')
  ],
  getInitialState: function(){
    return {
      //1. start with array so the map function works
      // even no elements
      topics: [] 
    }
  },
  componentWillMount: function(){
    // 2. action will take care of get data
    // goto action
    Actions.getTopics();
  },
  render: function(){
    //10. show it
    return  <div className="list-group">
      Topic List
      {this.renderTopics()} 
    </div>
  },
  renderTopics: function(){
    return this.state.topics.map(function(topic){
      return <li>{topic}</li>
    });
  },
  onChange: function(event,topics){
    console.log(event);
    //9. set topics and render the component
    this.setState({topics:topics});
  }
});