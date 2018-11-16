var path = require('path');
var fs = require('fs');
function page_router(app) {

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'home.html'));
    });

    app.get('/*', function(req, res) {
        var filePath = path.join(__dirname, req.url) + '.html';
        
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.sendFile(path.join(__dirname, '404.html'));
        }
    });
}

module.exports = page_router;