export interface ScenarioRequestDto {
  categoryKey: string;
  reasonKey: string[];
}

export interface ScenarioResponseDto {
  scenario: ScenarioDetail[];
  keywords: string[];
}

export interface ScenarioDetail {
  role: string; // "agent", "user"
  message: string; // 실제 대화 내용
}
