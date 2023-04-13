let photoSlideShow = {
    photoList: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'],
    currentPhotoIndex: 0,
    nextPhoto() {
        if (this.currentPhotoIndex < this.photoList.length -1) {
            this.currentPhotoIndex++
            console.log(this.photoList[this.currentPhotoIndex])
        } else {
            console.log("End of slideshow.")
        }
    },
    prevPhoto() {
        if (this.currentPhotoIndex < 0) {
            this.currentPhotoIndex--
            console.log(this.photoList[this.currentPhotoIndex])
        } else {
            console.log("Start of slideshow.")
        }
    },
    getCurrentPhoto() {
        console.log(this.photoList[this.currentPhotoIndex]) 
    },
}

// Testing if it works
photoSlideShow.getCurrentPhoto()
photoSlideShow.prevPhoto()
photoSlideShow.nextPhoto()
photoSlideShow.nextPhoto()
photoSlideShow.nextPhoto()
photoSlideShow.nextPhoto()
photoSlideShow.nextPhoto()

