function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  caree(data.career);
  educate(data.education);
  skill(data.skills);

}
)

var parent=document.querySelector(".parent");
var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");

function profile(pro)
{
var image=document.createElement("img");
image.src=pro.img;
child1.appendChild(image);
parent.appendChild(child1);
var line=document.createElement("hr");
child1.appendChild(line);


var head=document.createElement("h2");
head.textContent=pro.name;
child1.appendChild(head);

var head1=document.createElement("h3");
head1.textContent=pro.email;
child1.appendChild(head1);
}

function caree(car)
{

  var obj=document.createElement("h1");
  obj.textContent="RESUME";
  child2.appendChild(obj);

  var line=document.createElement("hr");
  child2.appendChild(line);

  var obj1=document.createElement("h2");
  obj1.textContent="career objectives:-";
  child2.appendChild(obj1);

  var info1=document.createElement("h2");
  info1.textContent=car.info;
  child2.appendChild(info1);
  parent.appendChild(child2);

  var lin1=document.createElement("hr");
  child2.appendChild(lin1);

  var obj1=document.createElement("h2");
  obj1.textContent="Educational Details:-";
  child2.appendChild(obj1);

  var lin1=document.createElement("hr");
  child2.appendChild(lin1);

}
function educate(edc)
{
  var table=document.createElement("table");
  let row=" ";
  row +="<tr>"+"<th>"+"S.No"+"</th>"+
  "<th>"+"Degree"+"</th>"+
  "<th>"+"Institute"+"</th>"+
  "<th>"+"Percentage"+"</th>"+
  "<th>"+"Year"+"</th>"+
  "</tr>";

  for (i in edc){
  row += "<tr>"+"<td>"+edc[i].sno +"</td>"+
  "<td>"+edc[i].degree +"</td>"+
  "<td>"+edc[i].institute +"</td>"+
  "<td>"+edc[i].percentage +"</td>"+
  "<td>"+edc[i].year +"</td>"+
  "</tr>";
table.innerHTML=row;
child2.appendChild(table);
parent.appendChild(child2);
}
}
function skill(sks){
  var hh=document.createElement("h2");
  hh.textContent="skills";
  child2.appendChild(hh);

  var lin1=document.createElement("hr");
  child2.appendChild(lin1);

  var ul=document.createElement(ul);
  child2.append(ul);
  for (i in sks){
    var li=document.createElement("li");
    li.textContent=sks[i].info;
    ul.append(li);
  }
}
