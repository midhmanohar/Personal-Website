// document.getElementById("myForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   var totalClasses = document.getElementById('totalClasses').value;
//   var attendedClasses = document.getElementById('attendedClasses').value;
//
//   // console.log(totalClasses);
//   // console.log(attendedClasses);
//
//   while( attendance = attendedClasses / totalClasses)  {
//     console.log(attendance);
//     totalClasses += 1;
//     attendedClasses += 1;
//     if(attendance>=0.75)
//     {
//       break;
//     }
//   }
//   console.log(attendance);
// });

 var count=0;
 document.getElementById("finish").addEventListener('click',calc);
function calc(){
  alert(1);
  var totalClasses=document.getElementById("totalClasses").value;
  var attendedClasses=document.getElementById("attendedClasses").value;
  var attendance;
  while( attendance = attendedClasses / totalClasses)  {

    totalClasses += 1;
    attendedClasses += 1;
    if(attendance>=0.75)
    {
      break;
    }
  }
}
