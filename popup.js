//Event that run right after page DOM loaded


//Recognized patterns to download
var urlsPattern=[
  {
    'pattern':'https://www.youtube.com/watch?',
    'poster': 'http://pi.balhau.net/youtube/downloader'
  }
];


//This will check the url against a list of recognized patterns
var getPattern=function(url){
  for(var i=0;i<urlsPattern.length;i++){
    if(url!=null && url.split(urlsPattern[i].pattern).length>1){
      return urlsPattern[i];
    }
  }
  return null;
};

document.addEventListener('DOMContentLoaded', function() {
  var downloadResource = document.getElementById('btnDownload');
  var url=null;
  var pattern = null;

  //Disable the button if the url is not valid for parsing
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    url=tabs[0].url;
    pattern=getPattern(url);
    downloadResource.disabled=(pattern==null);
  });

  downloadResource.addEventListener('click', function() {

    $.post( pattern.poster, { 'url': url })
      .done(function( data ) {
        alert( "Downloaded: " + url );
      });
});
    });
