
let todo=[
//        {id:0,content:'0',state:true},
//        {id:1,content:'1',state:false},
//        {id:2,content:'2',state:true},
//        {id:3,content:'3',state:false},
//        {id:4,content:'4',state:true},
//        {id:5,content:'5',state:false},
];
let nextid=6;
if(localStorage.tododata){
    todo=JSON.parse(localStorage.tododata)
}
localStorage.tododata=JSON.stringify(todo);
localStorage.nextid=nextid;

function redraw() {
    localStorage.tododata=JSON.stringify(todo);
    localStorage.nextid=nextid;

    let doing=[];
    let done=[];
    todo.forEach(val=> {
        if (val.state) {
            done.push(val);
        }
        else {
            doing.push(val);
        }
    });

    let str1="";
    doing.forEach(val=>{
        str1+=`
                <li id="${val.id}" >
                <input  class="change" type="checkbox">
                <p>${val.content}</p>
                <div class="del">—</div>
               </li>`;
    });
    $('.doing').find('ul').html(str1);
    $(".section1 > .num").text(doing.length);

    let str2="";
    done.forEach(val=>{
        str2+=`
                    <li id="${val.id}" style="background: #f5f5f5">
                    <input  class="change" type="checkbox" checked>
                    <p style="background: #f5f5f5">${val.content}</p>
                    <div class="del">—</div>
                   </li>`;
    });
    $('.done').find('ul').html(str2);
    $(".section2 > .num").text(done.length);


}
redraw();


$('main').on('click','.del',function () {

    let id=$(this).closest('li').attr('id');
    let index=todo.findIndex(val=>val.id==id);
    todo.splice(index,1);
    redraw();

}).on('click','p',function () {

    let id = $(this).closest('li').attr('id');
    let index = todo.findIndex(val => val.id == id);
    let input = $('<input class="crr">').val($(this).text())
    $(this).html('').append(input);
    input.focus();
    input.change(function () {

        todo[index].content=$(this).val();
        redraw();
    })

}).on("click",'.change',function () {

    let id=$(this).closest('li').attr('id');
    let index=todo.findIndex(val=>val.id==id);
    todo[index].state=!todo[index].state;
    redraw();


});

let input1=$("#input");
input1.on('keyup',function (e) {
    if(e.which===13){
        if($(this).val()){
            todo.unshift({id:nextid,content:$(this).val(),state:false});
            nextid++;
            redraw();
            $(this).val("");
        }
    }

});

/*
===================================================

var todo=[]
let nextid=5;
if(localStorage.dat){
    todo=JSON.parse(localStorage.dat)
}
if(localStorage.id){
    nextid=JSON.parse(Number(localStorage.id))
}
function redraw() {

    let doing = [];
    let done = [];
    todo.forEach(val => {
        if (val.state == true) {
            done.push(val);
        }
        else {
            doing.push(val);
        }
    });
    let str1 = "";
    doing.forEach(val => {
        str1 += `<div class="xuanxian" id="${val.id}"><input type="checkbox" name="city" class="djx" ><input type="text"  class="ceshi" value=${val.content}><div class="shanchu">—</div></div>`;
    });
    $('.h21').append(str1);
    $('.h21 > .yuan').text(doing.length);

    let str2 = "";
    done.forEach(val => {
        str2 += `<div class="xuanxian" id="${val.id}"><input type="checkbox" name="city" class="djx" checked="checked"><input type="text"  class="ceshi" value=${val.content}><div class="shanchu">—</div></div>`;
    });
    $('.h22').append(str2);
    $('.h22 > .yuan').text(done.length);
}
 $('.shanchu').on('click',function () {
        e.preventDefault()
        let id = $(this).parent('.xuanxian').attr('id');
        let index = todo.findIndex(val => val.id == id);
        todo.splice(index, 1);
     localStorage.dat=JSON.stringify(todo);
     localStorage.id=JSON.stringify(nextid);
        redraw();
    })
    $('.ceshi').on('click', function () {
// alert(2)
        let id = $(this).parent('.xuanxian').attr('id');
        let input = $('<input type=text>').val($(this).html());
        $(this).html('').append(input);
        input.focus();
        input.change(function () {
            let index = todo.findIndex(val => val.id == id);
            todo[index].content = $(this).val();
            localStorage.dat=JSON.stringify(todo);
            redraw();

        })

    })
    $('.djx ').on("click", function () {
        // alert(3)
        let id = $(this).parent('.xuanxian').attr('id');
        let index = todo.findIndex(val => val.id == id);
        todo[index].state = !todo[index].state;
        localStorage.dat=JSON.stringify(todo);
        localStorage.id=JSON.stringify(nextid);
        redraw();

    });



    $(".tj").keyup(function(e){
        if(e.keyCode==13) {
            if($(this).val()){
                todo.unshift({id:nextid,content:$(this).val(),state:false});
                localStorage.dat=JSON.stringify(todo);
                localStorage.id=JSON.stringify(nextid);
                nextid++;
                redraw();
                $(this).val("");
            }
        }

    });

redraw();
*/

// }











































/*


/!*
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
*!/












window.onload=function () {
    let tjs=document.querySelector(".tj");
    let xxk1=document.querySelector(".h21");
    let xxk2=document.querySelector(".h22");
    let yuan1 = document.querySelector(".yuan1");
    let yuan2 = document.querySelector(".yuan2");
    let num = 0;
    let num1 = 0;
    let doto =[];

    if(localStorage.data){
        doto=JSON.parse(localStorage.data);
        for (let i = 0;i<doto.length;i++){
        let xuanxian=document.createElement("div");
        xuanxian.setAttribute("class","xuanxian");
        xxk1.appendChild(xuanxian);
        num++;
        xuanxian.innerHTML=`<input type=\"checkbox\" name=\"city\" class=\"djx\"><input type="text" value=${doto[i]} class="ceshi"><div class="shanchu">—</div>`;
        yuan1.innerText=num;
        xuanxian.style.marginTop="10px";
        }
    }




    tjs.addEventListener('keydown',function (e) {
       if(e.keyCode==13){

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
                   // localStorage.setItem(localStorage.length,tjs.value);
                   doto.push(tjs.value);
                   localStorage.data=JSON.stringify(doto);


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


















}*/
