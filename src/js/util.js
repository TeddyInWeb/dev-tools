
// 原生poliyfill
function getElementByClassName(classnames){ 
	var objArray = new Array(); // 定义返回对象数组
	var tags = document.getElementsByTagName("*");// 获取页面所有元素
	var index = 0;
	for(var i in tags){
		if(tags[i].nodeType==1){
			if(tags[i].getAttribute("class") == classnames){ // 如果某元素的class值为所需要
				objArray[index]=tags[i];
				index++;
			} 
		}
	} 
    return objArray;
}

// 显示二级窗口
function openPop(target){
    document.getElementById('tool-list-container').style.display = 'none';
    document.getElementById('tool-pop-containner').style.display = 'block';
    hideAllByClassName('pop');
    document.getElementById(target).style.display = 'block';
}

// 关闭二级窗口
function closePop(){
    document.getElementById('tool-list-container').style.display = 'flex';
    document.getElementById('tool-pop-containner').style.display = 'none';
}

// 选中目标
function selected(element, className){
    let elements = element.parentNode.childNodes;
    for(var i in elements){
        removeClass(elements[i], className)
    }
    addClass(element, className);
}

function hideAllByClassName(className){
    for(let element of document.getElementsByClassName(className)){
        if(element){
            element.style.display = 'none';
        }
    }
}

function addClass(element, className){
    if(!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"))){
        element.className += ` ${className}`;
    }
}

function removeClass(element, className){
    let reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if(element.className && element.className.match(reg)){
        element.className = element.className.replace(reg, '');
    }
}

module.exports = {
    getElementByClassName: getElementByClassName,
    openPop: openPop,
    closePop: closePop,
    selected: selected,
    hideAllByClassName: hideAllByClassName
}