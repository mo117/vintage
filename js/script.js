$(document).ready(function () {


	$("nav a").click(function () {
		console.log($(this).attr("href"))

		$("html , body").animate({

			scrollTop: $($(this).attr("href")).offset().top

		}, 3000)



	})


	$(window).scroll(function () {

		if ($(this).scrollTop() > 20) {


			$(".top").fadeIn();
			$("nav").addClass("small");
			


		} else {


			$(".top").fadeOut()
			$("nav").removeClass('small')
		}


	})

	$(".top").click(function () {


		$('html , body').animate({


			scrollTop: 0


		}, 3000)

	})

})

var counter = 0;

var timer = setInterval(function () {

	document.getElementById("b").innerHTML = ++counter

	if (counter == 987) {

		document.querySelector("body")
		clearInterval(timer)


	}
}, 15);

var counter2 = 0;

var count= setInterval(function () {

	document.getElementById("m").innerHTML = ++counter2

	if (counter2 == 1902) {

		document.querySelector("body")
		clearInterval(count)


	}
}, 10);

var counter3 = 0;

var count2= setInterval(function () {

	document.getElementById("s").innerHTML = ++counter3

	if (counter3 ==2789) {

		document.querySelector("body")
		clearInterval(count2)


	}
}, 5);

var counter4 = 0;

var count3= setInterval(function () {

	document.getElementById("d").innerHTML = ++counter4

	if (counter4 == 3325) {

		document.querySelector("body")
		clearInterval(count3)


	}
}, 3);
