const contants = require('./contants.js')

function requestPermissions() {   
    const thread = threads.start(function() {
        if (auto.service) {
            const allowButton = textMatches(/(允许|立即开始|同意)/).findOne(10 * 1000)
            if (allowButton) {
                allowButton.click()
            }
        }
    })
    if(!requestScreenCapture()){
        toast("请求截图失败!");
        exit();
    } else {
        toast("请求截图成功！");
        thread.interrupt()
    }
}

function killAlipay() {
    shell('am start -p com.eg.android.AlipayGphone')
}

function perpareCacheDir() {
    files.createWithDirs(contants.SCREEN_SHOT_PATH)
}

function screenShot(name) {
    captureScreen(contants.SCREEN_SHOT_PATH + name + contants.SCREEN_SHOT_SUBFIX)
    // 直接存储为png媒体系统扫描不出来，需手动更名为.jpg
    files.rename(contants.SCREEN_SHOT_PATH + name + contants.SCREEN_SHOT_SUBFIX, name + contants.SCREEN_SHOT_TARGET_FORMAT_SUBFIX)
}

function startApp(target, isIntent) {
    var param = ''
    if (!isIntent) {
        param = '-a android.intent.action.VIEW -d '
    }
    console.log('am start ' + param + '"' + target + '"')

    var result = shell('am start ' + param + '"' + target + '"', true)
    
    return result.code
}

function clearSavedPictures() {
    files.removeDir(contants.SCREEN_SHOT_PATH)
}

function parseCurrentDate() {
    const date = new Date()
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()

    return month + '-' + day
}

module.exports = {
    requestPermissions: requestPermissions,
    perpareCacheDir: perpareCacheDir,
    screenShot: screenShot,
    startApp: startApp,
    clearSavedPictures: clearSavedPictures,
    parseCurrentDate: parseCurrentDate,
    killAlipay: killAlipay,
}