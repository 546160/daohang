//cookie
function setCookie(name, value) {
	var Days = 360;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = escape(name) + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + escape(name) + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function zyd_show() {
	/* 鏄剧ず */
	//document.querySelector(".zdy").style.display="block";
	$(".zdy_name").val("");
	$(".zdy_link").val("");

	if ($(".zdy_button").attr("data") == "1") {
		$(".i_r_edit").hide();
		$(".zdy_button").attr("data", "0");
	} else {
		$(".i_r_edit").show();
		$(".zdy_button").attr("data", "1");
	}
}
function zdy_close() {
	/* 闅愯棌 */
	document.querySelector(".zdy").style.display = "none";
	$(".i_r_edit").hide();
}
//鍙栨秷
function zdy_false() {
	/* 闅愯棌 */
	document.querySelector(".zdy").style.display = "none";
	$(".i_r_edit").hide();
}
function zyd_edit(index) {
	/* 鏄剧ず */
	document.querySelector(".zdy").style.display = "block";
	var that = $($($(".jj-list-con li")[index]).children("a"));
	$(".zdy_name").val(that.html());
	$(".zdy_link").val(that.attr("href"));
	//$(".i_r_edit").show();
	$(".zdy").attr("date", index);
}

//纭畾
function zdy_true() {
	$(".i_r_edit").hide();
	/* 闅愯棌 */
	document.querySelector(".zdy").style.display = "none";
	var name = $(".zdy_name").val();
	var link = $(".zdy_link").val();
	var index = $(".zdy").attr("date");
	//console.log(name,link);
	setCookie("zdylink_" + index, name + "_fg_" + link);
	c_init();

}


function c_init() {
	//$(".zdy_li").empty();

	var aCookie = document.cookie.split(";");

	var zdylength = 0;
	for (var i = 0; i < aCookie.length; i++) {
		var aCrumb = aCookie[i].split("=");
		if (aCrumb[0].toString().trim() == 'order_list') {
			continue;
		}
		var name = unescape(aCrumb[0].trim());

		if (aCrumb[0].toString().trim().indexOf("zdylink_") > -1) {

			zdylength = zdylength + 1;
			var l_l_edit = $(".jj-list-con li")[name.replace("zdylink_", "")];
			if (l_l_edit) {

				var link = getCookie(name).split("_fg_");

				$($(l_l_edit).children("a")).attr("href", link[1]);
				$($(l_l_edit).children("a")).html(link[0]);
			}
			//$(".zdy_li").append('<li><a href="'+link +'" class="link-3" target="_blank">'+(name.replace("zdylink_",""))+'</a><div class="i_r_remove" onclick="s_r(\''+aCrumb[0]+'\');"></div></li>');
		}

	}
	if (zdylength == 0) {
		//$(".zdy_list").hide();
	} else {
		//$(".zdy_list").show();	
	}

}
function s_r(key) {
	delCookie(key.trim());
	//c_init();
}
window.onload = function () {
	c_init();
	var list_li = $("._b li");
	for (var i = list_li.length - 1; i >= 0; i--) {
		$(list_li[i]).append('<div class="i_r_edit" onclick="zyd_edit(\'' + i + '\');"></div>');
	}

}
// 鐧惧害缁熻浠ｇ爜寮€濮嬶紝璇峰垹闄ゆ垨鑰呬慨鏀规垚鑷繁鐨�
var _hmt = _hmt || [];
(function () {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?b556d06a5110a1a17fa2ceb5cb8a4acb";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();
// 鐧惧害缁熻浠ｇ爜缁撴潫

$(function () {
	// $('body').height($('body')[0].clientHeight);
	initpage();
	$(window).resize(function () {
		initpage();
	})

	function initpage() {
		var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
		var _html = document.getElementsByTagName('html')[0];
		view_width > 640 ? _html.style.fontSize = 640 / 16 + 'px' : _html.style.fontSize = view_width / 16 + 'px';
	}
});

var sllTop;
var divsTop = 330;/*document.getElementsByClassName('content')[0].offsetTop; 鑾峰彇褰撳墠瀵硅薄鍒板叾涓婄骇灞傞《閮ㄧ殑璺濈*/
window.onscroll = function () {
	var onBtn = document.getElementById('top-box');
	sllTop = document.documentElement.scrollTop || document.body.scrollTop;//濡傛灉娴忚鍣ㄤ笉鏀寔绗竴涓簨浠跺垯閫夋嫨绗簩

	if (sllTop >= 40) {
		$('.header-con').css('padding', '0');
		$('.logo img').css({ 'width': '50', 'margin-top': '5px', 'margin-left': '10px' });
	} else {
		$('.header-con').css('padding', '10px 0');
		$('.logo img').css({ 'width': '60', 'margin-top': '0px', 'margin-left': '0px' });
	}

	if (sllTop > 240) {
		$('#tbox2').css('display', 'block')
	} else {
		$('#tbox2').css('display', 'none');
	}
	if (sllTop >= divsTop) {
		$('.left-list').css('position', 'fixed');
	} else {
		$('.left-list').css('position', '');
	}
	tlistTop();

};

$(function () {
	$(".taoba").click(function (event) {
		var i = $(this).index();
		var id = $('.dingwei')[i];
		$("html,body").animate({ scrollTop: $(id).offset().top - 80 }, 800);
	});


	$(".list-text").click(function (event) {
		var i2 = $(this).index();
		var id2 = $('.sethome-con')[i2];
		$("html,body").animate({ scrollTop: $(id2).offset().top - 80 }, 800);
	});
});

function tlistTop() {
	var sethome_conHeight;
	var tihsHeight;
	var list_text = document.getElementsByClassName('fa-caret-right');
	if (list_text.length === 0) {
		return false;  //濡傛灉鍖归厤鍒�0涓厓绱狅紝鍒欏皢鍑芥暟杩斿洖锛屼笉缁х画鎵ц
	}
	arr1 = []; //瀛樺偍鍏冪礌鐨則op璺濈椤甸潰椤堕儴鐨勯珮搴�
	for (var i = 0; i <= 4; i++) {
		thisHeight = document.getElementsByClassName('sethome-con')[i].offsetTop + divsTop - 80;
		arr1.push(thisHeight); //灏嗗惊鐜幏鍙栧埌鐨勫€兼坊鍔犲埌鏁扮粍閲岄潰
	}

	if (sllTop >= arr1[0]) {
		list_text[0].style.opacity = 1;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[1]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 1;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[2]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 1;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[3]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 1;
		list_text[4].style.opacity = 0;
	} if (sllTop >= arr1[4]) {
		list_text[0].style.opacity = 0;
		list_text[1].style.opacity = 0;
		list_text[2].style.opacity = 0;
		list_text[3].style.opacity = 0;
		list_text[4].style.opacity = 1;
	}
}

$('#gotop').click(function () {
	$('body,html').animate({
		scrollTop: 0
	},
		800);//鐐瑰嚮鍥炲埌椤堕儴鎸夐挳锛岀紦鎳傚洖鍒伴《閮�,鏁板瓧瓒婂皬瓒婂揩
})


/*閫夋嫨鎼滅储寮曟搸*/
$('.Select-box ul').hover(function () {
	$(this).css('height', 'auto')
}, function () {
	$(this).css('height', '40px')
});
$('.Select-box-2 ul').hover(function () {
	$(this).css('height', 'auto')
}, function () {
	$(this).css('height', '47px')
});

$('.Select-box-2 li').click(function () {
	var _tihs = $(this).attr('class');
	var _html = $(this).html();
	var _name = 'q';
	if (_tihs == 'this_s') {
		return "";
	}
	if (_tihs == 'ff_s') {
			_tihs = 'https://fsoufsou.com/search';
			_name = 'q';
	} else if (_tihs == 'google_s') {
		_tihs = 'https://www.google.com/search';
		_name = 'q';
	} else if (_tihs == 'bing_s') {
		_tihs = 'https://www.bing.com/search';
		_name = 'q';
	} else if (_tihs == 'miji_s') {
		_tihs = 'https://duckduckgo.com/';
		_name = 'q';
	} else if (_tihs == 'baidu_s') {
		_tihs = 'https://www.baidu.com/s';
		_name = 'wd';
	} 
	else {
		_tihs = 'https://fsoufsou.com/search';
		_name = 'q';
	}
	$('.baidu form').attr('action', _tihs);
	$('.this_s').html(_html);
	$('#kw-2').attr('name', _name);
	$('.Select-box-2 ul').css('height', '48px');

	setCookie("_search_", _html + "_nln_" + _tihs + "_nln_" + _name);
});

function _search_() {
	var aCookie = document.cookie.split(";");

	for (var i = 0; i < aCookie.length; i++) {
		var aCrumb = aCookie[i].split("=");
		if (aCrumb[0].toString().trim() == 'order_list') {
			continue;
		}
		var name = unescape(aCrumb[0].trim());

		if (aCrumb[0].toString().trim().indexOf("_search_") > -1) {

			var link = getCookie(name).split("_nln_");

			$('.baidu form').attr('action', link[1]);
			$('.this_s').html(link[0]);
			$('#kw-2').attr('name', link[2]);
			$('.Select-box-2 ul').css('height', '48px');
		}

	}

}
_search_();

//娓呯┖杈撳叆妗嗗唴瀹�
$('.qingkong').click(function () {
	cls();
	$(this).css('display', 'none')
});
function cls() {
	var sum = 0;
	var t = document.getElementsByTagName("INPUT");
	for (var i = 0; i < t.length; i++) {
		if (t[i].type == 'text') {
			++sum;
			t[i].value = "";//娓呯┖ 
		}
	}
}

//娓呯┖杈撳叆妗嗘寜閽殑鏄剧ず鍜岄殣钘�
function if_btn() {
	var btn_obj = document.getElementById("kw") || document.getElementById("kw-2");
	var cls_btn = document.getElementById("qingkong");
	var btn_obj_val;
	var times;
	//褰撳厓绱犺幏寰楃劍鐐规椂
	if (btn_obj == '' || btn_obj == null) {
		return false;  //濡傛灉娌℃湁鎵惧埌杩欎釜鍏冪礌锛屽垯灏嗗嚱鏁拌繑鍥烇紝涓嶇户缁墽琛�
	}
	btn_obj.onfocus = function () {
		times = setInterval(function () {
			btn_obj_val = btn_obj.value;
			if (btn_obj_val != 0) {
				cls_btn.style.display = "block";
			} else {
				cls_btn.style.display = "none";
			}
		}, 200);
	}
	//鍏冪礌澶卞幓鐒︾偣鏃�
	btn_obj.onblur = function () {
		clearInterval(times);
	}

}
if_btn();

//棣栭〉鐨偆閫夋嫨鍒楄〃
$('.pifu-con').hover(function () {
	$('.iex-zuhti-list').fadeIn(250);
	$('.pifu-con .link-list-a .fa-angle-down').addClass('fa-rotate-180');
}, function () {
	$('.iex-zuhti-list').fadeOut(0);
	$('.pifu-con .link-list-a .fa-angle-down').removeClass('fa-rotate-180');
});

//寰俊浜岀淮鐮佹樉绀哄拰闅愯棌
$('.fw-dingwei a').hover(function () {
	$('.fw-weixing').fadeIn(250);
}, function () {
	$('.fw-weixing').fadeOut(0);
});


$('.muban li').click(function () {
	_index = $(this).index();
	$(this).addClass('shaw').siblings().removeClass('shaw');
	$('.muban-list ul').eq(_index).fadeIn(250).siblings().fadeOut(0);
});
$('.ruanjian-tab li').click(function () {
	_index = $(this).index();
	$(this).addClass('shaw').siblings().removeClass('shaw');
	$('.ruanjian-list ul').eq(_index).fadeIn(250).siblings().fadeOut(0);
});

$('.list-link-4').hover(function () {
	//鑾峰彇褰撳墠鍏冪礌鐨則itle鍐呭锛岃祴鍊肩粰_thisTit
	var _thisTit = $(this).attr('data-title');
	//tips鎻愮ず鍐呭涓篲thisTit锛堝嵆绛変簬褰撳墠榧犳爣婊戣繃鍏冪礌鐨則itle鍐呭锛夛紝鍚搁檮瀵硅薄涓哄綋鍓嶉紶鏍囨粦杩囧璞�
	if (_thisTit != "") {	//鍒ゆ柇鏉′欢锛屽綋鍓嶅厓绱犵殑data-title涓嶇瓑浜庣┖鎵嶆墽琛屼笅闈㈢殑浠ｇ爜
		layer.tips(_thisTit, this, {
			tips: [1, '#1E9FFF'],
			time: 99999,
		});
	}

}, function () {
	$('.layui-layer-tips').css('display', 'none')
});

var btn = $("#kw-2"), oUl = $(".keylist")[0];

$("#qingkong").click(function () {
	oUl.style.display = 'none';
})

// 鎼滅储鑱旀兂
btn.keyup(function (e) {
	if (e.keyCode == 13 || e.keyCode == 40 || e.keyCode == 38) {
		e.preventDefault();
		return;
	}
	var value = this.value;
	if (value) {
		var oScript = document.createElement('script');
		oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + value + '&cb=aa'
		document.body.appendChild(oScript);
		oScript.remove();
	} else if (value == 0) {
		oUl.style.display = 'none';
	}

})

// 鎺у埗鎼滅储鏃舵樉绀鸿仈鎯冲唴瀹圭殑鏁伴噺
function aa(data) {
	//console.log(data);
	oUl.style.display = 'block';
	var list = data.s;
	var str = '';

	for (var i = 0; i < list.length; i++) {
		// 鏈€澶氭樉绀�8琛�
		if (i < 8) {
			str += '<li>' + list[i] + '</li>';
		}

	}
	oUl.innerHTML = str;
}

$(".keylist").on('click', 'li', function () {
	var value = $(this).text();
	btn.val(value);
	$('#su-2').click();
	oUl.style.display = 'none';
});

//鍒╃敤閿洏鎺у埗閫夋嫨鎼滅储鑱旀兂璇�
$(document).keydown(function (e) {

	if (e.keyCode == 13 && oUl.style.display == 'block') {
		btn.val($(".keylist li.active").html().trim());
		$('#su-2').click();
		oUl.style.display = 'none';
		//alert('浣犳寜涓嬩簡Enter'); 
	} else if (e && e.keyCode == 40 && oUl.style.display == 'block') { //涓�
		//active
		if ($(".keylist li.active").length > 0) {
			var k1 = $(".keylist li.active")
			k1.next().addClass("active");
			k1.removeClass("active");
		} else {
			var k0 = $($(".keylist li")[0]);
			k0.addClass("active");
		}
	} else if (e && e.keyCode == 38 && oUl.style.display == 'block') { // 涓�

		var k1 = $(".keylist li.active")
		k1.prev().addClass("active");
		k1.removeClass("active");
	} else {
		//btn.keyup();
	}

});




