"use strict"

const path = require("path")

function getPath() {
  if (process.env.USE_SYSTEM_INNOEXTRACT === "true") {
    return "innoextract"
  }

  if (process.platform === "darwin") {
    return path.join(__dirname, "mac", "innoextract")
  }
  else if (process.platform === "win32") {
    return path.join(__dirname, "win", process.arch, "innoextract.exe")
  }
  else {
    return path.join(__dirname, "linux", process.arch, "innoextract")
  }
}

exports.path = getPath()