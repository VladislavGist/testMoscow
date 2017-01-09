
$(".setTimer01").countdown({language: "ru", until: "03d 03h 28m 54s", format: 'dHMS'});

//carousel
$(".selector").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})


/* placeholder */
function placeholder(){
	$('input[placeholder], textarea[placeholder]').placeholder();
}
/* placeholder end */
/*------------------------ 1. Placeholder ------------------------*/
(function(c){function f(a){this.input=a;"password"==a.attr("type")&&this.handlePassword();c(a[0].form).submit(function(){a.hasClass("placeholder")&&a[0].value==a.attr("placeholder")&&(a[0].value="")})}var d=window.navigator.userAgent.match(/MSIE *\d+\.\w+/i),op_b = navigator.userAgent,start_index = op_b.indexOf('Opera'),op_b = navigator.userAgent,e=!0;op_b = op_b.substr(start_index, 5);if("MSIE 6.0"==d||"MSIE 7.0"==d||"MSIE 8.0"==d||"Opera"==op_b)e=!1;f.prototype={show:function(a){if(""===this.input[0].value||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");
this.input[0].value=this.input.attr("placeholder")}},hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(!e&&
a[0].outerHTML){var b=c(a[0].outerHTML.replace(/type=(['"])?password\1/gi,"type=$1text$1"));this.fakePassword=b.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");c(this).hide()});c(a[0].form).submit(function(){b.remove();a.show()})}}};var g=!!("placeholder"in document.createElement("input"));c.fn.placeholder=function(){return g?this:this.each(function(){var a=c(this),b=new f(a);b.show(!0);a.focus(function(){b.hide()});a.blur(function(){b.show(!1)});e||(c(window).load(function(){a.val()&&
a.removeClass("placeholder");b.show(!0)}),a.focus(function(){if(""==this.value){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);
/*------------------------ 1. Placeholder end ------------------------*/