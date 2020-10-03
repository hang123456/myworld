window.addEventListener('load',function(){
    let right = document.querySelector('.swiper-right')
    let left = document.querySelector('.swiper-left')
    let swiper = document.querySelector('.swiper-bar')
    let ul = swiper.querySelector('.list-imgs').querySelector('ul')
    let ol = swiper.querySelector('ol')
    let lis = ul.querySelectorAll('li')
    let num = 0
    let cicle = 0
    let offWidth = swiper.offsetWidth
    let flag = true
    let animate = function(obj,target,callback){
        clearInterval(obj.timer)
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if(target === obj.offsetLeft){
                clearInterval(obj.timer)
                callback && callback()
            }
            obj.style.left = obj.offsetLeft + step + 'px'
        }, 15);
    }
    swiper.addEventListener('mouseenter',function(){
        right.style.display = 'block'
        left.style.display = 'block'
    })
    swiper.addEventListener('mouseleave',function(){
        right.style.display = ''
        left.style.display = ''
    })
    for(var i = 0; i < lis.length;i++){
        var li = document.createElement('li')
        li.setAttribute('index',i)
        ol.appendChild(li)
        li.addEventListener('click',function(){
           for(let i = 0; i < ol.children.length;i++){
               ol.children[i].className = ''
           }
           this.className = 'curret'
           var index = this.getAttribute('index')
           cicle = index
           num = index
           animate(ul,-index * offWidth)
        })
    }
    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    right.addEventListener('click',function(){
           if(flag){
               flag = false
            if(num > ul.children.length - 1 ){
                ul.style.left = 0
                num = 0
            }
            num++
            cicle++
            if(cicle === ol.children.length){
                cicle = 0
            }
            for(let i = 0;i < ol.children.length; i++){
                ol.children[i].className = ''
            }
            ol.children[cicle].className = 'curret'
            animate(ul,-num * offWidth,function(){
                flag = !flag
            })
           }
    })
    left.addEventListener('click',function(){
        if(flag){
            flag = false
            if(num === 0 ){
                num = ul.children.length - 1
                ul.style.left = -num * offWidth + 'px'
            }
            num--
            cicle--
            if(cicle < 0){
                cicle = ol.children.length - 1
            }
            for(let i = 0;i < ol.children.length; i++){
                ol.children[i].className = ''
            }
            ol.children[cicle].className = 'curret'
            animate(ul,-num * offWidth,function(){
                flag = !flag
            })
        }
})
    ol.children[0].className = 'curret'
   
})