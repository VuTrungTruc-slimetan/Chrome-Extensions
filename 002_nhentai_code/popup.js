// document.addEventListener('DOMContentLoaded', function() {
console.log("Author: VuTrungTruc-Slimetan \n Source: https://github.com/VuTrungTruc-slimetan/Chrome-Extensions/tree/master/002_nhentai_code"); 

var button = document.getElementById('go');
button.addEventListener('click', function() {
    var code = document.getElementById("code").value;
    if(code){
        if(isNaN(code)){
            window.open('http://nhentai.net/search/?q=' + code, '_blank');
        } 
        else{
            window.open('http://nhentai.net/g/' + code, '_blank');
        }
    }
});

var link = document.getElementById('link');
link.addEventListener('click', function() {
    window.open('http://nhentai.net/','_blank');
});
// });