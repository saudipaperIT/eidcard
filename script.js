function generateCard(){

const name = document.getElementById("nameInput").value;
const nameDisplay = document.getElementById("nameDisplay");

nameDisplay.innerText = name;

const arabic = /[\u0600-\u06FF]/;
const nameDisplay = document.getElementById("nameDisplay");
const isMobile = window.innerWidth <= 768;

if(arabic.test(name)){
    nameDisplay.style.direction = "rtl";
    nameDisplay.style.right = isMobile ? "5%" : "70px";
    nameDisplay.style.left = "auto";
    nameDisplay.style.textAlign = "right";
}else{
    nameDisplay.style.direction = "ltr";
    nameDisplay.style.left = isMobile ? "5%" : "70px";
    nameDisplay.style.right = "auto";
    nameDisplay.style.textAlign = "left";
}

}
function downloadCard(){

const card = document.getElementById("card");

html2canvas(card, {
    scale:3,
    useCORS:true,
    backgroundColor:null
}).then(canvas => {

    const link = document.createElement("a");

    const name = document.getElementById("nameInput").value || "User";

    link.download = "Eid_" + name + ".png";
    link.href = canvas.toDataURL("image/png");

    link.click();

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
