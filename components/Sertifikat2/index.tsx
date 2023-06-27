import { PDFDocument, StandardFonts, rgb, } from 'pdf-lib';
import { useEffect, useState } from 'react';

const Sertifikat2 = ({data}) => {
    console.log(data);
  const [pdfData, setPdfData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const templatePdfUrl = '../../template.pdf';
        const templatePdfBytes = await fetch(templatePdfUrl).then((res) => res.arrayBuffer());
        const pdfDoc = await PDFDocument.load(templatePdfBytes);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        const { width, height } = firstPage.getSize();
        const name = data.nama;
        const number = data.kode_sertifikat;
        const namaseminar = 'Pada Kegiatan Seminar Dengan Judul ' + data.seminarname;
        const tanggal = 'yang diselenggarakan pada tanggal ' + data.seminardate;

        const fontSize = name.length > 20 ? name.length / 1.1 : 38;
        const fontnamaseminar = 15;

        firstPage.drawText(name, {
          x: width / 2 - name.length * fontSize * 0.29,
          y: 350,
          size: fontSize,
          font: await pdfDoc.embedFont(StandardFonts.Helvetica),
          color: rgb(0, 0, 1),
        });
        firstPage.drawText(number, {
          x: width / 2 - number.length * 20 * 0.29,
          y: 467,
          size: 20,
          font: await pdfDoc.embedFont(StandardFonts.Helvetica),
          color: rgb(0, 0, 1),
        });
        firstPage.drawText(namaseminar, {
          x: width / 2 - namaseminar.length * fontnamaseminar * 0.24,
          y: 215,
          size: fontnamaseminar,
          font: await pdfDoc.embedFont(StandardFonts.Helvetica),
          color: rgb(0, 0, 1),
        });
        firstPage.drawText(tanggal, {
          x: width / 2 - tanggal.length * fontnamaseminar * 0.24,
          y: 190,
          size: fontnamaseminar,
          font: await pdfDoc.embedFont(StandardFonts.Helvetica),
          color: rgb(0, 0, 1),
        });

        const modifiedPdfBytes = await pdfDoc.save();
        const pdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));
        setPdfData(pdfUrl);
      } catch (error) {
        setError(error.message);
      }
    };
    loadPdf();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {pdfData ? (
        <embed src={pdfData} type="application/pdf" width="100%" height="900px" />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Sertifikat2;