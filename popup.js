//Event that run right after page DOM loaded


//This will check the url against a list of recognized patterns
var getPattern=function(downloadPatterns,url){
  for(var i=0;i<downloadPatterns.length;i++){
    if(url!=null && url.split(downloadPatterns[i].pattern).length>1){
      return downloadPatterns[i];
    }
  }
  return null;
};

document.addEventListener('DOMContentLoaded', function() {
  //After syncTheLocalData we can start processing the data
  syncLocalData(function(url){
    $.get( url, function( data ) {

    API=JSON.parse(data);

    var downloadResource = document.getElementById('btnDownload');
    var btnStart = document.getElementById('btnStart');
    var btnStop = document.getElementById('btnStop');

    var url=null;
    var pattern = null;

    //Disable the button if the url is not valid for parsing
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      url=tabs[0].url;
      pattern=getPattern(API.downloadPatterns,url);
      downloadResource.disabled=(pattern==null);
    });

    btnStart.addEventListener('click',function(){
      $.get( API.api.start_torrents, function( data ) {
          alert( "Start was performed: " +data);
        });
    });

    btnStop.addEventListener('click',function(){
      $.get( API.api.stop_torrents, function( data ) {
          alert( "Stop was performed: " +data);
        });
    });

    downloadResource.addEventListener('click', function() {

      $.post( pattern.poster, { 'url': url })
        .done(function( data ) {
          alert( "Downloaded: " + url );
        });
        });
      });
    });
});
