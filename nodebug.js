// 禁止右键菜单
document.oncontextmenu = function() { return false; };
document.oncontextmenu = new Function("event.returnValue=false");
// 禁止文字选择
document.onselectstart = function() { return false; };
document.onselectstart = new Function("event.returnValue=false");
// 禁止复制
document.oncopy = function() { return false; };
document.oncopy = new Function("event.returnValue=false");
// 禁止剪切
document.oncut = function() { return false; };
document.oncopy = new Function("event.returnValue=false");
// 禁止粘贴
document.onpaste = function() { return false; };
document.onpaste = new Function("event.returnValue=false");
// 禁止F12
document.onkeydown = function() {
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = true;
        return true;
    }
};

// debug调试时跳转页面
var element = new Image();
Object.defineProperty(element, 'id', { get: function() { window.location.href = "https://js.iyume.top/console.html" } });
console.log(element);