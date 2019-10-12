/*
深拷贝和浅拷贝是只针对Object和Array这样的引用数据类型的
深拷贝：新旧对象不使用同一块内存
浅拷贝：新旧对象使用同一块内存
    如果属性是基本类型，那么修改一个对象另一个不会变
    如果属性是引用类型，那么修改其中一个对象中的这个属性值，另一个对象的该属性值会改变
赋值：新旧对象使用同一块内存，但是和浅拷贝还是有区别的
    不管属性是什么类型，修改一个对象，其他也会变
*/
var obj = {
    'name':'tom',
    'age':22,
    'like':['football','sing']
}

//赋值 改变name,原始obj的name也发生改变
//     改变like数组，原始obj的like也发生改变
/*
var obj1 = obj;
obj1.name = 'lisa';
obj1.like[1]='swim';
console.log('obj',obj);
console.log('obj1',obj1);
*/

//浅拷贝 Object.assign()
//改变 name,原始obj的name没有改变
//改变like数组，原始obj的like也发生改变
/*
var obj2 = Object.assign({},obj);
obj2.name = "lisa";
obj2.like[1]='swim';
console.log('obj',obj);
console.log('obj1',obj2);
*/

//深拷贝 JSON.parse(JSON.stringfy())
//改变 name,原始obj的name没有改变
//改变like数组，原始obj的like没有发生改变
/*
var obj3 = JSON.parse(JSON.stringify(obj));
obj3.name = "lisa";
obj3.like[1]='swim';
console.log('obj',obj);
console.log('obj1',obj3);
*/

//遍历对象
var arr = Object.keys(obj);//返回属性形成一个数组
console.log(arr);
Object.keys(obj).forEach((item)=>{
    console.log('Object:'+obj[item])
});
