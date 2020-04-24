/* 
File: geotabtoelasticsearch.js


References:
    https://geotab.github.io/sdk/software/api/clients/
    https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/
    https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/update_examples.html
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

Dependancies:
    npm install mg-api-node --save


    */

const API = require('mg-api-node');
// const API = require('elasticsearch');

const { Client } = require('elasticsearch')
const client = new Client({ node: 'http://localhost:9200' })


var username = ''
var password = ''
var database = ''
var global_devices  = "initial"

var api = new API(username, password, database);
// var api = new API('user@example.com', 'password', 'database');
api.authenticate(function(err, result) {
    if(err){
    console.log('Error', err);
    return;
    }

    // /*

    api.call('Get', {
    typeName: 'Device',
    resultsLimit: 2000
    }, function(err, devices) {
    if(err){
        console.log('Error', err);
        // return;
    }
    // console.log('Devices', devices);
    global_devices = devices
    console.log("listing devices for indexing");
    var device_count = 1
    for (let device of global_devices) {
        console.log(device);

        try {
            client.index({
                index: 'geotab',
                body: device
                })
            device_count = device_count + 1;
          }
          catch(err) {
            console.log("An exception occurred with this document #:");
            console.log(device_count)
            console.log(device);
          }
          
    
    }
    

    });


}); // end authenticate
   



