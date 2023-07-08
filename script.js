document.addEventListener("DOMContentLoaded", function() {
    var currentImageIndex = 0;
    var ibages = document.querySelectorAll(".ibages");
    var prevArrow = document.querySelector(".arrow-left");
    var nextArrow = document.querySelector(".arrow-right");
    
    function showImage(index) {
      ibages.forEach(function(image) {
        image.style.display = "none";
      });
      ibages[index].style.display = "block";
    }
    
    function navigateToPreviousImage() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
      }
      showImage(currentImageIndex);
    }
    
    function navigateToNextImage() {
      currentImageIndex++;
      if (currentImageIndex >= ibages.length) {
        currentImageIndex = 0;
      }
      showImage(currentImageIndex);
    }
    
    prevArrow.addEventListener("click", navigateToPreviousImage);
    nextArrow.addEventListener("click", navigateToNextImage);
    
    showImage(currentImageIndex);
  });