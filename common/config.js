const CONFIG = {
  // 开发环境配置
  development: {
    ...process.env.BASE_API_URL,
  },
  // 生产环境配置
  production: {
    ...process.env.BASE_API_URL,
  },
}
export default CONFIG[process.env.NODE_ENV]
