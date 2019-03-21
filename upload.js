const request = require('request')
const fs = require('fs')
const path = require('path')

var formData = {
  file: fs.createReadStream(path.join(__dirname, 'dumps', 'sample.txt'))
}
var start = new Date()
console.info('Start time: %s', start)
request.post({url:'http://192.168.0.102:3000', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('Upload failed:', err);
  }
  var end = new Date()
  console.info('Finish time: %s', end)
  console.info('Uploaded in %dms', end - start)
})
