/* 建物法定点検ナビ  main.js */
(function () {
  "use strict";

  // 現在の年をフッターに表示
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // スクロールで要素をフェードイン
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // 非対応環境ではそのまま表示
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // フォーム送信（送信先未設定のためのプレースホルダー処理）
  window.handleSubmit = function (event) {
    event.preventDefault();
    var form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }
    alert(
      "【デモ表示】お問い合わせ内容を受け付けました。\n\n" +
      "※このフォームはまだ送信先が設定されていません。\n" +
      "実運用時にメール送信またはフォームサービス（例：Cloudflare / フォームメーラー等）との連携設定が必要です。"
    );
    return false;
  };
})();
