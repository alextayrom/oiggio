"undefined"==typeof public&&(public={}),public.signup={init:function(){$("body main form").on("submit",(function(){var r=$(this).find("button");if(r.hasClass("disabled")||r.attr("disabled")||r.attr("data-captcha"))return!1;public.signup.send()})),$("body main form button").on("click",(function(){var r=$(this);(r.hasClass("disabled")||r.attr("disabled")||r.attr("data-captcha"))&&$("body main form button").addClass("loader")})),$("main [data-uloginbutton]").on("click",(function(){public.signup.social({el:$(this)})}))},send:function(r){var o=$.extend({},{loader:"body main form button",form:"body main form"},r);core.ajax({url:"/user/signup",ident:"send",loader:o.loader,form:o.form,success:function(r){if(core.captcha.reset(),r&&r.error){if(r.error.close)return Swal.fire({text:r.error.close,icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error.login)return Swal.fire({text:r.error.login,icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error.email)return Swal.fire({text:r.error.email,icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error["login-email"])return Swal.fire({text:r.error["login-email"],icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error.password)return Swal.fire({text:r.error.password,icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error["password-confirm"])return Swal.fire({text:r.error["password-confirm"],icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error["not-match"])return Swal.fire({text:r.error["not-match"],icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error.captcha)return Swal.fire({text:r.error.captcha,icon:"error",confirmButtonText:global.lang.public.signup.close});if(r.error["signup-ip"])return Swal.fire({text:r.error["signup-ip"],icon:"error",confirmButtonText:global.lang.public.signup.close})}}})},social:function(r){var o=$.extend({},{el:{},error:0,init:0},r);o.error>100||($('body script[src="//ulogin.ru/js/ulogin.js"]').length||$("body").append('<script src="//ulogin.ru/js/ulogin.js"><\/script>'),"undefined"==typeof uLogin?(o.init=1,core.timeout.set((function(){++o.error,public.signup.social(o)}),10)):o.init&&o.el.click())}},$(document).ready((function(){public.signup.init()}));