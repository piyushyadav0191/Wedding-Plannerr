import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InitialLoader from '@/components/IndexPage';
import ProposalPage from '@/pages/proposal.page';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
	component: Index
});

function Index() {
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
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <InitialLoader />
        </motion.div>
      ) : (
        <ProposalPage />
      )}
    </>
  );
}

