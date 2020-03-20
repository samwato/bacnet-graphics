const redis = require('redis')
const client = redis.createClient()

client.on('error', (err) => {
  console.error(err)
})

client.set('otherkey', 'world', redis.print)
client.get('otherkey', redis.print)
