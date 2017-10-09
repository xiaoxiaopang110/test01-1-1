$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplayHoverPause:true,
        autoplay: true,
        autoplayTimeout: 3000,
        
    });
function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

// 点击导航栏a弹出下拉框
var daohangli=document.getElementsByClassName("daohang-li");
var daohanga=$("#daohang-li").find("a");
var daohangBox=$(".daohang-box");

// 移出导航栏 下拉DIV隐藏
$("#logo ").mouseenter(function(){
        daohangBox.hide();
    });




for(var i=0;i<daohanga.length;i++){
daohanga[i].id=i;	


daohanga[i].onmouseover=function(){

for(var i=0;i<daohanga.length;i++){
daohangBox[i].style.display="none";

}
daohangBox[this.id].style.display="block";

 } //daohanga[i].onmouseover结束

 } //第一个for循环结束

for(var j=0;j<daohangBox.length;j++){
	daohangBox[j].onmouseover=function(){
	this.style.display="block";

}
daohangBox[j].onmouseout=function(){
	this.style.display="none";}

}

// 下拉框js 第一个


var menus=$('.menu-content');

var menuItems=$(".menu-item");

var innerMenus=$(".inner-menu");
var innerBoxs=$(".inner-box");

// 遍历主菜单 绑定事件
for (var i=0;i<menuItems.length;i++) {
	menuItems[i].setAttribute("data-index",i);

	menuItems[i].onmouseover=function(){
	   	var id=this.getAttribute("data-index");
	   	for(var j=0;j<menuItems.length;j++){
	   		innerBoxs[j].style.display="none";
	   	}
	   
	   	innerBoxs[id].style.display="block";
	}
	
}
// 下拉框js结束




// news区域轮播图


var slides=document.getElementsByClassName("banner-slide");
var spans=byId("dots").getElementsByTagName("span");


for(var i=0;i<spans.length;i++){
spans[i].id=i;	 
spans[i].onclick=function(){
for(var j=0;j<slides.length;j++){
	slides[j].style.display="none";
	spans[j].className="";
}

slides[this.id].style.display="block"
this.className="active";
}


}

// news区域选项卡中间


var newstopa=byId("news-top").getElementsByTagName("a");
var newstopitem=byId("news-middle").getElementsByClassName("middle-item");



for(var i=0;i<newstopa.length;i++){
newstopa[i].id=i;	 
newstopa[i].onclick=function(){
for(var j=0;j<newstopa.length;j++){
	newstopa[j].className="";
	newstopitem[j].style.display="none";
}

newstopitem[this.id].style.display="block"
this.className="active";
}


}



// news区域选项卡右边


var newsas=byId("news-right-top").getElementsByTagName("a");
var newsitem=byId("news-right").getElementsByClassName("item");


for(var i=0;i<newsas.length;i++){
newsas[i].id=i;	 
newsas[i].onclick=function(){
for(var j=0;j<newsas.length;j++){
	newsas[j].className="";
	newsitem[j].style.display="none";
}

newsitem[this.id].style.display="block"
this.className="active";
}


}



// 金牌项目自动轮播图

var jpbanner=byId("jpbanner");
var index=0,
    timer=null,
    pics=jpbanner.getElementsByTagName("a"),
    len=pics.length;

function slideImg(){
  // 滑入清除定时器，
jpbanner.onmouseover=function(){
  
clearInterval(timer);
}
// 离开继续定时器	
jpbanner.onmouseout=function(){
  timer=setInterval(function(){
index++;
if(index>=len){
	index=0;
}
changeImg();

  },3000);


}
// 页面加载完毕自动触发函数
jpbanner.onmouseout();




} // slideImg函数结束

slideImg();

// 切换图片
function changeImg(){
for(var i=0;i<len;i++){
	pics[i].style.display="none";
}
pics[index].style.display="block";
};


// 媒体专访区域图片自动向左滚动
var timer=null;
var odiv=document.getElementById("item-lis");
var oul=odiv.getElementsByTagName("ul")[0];
var oli=oul.getElementsByTagName("li");
oul.innerHTML=oul.innerHTML+oul.innerHTML;
oul.style.width=oli[0].offsetWidth*oli.length+'px';

function move(){
if(oul.offsetLeft<-oul.offsetWidth/2)
{
oul.style.left="0";
}	
if(oul.offsetLeft>0)
{
oul.style.left=-oul.offsetWidth/2+'px';
}

  oul.style.left=oul.offsetLeft+2+'px';

};



timer=setInterval(move,30);
odiv.onmouseover=function(){
	clearInterval(timer);
}
odiv.onmouseout=function(){
timer=setInterval(move,30);
}


// 媒体专访 环境展示 有情链接切换

var top1a=byId("top1").getElementsByTagName("a");
var huanjingitem=byId("huanjing").getElementsByClassName("item");


for(var i=0;i<top1a.length;i++){
top1a[i].id=i;	 
top1a[i].onmouseover=function(){
for(var j=0;j<top1a.length;j++){
	top1a[j].className="";
	huanjingitem[j].style.display="none";
}

huanjingitem[this.id].style.display="block"
this.className="active";
}


}

// 沙龙活动 员工风采 切换

var shalonga=byId("top2").getElementsByTagName("a");
var shalongitem=byId("shalong").getElementsByClassName("item4");


for(var i=0;i<shalonga.length;i++){
shalonga[i].id=i;	 
shalonga[i].onmouseover=function(){
for(var j=0;j<shalonga.length;j++){
	shalonga[j].className="";
	shalongitem[j].style.display="none";
}

shalongitem[this.id].style.display="block"
this.className="active";
}


}

// 沙龙活动 员工风采 按钮点击左移右移

var prev=byId("prev");
var next=byId("next");
var shanglongul=byId("shanglongul");

var shanglonglis=shanglongul.getElementsByTagName("li");
shanglongul.innerHTML=shanglongul.innerHTML+shanglongul.innerHTML;
shanglongul.style.width=shanglonglis[0].offsetWidth*shanglonglis.length+'px';
prev.onclick=function (){

if(shanglongul.offsetLeft<-shanglongul.offsetWidth/2)
{
shanglongul.style.left="0";
}	

shanglongul.style.left=shanglongul.offsetLeft-190+'px';
};



next.onclick=function(){
if(shanglongul.offsetLeft>0)
{
shanglongul.style.left=-shanglongul.offsetWidth/2+'px';
}

  shanglongul.style.left=shanglongul.offsetLeft+190+'px';
};







//var shanglongul2=byId("shanglongul2");
//
//var shanglong2lis=shanglongul2.getElementsByTagName("li");
//shanglongul2.innerHTML=shanglongul2.innerHTML+shanglongul2.innerHTML;
//shanglongul2.style.width=shanglong2lis[0].offsetWidth*shanglonglis.length+'px';
//prev.onclick=function (){
//
//if(shanglongul2.offsetLeft<-shanglongul2.offsetWidth/2)
//{
//shanglongul2.style.left="0";
//}
//console.log(-shanglongul2.offsetWidth/2);
//shanglongul2.style.left=shanglongul2.offsetLeft-190+'px';
//};
//
//
//
//next.onclick=function(){
//if(shanglongul2.offsetLeft>0)
//{
//shanglongul2.style.left=-shanglongul2.offsetWidth/2+'px';
//}
//console.log(-shanglongul2.offsetWidth/2);
//  shanglongul2.style.left=shanglongul2.offsetLeft+190+'px';
//}



//固定侧边栏JS效果
    var Menubar = function(){
        this.el=document.querySelector('#sidebar ul');
        this.state='allClosed';
        this.el.addEventListener('click',function(e){
            e.stopPropagation();
        });
        var self=this;
        this.currentOpenMenuContent=null;
        this.menuList=document.querySelectorAll('#sidebar ul > li');

        for(var i=0;i<this.menuList.length;i++){
        this.menuList[i].addEventListener('click',function(e){
         var menuContentEl=document.getElementById(e.currentTarget.id+'-content');
        if(self.state==='allClosed'){
             console.log('打开'+menuContentEl.id);
            menuContentEl.style.top='161';
            menuContentEl.style.left='-180px';
            menuContentEl.className='itembox';
            menuContentEl.classList.add('menuContent-move-right');
            self.state='hasOpened';
            self.currentOpenMenuContent=menuContentEl;
        }else{
         console.log('关闭'+self.currentOpenMenuContent.id);

            self.currentOpenMenuContent.className='itembox';
            self.currentOpenMenuContent.style.top='161px';
            self.currentOpenMenuContent.style.left='-180px';
            self.currentOpenMenuContent.classList.add('menuContent-move-left');
            console.log('打开'+menuContentEl.id);
            menuContentEl.style.top='230px';
            menuContentEl.style.left='0px';
            menuContentEl.className='itembox';
            menuContentEl.classList.add('menuContent-move-up');
            self.state='hasOpened';
            self.currentOpenMenuContent=menuContentEl;
        }
        });

        }

    this.menuContentList=document.querySelectorAll('.itembox>div.itemboxc');

    for(i=0;i<this.menuContentList.length;i++){
        this.menuContentList[i].addEventListener('click',function(e){
        var menuContent= e.currentTarget.parentNode;
            menuContent.className='itembox';
            menuContent.style.top='161px';
            menuContent.style.left='-180px';
            menuContent.classList.add('menuContent-move-left');
            self.state='allClosed';
        });

    }
    };
    var SideBar = function(elementId) {
        this.eId = elementId||'sidebar';
        this.menubar=new Menubar();
        this.el = document.getElementById(this.eId);
        this.closeBarEl = document.getElementById('closeBar');
        this.state = 'opened';
        var self = this;
        this.el.addEventListener('click',function(evt) {
            if(evt.target !==  self.el) {

                self.triggerSwitch();
            }
        });
    };

    SideBar.prototype.triggerSwitch = function() {
        if(this.state === 'opened')
            this.close();
        else if(this.state === 'closed')
            this.open();
    };

    SideBar.prototype.close = function() {
       console.log('关闭 sidebar');
        this.el.style.left = '';

        this.closeBarEl.style.left = '';
        this.el.className='sidebar-move-left';
        this.closeBarEl.innerHTML='+';
        this.closeBarEl.className='closebar-move-right';

        this.state='closed';

    };

    SideBar.prototype.open = function() {
        console.log('打开 sidebar');
        this.state='opened';
        this.el.style.left='-70px';
        this.el.className='sidebar-move-right';
        this.closeBarEl.innerHTML='X';
        this.closeBarEl.style.left='110px';
        this.closeBarEl.className='closebar-move-left';
    };


    var sideBar = new SideBar();


    var itemboxs=$('.itembox');

    $("#closeX").click(function(){
        for(var j=0;j<itemboxs.length;j++){
            itemboxs[j].style.display='block';
            for(var k=0;k<itemboxs.length;k++){
                itemboxs[k].style.display='none';
            }
        }

    });






});
