const bacnet = require('bacstack')
const client = new bacnet()

//const client = new bacnet({
//  port: 47808,
//  interface: '192.168.0.67',
//  broadcastAddress: '192.168.0.255',
//  adpuTimeout: 6000
//});

let requestArray = [
  {
    objectId: { type: 2, instance: 1 },
    properties: [{id: 77}, {id: 85}]
  }
]

// Discover Devices
// client.on('iAm', (device) => {
//   console.log('address: ', device.address);
//   console.log('deviceId: ', device.deviceId);
//   console.log('maxAdpu: ', device.maxAdpu);
//   console.log('segmentation: ', device.segmentation);
//   console.log('vendorId: ', device.vendorId);
// });
// client.whoIs();
//
// client.on('error', (err) => {
//   console.log('Error occurred: ', err);
//   client.close();
// });

client.readPropertyMultiple('192.168.1.205', requestArray, (err, value) => {
  if (err) console.log(err)
  console.log(value)
  //console.log(value.values[0].values[1].value)
})
