'use strict'

const btn  = document.querySelector('.btn-user');
const usercontainer  = document.querySelector('.users');

var text = document.getElementById("text");
var asc = "cxc xzc";

const request = new XMLHttpRequest();
request.open('GET','https://random-data-api.com/api/users/random_user?size=20');
request.send();
console.log(request.responseText);

request.addEventListener('load',function()
{
    const us = JSON.parse(this.responseText);
    // var keys = Object.keys(us);
    // var data =[];
    // data.push(us);
    extractJSON(us, '');
});

function extractJSON(obj, indent) {
  for (const i in obj) {
    if (Array.isArray(obj[i]) || typeof obj[i] === 'object') {
      //console.log(indent + i + ' is array or object');
      extractJSON(obj[i], indent + ' > ' + i + ' > ');
    } else {
    
      console.log(indent + i + ': ' + obj[i]);
    }
  }
}
