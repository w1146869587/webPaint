var result = $("#main");
if (typeof FileReader == 'undefined') {
    result.innerHTML = "抱歉，你的浏览器不支持FileReader";
}
// 将文件以Data URL形式进行读入页面
function readAsDataURL() {
    // 检查是否为图像类型
    var simpleFile = document.getElementById("file").files[0];
    if (!/image\/\w+/.test(simpleFile.type)) {
        alert("请确保文件类型为图像类型");
        return false;
    }
    var reader = new FileReader();
    // 将文件以Data URL形式进行读入页面
    reader.readAsDataURL(simpleFile);
    reader.onload = function (e) {
        console.log(this.result);
        result.css("background-image","url()");
        // result.css("background-size","cover");
        //zr.addShape(newImage(zr,this.result));
        setBackimg(this.result);

    }

}
// 将文件以二进制形式读入页面
function readAsBinaryString() {
    // 检查是否为图像类型
    var simpleFile = document.getElementById("file").files[0];
    if (!/image\/\w+/.test(simpleFile.type)) {
        alert("请确保文件类型为图像类型");
        return false;
    }
    var reader = new FileReader();
    // 将文件以二进制形式进行读入页面
    reader.readAsBinaryString(simpleFile);
    reader.onload = function (e) {
        // 在页面上显示二进制数据
        result.innerHTML = this.result;
    }
}
// 将文件以文本形式读入页面中
function readAsText() {
    var simpleFile = document.getElementById("file").files[0];
    var reader = new FileReader();
    // 将文件以文本形式读入页面中
    reader.readAsText(simpleFile);
    reader.onload = function (e) {
        result.innerHTML = this.result;
    }
}