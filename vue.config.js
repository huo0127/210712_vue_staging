module.exports = {
  pages: {
    index: {
      //入口
      entry: "src/main.js",
    },
  },
  lintOnSave: false, //關閉語法檢查
  //開啟代理服務器 (方式一)
  // devServer: {
  //   proxy: "http://localhost:5000",
  // },

  //開啟代理服務器 (方式二)
  devServer: {
    proxy: {
      "/atguigu": {
        target: "http://localhost:5000",
        //!匹配所有以atguigu開頭的路徑, 然後把atguigu都變成空字符串
        pathRewrite: { "^/atguigu": "" },
        // ws: true, //用於支持websocket
        // changeOrigin: true, //用於控制請求頭中的host值
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        // ws: true, //用於支持websocket
        // changeOrigin: true, //用於控制請求頭中的host值
      },
    },
  },
};
