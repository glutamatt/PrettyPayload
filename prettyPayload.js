(function () {
    var elements = document.getElementsByClassName('msg-payload');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        try {
            element.innerHTML = '<pre>' + JSON.stringify(JSON.parse(element.innerHTML), null, 4) + '</pre>';
        } catch (e) {
            // not a JSON string
        }
    }
})();