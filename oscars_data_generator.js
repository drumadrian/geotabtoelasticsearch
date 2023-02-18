////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//     The code below was initially created using ChatGPT
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// const firehoseDeliveryStreamName = "your-firehose-delivery-stream-name";

const { KinesisClient, PutRecordCommand } = require("@aws-sdk/client-kinesis");

// function main(){
    // const deliveryStreamName = 'geotab';
const initialDate = new Date().getTime();
const firehoseDeliveryStreamName = 'geotab';
const kinesisClient = new KinesisClient({ region: "us-west-2" });
var messageID = 1;
var synthetic_geotab_data = {
    vehicle_mame : 'beamer',
    vehicle_make : 'bmw',
    time : initialDate,
    epoch_millis : initialDate,
    date : initialDate
};
console.log('hello world');

for (let x = 0; x < 1000; x++){
    synthetic_geotab_data = get_data();
    // putRecord(deliveryStreamName, synthetic_geotab_data, putRecordCallback);
    // NEW Example usage
    putRecord({ id: messageID, message: synthetic_geotab_data });
    messageID = messageID + 1;
    console.log('hello kinesis');
    console.table({'Message' : 'putRecord=Completed'});
};
// }; //end main


async function putRecord(record) {
  const params = {
    DeliveryStreamName: firehoseDeliveryStreamName,
    Record: {
      Data: JSON.stringify(record) + "\n",
    },
  };

  try {
    const command = new PutRecordCommand(params);
    await kinesisClient.send(command);
    console.log(`Record sent: ${JSON.stringify(record)}`);
  } catch (err) {
    console.error(`Failed to send record: ${JSON.stringify(record)}`, err);
  }
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
    
////////////////////////////////////////////////////////////////////////
///////////////////////   OLD CODE   ///////////////////////////////////
////////////////////////////////////////////////////////////////////////
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Firehose.html#putRecord-property
// function putRecord (dStreamName, data, callback) {
//   var recordParams = {
//     Record: {
//       Data: JSON.stringify(data)
//     },
//     DeliveryStreamName: dStreamName
//   };
//   firehose.putRecord(recordParams, callback)
// };
// function putRecordCallback(data){
//     console.table(data);
// };
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
