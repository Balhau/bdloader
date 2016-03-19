var DOWNLOAD_PATTERNS="DOWNLOAD_PATTERNS_KEY";
var API="API_KEY";

//Default urls Pattern
var downloadPatterns=[
  {
    'pattern':'https://www.youtube.com/watch?',
    'poster': 'http://pi.balhau.net/youtube/downloader'
  }
];

//Default api
var api={
  'start_torrents' : 'http://pi.balhau.net/starttorrents',
  'stop_torrents' : 'http://pi.balhau.net/stoptorrents'
}


//Method that keep in sync the localdata and the
//localvariables
var syncLocalData=function(){
    chrome.storage.local.get(DOWNLOAD_PATTERNS,function(data){
    if(data[DOWNLOAD_PATTERNS]){
      //Load variables into localstore
      alert("Loading localstore into variables: ");
      downloadPatterns = data[DOWNLOAD_PATTERNS]
    }else{
      //Load localstore into variables
      var sdata={};
      sdata[DOWNLOAD_PATTERNS] = downloadPatterns;
      chrome.storage.local.set(
        sdata,
        function(){
          alert("Loaded data into localstore: ")
        }
      )
    }
  });
}

var clearLocalData=function(){
  chrome.storage.local.clear(function(data){
    console.log("Localdata Cleared");
  });
};
