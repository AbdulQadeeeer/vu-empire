document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const videoUpload = document.getElementById('video-upload');
    const videoPreview = document.getElementById('video-preview');
    
    if (videoUpload.files.length > 0) {
        const file = videoUpload.files[0];
        const url = URL.createObjectURL(file);
        
        const videoElement = document.createElement('video');
        videoElement.src = url;
        videoElement.controls = true;
        videoElement.width = 300;

        videoPreview.innerHTML = '';
        videoPreview.appendChild(videoElement);

        // Here you would typically upload the file to a server
        // const formData = new FormData();
        // formData.append('video', file);
        // fetch('your-upload-endpoint', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => {
        //     console.log('Upload success:', response);
        // }).catch(error => {
        //     console.error('Upload error:', error);
        // });
    }
});
