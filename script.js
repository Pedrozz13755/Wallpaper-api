document.addEventListener('DOMContentLoaded', function() {
    getRandomImage();
});

function getRandomImage() {
    const randomImageElement = document.getElementById('randomImage');
    const imageFolderPath = 'imagens/';
    
    // Gere um número aleatório para escolher uma imagem da pasta
    const randomImageNumber = Math.floor(Math.random() * 70) + 1; // Ajuste o número conforme a quantidade de imagens

    const imageUrl = `${imageFolderPath}imagem${randomImageNumber}.jpg`;
    randomImageElement.src = imageUrl;
}
