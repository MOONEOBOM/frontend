export type ToastType = 'negative' | 'normal' | 'positive';  // 토스트는 3종류

export interface Toast {
  content: string;  // 토스트에 표시될 텍스트
  type: ToastType;  // 3종류 (negative, normal, positive)
}

export interface ToastState {
  toast: Toast | null;  // 현재 떠 있는 토스트 (없으면 null)
  isOpen: boolean;  // 토스트 표시 여부
}

export interface ToastAction {
  setToast: (toast: Toast | null) => void;  // 토스트 설정 함수
  setIsOpen: (isOpen: boolean) => void;  // 열고 닫는거 설정 함수
}