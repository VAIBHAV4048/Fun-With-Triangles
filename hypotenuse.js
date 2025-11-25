const sideA=document.querySelector("#side-a");
const sideB=document.querySelector("#side-b");
const output=document.querySelector("#output");
const check=document.querySelector("#check");


output.style.display="none";
function calculateHypotenuse(){
    output.style.display="block";
    if(Number(sideA.value)&&Number(sideB.value)){
        let result=Math.sqrt(Math.pow(Number(sideA.value),2)+Math.pow(Number(sideB.value),2));
        result=result.toFixed(2);
output.innerText="Length of Hypoteneuse is "+ result+"cm 😃😃";
    }
    else{
        output.innerText="Please enter both the sides📝📝"
    }
}
check.addEventListener("click",calculateHypotenuse);
