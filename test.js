const test = require('./dist/index') 

console.log(test.isUsername("kunchi12345"))
console.log(test.isPhone('18817577777')) // 手机号码是否正确
console.log(test.isPassword('abc1234'))  // 密码格式是否正确
console.log(test.isEmail('2461556682@qq.com')) //邮箱是否有效
console.log(test.isMoney(12.34))    //校验金钱的格式
console.log(test.isTaxAvailable('1232000046600736XP')) // 是否是纳税人识别号
console.log(test.isExpress('8161823617823')) // 是否是快递单号
console.log(test.isIDCard('412728199401087834')) // 是否是身份证号码
console.log(test.isRealName('周杰'))//是否是汉字名称