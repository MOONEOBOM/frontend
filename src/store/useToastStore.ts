import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ToastState, ToastAction, Toast } from '@/components/toast/toast.types';

export const useToastStore = create<ToastState & ToastAction>()(
  
  devtools((set) => ({
    toast: null,
    isOpen: false,

    // 토스트 정보 설정 (텍스트와 타입)
    setToast: (toast: Toast | null) => {
      set({ toast });
    },

    // 토스트 표시 여부 설정
    setIsOpen: (isOpen: boolean) => {
      set({ isOpen });
    },
  }))
);