import { getCallList, getCallMessages } from '@/services/calls.api';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

export function useCallList() {
  return useSuspenseQuery({
    queryKey: ['call', 'list'],
    queryFn: () => getCallList(),
  });
}

export function useCallMessages(callId: number) {
  return useQuery({
    queryKey: ['call', 'messages', callId],
    queryFn: () => getCallMessages(callId),
  });
}
