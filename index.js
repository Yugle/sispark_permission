const cts = require('./contants.js')
const utils = require('./utils.js')

auto.waitFor()
// console.show()

utils.requestPermissions()
utils.perpareCacheDir()

utils.startApp(cts.URL_SCHEME_HEALTH_CODE)


console.log(1111)
// sleep(5000)
// console.log(1111)

const a = textMatches(/(行程卡)/).findOne(10000)
a?.click()
// textContains(utils.parseCurrentDate()).waitFor()
console.log(2222)

// utils.screenShot(cts.HEALTH_CODE_NAME)

// utils.startApp(cts.URL_SCHEME_PERMISSION_CARD)
// utils.screenShot()

utils.clearSavedPictures()

// console.hide()