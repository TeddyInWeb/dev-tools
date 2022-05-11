
/**
 *  二维码模块
 */

const Qr = require('qr-image');
const Fs = require('fs');
const path = './src/assets/tmp/qrcode.png';

function drawQrcode(){
    let content = document.getElementById('qrcode-input').value;
    if(content){
        let temp = Qr.image(content, { type: 'png', ec_level: 'H' });
        Fs.exists(path, (exists) => {
            if(exists){
                Fs.unlinkSync(path);
            }
            temp.pipe(Fs.createWriteStream(path)).on('finish', () => {
                let data = Fs.readFileSync(path);
                data = data.toString('base64');　
                document.getElementById('qrcode-image').innerHTML = `<img src='data:image/png;base64,${data}'>`;
            }).on('error', (err) => {
                alert(`出错了, 请重试: ${err}`);
            })
        });
    }
}

module.exports = {
    drawQrcode: drawQrcode
}
