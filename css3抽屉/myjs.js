var oUl = document.querySelector('div.box ul');
var oLi = document.querySelectorAll('div.box ul li');
var x = document.querySelectorAll('div.box ul li div.error');
var img = document.querySelectorAll('div.box ul li div.img');
var timer = null;
console.log(oLi);
oUl.addEventListener('click', function (e) {
    var e = e || window.event;
    if (e.target.nodeName !== 'DIV') {
        return false;
    }
    var parent = e.target.parentNode;
    var j = Array.prototype.indexOf.call(oLi, parent);
    var wait = function () {
        var pro = new Promise(function (resolve, reject) {

            for (var i = 0; i < oLi.length; i++) {
                if (i == j) {
                    continue;
                } else {
                    var h = oLi[i].clientHeight;
                    oLi[i].style.height = h + 'px';
                    oLi[i].style.height = 0;
                    oLi[i].style.width = 0;
                }
            }
            clearTimeout(timer);
            timer = setTimeout(() => {
                resolve();
            }, 500)
        })
        return pro;
    };
    var wait1 = function (data) {

        var pro = new Promise(function (resolve, reject) {
            x[j].style.display = 'block';
            x[j].addEventListener('click', function (e) {
                e.stopPropagation();
                for (var i = 0; i < oLi.length; i++) {
                    if (i == j) {
                        continue;
                    } else {

                        oLi[i].style.width = '100%';
                        oLi[i].style.height = '100%';
                    }
                }
                this.style.display = 'none';
            })

        })
        return pro;
    };

    wait().then(wait1);

});



