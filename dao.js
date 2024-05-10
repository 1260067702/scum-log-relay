/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-09-10 11:36:34
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-17 23:32:28
 * @FilePath: \scumFtpData\dao.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { FtpClient } = require("./utils")
module.exports.scumFtpList = async (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.send({
            code: 500,
            data: "",
            msg: "表单错误"
        })
        return
    }
    switch (req.body.ftptype) {
        case "gp":
            res.send(await gpList(req.body))
            break;
        case "gg":
            res.send(await ggList(req.body))
            break;
        default:
            res.send({
                code: 500,
                data: "",
                msg: "服务器类型错误"
            })
            break;
    }

}

module.exports.scumFtpFile = async (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.send({
            code: 500,
            data: "",
            msg: "表单错误"
        })
        return
    }
    switch (req.body.ftptype) {
        case "gp":
            res.send(await gpFile(req.body))
            break;
        case "gg":
            res.send(await ggFile(req.body))
            break;
        default:
            res.send({
                code: 500,
                data: "",
                msg: "服务器类型错误"
            })
            break;
    }


}

const Client = require('ssh2-sftp-client');

function gpList(data) {
    let client = new FtpClient(data)
    return new Promise(async resolve => {
        let result = await client.handle()
        if (result == "ready") {
            let list = await client.list(data.ftppath)
            // console.log(list);
            resolve({
                code: 200,
                data: list,
                msg: "ok"
            })
            client.end()
        } else {
            resolve({
                code: 500,
                data: {},
                msg: "err"
            })
            client.end()
        }
        client = null
    })


}
async function gpFile(cfg) {
    let client = new FtpClient(cfg)
    return new Promise(async resolve => {
        let result = await client.handle()
        if (result == "ready") {
            let file = await client.get(cfg.ftppath + cfg.filename)
            // console.log(file);
            resolve({
                code: 200,
                data: file,
                msg: "oj"
            })
            client.end()
        } else {
            resolve({
                code: 500,
                data: {},
                msg: "err"
            })
            client.end()
        }
        client = null
    })

}

async function ggList(data) {
    let sftp = new Client();
    return new Promise(async resolve => {
        sftp.connect(data).then(() => {

            // return sftp.get('/51.161.199.44_7042/SaveFiles/Logs/login_20240216100136.log');
            return sftp.list(data.ftppath)
        }).then(data => {
            console.log(data, 'the data info');
            resolve({
                code: 200,
                data: { files: data },
                msg: "ok"
            })
            sftp.end()
        }).catch(err => {
            console.log(err, 'catch error');
            resolve({
                code: 500,
                data: {},
                msg: "err"
            })
            sftp.end()
        });
    })
}

const iconv = require("iconv-lite")
async function ggFile(data) {
    console.log(data);
    let sftp = new Client();
    return new Promise(async resolve => {
        sftp.connect(data).then(() => {

            // return sftp.get('/51.161.199.44_7042/SaveFiles/Logs/login_20240216100136.log');
            return sftp.get(data.ftppath + data.filename)
        }).then(data => {
            console.log(iconv.decode(data, "utf-16"), 'the data info');
            resolve({
                code: 200,
                data: iconv.decode(data, "utf-16"),
                msg: "ok"
            })
            sftp.end()
        }).catch(err => {
            console.log(err, 'catch error');
            resolve({
                code: 500,
                data: "",
                msg: "err"
            })
            sftp.end()
        });
    })
}