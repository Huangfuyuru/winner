* position   
  relative 相对定位，是相对于他在流中的位置  
  absolurte 绝对定位，是相对于他最近的非static定位  

* clip-path 裁剪可视区域  
  clip-path:polygon(0 0,100% 0,100% 50%,0 50%)  
  polygon 是多边形 里面是裁剪的坐标点，大等三  

* 有时候发现在不是hover这个状态时也会添加transition，是为了在hover结束后，复原时有一定的动画效果