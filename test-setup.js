require("mocha-as-promised")();

var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

global.sinon = sinon;
global.expect = chai.expect;
global.should = chai.should()
