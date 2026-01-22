export interface chatRequestDto {
  chat: string;
}

export interface chatResponseDto {
  answer: ScenarioDetail[];
}

export interface ScenarioDetail {
  normal: string; // 일반적인 답변
  easy: string; // 쉬운 답변
}
