function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrCode');
    const userInput = document.getElementById('userInput').value;

    qrCodeContainer.innerHTML = ''; // clear previous QR code

    if (userInput.trim()) {
      QRCode.toCanvas(document.createElement('canvas'), userInput, function (error, canvas) {
        if (error) console.error(error);
        else qrCodeContainer.appendChild(canvas);
      });
    } else {
      alert('Please enter text to generate QR code');
    }
  }