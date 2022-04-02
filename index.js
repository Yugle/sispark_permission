const cts = require('./contants.js')
const utils = require('./utils.js')

auto.waitFor()

// console.show()

setScreenMetrics(cts.DEVICE_DEFAULT_WIDTH, cts.DEVICE_DEFAULT_HEIGHT)
utils.requestPermissions()
utils.perpareCacheDir()

utils.killAlipay()

utils.startApp(cts.URL_SCHEME_HEALTH_CODE, false)
sleep(10000)
utils.screenShot(cts.HEALTH_CODE_NAME)

sleep(1000)

utils.startApp(cts.URL_SCHEME_PERMISSION_CARD, false)
sleep(5000)
click(180, 1490)
click(cts.DEVICE_DEFAULT_WIDTH / 2, 1700)
sleep(2000)
utils.screenShot(cts.PERMISSIONG_CARD_NAME)

sleep(1000)

utils.startApp(cts.INTENT_SISPARK_PERMISSION, true)
sleep(1000)
click("微信", 0)
sleep(5000)
// 每日健康填报
click(210, 990)
sleep(3000)
// 健康码
click(220, 740)
sleep(1000)
// 从相册选择
click(566, 2140)
sleep(1000)
// 第二个
click(485, 260)
sleep(500)
// 完成
click(950, 150)
sleep(3000)
// 行程码
click(220, 1260)
sleep(1000)
// 从相册选择
click(566, 2140)
sleep(1000)
// 第一个
click(217, 260)
sleep(500)
// 完成
click(950, 150)
sleep(3000)
// 核酸检测日期
click(960, 1650)
// 等待输入
sleep(5000)
click(cts.DEVICE_DEFAULT_WIDTH / 2, 1824)

utils.clearSavedPictures()

// console.hide()