var express = require("express");
var gzippo = require("gzippo");
var morgan = require("morgan");
var app = express();

app.use(morgan("dev"));
app.use(gzippo.staticGzip("" + __dirname + "/" ));
app.listen(process.env.PORT || 5000);
