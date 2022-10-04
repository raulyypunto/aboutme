const linkd = document.getElementById("linkdin");
const cv = document.getElementById("curri");


linkd.addEventListener("click", formA);
cv.addEventListener("click", formB);

function formA () {
    console.log("linkedin");
    let acc = document.getElementById("fma");
    acc.submit();
}
function formB () {
    console.log("descargar cv");
    
    
}

function entrado () {
    console.log("click");

}