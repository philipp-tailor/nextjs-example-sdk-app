import Script from 'next/script';

export function BirdBug() {
  const destinationLookup = {
    default: '14',
    hit: '8b',
    marketing: '89',
  };

  const hitPaths = ['/', '/dashboard/vercel/domains'];
  const marketingPaths = [
    '/features/previews',
    '/features/infrastructure',
    '/features/edge-functions',
    '/customers',
    '/contact/sales',
  ];

  function getDestination() {
    const pathname = window.location.pathname;
    if (hitPaths.includes(pathname)) {
      return destinationLookup.hit;
    }
    if (marketingPaths.includes(pathname)) {
      return destinationLookup.marketing;
    }
    return destinationLookup.default;
  }

  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `
      ;(function(){const birdeatsbug=(window.birdeatsbug=window.birdeatsbug||[]);if(birdeatsbug.initialize)return;if(birdeatsbug.invoked){if(window.console&&console.error){console.error('birdeatsbug snippet included twice.')}return}birdeatsbug.invoked=true;birdeatsbug.methods=['setOptions','startSession','resumeSession','startRecording','stopRecording','stopSession','uploadSession','deleteSession'];birdeatsbug.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);birdeatsbug.push(args);return birdeatsbug}};for(var i=0;i<birdeatsbug.methods.length;i++){var key=birdeatsbug.methods[i];birdeatsbug[key]=birdeatsbug.factory(key)}birdeatsbug.load=function(){var script=document.createElement('script');script.type='module';script.async=true;script.src='https://sdk.birdeatsbug.com/latest/core.js';var first=document.getElementsByTagName('script')[0];first.parentNode.insertBefore(script,first);const style=document.createElement('link');style.rel='stylesheet';style.type='text/css';style.href='https://sdk.birdeatsbug.com/latest/style.css';first.parentNode.insertBefore(style,first)};birdeatsbug.load();
      window.birdeatsbug.setOptions({
        publicAppId:'${getDestination()}',
        ui: {
          submitConfirmationScreen: {sessionLink: false},
        },
      })})();
      `,
      }}
      id="birdbug"
    />
  );
}
