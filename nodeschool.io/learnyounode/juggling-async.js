var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) { 
        if (err) {
        return console.error(err)
        }
        var url1data = data.toString()
        http.get(process.argv[3], function (response) {
            response.pipe(bl(function (err, data) { 
                if (err) {
                    return console.error(err)
                }
                var url2data = data.toString()
                http.get(process.argv[4], function (response) {
                    response.pipe(bl(function (err, data) { 
                        if (err) {
                        return console.error(err)
                        }    
                        var url3data = data.toString()
                        console.log(url1data);
                        console.log(url2data);
                        console.log(url3data);
                    }))
                })
            }))
        })
    }))
})

