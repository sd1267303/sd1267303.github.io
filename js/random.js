var btn = document.getElementById('btn');
var hair1 = document.getElementById('ctrlBtn1')
var hair2 = document.getElementById('ctrlBtn2')
var eye1 = document.getElementById('ctrlBtn3')
var eye2 = document.getElementById('ctrlBtn4')
var mouth1 = document.getElementById('ctrlBtn5')
var mouth2 = document.getElementById('ctrlBtn6')
var coat1 = document.getElementById('ctrlBtn7')
var coat2 = document.getElementById('ctrlBtn8')
var print = document.getElementById('print')
var timer = null , falg = false;

var myPic0 = ["eyes/eye (1).png","eyes/eye (2).png","eyes/eye (3).png",
			"eyes/eye (4).png","eyes/eye (5).png","eyes/eye (6).png",
			"eyes/eye (7).png","eyes/eye (8).png","eyes/eye (9).png",
			"eyes/eye (10).png","eyes/eye (11).png"]
var myPic1 = ["hairs/hair (1).png","hairs/hair (2).png","hairs/hair (3).png",
			"hairs/hair (4).png","hairs/hair (5).png","hairs/hair (6).png",
			"hairs/hair (7).png","hairs/hair (8).png","hairs/hair (9).png",
			"hairs/hair (10).png","hairs/hair (11).png","hairs/hair (12).png",
			"hairs/hair (13).png","hairs/hair (14).png","hairs/hair (15).png",
			"hairs/hair (16).png","hairs/hair (17).png","hairs/hair (18).png",
			"hairs/hair (19).png"]
var myPic2 = ["mouths/mouth (1).png","mouths/mouth (2).png","mouths/mouth (3).png",
			"mouths/mouth (4).png","mouths/mouth (5).png","mouths/mouth (6).png",
			"mouths/mouth (7).png","mouths/mouth (8).png","mouths/mouth (9).png",]
var myPic3 = ["coats/coat (1).png","coats/coat (2).png","coats/coat (3).png",
			"coats/coat (4).png","coats/coat (5).png","coats/coat (6).png",
			"coats/coat (7).png","coats/coat (8).png"]
var myPic4 = ["noses/nose (1).png","noses/nose (2).png","noses/nose (3).png",
			"noses/nose (4).png"]
var myPic5 = ["blushes/blush (1).png","blushes/blush (2).png","blushes/blush (3).png",
			"blushes/blush (4).png","blushes/blush (5).png","blushes/blush (6).png"]

////////////////////////////////////////////////////////////////////////////////////
function randomPic0(){
	var randomNum0 = Math.floor((Math.random()*myPic0.length));
	document.getElementById('eyePics').src = myPic0[randomNum0];
}
function randomPic1(){
	var randomNum1 = Math.floor((Math.random()*myPic1.length));
	document.getElementById('hairPics').src = myPic1[randomNum1];
}
function randomPic2(){
	var randomNum2 = Math.floor((Math.random()*myPic2.length));
	document.getElementById('mouthPics').src = myPic2[randomNum2];
}
function randomPic3(){
	var randomNum3 = Math.floor((Math.random()*myPic3.length));
	document.getElementById('coatPics').src = myPic3[randomNum3];
}
function randomPic4(){
	var randomNum4 = Math.floor((Math.random()*myPic4.length));
	document.getElementById('nosePics').src = myPic4[randomNum4];
}
function randomPic5(){
	var randomNum5 = Math.floor((Math.random()*myPic5.length));
	document.getElementById('blushPics').src = myPic5[randomNum5];
}
// function screenMask(){
// 	document.getElementById("mask").setAttribute("display","block");
// }
/////////////////换眼睛图片按钮
var countHair=0;
var countEye=0;
var countMouth=0;
var countCoat=0;
hair2.onclick = function(){
			if(countHair<myPic1.length-1)
				countHair++;
			else
				countHair=0;
				document.getElementById('hairPics').src = myPic1[countHair];
			}
hair1.onclick = function(){
			if(countHair>0)
				countHair--;
			else
				countHair=myPic1.length-1;
				document.getElementById('hairPics').src = myPic1[countHair];
			}
eye2.onclick = function(){
			if(countEye<myPic0.length-1)
				countEye++;
			else
				countEye=0;
				document.getElementById('eyePics').src = myPic0[countEye];
			}
eye1.onclick = function(){
			if(countEye>0)
				countEye--;
			else
				countEye=myPic0.length-1;
				document.getElementById('eyePics').src = myPic0[countEye];
			}
mouth2.onclick = function(){
			if(countMouth<myPic2.length-1)
				countMouth++;
			else
				countMouth=0;
				document.getElementById('mouthPics').src = myPic2[countMouth];
			}
mouth1.onclick = function(){
			if(countMouth>0)
				countMouth--;
			else
				countMouth=myPic2.length-1;
				document.getElementById('mouthPics').src = myPic2[countMouth];
			}
coat2.onclick = function(){
			if(countCoat<myPic3.length-1)
				countCoat++;
			else
				countCoat=0;
				document.getElementById('coatPics').src = myPic3[countCoat];
			}
coat1.onclick = function(){
			if(countCoat>0)
				countCoat--;
			else
				countCoat=myPic3.length-1;
				document.getElementById('coatPics').src = myPic3[countCoat];
			}
		
////////////////随机搭配按钮
btn.onclick = function(){
	falg = !falg ;
	if(falg){
		timer = setInterval(() => {
			randomPic0();
			randomPic1();
			randomPic2();
			randomPic3();
			randomPic4();
			randomPic5();
			this.innerHTML = "--- STOP ---";
		},100);
	}else{
		clearInterval(timer);
		this.innerHTML = "RANDOM"
	}
}
///////////////截图按钮
print.onclick = function(){ 
	// screenMask();
	html2canvas(document.querySelector("#main")).then(function(canvas) {
		var dataUrl = canvas.toDataURL();
		var newImg = document.createElement("img");
		newImg.src =  dataUrl;
		document.querySelector("#pic").appendChild(newImg);
	});   
};   
//////////////预加载
///var preload = new createjs.LoadQueue(true);
var mainfest = [
  { src: "eyes/eye (1).png","eyes/eye (2).png","eyes/eye (3).png",
			"eyes/eye (4).png","eyes/eye (5).png","eyes/eye (6).png",
			"eyes/eye (7).png","eyes/eye (8).png","eyes/eye (9).png",
			"eyes/eye (10).png","eyes/eye (11).png" },
  { src: "hairs/hair (1).png","hairs/hair (2).png","hairs/hair (3).png",
			"hairs/hair (4).png","hairs/hair (5).png","hairs/hair (6).png",
			"hairs/hair (7).png","hairs/hair (8).png","hairs/hair (9).png",
			"hairs/hair (10).png","hairs/hair (11).png","hairs/hair (12).png",
			"hairs/hair (13).png","hairs/hair (14).png","hairs/hair (15).png",
			"hairs/hair (16).png","hairs/hair (17).png","hairs/hair (18).png",
			"hairs/hair (19).png" },
  { src: "mouths/mouth (1).png","mouths/mouth (2).png","mouths/mouth (3).png",
			"mouths/mouth (4).png","mouths/mouth (5).png","mouths/mouth (6).png",
			"mouths/mouth (7).png","mouths/mouth (8).png","mouths/mouth (9).png", },
  { src: "coats/coat (1).png","coats/coat (2).png","coats/coat (3).png",
			"coats/coat (4).png","coats/coat (5).png","coats/coat (6).png",
			"coats/coat (7).png","coats/coat (8).png" },
  { src: "blushes/blush (1).png","blushes/blush (2).png","blushes/blush (3).png",
			"blushes/blush (4).png","blushes/blush (5).png","blushes/blush (6).png"},
  { src: "noses/nose (1).png","noses/nose (2).png","noses/nose (3).png",
			"noses/nose (4).png"},
];
preload.startPreload();
