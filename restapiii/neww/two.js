

function noow()
{
      
      const request = new XMLHttpRequest();
      request.open('GET','https://random-data-api.com/api/users/random_user?size=20');
      request.send();
      console.log(request.responseText);
      request.addEventListener('load',function()
      {
          const us = JSON.parse(this.responseText);
          // var keys = Object.keys(us);
          console.log(us);
          extractJSON(us, '');
      });
}

function extractJSON(obj, indent) 
{
  //var revorder = document.getElementById("revorder");
  var displaygbd ="";
  var data = [];
  //data.push(obj);

  for (const i in obj) 
  {
    //const a = Object.keys(obj[i]);
   // displaygbd = a;
    if (Array.isArray(obj[i]) || typeof obj[i] === 'object') 
    {
      //displaygbd += indent + a[i] + ' is array of object';
      extractJSON(obj[i], indent +  i + '.');
    }
    else 
      {   
        displaygbd += indent + i +"</br>";
        //console.log(indent + i.length  + obj[i]);
        
      }
  }
  onemore_i(displaygbd);
  //displaygbd = a;
  // for (var i =0; i < data.length; i++) 
  // {
  //   displaygbd = data[i];
  //   console.log(data[i]);
  // }
  //revorder.innerHTML += displaygbd
}
 function onemore_i(textt) 
 {

  var text_i = "";
  var text_ii = "";
  var text_iii  = "";
  var text_iv  = "";
  var text_v  = "";

  

  //var revorder = document.getElementById("revorder");
  text_i = textt.split("</br>").length-1;
  text_ii += textt.split("</br>");

  var ty = textt.startsWith("0");
  if(ty==true)
  {
    text_iii += text_ii.split("0.");
    text_iv += text_iii.replace(/[,\/#!$%\^&\*;:{}=\-`~()']/g," ");
    text_v = text_iv;
    
  }
  onemore_ii(text_v);
  //revorder.innerHTML += text_v;
 }
 function onemore_ii(textv) 
 {
  var revorder = document.getElementById("revorder");
  var text_i = "";
  var text_ii = "";
  var text_iii = "";
  var text_iv = "";
  //text_i.push(textv).length;

  // var asdf = ["one,,","two,,","three,,","four,,","five"];
  // //var len = asdf.split(",,").length-1;

  // for(const [i,el] of asdf.entries())
  // {
  //   text_i += `${i+1}:${el}`;
  // }
  text_i = textv.split(',');
  text_ii += text_i;
  console.log(text_i);

  text_iii = "<h1>users</h1>"
  text_iv += "<table   id=crossword align=center><thead><th colspan=10></th></thead><tbody>";
  text_iv += "<th>"+text_ii+"</th>";
  text_iv += "</tbody></table>";


  revorder.innerHTML += text_iv;
 }




// function extractJSON(obj, indent) 
// {
//       var revorder = document.getElementById("revorder");
//       var displaygbd ="";
//       for (const i in obj) 
//       {
     
//       if (Array.isArray(obj[i]) || typeof obj[i] === 'object') {
//       //displaygbd += indent + i + ' is array of object';
//       extractJSON(obj[i], indent + '...' + i + '.');
//       } 
//       else 
//       {
//       displaygbd  += "<table id=qandatbl align=enter align=center ><thead><tr><th>"+indent + i + ': ' + obj[i]+"</th></tr>"+"</thead><tbody>";
//       // displaygbd += indent + i ;
//       //console.log(indent + i + ': ' + obj[i]);
//       }
//       }
//       revorder.innerHTML += displaygbd
//     }




function start() { var now = document.getElementById("now"); now.addEventListener("click",noow,false); }
window.addEventListener("load",start,false);        






// employment.title 
// employment.key_skill
// address.coordinates.lat 
// address.coordinates.lng
// address.city 
// address.street_name 
// address.street_address 
// address.zip_code
//  address.state 
//  address.country
// credit_card.cc_number
// subscription.plan 
// subscription.status 
// subscription.payment_method
//  subscription.term
// id 
// uid 
// password 
// first_name 
// last_name 
// username 
// email 
// avatar
//  gender 
//  phone_number 
//  social_insurance_number
//   date_of_birth 