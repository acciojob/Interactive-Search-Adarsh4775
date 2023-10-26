//your JS code here. If required.
function intSearch(){
	const submit = document.querySelector(".input");

	submit.addEventListener("click",function() {
         document.querySelector(".search").classList.add("active") ;
	});
}
intSearch();