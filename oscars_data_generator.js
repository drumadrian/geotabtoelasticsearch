'use strict'
const AWS = require('aws-sdk')
const firehose = new AWS.Firehose({ region: 'us-west-2' })
const firehose = new (require('aws-sdk/clients/firehose'))({ region: 'us-west-2' })
const env = require('./env.js')

// AWS.config.logger = process.stdout
// AWS.config.logger = console;




////////////////////////////////////////////////////////////////////////
const = deliveryStreamName = 'geotab';
const = initialDate = new Date().getTime();
var synthetic_geotab_data = {
    vehicle_mame : 'beamer',
    vehicle_make : 'bmw',
    time : initialDate,
    epoch_millis : initialDate,
    date : initialDate
};

// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Firehose.html#putRecord-property
function putRecord (dStreamName, data, callback) {
  var recordParams = {
    Record: {
      Data: JSON.stringify(data)
    },
    DeliveryStreamName: dStreamName
  };
  firehose.putRecord(recordParams, callback)
};

function get_data() {
    // Get the current time in milliseconds since epoch
    let currentDate = new Date().getTime();

    synthetic_geotab_data = {
        vehicle_mame : 'beamer',
        vehicle_make : 'bmw',
        time : currentDate,
        epoch_millis : currentDate,
        date : currentDate
    };
    
    return synthetic_geotab_data;
};
    
function putRecordCallback(data){
        console.table(data);
    };

function main(){
    for (var x; x < 1000; x++){
        synthetic_geotab_data = get_data();
        putRecord(deliveryStreamName, synthetic_geotab_data, putRecordCallback);
    };
}; //end main

module.exports = {
    main
  };
  
main();