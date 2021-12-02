/**
 * @说明：工具集
 * @版本：v1.0.0
 */

/**
 * @说明：获取url参数
 */
const urlToObj = function (url) {
  const obj = {}
  const str = url.slice(url.indexOf('?') + 1)
  const arr = str.split('&')
  for (let j = arr.length, i = 0; i < j; i++) {
    const arr_temp = arr[i].split('=')
    obj[arr_temp[0]] = arr_temp[1]
  }
  return obj
}

//导出方法，外部调用
module.exports = {
  urlToObj: urlToObj,
}
