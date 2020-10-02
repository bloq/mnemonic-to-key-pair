'use strict'

const chai = require('chai')
const fixtures = require('./fixtures.json')
const mnemonicToKeyPair = require('..')

chai.should()

describe('Package', function () {
  it('should get the key pair from a mnemonic', function () {
    const {
      mnemonic,
      derivationPath,
      password,
      privateKey,
      publicKey
    } = fixtures
    mnemonicToKeyPair(mnemonic, derivationPath, password).should.deep.equals({
      privateKey: Buffer.from(privateKey, 'hex'),
      publicKey: Buffer.from(publicKey, 'hex')
    })
  })
})
