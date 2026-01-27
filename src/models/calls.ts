export interface CallCounselListResponse {
  id: number;
  previewText: string;
  startedAt: string;
}

export interface CallMessagesResponse {
  seq: number;
  role: 'agent' | 'user';
  message: string;
  createdAt: string;
}
