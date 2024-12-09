function downloadLocalPDF(pdfFile, filename) {
  // Add the loading spinner class
  document.body.classList.add('loading')

  // Read the local PDF file as a Blob
  fetch(pdfFile)
    .then((response) => response.blob())
    .then((blob) => {
      // Create an anchor element for downloading
      var a = document.createElement('a')
      var url = window.URL.createObjectURL(blob)
      a.href = url
      console.log(url)

      a.target = '_blank'
      a.click()
    })
    .catch((error) => {
      console.error('Error occurred while downloading the PDF:', error)
      alert('Download failed...! Please try again.')
      document.body.classList.remove('loading')
    })
}

export default downloadLocalPDF
