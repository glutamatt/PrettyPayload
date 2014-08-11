$('pre.msg-payload').each(function(i,d){try{
    $(d).html(JSON.stringify(JSON.parse($(d).html()),null,4))
} catch(e) {}})
