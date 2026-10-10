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

  // 3つのお悩みカードが全て見えたら集中線バーストを再生
  var burstCards = document.querySelectorAll(".worries__list .worry");
  var burstLast = burstCards.length ? burstCards[burstCards.length - 1] : null;
  var burstTarget = document.querySelector(".worries__answer");
  if ("IntersectionObserver" in window && burstLast && burstTarget) {
    var bio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          burstTarget.classList.add("is-burst");
          bio.unobserve(e.target);
        }
      });
    }, { threshold: 0.99 });
    bio.observe(burstLast);
  }


  // お問い合わせフォーム: 送信を非表示iframe経由にして、完了後に自前サンクスページへ遷移
  // （FormSubmitの_nextが効かない環境向け。ファイル添付も通常のmultipart送信のまま動作）
  var cform = document.querySelector('.contact__box form');
  if (cform) {
    var fsFrame = document.createElement('iframe');
    fsFrame.name = 'fs_target';
    fsFrame.setAttribute('aria-hidden', 'true');
    fsFrame.style.display = 'none';
    document.body.appendChild(fsFrame);
    var fsSubmitted = false;
    cform.setAttribute('target', 'fs_target'); // JS有効時のみiframe送信（非対応環境は通常送信にフォールバック）
    cform.addEventListener('submit', function () { fsSubmitted = true; });
    fsFrame.addEventListener('load', function () {
      if (fsSubmitted) { window.location.href = 'thanks.html'; }
    });
  }

})();
