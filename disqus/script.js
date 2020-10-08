var d = document, s = d.createElement('script');
s.src = embedjs;
window.onload = function() {
    var disqus = document.createElement("div");
disqus.id = "disqus_thread";
var pages = document.querySelector('.notion-page-content');
var sp2 = pages.lastChild;
pages.insertBefore(disqus,sp2);

(function() {
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();

}

