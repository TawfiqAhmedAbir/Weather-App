import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import TopBar from '../components/TopBar';

const STUDENT = {
  name: 'Tawfiq Ahmed Abir',
  studentId: '4230337',
  course: 'BSc Computer Science',
  campus: 'Southwark Campus',
  level: 'Level 5 undergraduate',
  status: 'Enrolled',
  advisor: 'Dr Sarah Mitchell',
  email: '4230337@student.lsbu.ac.uk',
  phone: '+44 7700 900337',
  startDate: 'September 2024',
};

const INFO_CARDS = [
  { label: 'Course', value: STUDENT.course, icon: BookOpen },
  { label: 'Campus', value: STUDENT.campus, icon: MapPin },
  { label: 'Academic level', value: STUDENT.level, icon: GraduationCap },
  { label: 'Personal tutor', value: STUDENT.advisor, icon: UserRound },
];

export default function AccountScreen() {
  return (
    <>
      <TopBar />
      <main className="space-y-4 px-3 pb-4 pt-3">
        <section className="overflow-hidden rounded-3xl bg-charcoal shadow-card">
          <div className="bg-gradient-to-br from-primary via-[#be3e67] to-secondary p-5 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/75">
                  My Account
                </p>
                <h1 className="mt-2 text-2xl font-extrabold leading-tight">
                  {STUDENT.name}
                </h1>
                <p className="mt-1 text-sm font-bold text-white/85">
                  Student ID: {STUDENT.studentId}
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                <UserRound className="h-8 w-8" strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-white p-4">
            <div className="rounded-2xl bg-green-50 p-3">
              <div className="flex items-center gap-2 text-green-700">
                <BadgeCheck className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-xs font-extrabold uppercase tracking-wide">
                  Status
                </span>
              </div>
              <p className="mt-1 text-lg font-extrabold text-charcoal">
                {STUDENT.status}
              </p>
            </div>
            <div className="rounded-2xl bg-primary/10 p-3">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-xs font-extrabold uppercase tracking-wide">
                  Started
                </span>
              </div>
              <p className="mt-1 text-lg font-extrabold text-charcoal">
                {STUDENT.startDate}
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-4 shadow-card">
          <h2 className="text-base font-extrabold text-charcoal">
            Student information
          </h2>
          <div className="mt-4 grid gap-3">
            {INFO_CARDS.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-wide text-gray-400">
                    {label}
                  </p>
                  <p className="text-sm font-extrabold text-charcoal">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-white p-4 shadow-card">
          <h2 className="text-base font-extrabold text-charcoal">
            Contact details
          </h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3">
              <Mail className="h-5 w-5 text-primary" strokeWidth={2.25} />
              <span className="text-sm font-bold text-charcoal">
                {STUDENT.email}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-3">
              <Phone className="h-5 w-5 text-primary" strokeWidth={2.25} />
              <span className="text-sm font-bold text-charcoal">
                {STUDENT.phone}
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
