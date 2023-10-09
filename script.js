function play() {
  // Get the content from the HTML, CSS, and JS textareas
  let htmlCode = document.querySelector(".html").value;
  let cssCode = document.querySelector(".css").value;
  let jsCode = document.querySelector(".js").value;

  // Get the iframe element
  let output = document.querySelector("#run");

  // Create an HTML document within the iframe
  let iframeDocument = output.contentDocument;
  if (iframeDocument) {
    // Clear the existing content
    iframeDocument.open();
    iframeDocument.write("");
    iframeDocument.close();

    // Create a new HTML document and add HTML, CSS, and JS
    iframeDocument.open();
    iframeDocument.write(`
            <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>${htmlCode}<script>${jsCode}</script></body>
            </html>
        `);
    iframeDocument.close();
  }
}
