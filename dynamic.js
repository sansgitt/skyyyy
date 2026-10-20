const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");

noBtn.addEventListener('mouseover',function(){
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.floor(Math.random() * window.innerHeight)+"px";
    noBtn.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
    noBtn.style.transition = 'top 0.3s , left 0.3s';
    console.log(noBtn.style.top , " ", noBtn.style.left);
    console.log(window.innerHeight," ",window.innerWidth);
    console.log("--------------");
    
})

yesBtn.addEventListener('click', function(){
    setTimeout(() => {
        Swal.fire({
            imageUrl: "https://i.pinimg.com/736x/dd/90/88/dd9088998087ca78386eac4f0334d506.jpg",
            imageWidth: 350,     
            imageHeight: 400,    
            imageAlt: "Photo",
            width: 400,
            innerHeight: 200,
            padding: "0.5em",
            color: "#373367",
            background: "#631b4a",
            position: "top",
            icon: "success",
            title: "onto options for our next date...",
            
            showConfirmButton: false,
            timer: 3500});}, 1400)
setTimeout(() => {
    window.location.href = "yes.html";
}, 5500);
    
    
    document.querySelector("#text").innerText = "Yeyyyyyy!";
    document.querySelector("#gif").src = 'yes.webp';

    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

     
});

