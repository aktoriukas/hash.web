import { secret_type } from "../types"
var CryptoJS = require("crypto-js")

export const encryptData = (secret: string, data: secret_type) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString()
}

export const decryptData = (data: string, secret: string) => {
  let ret = null
  try {
    let bytes = CryptoJS.AES.decrypt(data, secret)
    let decriptedData = bytes.toString(CryptoJS.enc.Utf8)
    ret = JSON.parse(decriptedData)
  } catch (e) {
    console.log("decryptData error", e)
  }
  return ret
}

export const isEmpty = (obj: object) => {
  return Object.keys(obj).length === 0
}
