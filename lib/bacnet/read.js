import bacnet from 'bacstack'
const client = new bacnet()

export default (ip, pointInstance, objectType, prop1, prop2) => {
  return new Promise((resolve, reject) => {

    if(ip && pointInstance && objectType && prop1 && prop2) {

      let requestArray = [
        {
          objectId: { type: objectType, instance: pointInstance },
          properties: [{id: prop1}, {id: prop2}]
        }
      ]

      client.readPropertyMultiple(ip, requestArray, (err, value) => {
        if(err) {
          return reject(err.message);
        }

        if(typeof value.values[0].values[0].value[0] === 'undefined') {
          if(value.values[0].values[0].value.value.errorCode === 31) {
            return reject('BACnet ObjectId Unknown')
          } else {
            return reject(`BACnet errorCode: ${value.values[0].values[0].value.value.errorCode}`)
          }
        }

        let pointName = value.values[0].values.filter(array => array.id === 77)[0].value[0].value;
        let pointValue = value.values[0].values.filter(array => array.id === 85)[0].value[0].value;

        return resolve({
          pointInstance: pointInstance,
          objectType: objectType,
          name: pointName,
          value: pointValue,
          error: 0,
          errorMessage: null
        });

      });

    } else {
      return reject('readBACnetPoint had undefined params');
    }
  })

}
