import ProposalPage from '@/pages/proposal.page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/proposal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProposalPage />
}
