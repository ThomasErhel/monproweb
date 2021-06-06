const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const express = require('express');
const helmet = require("helmet");
const { getDefaultDirectives } = require('helmet/dist/middlewares/content-security-policy');

const app = express();

const privateKey = fs.readFileSync('/etc/letsencrypt/live/monproweb.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/monproweb.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/monproweb.com/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});