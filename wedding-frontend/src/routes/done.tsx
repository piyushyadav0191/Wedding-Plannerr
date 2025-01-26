import AnimatedCircle from '@/components/animatedCircle';
import DonePage from '@/pages/DonePage'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/done')({
  component: RouteComponent,
})

function RouteComponent() {
  const [loading, setLoading] = useState(true);
  
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 5000); // 5 seconds
  
        return () => clearTimeout(timer);
      }, []);
  
  return (
    <>
      {loading ? (
        <div>
          <AnimatedCircle />
        </div>
      ) : (
        <DonePage />
      )}
    </>
  );
}
