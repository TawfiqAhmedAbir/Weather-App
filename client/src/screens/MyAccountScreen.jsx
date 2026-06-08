import {
  Building2,
  GraduationCap,
  Hash,
  Mail,
  MapPin,
  User,
} from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { STUDENT } from '../data/student';
import { openExternal, EXTERNAL_LINKS } from '../data/links';

function InfoRow({ icon: Icon, label, value, onClick }) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`flex w-full items-start gap-3 rounded-xl bg-gray-50 p-3 text-left ${
        onClick ? 'transition-colors hover:bg-gray-100' : ''
      }`}
    >
      <div className="rounded-lg bg-primary/10 p-2">
        <Icon className="h-4 w-4 text-primary" strokeWidth={2} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
          {label}
        </p>
        <p className="text-sm font-extrabold text-charcoal">{value}</p>
      </div>
    </Tag>
  );
}

export default function MyAccountScreen({ onBack }) {
  return (
    <>
      <ScreenHeader title="My Account" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <div className="mb-5 rounded-2xl bg-primary p-5 text-white shadow-card">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-2xl font-extrabold">
            {STUDENT.firstName.charAt(0)}
          </div>
          <h2 className="text-xl font-extrabold">{STUDENT.fullName}</h2>
          <p className="mt-1 text-sm font-semibold text-white/90">
            {STUDENT.programmeLabel}
          </p>
        </div>

        <section className="space-y-2">
          <InfoRow icon={User} label="Full name" value={STUDENT.fullName} />
          <InfoRow icon={Hash} label="Student ID" value={STUDENT.studentId} />
          <InfoRow
            icon={GraduationCap}
            label="Programme"
            value={STUDENT.programme}
          />
          <InfoRow icon={GraduationCap} label="Year of study" value={STUDENT.year} />
          <InfoRow icon={Building2} label="Faculty" value={STUDENT.faculty} />
          <InfoRow icon={MapPin} label="Campus" value={STUDENT.campus} />
          <InfoRow
            icon={Mail}
            label="University email"
            value={STUDENT.email}
            onClick={() => openExternal(EXTERNAL_LINKS.email)}
          />
        </section>
      </main>
    </>
  );
}
