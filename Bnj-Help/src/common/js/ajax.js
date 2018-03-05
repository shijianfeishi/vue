var LOCAL_SERVER = "";
export default {
    post: function (URL, data, callback) {
        // data.key = "364f0e1d92157d730000a7adc713c9cd";
        // data.key = window.localStorage.appkey;
//			data.language = 'zh_CN';
        var params = formatParams(data) ;
        //创建 - 非IE6 - 第一步
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else { //IE6及其以下版本浏览器
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        //接收 - 第三步
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                //关闭遮罩层
                //启动遮罩层
                //		            var dom =  document.getElementsByClassName('overBox')[0];
                //		            document.body.removeChild(dom)		            
                if (status >= 200 && status < 300) {
                    callback && callback(JSON.parse(xhr.responseText), xhr.responseXML);
                } else {
                    console.log('请求失败！！');
                }
            }
        }
        //连接 和 发送 - 第二步
        xhr.open("POST", LOCAL_SERVER+URL, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        //启动遮罩层
//          var dom =  document.createElement('div')
//          dom.innerHTML = '<div class="fa fa-spinner fa-2x fa-pulse tc"></div>';
//          dom.classList.add('overBox')
//			document.body.appendChild(dom)
        
        xhr.send(params);
        function formatParams(data) {
            var arr = [];
            for (var name in data) {
                arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
            }
            //arr.push(("v=" + Math.random()).replace(".",""));
            return arr.join("&");
        }
        
    }
}