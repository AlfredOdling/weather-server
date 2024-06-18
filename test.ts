import { fromPath } from 'pdf2pic'
import { PDFDocument } from 'pdf-lib'
import fs from 'fs'

const pdfPath = './0.11633936713992998.pdf'

// Calculate the number of pages in the PDF
const fileBytes = fs.readFileSync(pdfPath)
const pdfDoc = await PDFDocument.load(fileBytes)

const numPages = pdfDoc.getPageCount()

for (let i = 1; i <= numPages; i++) {
  const convert = fromPath(pdfPath, {
    density: 200,
    saveFilename: `page_${i}`,
    savePath: './',
    format: 'png',
    width: 800,
    height: 1200,
  })

  convert(i, { responseType: 'image' }).then((resolve) => resolve)
}
