const buttonDownloadElement = document.querySelector("#button-download");
const curriculumElement = document.querySelector("#curriculum");

async function importJSPDF() {
  const jspdfCDN =
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  const html2CanvasCDN =
    "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

  await import(jspdfCDN);
  await import(html2CanvasCDN);
}

buttonDownloadElement.addEventListener("click", async () => {
  await importJSPDF();
  var jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF();

  doc.html(curriculumElement, {
    x: 15,
    y: 15,
    width: 180,
    windowWidth: 1000,
    callback: function (doc) {
      doc.save("ryanizac-curriculum.pdf");
    },
  });
});
