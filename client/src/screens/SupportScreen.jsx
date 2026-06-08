import { Mail, Phone } from 'lucide-react';
import ScreenHeader from '../components/ScreenHeader';
import { SUPPORT_SERVICES } from '../data/content';
import { openExternal } from '../data/links';

export default function SupportScreen({ onBack }) {
  return (
    <>
      <ScreenHeader title="Student support" onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <ul className="space-y-3">
          {SUPPORT_SERVICES.map((service) => (
            <li
              key={service.name}
              className="rounded-2xl bg-white p-4 shadow-card"
            >
              <p className="text-sm font-extrabold text-charcoal">
                {service.name}
              </p>
              <p className="mt-1 text-xs font-medium text-gray-600">
                {service.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${service.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary"
                >
                  <Phone className="h-3 w-3" />
                  {service.phone}
                </a>
                <button
                  type="button"
                  onClick={() =>
                    openExternal(`mailto:${service.email}`)
                  }
                  className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-charcoal"
                >
                  <Mail className="h-3 w-3" />
                  Email
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
