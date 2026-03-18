function generateCard(){

const name = document.getElementById("nameInput").value;
const nameDisplay = document.getElementById("nameDisplay");

nameDisplay.innerText = name;

const arabicPattern = /[\u0600-\u06FF]/;

if(arabicPattern.test(name)){

nameDisplay.style.direction="rtl";
nameDisplay.style.textAlign="right";
nameDisplay.style.right="70px";
nameDisplay.style.left="auto";

}else{

nameDisplay.style.direction="ltr";
nameDisplay.style.textAlign="left";
nameDisplay.style.left="70px";
nameDisplay.style.right="auto";

}

}
function downloadCard() {

const card = document.getElementById("card");

html2canvas(card,{
scale:2,
useCORS:true,
backgroundColor:null
}).then(function(canvas){

const link = document.createElement("a");

link.download = "EidCard.png";
link.href = canvas.toDataURL("image/png");

document.body.appendChild(link);
link.click();
document.body.removeChild(link);

});

}

function setArabic(){

document.getElementById("title").innerHTML="بطاقة تهنئة العيد";

document.getElementById("nameInput").placeholder="اكتب اسمك هنا";

document.getElementById("createText").innerText="إنشاء البطاقة";

document.getElementById("downloadText").innerText="تحميل الصورة";

document.body.dir="rtl";

}

function setEnglish(){

document.getElementById("title").innerHTML="Eid Greeting Card";

document.getElementById("nameInput").placeholder="Write your name";

document.getElementById("createText").innerText="Generate Card";

document.getElementById("downloadText").innerText="Download Image";

document.body.dir="ltr";

}