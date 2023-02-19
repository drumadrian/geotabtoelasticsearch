////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//     The code below was initially created using ChatGPT
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-firehose/index.html
// https://github.com/aws/aws-sdk-js-v3/issues/2282#issuecomment-829297405
// https://github.com/aws/aws-sdk-js-v3/issues/4446
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

import { FirehoseClient, PutRecordCommand } from "@aws-sdk/client-firehose";
console.log('hello world');
const initialDate = new Date().getTime();
// Create a Firehose client object
const firehoseClient = new FirehoseClient({ region: "us-west-2" });
// initial data object
let synthetic_geotab_data = {
    vehicle_model : 'beamer',
    vehicle_make : 'bmw',
    time : initialDate,
    epoch_millis : initialDate,
    date : initialDate,
    "afterHoursDistance": 0.014283162,
    "afterHoursDrivingDuration": "00:02:44",
    "afterHoursEnd": true,
    "afterHoursStart": true,
    "afterHoursStopDuration": "00:42:33.0630000",
    "averageSpeed": 0.31353283,
    "distance": 0.014283162,
    "drivingDuration": "00:02:44",
    "engineHours": 52161587,
    "idlingDuration": "00:01:54",
    "isSeatBeltOff": false,
    "maximumSpeed": 1,
    "nextTripStart": "2023-01-17T11:32:11.063Z",
    "speedRange1": 0,
    "speedRange1Duration": "00:00:00",
    "speedRange2": 0,
    "speedRange2Duration": "00:00:00",
    "speedRange3": 0,
    "speedRange3Duration": "00:00:00",
    "start": "2023-01-17T10:46:54.000Z",
    "stop": "2023-01-17T10:49:38.000Z",
    "stopDuration": "00:42:33.0630000",
    "stopPoint": {
        "x": -76.57994079589844,
        "y": 36.74562454223633
    },
    "workDistance": 0,
    "workDrivingDuration": "00:00:00",
    "workStopDuration": "00:00:00",
    "device": {
        "id": "b68B"
    },
    "driver": {
        "id": "b232068EA",
        "isDriver": true
    },
    "id": "b2D0333F8"
};

let string_synthetic_geotab_data = JSON.stringify(synthetic_geotab_data);
let data_buffer = Buffer.from(string_synthetic_geotab_data);

for (let x = 0; x < 1000; x++){
    synthetic_geotab_data = get_data();
    string_synthetic_geotab_data = JSON.stringify(synthetic_geotab_data)
    data_buffer = Buffer.from(string_synthetic_geotab_data);
    // Create a PutRecord command object
    const putRecordCommand = new PutRecordCommand({
    DeliveryStreamName: 'geotab',
    Record: {
        Data: data_buffer
      }    
    });

    // Send the record to the Kinesis data stream
    firehoseClient.send(putRecordCommand, function(err, data) {
    if (err) {
        console.log("Failed to send record:", err);
    } else {
        console.log("Record sent successfully:", data);
    }
    });
};

function get_data() {
    // Get the current time in milliseconds since epoch
    let currentDate = new Date().getTime();
    let synthetic_geotab_data = {
        vehicle_model : 'beamer',
        vehicle_make : 'bmw',
        time : initialDate,
        epoch_millis : initialDate,
        date : initialDate,
        "afterHoursDistance": 0.014283162,
        "afterHoursDrivingDuration": "00:02:44",
        "afterHoursEnd": true,
        "afterHoursStart": true,
        "afterHoursStopDuration": "00:42:33.0630000",
        "averageSpeed": 0.31353283,
        "distance": 0.014283162,
        "drivingDuration": "00:02:44",
        "engineHours": 52161587,
        "idlingDuration": "00:01:54",
        "isSeatBeltOff": false,
        "maximumSpeed": 1,
        "nextTripStart": "2023-01-17T11:32:11.063Z",
        "speedRange1": 0,
        "speedRange1Duration": "00:00:00",
        "speedRange2": 0,
        "speedRange2Duration": "00:00:00",
        "speedRange3": 0,
        "speedRange3Duration": "00:00:00",
        "start": "2023-01-17T10:46:54.000Z",
        "stop": "2023-01-17T10:49:38.000Z",
        "stopDuration": "00:42:33.0630000",
        "stopPoint": {
            "x": -76.57994079589844,
            "y": 36.74562454223633
        },
        "workDistance": 0,
        "workDrivingDuration": "00:00:00",
        "workStopDuration": "00:00:00",
        "device": {
            "id": "b68B"
        },
        "driver": {
            "id": "b232068EA",
            "isDriver": true
        },
        "id": "b2D0333F8"
    };
    
    return synthetic_geotab_data;
};
    
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// module.exports = {
//     main
//   };
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// main();

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
