'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nicInfo = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * New NIC number format - issued from 1st of January 2016
 * @param  {string} nicNo National Identity Card No.
 * @return {object}       Gender and Birthday Information
 */

var newIDFormat = function newIDFormat(nicNo) {
  var year = nicNo.slice(0, 4);
  var days = nicNo.slice(4, 7);
  var gender = { type: 'M', label: 'Male' };

  if (days > 500) {
    gender = { type: 'F', label: 'Female' };
    days -= 500;
  }

  var birthdayMomentObj = (0, _moment2.default)(year + '-01-01').dayOfYear(days - 1);
  var birthday = {
    year: birthdayMomentObj.year(),
    month: birthdayMomentObj.month(), // 0 based (0 to 11)
    date: birthdayMomentObj.date(),
    momentjsObj: birthdayMomentObj
  };

  return {
    gender: gender,
    birthday: birthday
  };
};

/**
 * Old NIC number format - issued before 1st of Janurary 2016
 * @param  {string} nicNo National Identity Card No.
 * @return {object}       Gender and Birthday Information
 */
var oldIDFormat = function oldIDFormat(nicNo) {
  var year = nicNo.slice(0, 2);
  var days = nicNo.slice(2, 5);
  var gender = { type: 'M', label: 'Male' };

  if (days > 500) {
    gender.type = 'F';
    gender.label = 'Female';
    days -= 500;
  }

  var birthdayMomentObj = (0, _moment2.default)('19' + year + '-01-01').dayOfYear(days - 1);
  var birthday = {
    year: birthdayMomentObj.year(),
    month: birthdayMomentObj.month(), // 0 based (0 to 11)
    date: birthdayMomentObj.date(),
    momentjsObj: birthdayMomentObj
  };

  return {
    gender: gender,
    birthday: birthday
  };
};

/**
 * Get info by providing NIC No
 * @param {string} NicNo
 * @return {object}
 */

var nicInfo = exports.nicInfo = function nicInfo(nicNo) {
  //  check if it is new NIC or old NIC
  var _return = void 0;
  if (nicNo.length > 10) {
    _return = newIDFormat(nicNo);
  } else {
    _return = oldIDFormat(nicNo);
  }
  return _return;
};