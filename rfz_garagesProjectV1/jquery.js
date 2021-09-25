lastcar = undefined
$(document).on("click",".car",debounce(function(e) {
    selectedcar = $(this).attr("data-id")
    $(this).addClass("selected")
    if ($(lastcar).attr("data-id") != selectedcar) {
        $(lastcar).removeClass("selected")
    }
    selectcar(this)
}))

const selectcar = (e) => {
    lastcar = e
}




function debounce(func,immediate){
	var timeout
	return function(){
		var context = this,args = arguments
		var later = function(){
			timeout = null
			if (!immediate) func.apply(context,args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later,200)
		if (callNow) func.apply(context,args)
	}
}