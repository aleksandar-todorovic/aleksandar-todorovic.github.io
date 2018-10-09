var _paq = _paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
_paq.push(["setCookieDomain", "*.r3bl.me"]);
_paq.push(["setDomains", ["*.r3bl.me","*.beta.r3bl.me","*.r3bl.blog","*.r3bl.dj","*.r3bl.tech"]]);
_paq.push(["enableCrossDomainLinking"]);
_paq.push(["setDoNotTrack", true]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
  var u="//stats.r3bl.tech/";
  _paq.push(['setTrackerUrl', u+'js/']);
  _paq.push(['setSiteId', '1']);
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'js/'; s.parentNode.insertBefore(g,s);
})();
