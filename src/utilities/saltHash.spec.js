'use strict';

const assert = require('assert');
const {salt, hash, check} = require('./saltHash');

describe('saltHash', () => {
  const salt1 = salt();
  const salt2 = salt();
  const hash1 = hash('secret', salt1);
  const hash2 = hash('secret', salt2);

  it('Should return different salts and different hashes when given the same password twice', () => {

    assert.notStrictEqual(salt1, salt2);
    assert.notStrictEqual(hash1, hash2);
  });

  it('Should check if password is correct', () => {

    assert.notStrictEqual(check('notsecret', salt1, hash1), true);
    assert.strictEqual(check('secret', salt1, hash1), true);
  });
});
