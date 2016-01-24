var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKEY = '8ffd9a1aec90815' //normally don't save it in github

module.exports = {
  get: function(url){
    return fetch(rootUrl + url, {
      headers:{
        'Authorization': 'Client-ID '+ apiKEY
      }
    })
    .then(function(response){
      return response.json();
    });
  }
};
// Api.get('toptics/defaults')
// .then(function(data){
// //do something
// });