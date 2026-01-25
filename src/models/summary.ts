// src/models/summary.ts
// Request.dto
export interface SummaryRequest {
  conversation: ChatMessage[];
}

export interface ChatMessage {
  role: 'agent' | 'user';  // 화자
  message: string;  // 말한 내용
}

// Response.dto
export interface SummaryResponse {
  title: string;  // 요약한 내용 제목
  summary: string;  // 요약본
  core_chat: CoreChat[];  // 핵심 대화
}

export interface CoreChat {
  speaker: string;  // 화자
  message: string;  // 해당 화자의 말
}
