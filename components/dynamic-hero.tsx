import dynamic from 'next/dynamic';

// Dynamically import the Hero component
const DynamicHero = dynamic(() => import('./hero').then(mod => mod.Hero), {
  loading: () => (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50 dark:bg-neutral-900">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 animate-pulse">
          Loading...
        </h1>
        <p className="mt-4 max-w-lg text-neutral-600 dark:text-neutral-400 animate-pulse">
          Please wait while we prepare an amazing experience for you.
        </p>
      </div>
    </div>
  ),
  ssr: true, // Keep SSR for this component as it's likely above the fold
});

export default DynamicHero;
