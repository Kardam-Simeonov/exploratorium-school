<template>
  <div id="curator-feed-default-feed-layout">
    <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>
  </div>
</template>

<script setup>

const loadCuratorScript = () => {
  // const script = document.createElement('script');
  // script.async = true;
  // script.charset = 'UTF-8';
  // script.src =
  //   'https://cdn.curator.io/published/2027d41f-868e-4661-a6b0-76f090c44c10.js';
  // document.body.appendChild(script);
  var i, e, d = document, s = "script"; i = d.createElement("script"); i.async = 1; i.charset = "UTF-8";
  i.src = "https://cdn.curator.io/published/2027d41f-868e-4661-a6b0-76f090c44c10.js";
  e = d.getElementsByTagName(s)[0]; e.parentNode.insertBefore(i, e);
};

onMounted(() => {
  // Because the page transition behavior is broken,
  // a set timeout of the duration of transition is set
  // to guarrante a loaded DOM tree.
  setTimeout(() => {
    loadCuratorScript();
  }, 50);
});

// Welcome to hell
onBeforeUnmount(() => {
  const existingScript = document.querySelector(
    'script[src="https://cdn.curator.io/published/2027d41f-868e-4661-a6b0-76f090c44c10.js"]'
  );
  if (existingScript) {
    existingScript.remove();
  }

  const popupManager = document.querySelector('.crt-popup-manager');
  if (popupManager) {
    popupManager.remove();
  }

  const curatorStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  curatorStylesheets.forEach((stylesheet) => {
    if (stylesheet.href.startsWith('https://cdn.curator.io/')) {
      stylesheet.remove();
    }
  });

  const curatorEmbedScript = document.querySelector(
    'script[src="https://cdn.curator.io/5.0/curator.embed.js"]'
  );
  if (curatorEmbedScript) {
    curatorEmbedScript.remove();
  }

  const curatorInlineStyle = document.querySelector('style[data-sheet-num="0"][nonce="curator-feed"]');
  if (curatorInlineStyle) {
    curatorInlineStyle.remove();
  }
});
</script>
