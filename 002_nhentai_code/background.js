var contextMenuItem = {
    "id": "nhentai",
    "title": "nhentai",
    "contexts": [
        "selection"
    ]
}
chrome.contextMenus.create(contextMenuItem);

function isInt (value){
    return !isNaN(value) && 
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "nhentai" && clickData.selectionText){
        if(isInt(clickData.selectionText)){
            window.open('http://nhentai.net/g/' + clickData.selectionText, '_blank');
        }
        else{
            window.open('http://nhentai.net/search/?q=' + clickData.selectionText, '_blank');
        }
    }
});