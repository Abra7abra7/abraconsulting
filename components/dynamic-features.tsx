import dynamic from 'next/dynamic';

// Dynamically import the Features component
const DynamicFeatures = dynamic(() => import('./features').then(mod => mod.Features), {
  loading: () => (
    <div className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8">
      <div className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800">
        Automation made easy
      </div>
      <div className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Loading features...
      </div>
      <div className="mt-20 grid cols-1 md:grid-cols-5 gap-4 md:auto-rows-[25rem] max-w-7xl mx-auto">
        <div className="flex flex-col justify-between md:col-span-3 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl"></div>
        <div className="flex flex-col justify-between md:col-span-2 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl"></div>
      </div>
    </div>
  ),
  ssr: true, // Keep SSR for this component as it might be above the fold
});

export default DynamicFeatures;
