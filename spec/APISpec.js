var f = require("frisby");

f.create('Frisby Test with automated journy')
  .addHeader('Content-Type', 'text/plain')
  .get('http://localhost:3000/ping')
  .expectStatus(200)
  .expectHeader('Content-Type', 'text/plain')
  .expectBodyContains("Pong")
  .after(function(err,response,body) {
    f.create('It shoud request with respone of first request')
      .get('http://localhost:3000/boundryFile?fileName=' + response)
      .expectStatus(404)
    .toss()
  })
.toss()

var requestData = {
      userName : 'Ping',
      Password : '123456'
    };

f.create('Post Request test')
  .post('http://localhost:3000',requestData, { json: true })
  .inspectRequest()
  .expectStatus(200)
.toss()