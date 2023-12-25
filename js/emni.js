function Omar(){
    const txt = document.getElementById('id1')
    txt.innerHTML = `হ্যাঁ স্বামী, এই যে আমি।`
    const kor = document.getElementById("mKorcho")
    kor.innerHTML = `আমাকে মিস করছো?`
}
function Faruk(){
    setTimeout(myFunction, 3000);
    function myFunction() {
    const txt = document.getElementById('id2')
    txt.innerHTML = `আজকে ছুটির দিন, ল্যাপটপ নিয়ে বসেই ছিলাম। ভাবলাম একটু বউ কে ডাকি🤣🤣🤣`
    myFunction();
}
}
function Umme(){
    setTimeout(x, 2000);
    function x(){
        const nobtn = document.getElementById("no")
        nobtn.style.visibility = "visible";
        const yesbtn = document.getElementById("yes")
        yesbtn.style.visibility = "visible";
        x();
    }
}
function a(){
    const g = document.getElementById("plz");
    g.style.visibility = "visible";
}