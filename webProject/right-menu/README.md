* overflow-x:visible | hidden | clip | scroll | auto 
当一个块级元素的内容在水平方向发生溢出时，CSS属性overflow-x决定应该截断溢出内容，或者显示滚动条，或者直接显示溢出内容。

* display 
  指定元素的显示类型，外部显示类型定义了元素怎样参与流式布局的处理
  内部显示类型定义了元素内子元素的布局方式
  1.display:table 内部显示为表格
  2.display:table-cell 让标签元素以表格单元格的形式呈现，类似于td标签

* vertical-align 
  指定行内元素 inline 或 表格单元格 table-cell元素的垂直对齐方式

* cursor 
  定义鼠标指针悬浮在元素上方显示的鼠标光标

* box-sizing
  定义应该如何计算一个元素的总宽度和总高度
  box-sizing:content-box 如果你设置一个元素的宽为100px,那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
  box-sizing:border-box 如果你设置一个元素的宽为100px,那么这100px会包含它的border和padding,内容区的实际宽度是width-padding-border的值