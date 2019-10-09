### 思路  
1.用transform: translateY()将文字移除框外，因为设置了overflow:hidden所有移出的字母是看不见的  
2.在用before在他们后面设置相同的字母，因为这些copy字母的位置是absolute(绝对定位)，相对于真字母是绝对定位，在用transform: translateY()把他们移到中心位置  
3.当hover时，真字母的transform: translateY(0)，他们会被移到中心位置，而copy字母transform: translateY(0)会被移到真字母的位置
* date-xxx  
  自定义数据属性，也就是data-自定义属性，比如data-text,可以用他进行一些数据的存放  
  `<div id="user" data-uid="123"></div>` 
  使用attributes方法取自定义属性的值  
  ```
  var user = document.getElementById('user');
  var userUid = document.getAttribute('data-uid');//userUid = '123'
  ```
  使用attributes方法设置自定义属性的值
  ```
  var user = document.getElementById('user');
  user.setAttribute('uid','123')
  ```
  使用自定义属性设置CSS样式
  ```
#user[data-uid="123"]{
    color:pink;
}
  ```
