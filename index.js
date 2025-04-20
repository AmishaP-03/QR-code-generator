function generateQRCode(event) {
    event.preventDefault();
    const qrCodeContainer = document.getElementById('qr-code');
    const userInput = document.getElementById('userInput').value;

    qrCodeContainer.innerHTML = ''; // clear previous QR code

    if (userInput.trim()) {
      QRCode.toCanvas(document.createElement('canvas'), userInput, function (error, canvas) {
            if (error) console.error(error);
            else {
                canvas.style = "height: 15rem; width: 15rem";
                qrCodeContainer.appendChild(canvas);
            }
        });
    } else {
      alert('Please enter text to generate QR code');
    }
  }