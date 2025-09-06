/**
 * Serves the HTML file for the web app.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Borderly')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Handles the uploaded image on the server side.
 * This function is for demonstration. The actual processing is client-side.
 * You would use this to save the final blob if needed.
 */
function processForm(formObject) {
  // The 'dataUrl' field will contain the Base64-encoded image from the client.
  const dataUrl = formObject.dataUrl;
  
  if (!dataUrl) {
    return "Error: No image data received.";
  }

  try {
    // Decode the Base64 data to get a Blob.
    const blob = Utilities.newBlob(
      Utilities.base64Decode(dataUrl.split(',')[1]),
      MimeType.JPEG // Or whatever mime type you choose
    );
    
    // You can now save this blob to Google Drive or elsewhere.
    // For example:
    // DriveApp.getFolderById('YOUR_FOLDER_ID').createFile(blob.setName('processed_image.jpeg'));
    
    return "Image processed and uploaded successfully! (Check Apps Script logs)";
    
  } catch (e) {
    Logger.log("Error processing image: " + e.message);
    return "Error processing image: " + e.message;
  }
}
