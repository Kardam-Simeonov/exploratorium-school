export default () => {
    if (process.client) {
      // This code will only run on the client-side
      (function () {
        var i, e, d = document, s = "script";
        i = d.createElement("script");
        i.async = 1;
        i.charset = "UTF-8";
        i.src = "https://cdn.curator.io/published/2027d41f-868e-4661-a6b0-76f090c44c10.js";
        e = d.getElementsByTagName(s)[0];
        e.parentNode.insertBefore(i, e);
      })();
    }
  };