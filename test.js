/*
 * @Author: 菱 admin@example.com
 * @Date: 2023-09-10 12:40:51
 * @LastEditors: 菱 admin@example.com
 * @LastEditTime: 2023-09-11 01:01:42
 * @FilePath: \scumFtpData\test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const { FtpClient } = require("./utils")
// let client = new FtpClient({
//     host: '103.78.123.69',
//     user: 'gpftp775226194223269',
//     password: 'uIyuINRz',
//     port: 52621,  //默认是21，这个看自己要连接的端口
//     keepalive : 1000
// })
// // console.log(client);
//  client.handle().then(data=>{
//     console.log(data);
//     client.list("/SCUM/Saved/SaveFiles/Logs/").then(data=>{
//         console.log(data);
    
//     })
// })
const axios = require("axios")
let a = axios("https://www.g-portal.com/int/server/scum/1110650/logs", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
      "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryvz9gESLsNNv1iO8B",
      "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Microsoft Edge\";v=\"116\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "webinterface_session_us=r6n8p2mck2jh4468e9f8pff1at; webinterface_session=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dnZWQtaW4iOnRydWV9.PYJZSzacAv7cYrqxDvHaQ4jmcXUmfuWeM-DQTIJV4P0; ngp_beta=1; webinterface_timezone=Asia/Shanghai; _gcl_au=1.1.95269517.1694251884; _rdt_uuid=1694251886300.859a2e84-b58b-4af7-a40e-5d1745a78b9d; _tt_enable_cookie=1; _ttp=KW-ZQMgkINphJX1TjVyS_L5Z935; _fbp=fb.1.1694251887191.565241809; _gid=GA1.2.1280067028.1694251888; cebs=1; _ce.s=v~84fa2f19d92705c5e431fad9de00e94581094c81~lcw~1694251888283~vpv~0~lcw~1694251888286; c50b5c58bae01267aa02989f3c8fed1f=0c0a8052dd83558e4ad82041e091daec; d771399f68d57c04f5472a674fd73d9d=70241d48dd642a869e3bf87e68ec106f; i18n_redirected=zh; CakeCookie[preferred_gamecloud_layout]=table; _ce.clock_event=1; _ce.clock_data=4710%2C220.165.102.214%2C1%2Cbfe2a3e18e0f6a479f0326615c34bc23; webinterface_session_eu=k7jbqdi82f6g003shitpn2a7kl; webinterface_region=US; webinterface_locale=en_001; cf_clearance=vYaTxU6UMuBdE1XEZINZGuCAjuWOXR2atmLM4b.KdDI-1694363629-0-1-7c753b4e.8a16d6a7.ab977705-0.2.1694363629; _ga=GA1.2.410224115.1694251885; cebsp_=78; _ga_VS2S7QV2F5=GS1.1.1694363628.6.1.1694364576.60.0.0; gp_at=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkZmxfTGs3VG1VNzItWUdQSTl4dlZxWERvRG1mRldYYWRGSUNYVW5NeXE0In0.eyJleHAiOjE2OTQzNjUwOTksImlhdCI6MTY5NDM2NDc5OSwiYXV0aF90aW1lIjoxNjk0MjUxODcwLCJqdGkiOiJhNmNkYmQ2Yy1mYWVjLTQzYTAtODFmMy0xNDI1NzhmZGRiYWYiLCJpc3MiOiJodHRwczovL2F1dGguZy1wb3J0YWwuY29tL2F1dGgvcmVhbG1zL21hc3RlciIsImF1ZCI6WyJ3ZWJkYXYiLCJhY2NvdW50Il0sInN1YiI6ImJjZTI1ODlkLWE4ODQtNGU5YS1hMDJiLTkyZDRkYmQ3ODNmNSIsInR5cCI6IkJlYXJlciIsImF6cCI6IndlYnNpdGUiLCJzZXNzaW9uX3N0YXRlIjoiNzIyZmVkYzgtZjQ3NS00NjZjLTg1MmMtNzAwM2YxNDI1MmI1IiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtbWFzdGVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIGFkZHJlc3MgbmdwIGdwb3J0YWwgcHJvZmlsZSIsInNpZCI6IjcyMmZlZGM4LWY0NzUtNDY2Yy04NTJjLTcwMDNmMTQyNTJiNSIsIm5ld3NsZXR0ZXIiOmZhbHNlLCJncF9sb2NhbGUiOiJlbl8wMDEiLCJhZGRyZXNzIjp7InJlZ2lvbiI6IlVTIiwiY291bnRyeSI6IkNOIn0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJ0aW1lem9uZSI6IkFzaWEvU2hhbmdoYWkiLCJncm91cHMiOltdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiI4Mjc5NDgyNy1lNTkyLTQ1YWQtOGVjNC05MjhmOTU4ODk1ODEiLCJnaXZlbl9uYW1lIjoid2FuZyIsImxvY2FsZSI6ImVuIiwibmFtZSI6IndhbmcgaG9uZ2t1biIsInJlZ2lvbiI6IlVTIiwiZmFtaWx5X25hbWUiOiJob25na3VuIiwiZW1haWwiOiIxMjYwMDY3NzAyQHFxLmNvbSJ9.QLuLk9e4K6zuIzXip-1JB0_ceA4nqi6tG91FMQJiRue3JrX_ez04_pModQrGxFd2ovP7O5hd5dagT9hjQJVqngjtQfQAnc8YSixyShsU3WUnR2Jt9_TASc_tCOWgV78PP7bCcxgCoeDNaqr8AHzml20ATUQLk2qeRaXMSGUt521yNFpVZOFBKUZbvW9PTwkd2a4ONM7OCgJKvVds19-gO5pzjjGNaInH-LUWghW7kQ9a8A61bv7I7mnrgkJUeXPWneNa95eRJ8rWPMqjMtrk9FGFyNWY8bbxybNjmOxE5u2QcbPhK4QJ6FbkEax4NKum8gNoaDcGkDBndFsg7d9DoQ",
      "Referer": "https://www.g-portal.com/int/server/scum/1110650/logs",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "------WebKitFormBoundaryvz9gESLsNNv1iO8B\r\nContent-Disposition: form-data; name=\"load\"\r\n\r\ntrue\r\n------WebKitFormBoundaryvz9gESLsNNv1iO8B\r\nContent-Disposition: form-data; name=\"ExtConfig[config]\"\r\n\r\nSCUM\\Saved\\SaveFiles\\Logs\\login_20230910071915.log\r\n------WebKitFormBoundaryvz9gESLsNNv1iO8B--\r\n",
    "method": "POST"
  });

a.then((data)=>{
    // console.log(data);
    data.on("data",t=>{
        console.log(t);
    })
})