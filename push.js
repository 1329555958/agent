/**
 * Created by weichunhe on 2015/12/11.
 */
var http = require('http');

var opts = {
    host: '10.5.6.207',
    port: 1988,
    method: 'POST',
    path: '/v1/push'
};
var nowSecond = Math.floor(new Date().getTime() / 1000 / 60) * 60;
var data, i = 0;

setInterval(function () {
    var ts = Math.floor(new Date().getTime() / 1000 / 60) * 60;
    i++;
    data = [{
        "endpoint": "test.ep3",
        "metric": "test.counter",
        "timestamp": ts,
        "step": 60,
        "value": i,
        "counterType": "GAUGE",
        "tags": ""
    }, {
        "endpoint": "test.ep3",
        "metric": "test.counter",
        "timestamp": ts,
        "step": 60,
        "value": 100 + i,
        "counterType": "GAUGE",
        "tags": ""
    }];

    var req = http.request(opts, function (res) {
        var chunk = '';
        res.on('data', function (data) {
            chunk += data;
        });
        res.on('end', function () {
            console.log(chunk);
        });
    });
    req.write(JSON.stringify(data));
    req.end();
}, 30000);

