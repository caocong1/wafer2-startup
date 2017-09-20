module.exports = async function (ctx, next) {

  // const { mysql: config } = require('../config.demo')

  // 初始化 SQL 文件路径
  // const sql = 'SELECT * FROM user';
  // var data={msg:"whywhywhy~~"};
  const DB = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'wxa754221271bb2d84',
      database: 'demo',
      charset: 'utf8mb4',
    }
  })

  // 执行 .sql 文件内容
  // DB.raw(sql).then(res => {
  //   data = res
  //   // process.exit(0)
  // }, err => {
  //   data = err
  //   throw new Error(err)
  // })
  DB.select('id', 'byname').from('user').then(function (data) {
    ctx.state.data ==data
  })
}