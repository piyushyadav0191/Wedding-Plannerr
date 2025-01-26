import  { useEffect, useState } from 'react';
import GuestPage from '@/pages/GuestPage';
import { createFileRoute } from '@tanstack/react-router';
import InLoader from '@/components/loader';

export const Route = createFileRoute('/guest')({
  component: RouteComponent,
});

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
          <InLoader imageUrl={"/loader.webp"} />
        </div>
      ) : (
        <GuestPage />
      )}
    </>
  );
}
