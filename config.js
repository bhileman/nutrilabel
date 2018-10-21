
/**
 * Module dependencies.
 */
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var path = require('path');
var helmet = require('helmet');

module.exports = function() {
  var app = express();

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(favicon("public/images/lblfav.png"));
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(errorHandler());
  app.use(helmet());

  return app;
}();
