## 获取当前运行环境

- Vite 在一个特殊的import.meta.env对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：
  - import.meta.env.MODE:(string) 应用运行的模式
  - import.meta.env.PROD:(boolean) 应用是否运行在生产环境
  - import.meta.env.DEV:(boolean) 应用是否运行在开发环境
  - import.meta.env.SSR:(boolean) 应用是否运行在server上
