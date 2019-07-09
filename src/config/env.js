/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '//m.data.eastmoney.com';
let routerMode = 'hash';
let imgBaseUrl = '';

// 正式环境
if (process.env.NODE_ENV === 'production') {
    imgBaseUrl = '//elm.cangdu.org/img/';
} else if (process.env.NODE_ENV === 'development') {
    imgBaseUrl = '/img/';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}
