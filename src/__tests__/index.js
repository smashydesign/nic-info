import {nicInfo} from '../';
const {describe, test, expect} = global;

describe('Old NIC ID', () => {
  test('should return information object', () => {
    expect(nicInfo('853409999V')).not.toBeNull();
    expect(nicInfo('907510999V')).not.toBeNull();
  });

  describe('Gender', () => {
    test('should return correct Gender Type', () => {
      expect(nicInfo('853409999V').gender.type).toEqual('M');
      expect(nicInfo('907510999V').gender.type).toEqual('F');
    });

    test('should return correct Gender Label', () => {
      expect(nicInfo('853409999V').gender.label).toEqual('Male');
      expect(nicInfo('907510999V').gender.label).toEqual('Female');
    });
  });

  describe('Birthday', () => {
    test('should return correct Birth Year', () => {
      expect(nicInfo('853409999V').birthday.year).toEqual(1985);
      expect(nicInfo('907510999V').birthday.year).toEqual(1990);
    });

    test('should return correct Birth Month (0 based)', () => {
      expect(nicInfo('853409999V').birthday.month).toEqual(11);
      expect(nicInfo('907510999V').birthday.month).toEqual(8);
    });

    test('should return correct Birth date', () => {
      expect(nicInfo('853409999V').birthday.date).toEqual(5);
      expect(nicInfo('907510999V').birthday.date).toEqual(7);
    });

    test('should return momentjs object', () => {
      expect(nicInfo('853409999V').birthday.momentjsObj).not.toBeNull();
      expect(nicInfo('907510999V').birthday.momentjsObj).not.toBeNull();
    });
  });


});

describe('New NIC ID [Experimental]', () => {
  test('should return information object', () => {
    expect(nicInfo('201634099999')).not.toBeNull();
    expect(nicInfo('201675199999')).not.toBeNull();
  });

  describe('Gender', () => {
    test('should return correct Gender Type', () => {
      expect(nicInfo('201634099999').gender.type).toEqual('M');
      expect(nicInfo('201675199999').gender.type).toEqual('F');
    });

    test('should return correct Gender Label', () => {
      expect(nicInfo('201634099999').gender.label).toEqual('Male');
      expect(nicInfo('201675199999').gender.label).toEqual('Female');
    });
  });

  describe('Birthday', () => {
    test('should return correct Birth Year', () => {
      expect(nicInfo('201634099999').birthday.year).toEqual(2016);
      expect(nicInfo('201675199999').birthday.year).toEqual(2016);
    });

    test('should return correct Birth Month (0 based)', () => {
      expect(nicInfo('201634099999').birthday.month).toEqual(11);
      expect(nicInfo('201675199999').birthday.month).toEqual(8);
    });

    test('should return correct Birth date', () => {
      expect(nicInfo('201634099999').birthday.date).toEqual(4); // leap year
      expect(nicInfo('201675199999').birthday.date).toEqual(6); // leap year
    });

    test('should return momentjs object', () => {
      expect(nicInfo('201634099999').birthday.momentjsObj).not.toBeNull();
      expect(nicInfo('201675199999').birthday.momentjsObj).not.toBeNull();
    });
  });


});


// test('should convert single digits', () => {
//   expect(numFormatter(1)).toBe('1');
// });
//
// test('should convert double digits', () => {
//   expect(numFormatter(12)).toBe('12');
// });
//
// test('should convert triple digits', () => {
//   expect(numFormatter(123)).toBe('123');
// });
//
// test('should convert 4 digits', () => {
//   expect(numFormatter(1234)).toBe('1,234');
// });
//
// test('should convert 5 digits', () => {
//   expect(numFormatter(12345)).toBe('12,345');
// });
//
// test('should convert 6 digits', () => {
//   expect(numFormatter(123456)).toBe('123,456');
// });
//
// test('should convert 7 digits', () => {
//   expect(numFormatter(1234567)).toBe('1,234,567');
// });
//
// test('should convert 8 digits', () => {
//   expect(numFormatter(12345678)).toBe('12,345,678');
// });
