export type SummaryItem = {
  id: number;
  title: string;
  createdDate: string;
};

export type SummaryListResponse = {
  items: SummaryItem[];
  nextCursor: number | null;
};

export type HighlightItem = {
  seq: number;
  role: string;
  message: string;
};

export type SummaryDetailResponse = {
  id: number;
  title: string;
  content: string;
  createdDate: string;
  items: HighlightItem[];
};
