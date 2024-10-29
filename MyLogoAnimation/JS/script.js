let images = [];
let currentIndex = 0;
let hideButtonsTimeout;

function showImage(index) {
    const imageElement = document.getElementById('imageDisplay');
    if (images.length > 0) {
        imageElement.src = images[index];
        imageElement.classList.remove('hidden'); // Show the image once the src is set
    }
}

function showButtons() {
    clearTimeout(hideButtonsTimeout);
    document.getElementById('backButton').style.display = 'block';
    document.getElementById('nextButton').style.display = 'block';
    hideButtonsTimeout = setTimeout(hideButtons, 3000);
}

function hideButtons() {
    document.getElementById('backButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
}

function loadImages(folderName) {
    const folderPaths = {
        "35470": [
            "./Delivery_Receipt/Delivery_Receipt_2024/35470/35470.png",
            "./Delivery_Receipt/Delivery_Receipt_2024/35470/img20240118_07095823.png"
        ],
        "35471": [
            "./Delivery_Receipt/Delivery_Receipt_2024/35471/img20240109_10300386.png",
            "./Delivery_Receipt/Delivery_Receipt_2024/35471/img20240109_10320695.png"
        ]
    };
    images = folderPaths[folderName] || [];
    currentIndex = 0;
    showImage(currentIndex);

    // Hide the list of links
    document.getElementById('folderLinks').style.display = 'none';
}

document.getElementById('nextButton').addEventListener('click', function(event) {
    event.preventDefault();
    if (images.length > 0) {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});

document.getElementById('backButton').addEventListener('click', function(event) {
    event.preventDefault();
    if (images.length > 0) {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
});

document.querySelector('.container').addEventListener('mousemove', showButtons);
hideButtons();