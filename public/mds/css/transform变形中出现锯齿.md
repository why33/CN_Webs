
在webkit内核下的浏览器中，旋转元素，元素的边缘会有明显的锯齿，这算是webkit抗锯齿的一个BUG。

为动画DOM元素添加CSS3样式-webkit-transform:transition3d(0,0,0)或-webkit-transform:translateZ(0);，这两个属性都会开启GPU硬件加速模式，从而让浏览器在渲染动画时从CPU转向GPU。

####解决方法：
  >使用CSS3 中的3D transform，通过GPU来渲染，能够有效抗锯齿，只需要在transfrom属性中加入translateZ（0）。

   **代码：**
   >>**-webkit-transform: rotate(5deg) translateZ(0);**
   
