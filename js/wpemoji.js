window._wpemojiSettings = {
  baseUrl: "http://s.w.org/images/core/emoji/72x72/",
  ext: ".png",
  source: {
    concatemoji:
      "http://www.jininvestment.com/wp-includes/js/wp-emoji-release.min.js?ver=4.3.26",
  },
};
!(function (e, n, t) {
  var a;
  function o(e) {
    var t = n.createElement("canvas"),
      a = t.getContext && t.getContext("2d");
    return (
      !(!a || !a.fillText) &&
      ((a.textBaseline = "top"),
      (a.font = "600 32px Arial"),
      "flag" === e
        ? (a.fillText(String.fromCharCode(55356, 56812, 55356, 56807), 0, 0),
          3e3 < t.toDataURL().length)
        : (a.fillText(String.fromCharCode(55357, 56835), 0, 0),
          0 !== a.getImageData(16, 16, 1, 1).data[0]))
    );
  }
  function i(e) {
    var t = n.createElement("script");
    (t.src = e),
      (t.type = "text/javascript"),
      n.getElementsByTagName("head")[0].appendChild(t);
  }
  (t.supports = { simple: o("simple"), flag: o("flag") }),
    (t.DOMReady = !1),
    (t.readyCallback = function () {
      t.DOMReady = !0;
    }),
    (t.supports.simple && t.supports.flag) ||
      ((a = function () {
        t.readyCallback();
      }),
      n.addEventListener
        ? (n.addEventListener("DOMContentLoaded", a, !1),
          e.addEventListener("load", a, !1))
        : (e.attachEvent("onload", a),
          n.attachEvent("onreadystatechange", function () {
            "complete" === n.readyState && t.readyCallback();
          })),
      (a = t.source || {}).concatemoji
        ? i(a.concatemoji)
        : a.wpemoji && a.twemoji && (i(a.twemoji), i(a.wpemoji)));
})(window, document, window._wpemojiSettings);
