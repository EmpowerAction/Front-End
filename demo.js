const sections = {
    work: document.querySelector(".work__active"),
    talent: document.querySelector(".talent__active"),
    transation: document.querySelector(".transation__active"),
};

const buttons = {
    work: document.getElementById("trabajos"),
    talent: document.getElementById("talentos"),
    transation: document.getElementById("transations"),
};

const heroBanner = document.querySelector(".hero__banner--demo");

function closeAllSections() {
    for (let section in sections) {
        sections[section].style.display = 'none';
    }
    heroBanner.style.zIndex = "900";
}

function openSection(sectionName) {
    closeAllSections();
    if (sections[sectionName]) {
        sections[sectionName].style.display = 'block';
        heroBanner.style.zIndex = "0";
    }
}

for (let button in buttons) {
    buttons[button].addEventListener("click", () => openSection(button));
}

document.querySelectorAll(".cancel__button").forEach(btn => {
    btn.addEventListener("click", closeAllSections);
});

document.getElementById("start").addEventListener("click", closeAllSections);

// Payment section
const buttonPay = document.querySelector(".message__active");
document.getElementById("active__pay").addEventListener("click", () => {
    buttonPay.style.display = "flex";
});


// Register section
const ventanita = document.querySelector(".ventanita");
document.getElementById("register").addEventListener("click", () => {
    ventanita.style.display = "flex";
});
document.querySelector(".exit__register").addEventListener("click", () => {
    ventanita.style.display = "none";
});

// Job section
const jobWindow = document.querySelector(".job__window");
document.getElementById("getJob").addEventListener("click", () => {
    jobWindow.style.zIndex = "2";
});
document.querySelector(".exitClose").addEventListener("click", () => {
    jobWindow.style.zIndex = "-1";
});


const activeWork  = document.getElementById("activeWork");




const jobPost = document.getElementById("postJob");

jobPost.addEventListener("click", jobInput);

function jobInput() {
    const inputJobDescription = document.getElementById("inputJobDescription").value;
    const inputJobPrice = document.getElementById("inputJobPrice").value;
    const imgChange = "../HTML/img/face.png";
    let nombreUsuario = document.getElementById('nombreInput').value;
    let displayJobName = document.getElementById("displayJobDescription");
    let displayJobPrice = document.getElementById("displayJobPrice");
    let displayName = document.getElementById("displayJobName");
    let displayImg = document.getElementById("jobImg");
    displayName.innerText = nombreUsuario
    displayJobName.innerText = inputJobDescription;
    displayJobPrice.textContent = "ETH " + inputJobPrice;
    displayImg.src = imgChange;
}


document.getElementById('active__pay').addEventListener('click', function() {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: window.ethereum.selectedAddress, // dirección del remitente
                to: '0xd82032ad30a0F09b82783F49a0b58227a8E6d560', // dirección del destinatario
                value: '1400000' // cantidad en wei
            }],
        }).catch((error) => {
            console.error(error);
            alert('Hubo un error al intentar realizar el pago.');
        });
    } else {
        alert('Cartera de Ethereum no detectada!');
    }
});







// Responsive 


const responsiveAside = document.querySelector(".responsiveToggle");
const asideSection = document.querySelector(".aside");


responsiveAside.addEventListener("click", () => {
    if(asideSection.classList.contains("hide")){
        asideSection.classList.remove("hide");
        asideSection.classList.add("show");
    }else {
        asideSection.classList.remove("show");
        asideSection.classList.add("hide");
    }
});




