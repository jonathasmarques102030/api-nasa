const linkApiKey = "https://api.nasa.gov/planetary/apod?api_key=fAG7p0bAgf57XnC85DcpZWn9wcGP8OR0AoOuJhLS"


function imprimeData() {
    const data = document.getElementById("date").value;
    const linkApiKey = `https://api.nasa.gov/planetary/apod?api_key=cqTvDkhLIHngFex32zzx8SuZtC7AdFeihkPKIeZV&date=${data}`
    console.log(linkApiKey)
    console.log(data)
}

const imprimeDados = async(dados) => {
    const data = document.getElementById("date").value;
    const linkApiKey = await fetch(`https://api.nasa.gov/planetary/apod?api_key=cqTvDkhLIHngFex32zzx8SuZtC7AdFeihkPKIeZV&date=${data}`)
    .then(res => res.json())
    .then(res => {
        var elemento = document.getElementById('descritivo');
            elemento.innerHTML = `<p>${res.explanation}</p>`
    })
    imprimeData()
}

const ImprimeImagem = async (img) => {

    const data = document.getElementById("date").value
    const linkApiKey = `https://api.nasa.gov/planetary/apod?api_key=cqTvDkhLIHngFex32zzx8SuZtC7AdFeihkPKIeZV&date=${data}`
    const apiKey = await fetch(`https://api.nasa.gov/planetary/apod?api_key=cqTvDkhLIHngFex32zzx8SuZtC7AdFeihkPKIeZV&date=${data}`)
    .then(res => res.json())
    .then(res =>{
        let body = document.body.style.backgroundImage = `url(${res.hdurl})`;
        document.body.style.backgroundPositionX = "center"
        document.body.style.backgroundPositionY = "0%"
    })
    console.log(linkApiKey)
    console.log(apiKey)
}

function imagem(){
    ImprimeImagem()
}

function dados(){
    abrirModalSobre()
    imprimeDados()
}

function abrirModalSobre() {
    let modalSobre = document.getElementById("modal-sobre");

    modalSobre.style.display = 'block';
};

function fecharModalSobre() {
    let modalSobre = document.getElementById("modal-sobre");

    modalSobre.style.display = 'none';
};


document.addEventListener("click", (e) => {
    e.preventDefault()
});