# timeline
 

### 效果图:
![pxqzh8.png](https://s1.ax1x.com/2018/01/29/pxqzh8.png)

### 功能:
1. 默认状态只展示时间;
2. 点击时间可以展开,再次点击会缩放里面的内容；
3. 点击时间的时候左侧的绿线也会相应的改变长度。

### 实现思路：
1. 左右flex布局，左侧div放以背景形式放直线，右侧放无序列表，为每个li设置一个圆点的背景图片；
2. 根据右侧无序列表的li个数计算线的长度，动态改变长度
3. 给时间添加点击事件，通过判断是否展开，来展示或收缩它下边的内容。
