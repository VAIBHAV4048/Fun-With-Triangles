const base=document.querySelector("#base");
const height=document.querySelector("#height");
const check=document.querySelector("#check");
const output=document.querySelector("#output");
output.style.display="none";
function calculateArea(){
output.style.display="block";
if(Number(base.value)&&Number(height.value)){
    let area=0.5*Number(base.value)*Number(height.value)
output.innerText="Area of this Triangle is "+area+"cm"
}
else{
    output.innerText="Please enter both the sides📝📝"
}
}
check.addEventListener("click",calculateArea);
