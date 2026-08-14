import { Download } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { STUDENT } from '../data/student';
import { getTranscriptRows, TRANSCRIPT_INFO } from '../data/assessment';

async function handleDownloadPdf() {
  const { downloadTranscriptPdf } = await import('../utils/transcriptPdf');
  downloadTranscriptPdf();
}

export default function AssessmentScreen({ onBack }) {
  const rows = getTranscriptRows();

  return (
    <>
      <ScreenHeader title="Assessment" onBack={onBack} />
      <main className="px-4 pb-8 pt-2">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2 className="font-serif text-lg font-extrabold text-primary">
              London South Bank University
            </h2>
            <p className="text-xs font-bold uppercase tracking-widest text-charcoal">
              Transcript
            </p>
          </div>
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-white shadow-card active:scale-95"
          >
            <Download className="h-4 w-4" strokeWidth={2.5} />
            PDF
          </button>
        </div>

        <div className="mb-5 space-y-0.5 text-xs text-gray-600">
          <p>
            This transcript is issued to{' '}
            <span className="font-bold text-charcoal">{STUDENT.fullName}</span>
          </p>
          <p>LSBU Student Reference Number: {STUDENT.studentId}</p>
          <p>Course undertaken: {TRANSCRIPT_INFO.courseUndertaken}</p>
          <p>{TRANSCRIPT_INFO.studiedAt}</p>
        </div>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-charcoal text-[10px] font-bold uppercase tracking-wide text-charcoal">
              <th className="py-2 pr-2">Module Reference and Title</th>
              <th className="px-1 py-2 text-center">Level</th>
              <th className="px-1 py-2 text-center">CAT</th>
              <th className="px-1 py-2 text-center">ECTS</th>
              <th className="px-1 py-2 text-center">Mark</th>
              <th className="py-2 pl-1 text-center">Grade</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.code}
                className="border-b border-gray-100 text-[11px] text-charcoal"
              >
                <td className="py-2 pr-2">
                  <span className="font-bold text-primary">{row.code}</span>{' '}
                  {row.title}
                </td>
                <td className="px-1 py-2 text-center">{row.level}</td>
                <td className="px-1 py-2 text-center">{row.cat}</td>
                <td className="px-1 py-2 text-center">{row.ects.toFixed(1)}</td>
                <td className="px-1 py-2 text-center font-bold">
                  {row.mark === null ? '—' : row.mark}
                </td>
                <td className="py-2 pl-1 text-center font-semibold">
                  {row.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="my-4 text-center text-[10px] font-semibold text-gray-400">
          ---------- End of Record ----------
        </p>

        <div className="rounded-2xl bg-gray-50 p-4 text-xs text-charcoal">
          <p>Total Credits: {TRANSCRIPT_INFO.totalCredits}</p>
          <p className="mt-1 font-bold">
            Award Gained: {TRANSCRIPT_INFO.awardGained}
          </p>
          <p className="font-bold text-primary">
            Class: {TRANSCRIPT_INFO.awardClass}
          </p>
          <p className="mt-1 text-gray-500">
            Date Awarded: {TRANSCRIPT_INFO.dateAwarded}
          </p>
        </div>
      </main>
    </>
  );
}
