const rmk = require('@rmk/rmk');
const clear = require('../index');

let dataBeforeClean = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson",
  "email": "snelson0@yellowbook.com",
  "gender": "Male",
  "ip_address": "74.191.108.58",
  "city": "Kapotnya",
  "phrase": "Universal 6th generation portal",
  "null": null,
  "undefined": undefined,
  "date": new Date(2001),
  "0": 0,
  "1": 1,
  "-1": -1
};
let dataAfterClean = {
  "id": 1,
  "first_name": "Stephen",
  "last_name": "Nelson",
  "email": "snelson0@yellowbook.com",
  "gender": "Male",
  "ip_address": "74.191.108.58",
  "city": "Kapotnya",
  "phrase": "Universal 6th generation portal",
  "date": new Date(2001),
  "0": 0,
  "1": 1,
  "-1": -1
};
describe('Clean', () => {
  it('Clean remove undefined and null values', () => {
    let formula = rmk(clear());
    let result = formula(dataBeforeClean);
    expect(result).toEqual(dataAfterClean);
  });
})
