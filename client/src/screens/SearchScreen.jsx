import { useState } from 'react';
import { Search } from 'lucide-react';
import TopBar from '../components/TopBar';
import { searchContent } from '../utils/search';

export default function SearchScreen({ onMenu, onRefresh, onNavigate }) {
  const [query, setQuery] = useState('');
  const results = searchContent(query);

  return (
    <>
      <TopBar onMenu={onMenu} onRefresh={onRefresh} />
      <main className="px-4 pb-6 pt-2">
        <h1 className="mb-4 text-xl font-extrabold text-charcoal">Search</h1>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Modules, events, support..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm font-semibold text-charcoal"
          />
        </div>

        {query.trim() === '' ? (
          <p className="text-center text-sm text-gray-500">
            Try searching for a module, exam, or support service.
          </p>
        ) : results.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            No results for &ldquo;{query}&rdquo;
          </p>
        ) : (
          <ul className="space-y-2">
            {results.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(item.screen)}
                  className="w-full rounded-2xl bg-white p-4 text-left shadow-card transition-colors hover:bg-gray-50"
                >
                  <p className="text-[10px] font-bold uppercase text-primary">
                    {item.category}
                  </p>
                  <p className="text-sm font-extrabold text-charcoal">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-gray-500">
                    {item.subtitle}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
