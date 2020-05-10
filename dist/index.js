"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * Created by xujie on 2018/2/16.
 */

var isPhone = exports.isPhone = function isPhone(value) {
    return (/^1\d{10}$/.test(value)
    );
};

var isUsername = exports.isUsername = function isUsername(value) {
    return (/^[a-zA-Z0-9_-]{4,16}$/.test(value)
    );
};

var isPassword = exports.isPassword = function isPassword(value) {
    return (/([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,15}/.test(value)
    );
};

var isEmail = exports.isEmail = function isEmail(value) {
    return (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
    );
};

var isMoney = exports.isMoney = function isMoney(value) {
    return (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(value)
    );
};

// 公司税号
var isTaxAvailable = exports.isTaxAvailable = function isTaxAvailable(num) {
    return (/^[A-Z0-9]{15}$|^[A-Z0-9]{17}$|^[A-Z0-9]{18}$|^[A-Z0-9]{20}$/.test(num)
    );
};

// 运单号
var isExpress = exports.isExpress = function isExpress(num) {
    return (/^[0-9a-zA-Z]{5,30}$/.test(num)
    );
};

// 身份证号
var isIDCard = exports.isIDCard = function isIDCard(num) {
    return (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(num) || /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/.test(num)
    );
};

// 测试真实姓名
var isRealName = exports.isRealName = function isRealName(name) {
    return (/^[\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$/.test(name)
    );
};

exports.default = {
    isPhone: isPhone,
    isUsername: isUsername,
    isPassword: isPassword,
    isEmail: isEmail,
    isMoney: isMoney,
    isTaxAvailable: isTaxAvailable,
    isExpress: isExpress,
    isIDCard: isIDCard,
    isRealName: isRealName
};