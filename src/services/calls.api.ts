import api from '@/lib/axios';
import { CallCounselListResponse, CallMessagesResponse } from '@/models/calls';
import { ApiResponse } from '@/models/common';

export async function getCallList() {
  const res = await api.get<ApiResponse<CallCounselListResponse[]>>('/call');

  return res.data.data;
}

export async function getCallMessages(CallId: number) {
  const res = await api.get<ApiResponse<CallMessagesResponse[]>>(
    `/call/${CallId}`,
  );
  return res.data.data;
}
