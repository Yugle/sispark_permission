const cts = require('./contants.js')
const utils = require('./utils.js')

auto.waitFor()
console.show()

utils.perpareCacheDir()
utils.requestPermissions()

// utils.startApp(cts.URL_SCHEME_HEALTH_CODE)

// console.log(1111)
// sleep(5000)
// console.log(1111)

// textContains('信息更新').waitFor()
// console.log(2222)

utils.screenShot(cts.HEALTH_CODE_NAME)

// utils.startApp(cts.URL_SCHEME_PERMISSION_CARD)
// utils.screenShot()

utils.clearSavedPictures()

console.hide()