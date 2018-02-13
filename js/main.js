
document.getElementById("myForm").addEventListener("submit",function(e){
  e.preventDefault();
let totalClasses=document.getElementById('totalClasses').value;
let attendedClasses=document.getElementById('attendedClasses').value;
0
 // console.log(totalClasses);
 // console.log(attendedClasses);

let attendance=(attendedClasses/totalClasses)*100;

// console.log(attendance);

while(attendance<75){
  totalClasses+=1;
  attendedClasses+=1;
  attendance=(attendedClasses/totalClasses)*100;
  console.log(attendance);
}
});
