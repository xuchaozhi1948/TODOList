


/*
$(document).ready(function(){
    if(localStorage.getItem("menuTitle")){
        var strStoreDate =localStorage.getItem("menuTitle");
        var listArr=strStoreDate.split(",")
    }else{
        var listArr = [];
    }
    Initi();
    $('.tj').on('click',function(){
        listArr.push($('.xuanxian').val());
        localStorage.setItem("menuTitle",listArr);
        Initi();
    });
    $('p').on('click',function(){
        localStorage.removeItem('menuTitle');
        listArr = [];
        Initi();
    });
    $('.shanchu').on('click',function(){
        listArr.splice(this.parentElement.title,1);
        localStorage.setItem("menuTitle",listArr);
        Initi();
    });

    function Initi(){
        $('.xuanxian').remove();
        $.each(listArr,function(){
            $('.h21').append(`<div class="xuanxian"style="margin-top: 10px"> <input type="checkbox" name="city" class="djx" checked="checked"><input type="text" value="测试"class="ceshi"><div class="shanchu">—</div></div>`);
        });
    }
});
*/












window.onload=function () {
    let tjs=document.querySelector(".tj");
    let xxk1=document.querySelector(".h21");
    let xxk2=document.querySelector(".h22");
    let yuan1 = document.querySelector(".yuan1");
    let yuan2 = document.querySelector(".yuan2");
    let num = 0;
    let num1 = 0;
    var doto =[];
    for (var i = 0 ; i <=localStorage.length;i++) {
        if (localStorage.getItem(i)) {
            console.log(localStorage.getItem(i));
            let xuanxian = document.createElement("div");
            xuanxian.setAttribute("class", "xuanxian");
            xxk1.appendChild(xuanxian);
            xxk1.appendChild(xuanxian);
            num++;
            xuanxian.innerHTML = `<input type=\"checkbox\" name=\"city\" class=\"djx\"><input type="text" value=${localStorage.getItem(i)} class="ceshi"><div class="shanchu">—</div>`;
            yuan1.innerText = num;
            xuanxian.style.marginTop = "10px";

        }

    }



    tjs.addEventListener('keydown',function (e) {
       if(e.keyCode==13){

           localStorage.length++;
           let xuanxian=document.createElement("div");
           xuanxian.setAttribute("class","xuanxian");

               if (tjs.value == ""){
                   alert("内容不能为空~")
               }
               else {
                   xxk1.appendChild(xuanxian);
                   num++;
                   xuanxian.innerHTML=`<input type=\"checkbox\" name=\"city\" class=\"djx\"><input type="text" value=${tjs.value} class="ceshi"><div class="shanchu">—</div>`;
                   yuan1.innerText=num;
                   xuanxian.style.marginTop="10px";
                   localStorage.setItem(localStorage.length,tjs.value);

                   // let storage=localStorage['tj']=`${tjs.value}`;

                   tjs.value="";

                   // console.log(tj);

               }
       }
   });
    document.addEventListener('click',function (e) {
        if(e.target.classList.contains('shanchu')){
            e.target.parentNode.remove();
            num--;
            localStorage.removeItem(num);

            yuan1.innerText=num;
        }
        if(e.target.classList.contains('shanchu2')){
            e.target.parentNode.remove();

            num1--;
            localStorage.removeItem(num1);

            yuan2.innerText=num1;
        }
        if (e.target.classList.contains('djx')) {
            let cuncu = e.target.nextElementSibling.value;

            e.target.parentNode.remove();
            num--;
            yuan1.innerText=num;
            let xuanxian = document.createElement("div");
            xuanxian.setAttribute("class", "xuanxian");
            xxk2.appendChild(xuanxian);
            num1++;
            yuan2.innerText=num1;
            xuanxian.innerHTML = `<input type=\"checkbox\" name=\"city\" class=\"djx2\" checked=\"checked\"><input type="text" value=${cuncu} class="ceshi2"><div class="shanchu2">—</div>`;
            xuanxian.style.marginTop = "10px";
            xuanxian.style.background = "#e6e6e6";

        }
        if (e.target.classList.contains('djx2')) {
            let cuncu2 = e.target.nextElementSibling.value;

            e.target.parentNode.remove();
            num1--;
            yuan2.innerText=num1;
            let xuanxian = document.createElement("div");
            xuanxian.setAttribute("class", "xuanxian");
            xxk1.appendChild(xuanxian);
            num++;
            yuan1.innerText=num;
            xuanxian.innerHTML = `<input type=\"checkbox\" name=\"city\" class=\"djx\"><input type="text" value=${cuncu2} class="ceshi"><div class="shanchu">—</div>`;
            xuanxian.style.marginTop = "10px";
        }

    })


















}
