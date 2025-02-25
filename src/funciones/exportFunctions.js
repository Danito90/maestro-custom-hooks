import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

export const exportToPDF = (data) => {
    // Crear el documento en orientación horizontal
    const doc = new jsPDF("landscape");
  
    // Título del documento
    doc.setFontSize(16);
    doc.text("Reporte de Datos", 10, 10);
  
    if (Array.isArray(data)) {
      // Obtener las claves del primer objeto para los encabezados
      const keys = Object.keys(data[0]);
  
      // Crear la tabla con encabezados y datos
      doc.autoTable({
        head: [keys], // Encabezados de la tabla
        body: data.map((item) => keys.map((key) => item[key] ?? "")), // Filas de la tabla
        startY: 20, // Posición inicial de la tabla
        headStyles: {
          fontSize: 7, // Tamaño de letra para encabezados
          fontStyle: "bold", // Estilo de fuente (opcional)
        },
        styles: {
          fontSize: 6, // Tamaño de letra para los valores
        },
      });
    } else {
      doc.text("Los datos no tienen un formato válido para generar una tabla.", 10, 30);
    }
  
    // Guardar el archivo PDF
    doc.save("reporte.pdf");
  };

  
export const exportToExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'tabla.xlsx');
};

export const exportToCSV = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const csv = XLSX.utils.sheet_to_csv(worksheet);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', 'tabla.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const printTable = () => {
  const printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><title>Tabla</title></head><body>');
  printWindow.document.write(document.getElementById('tabla').outerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
};
