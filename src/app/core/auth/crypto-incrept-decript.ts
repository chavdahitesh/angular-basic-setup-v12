import * as CryptoJS from 'crypto-js';

export class CryptojsIncreptDecript {
  secretKey: string = 'yourSecretKey@123';
//Encryption
encrypt(data: string) {
  let _key = CryptoJS.enc.Utf8.parse(this.secretKey);
  let _iv = CryptoJS.enc.Utf8.parse(this.secretKey);

  return CryptoJS.AES.encrypt(data, _key, {
    keySize: 32,
    iv: _iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString();
}

//Decryption
decrypt(data: string) {
  let _key = CryptoJS.enc.Utf8.parse(this.secretKey);
  let _iv = CryptoJS.enc.Utf8.parse(this.secretKey);

  return CryptoJS.AES.decrypt(data, _key, {
    keySize: 32,
    iv: _iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);
}
}
