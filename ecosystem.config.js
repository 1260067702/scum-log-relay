/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-11-21 12:24:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-21 12:44:04
 * @FilePath: \robot-shopping\ecosystem.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  apps : [{
    name:"FTPSERVER",
    script: 'index.js',
    watch: true,
    // 自定义应用程序的错误日志文件(错误日志文件)
    error_file: './logs/LOG-SERVER-err.log',
    // 自定义应用程序日志文件(正常日志文件)
    out_file: './logs/LOG-SERVER-out.log',
    // 设置追加日志而不是新建日志
    merge_logs: true,
    // 指定日志文件的时间格式
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }]
};
