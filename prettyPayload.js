$('pre.msg-payload').each(function(i,e){
    var p = $(e); p.html(JSON.stringify(JSON.parse(p.html()),null,4))
})
