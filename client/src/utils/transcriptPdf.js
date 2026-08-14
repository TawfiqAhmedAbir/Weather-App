import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { STUDENT } from '../data/student';
import { getTranscriptRows, TRANSCRIPT_INFO } from '../data/assessment';

const CRIMSON = [160, 39, 79];

export function downloadTranscriptPdf() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 18;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...CRIMSON);
  doc.text('London South Bank University', margin, 22);

  doc.setFontSize(14);
  doc.setTextColor(58, 58, 58);
  doc.text('TRANSCRIPT', pageWidth - margin, 22, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text('103 Borough Road, London SE1 0AA · lsbu.ac.uk', margin, 27);

  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const infoLines = [
    `This transcript is issued to ${STUDENT.fullName}`,
    `LSBU Student Reference Number: ${STUDENT.studentId}`,
    `Course undertaken: ${TRANSCRIPT_INFO.courseUndertaken}`,
    TRANSCRIPT_INFO.studiedAt,
  ];
  infoLines.forEach((line, i) => doc.text(line, margin, 37 + i * 5));

  autoTable(doc, {
    startY: 60,
    margin: { left: margin, right: margin },
    head: [
      [
        'Module Reference and Title',
        'Level',
        'CAT Awarded',
        'ECTS',
        'Mark',
        'Grade',
      ],
    ],
    body: getTranscriptRows().map((row) => [
      `${row.code}   ${row.title}`,
      row.level,
      row.cat,
      row.ects.toFixed(1),
      row.mark === null ? '—' : row.mark,
      row.grade,
    ]),
    styles: { fontSize: 8.5, cellPadding: 1.8, textColor: [40, 40, 40] },
    headStyles: {
      fillColor: [255, 255, 255],
      textColor: [40, 40, 40],
      fontStyle: 'bold',
      lineWidth: { bottom: 0.3 },
      lineColor: [40, 40, 40],
    },
    columnStyles: {
      0: { cellWidth: 92 },
      1: { halign: 'center' },
      2: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'center' },
      5: { halign: 'center' },
    },
    theme: 'plain',
  });

  const afterTableY = doc.lastAutoTable.finalY + 8;
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text('---------- End of Record ----------', pageWidth / 2, afterTableY, {
    align: 'center',
  });

  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  const summaryY = afterTableY + 12;
  doc.text(`Total Credits: ${TRANSCRIPT_INFO.totalCredits}`, margin, summaryY);
  doc.setFont('helvetica', 'bold');
  doc.text(`Award Gained: ${TRANSCRIPT_INFO.awardGained}`, margin, summaryY + 6);
  doc.text(`Class: ${TRANSCRIPT_INFO.awardClass}`, margin, summaryY + 12);

  doc.setFont('helvetica', 'normal');
  doc.text(
    `Date Awarded: ${TRANSCRIPT_INFO.dateAwarded}`,
    pageWidth - margin,
    summaryY + 12,
    { align: 'right' }
  );

  doc.setFontSize(7.5);
  doc.setTextColor(140, 140, 140);
  doc.text(
    'Transcript only valid if signed and bearing an approved University stamp',
    pageWidth / 2,
    285,
    { align: 'center' }
  );

  doc.save(`LSBU-Transcript-${STUDENT.studentId}.pdf`);
}
