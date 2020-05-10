安装

```
npm install kc-test
```

引入模块

```
import test from 'kc-test'

```

支持校验如下

```
test.isPhone('18817577777') // 手机号码是否正确
test.isPassword('abc1234')  // 密码格式是否正确
test.isEmail('2461556682@qq.com') //邮箱是否有效
test.isMoney(12.3)    //校验金钱的格式
test.isTaxAvailable('1232000046600736XP') // 是否是纳税人识别号
test.isExpress('8161823617823') // 是否是快递单号
test.isIDCard('412728199401087834') // 是否是身份证号码
test.isRealName('周杰')// 是否是汉字名称

```