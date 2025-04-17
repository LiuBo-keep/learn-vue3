/**
 * 响应状态码枚举类
 *
 * 定义了常见的 HTTP 响应状态码，用于标识请求处理的结果。
 * 每个枚举值对应一个特定的状态码及其语义。
 */
enum ResponseCode {
  // 请求成功 （表示请求已成功处理。）
  SUCCESS = 'SUCCESS',
  // 错误的请求 （表示请求已成功处理。）
  BAD_REQUEST = 'BAD_REQUEST',
  // 请求成功 （表示请求已成功处理。）
  UNAUTHORIZED = 'UNAUTHORIZED',
  // 请求成功 （表示请求已成功处理。）
  FORBIDDEN = 'FORBIDDEN',
  // 请求成功 （表示请求已成功处理。）
  NOT_FOUND = 'NOT_FOUND',
  // 请求成功 （表示请求已成功处理。）
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR'
}

export default ResponseCode
