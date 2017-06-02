# nic-info

A simple module to get information such as gender and birthday by providing Sri Lanka National Identity Card.
This module **does support** [new NIC Number](https://en.wikipedia.org/wiki/National_identity_card_(Sri_Lanka)#New_NIC_number) format which was issues from 1st of January 2016.

## Installation

```javascript
    npm install nic-info
    // OR
    yarn nic-info
```

## Usage

```javascript
    var nicInfo = require('nic-info');
    var useData = nicInfo('853409999V');
```

which should return an object like below:

```javascript
    {
      gender: {
        type: 'M',
        label: 'Male'
      },
      birthday: {
        year: 1985,
        month: 11, // 0 based
        date: 5,
        momentjsObj: moment("1985-12-05T00:00:00.000")
      }
    }
```

## Tests

```javascript
    yarn test
```

This will lint your code first then it will run unit tests

## Other useful commands

1. `yarn lint` - lint your code
2. `yarn lintfix` - lint your code and fix common issues
3. `yarn testonly` - run test cases
4. `test-watch` - run test cases in watch mode

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

## Bugs

If you find any please raise an Issue. Pull requests are welcome.

## Release History
- 0.1.0 Initial release

## License
MIT
