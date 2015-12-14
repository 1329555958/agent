/**
 * Created by weichunhe on 2015/12/11.
 */
var http = require('http');
var querystring = require('querystring');
var opts = {
    host: '10.5.6.207',
    port: 9966,
    method: 'POST',
    path: '/graph/last',
    headers: {
        'Content-Type': 'application/json'
    }
};
var nowSecond = Math.floor(new Date().getTime() / 1000);
var data = [
    {
        "endpoint": "test.ep3",
        "counter": "test.counter"
        //"counter": "load.5min"
    }
];
console.log(JSON.stringify(data));
setInterval(function () {
    var req = http.request(opts, function (res) {
        var chunk = '';
        res.on('data', function (data) {
            chunk += data;
        });
        res.on('end', function () {
            console.log('resp:',new Date(), chunk);
        });

    });
    req.write(JSON.stringify(data));
    req.end();
}, 60000);
