const inputs=document.querySelectorAll(".input-angle");
const check=document.querySelector("#check");
const output=document.querySelector("#output");
output.style.display="none";
function sumOfAngles(){
const sum=Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value)
return sum;
}
function isTriangle(){
    output.style.display="block";
    output.innerText="" 
if(Number(inputs[0].value)&&Number(inputs[1].value)&&Number(inputs[2].value)
){
    const sum=sumOfAngles();
    if (sum==180) {
        output.innerText="This is a triangle😊😊";
    }
    else{
output.innerText="This is  not a valid triangle😒😒"
    }
}
else{
   output.innerText="Please enter all three angles then check📝📝" 
}
}
check.addEventListener("click",isTriangle);