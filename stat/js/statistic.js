"undefined" == typeof public && (public = {}), public.statistic = { option: { delay: 75 }, init: function () { $("body main section.rating [data-nav]").on("click", (function () { if (!$(this).hasClass("active")) { var t = $(this).attr("data-nav"); $("body main section.rating [data-nav]").removeClass("active"), $(this).addClass("active"), $("body main section.rating [data-nav-path]").removeClass("active"), $('body main section.rating [data-nav-path="' + t + '"]').addClass("active"), "events" == t ? $("body main section.rating .live").show() : $("body main section.rating .live").hide(), public.statistic.list({ first: 1 }) } })), $("body main section.rating [data-nav-path] [data-type]").on("click", (function () { if (!$(this).hasClass("active")) { var t = $(this).closest("[data-nav-path]").attr("data-nav-path"), i = $(this).attr("data-type"); $('body main section.rating [data-nav-path="' + t + '"] [data-type]').removeClass("active"), $('body main section.rating [data-nav-path="' + t + '"] [data-type="' + i + '"]').addClass("active"), public.statistic.list({ first: 1 }) } })), public.statistic.list({ first: 1 }) }, list: function (t) { var i = $.extend({}, { existing: "", first: 0, last: 0, list: "body main section.rating .statistic-list", loader: "body main section.rating .statistic-list", type: 0 }, t); if (i.type = $("body main section.rating [data-nav-path].active [data-type].active").attr("data-type"), i.first) $("body main section.rating .statistic-list").attr("data-type", i.type), i.list = 'body main section.rating .statistic-list[data-type="' + i.type + '"]', i.loader = i.list; else { if (!$(i.list).length) return !1; i.last = $("body main section.rating .statistic-list [data-last]:first").attr("data-last") || 0, $(i.list + " [data-id]").each((function () { i.existing += $(this).attr("data-id") + "," })), i.existing = core.main.rtrim(i.existing, ",") } core.ajax({ url: "/statistic/list", data: { existing: i.existing, first: i.first, last: i.last, type: i.type }, ident: "statistic-list" + i.type, loader: i.loader, success: function (t) { if (t && t.list && $(i.list).length) { i.first ? $(i.list).html(t.list) : $(i.list + " table tr:first").after(t.list); var a = $(i.list + " table tr").length; a > 21 && ($(i.list + " table tr").each((function (t) { t > 20 && $(this).remove() })), a = 21), $("body main section.rating .table-bg .bg-item").remove(); for (var s = public.statistic.option.delay, e = 0; e < a; e++) { if (e) var n = '<div class="bg-item" style="--delay:' + s + 'ms;"></div>'; else n = '<div class="bg-item"></div>'; $("body main section.rating .table-bg").append(n), s += public.statistic.option.delay } $(i.list + " [data-time]").each((function () { var t = $(this).attr("data-id"), a = +$(this).attr("data-time"); $(this).removeAttr("data-time"), public.statistic.timer(t, a, i.list) })) } }, complete: function () { 1 != i.type && 2 != i.type && 3 != i.type || core.timeout.set((function () { public.statistic.list({ list: i.list, loader: !1 }) }), 5e3, "statistic-list" + i.type) } }) }, timer: function (t, i, a) { if (!$(a + ' [data-id="' + t + '"]').length) return !1; if (i < 60) { $(a + ' [data-id="' + t + '"] .time').text(i + " " + core.main.plural(i, global.lang.core.global["second-1-vp"], global.lang.core.global["second-2"], global.lang.core.global["second-5"]) + " " + global.lang.public.statistic.ago), i += 1; var s = 1 } else $(a + ' [data-id="' + t + '"] .time').text(parseInt(i / 60) + " " + core.main.plural(parseInt(i / 60), global.lang.core.global["minute-1-vp"], global.lang.core.global["minute-2"], global.lang.core.global["minute-5"]) + " " + global.lang.public.statistic.ago), i += 60, s = 60; core.timeout.set((function () { public.statistic.timer(t, i, a) }), 1e3 * s) } };