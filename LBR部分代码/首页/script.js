let moon = document.getElementById('moon');
let left1 = document.getElementById('left1');
let left2 = document.getElementById('left2');
let right1 = document.getElementById('right1');
let right2 = document.getElementById('right2');

window.onload = function() 
{
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', function () 
{
  let value = window.scrollY;
  if (value < 1000) 
  { 
    moon.style.marginTop = value * -2+ 'px';
    left1.style.left = value * -1 + 'px';
    left2.style.left = value * -1 + 'px';
    right1.style.left = value * 1 + 'px';
    right2.style.left = value * 1.5 + 'px';
  }
  
});

let opacity = 1 - value / 1000; // 根据滚动距离计算透明度
moon.style.opacity = opacity;

// 例如，使用easeInOutQuad缓动函数
let easedValue = easeInOutQuad(value, 0, 1000, 1000);
moon.style.marginTop = easedValue * -2 + 'px';


