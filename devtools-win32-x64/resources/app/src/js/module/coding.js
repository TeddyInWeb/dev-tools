
/**
 * url编码
 */

const Util = require('../util.js');

function init(){
    setTimestamp();
    Util.openPop('tool-coding-pop');
}

function changeTab(element, optionType){
    Util.hideAllByClassName('coding-box-item');
    switch(optionType){
        case 'Url':
            Util.selected(element, 'selected');
            document.getElementById('coding-url-box').style.display = 'block';
            break;
        case 'Unix':
            Util.selected(element, 'selected');
            document.getElementById('coding-unix-box').style.display = 'block';
            break;
    }
}

function urlCoding(codingType){
    let editBox = document.getElementById('coding-edit-screen');
    let value = editBox.value;
    if(value){
        editBox.value = codingType === 'encode' ? encodeURI(value) : decodeURI(value);
    }
}

function setTimestamp(){
    document.getElementById('unix-now').innerText = (new Date()).getTime(); 
}

function timeToDate(){
    let time = document.getElementById('unix-input-timestamp').value;
    if(time){
        time = time.length == 10 ? time * 1000 : time.length == 13 ? parseInt(time) : '';
        let d = new Date(time);
        document.getElementById('unix-result-date').value = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    }
}

function dateToTime(){
    let date = document.getElementById('unix-input-date').value;
    if(date){
        let result = new Date(date).getTime();
        document.getElementById('unix-result-timestamp').value = result || '';
    }
}

module.exports = {
    init: init,
    changeTab: changeTab,
    urlCoding: urlCoding,
    setTimestamp: setTimestamp,
    timeToDate: timeToDate,
    dateToTime: dateToTime
}