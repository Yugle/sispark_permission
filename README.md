# sispark_permission
人麻了，现在进创意产业园需要每天上报健康码和行程码生成通行证，但，显然虎哥是不可能手动做这件事的。所以必须，自动化，自动化，自动化！

## 技术方案
在Xposed Edge、Python Applium、Auto.js中选择了Auto.js

## 问题
- Auto.js只能取到Android原生控件，取不到小程序webview中的内容，所以只能采用非常笨拙、低效、健壮性差的sleep和坐标点击。

## 感悟
- ES5真滴难用
- JavaScript确实比TypeScript难用
- Auto.js现版本由于基于ES5，所以真滴难用