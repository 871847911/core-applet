//手机号遮盖
export function showPhone(val) {
  return val.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2')
}