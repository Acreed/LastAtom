$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(document).ready(function(){

	$('#ddcmenu li').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 $('ul',this).stop(true,true).slideDown(200);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('ul',this).stop(true,true).slideUp(200);
		}, this), 100));
	});
		
	$('#ddmenu li').hover(function () {
		 clearTimeout($.data(this,'timer'));
		 $('ul',this).stop(true,true).slideDown(200);
	}, function () {
		$.data(this,'timer', setTimeout($.proxy(function() {
			$('ul',this).stop(true,true).slideUp(200);
		}, this), 100));
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};
	
});

function hiden(id)
{
	if(document.getElementById(id).style.display == 'none'){
		document.getElementById(id).style.display='block';
		document.getElementById("ic3").style.backgroundImage = "url('../img/index/infoblock/left-arrow-icon-top.png')";
	}else{
		document.getElementById(id).style.display='none';
		document.getElementById("ic3").style.backgroundImage = "url('../img/index/infoblock/right-arrow-icon-top.png')";
	}
}

window.addEventListener('scroll', function(e) {
  var el = document.querySelector('#menu-hidden-down');
  if (window.scrollY + window.outerHeight - 700 > el.offsetTop) {
    //если вынести функцию ниже наверх, то она срабатывает.
    //если на ее место вписать alert то он тоже работает.
    document.getElementById("menu-hidden").style.top= "0px";
    animatePercent();
  }
});

$("div.reltr").animate({left:300},0);

$("div.reltr").animate({left:0},0);


//$(function () {
//    $('.bgrim img').css({
//       marginLeft: 0.1*$('.bgrim').width()+'px'
//    });
//});


function initMap() {
				var myLatLng = {lat: 51.4949, lng: -0.0724};

				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 10,
					center: myLatLng
				});

				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map
				});
			}
initMap();

