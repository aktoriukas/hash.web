import { secret_type } from "../types"
var CryptoJS = require("crypto-js")

export const encryptData = (secret: string, data: secret_type) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString()
}

export const decryptData = (data: string, secret: string) => {
  var bytes = CryptoJS.AES.decrypt(data, secret)
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}
