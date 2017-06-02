import moment from 'moment';

/**
 * New NIC number format - issued from 1st of January 2016
 * @param  {string} nicNo National Identity Card No.
 * @return {object}       Gender and Birthday Information
 */

const newIDFormat = (nicNo) => {
  let year = nicNo.slice(0, 4);
  let days = nicNo.slice(4, 7);
  let gender = { type: 'M', label: 'Male'};

  if (days > 500) {
    gender = { type: 'F', label: 'Female'};
    days -= 500;
  }

  let birthdayMomentObj = moment(year + '-01-01').dayOfYear(days - 1);
  let birthday = {
    year: birthdayMomentObj.year(),
    month: birthdayMomentObj.month(), // 0 based (0 to 11)
    date: birthdayMomentObj.date(),
    momentjsObj: birthdayMomentObj
  };

  return {
    gender,
    birthday
  };
};

/**
 * Old NIC number format - issued before 1st of Janurary 2016
 * @param  {string} nicNo National Identity Card No.
 * @return {object}       Gender and Birthday Information
 */
const oldIDFormat = (nicNo) => {
  let year = nicNo.slice(0, 2);
  let days = nicNo.slice(2, 5);
  let gender = { type: 'M', label: 'Male'};

  if (days > 500) {
    gender.type = 'F';
    gender.label = 'Female';
    days -= 500;
  }

  let birthdayMomentObj = moment('19' + year + '-01-01').dayOfYear(days - 1);
  let birthday = {
    year: birthdayMomentObj.year(),
    month: birthdayMomentObj.month(), // 0 based (0 to 11)
    date: birthdayMomentObj.date(),
    momentjsObj: birthdayMomentObj
  };

  return {
    gender,
    birthday
  };
};

/**
 * Get info by providing NIC No
 * @param {string} NicNo
 * @return {object}
 */

export const nicInfo = (nicNo) => {
  //  check if it is new NIC or old NIC
  let _return;
  if (nicNo.length > 10) {
    _return = newIDFormat(nicNo);
  } else {
    _return = oldIDFormat(nicNo);
  }
  return _return;
};
