import { getCallList, getCallMessages } from '@/services/calls.api';
import { useQuery } from '@tanstack/react-query';

export function useCallList() {
  return useQuery({
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
