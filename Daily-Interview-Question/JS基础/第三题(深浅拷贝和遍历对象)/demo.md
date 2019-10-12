深拷贝和浅拷贝是只针对Object和Array这样的引用数据类型的  
深拷贝：新旧对象不使用同一块内存  
浅拷贝：新旧对象使用同一块内存  
    如果属性是基本类型，那么修改一个对象另一个不会变    
    如果属性是引用类型，那么修改其中一个对象中的这个属性值，另一个对象的该属性值会改变  
赋值：新旧对象使用同一块内存，但是和浅拷贝还是有区别的  
    不管属性是什么类型，修改一个对象，其他也会变  

浅拷贝方法    
* Object.assign({},obj)  

深拷贝方法 
* JSON.parse(JSON.stringfy())  但是不能处理函数  
 ----  

 遍历对象   
 Object.keys(arr)
 ```
var arr = Object.keys(obj);//返回属性形成一个数组
console.log(arr);
Object.keys(obj).forEach((item)=>{
    console.log('Object:'+obj[item])
});
```
