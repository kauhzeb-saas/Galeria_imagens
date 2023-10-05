const imageUrlInput = document.getElementById("image-url");
const previewImage = document.getElementById("preview-image");

imageUrlInput.addEventListener("input", function() {
    const imageUrl = imageUrlInput.value;
    previewImage.src = imageUrl;
});

function addImageToGallery() {
    const imageUrl = imageUrlInput.value;
    const gallery = document.getElementById("gallery");

    const img = new Image();
    img.src = imageUrl;
    img.alt = "Image Preview";

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    imageContainer.appendChild(img);
    gallery.appendChild(imageContainer);
}
