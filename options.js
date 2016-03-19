//Execute after DOM loaded

document.addEventListener('DOMContentLoaded', function() {
  syncLocalData(function(url){

    var btnClearPatterns  = document.getElementById('btnSetApiURL');
    var txtPatternValue   = document.getElementById('txtPatternValue')
    var txtCurrValue      = document.getElementById('txtCurrValue');

    txtCurrValue.innerText=url;

    txtPatternValue.value=url;

    btnClearPatterns.addEventListener('click',function(){
      saveURLLocalStore(txtPatternValue.value);
      txtCurrValue.innerText=txtPatternValue.value;
    });

  });
})
