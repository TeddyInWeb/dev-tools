
/**
 * 系统信息模块
 */

const Os = require('os');
const Util = require('../util.js');

function getSystemInfo(){
    document.getElementById('pc-name').innerText = Os.hostname() || '';
    document.getElementById('sys-name').innerText = `${systemType()} ${systemVersion()}` || '';
    document.getElementById('ip-address').innerText = getIpAddress()['address'] || '';
    document.getElementById('mac-address').innerText = getIpAddress()['mac'] || '';
    document.getElementById('ip-family').innerText = getIpAddress()['family'] || '';
    document.getElementById('cpus').innerText = getCpus() || '';
    document.getElementById('ram').innerText = getRamSpace() || '';
    Util.openPop('tool-system-pop');
}

function getIpAddress(){
    let result = {};
    let networks = Os.networkInterfaces();
    for(let i in networks){
        let network = networks[i];
        network.map((item) => {
            if(item.family === 'IPv4' && item.address !== '127.0.0.1' && !item.internal){
                result = item;
            }
        });
    }
    return result;
}

function getCpus(){
    let cpus = Os.cpus();
    return `${cpus.length}核 ${cpus[0].model}`;
}

function systemType(){
    let map = {
        Linux: 'Linux',
        Darwin: 'Mac os',
        Windows_NT: 'Windows'
    }
    return map[Os.type()] || '未知';
}

function systemVersion(){
    return Os.release();
}

function getRamSpace(){
    return `${(Os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

module.exports = {
    getSystemInfo: getSystemInfo
}