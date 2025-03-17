import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { CONSTANTS } from '@/constants/links';

// Define a placeholder component for loading state
const CalendarPlaceholder = () => (
  <div className="h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
    <p className="text-neutral-600 dark:text-neutral-400">Loading scheduler...</p>
  </div>
);

// Lazy load the Cal.com embed component
const CalendarComponent = dynamic(
  () => import('@calcom/embed-react'),
  {
    ssr: false,
    loading: () => <CalendarPlaceholder />
  }
);

export function OptimizedCalEmbed() {
  const [showEmbed, setShowEmbed] = useState(false);
  
  useEffect(() => {
    // Only load the Cal.com embed when the component is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShowEmbed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('cal-embed-container');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <div id="cal-embed-container" className="w-full h-full">
      {showEmbed ? (
        <div
          data-cal-namespace={CONSTANTS.CALCOM_NAMESPACE}
          data-cal-link={CONSTANTS.CALCOM_LINK}
          data-cal-config={`{
            "layout":"${CONSTANTS.CALCOM_LAYOUT}",
            "hideEventTypeDetails":${CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS},
            "styles":{
              "branding":{
                "brandColor":"${CONSTANTS.CALCOM_BRAND_COLOR}"
              }
            }
          }`}
          className="w-full h-full"
        />
      ) : (
        <CalendarPlaceholder />
      )}
      {showEmbed && <CalendarComponent />}
    </div>
  );
}
