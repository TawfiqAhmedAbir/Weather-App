import ScreenHeader from '../components/ScreenHeader';

export default function GenericListScreen({ title, onBack, items }) {
  return (
    <>
      <ScreenHeader title={title} onBack={onBack} />
      <main className="px-4 pb-6 pt-2">
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id || item.title}
              className="rounded-2xl bg-white p-4 shadow-card"
            >
              <p className="text-sm font-extrabold text-charcoal">{item.title}</p>
              {item.date && (
                <p className="mt-1 text-xs font-semibold text-primary">
                  {item.date}
                </p>
              )}
              {item.location && (
                <p className="text-xs font-medium text-gray-500">{item.location}</p>
              )}
              {item.summary && (
                <p className="mt-2 text-xs font-medium text-gray-600">
                  {item.summary}
                </p>
              )}
              {item.hours && (
                <p className="mt-1 text-xs font-medium text-gray-500">{item.hours}</p>
              )}
              {item.type && (
                <p className="mt-1 text-[10px] font-bold uppercase text-secondary">
                  {item.type}
                </p>
              )}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
