//Execute after DOM loaded

document.addEventListener('DOMContentLoaded', function() {
  var btnClearPatterns  = document.getElementById('btnClearPatterns');
  var btnAddPattern     = document.getElementById('btnAddPattern');

  btnClearPatterns.addEventListener('click',function(){
    clearLocalData();
  });

  syncLocalData();
})
