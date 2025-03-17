import dynamic from 'next/dynamic';

// Dynamically import the CTA component
const DynamicCTA = dynamic(() => import('./cta').then(mod => mod.CTA), {
  loading: () => (
    <div className="w-full py-20 px-4 md:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 animate-pulse">
            Loading...
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 animate-pulse">
            Please wait while we load our call-to-action section.
          </p>
        </div>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR for this component as it's likely below the fold
});

export default DynamicCTA;
