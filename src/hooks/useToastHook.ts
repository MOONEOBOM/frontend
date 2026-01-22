import { useToastStore } from "@/store/useToastStore";
import { ToastType } from "@/components/toast/toast.types";

export const useToastHook = () => {

  const { setToast, setIsOpen } = useToastStore();

  // 토스트 실행하는 함수 (전역)
  /**
   * @example
   *  const { toast } = useToastHook();
   *  toast("positive", "성공 메시지");
   * @param type - "negative" (빨강), "normal" (갈색), "positive" (초록)
   * @param content - 화면에 표시할 텍스트 문구
   */
  const startToast = (type: ToastType, content: string) => {
    
    const data = { type, content };

    setToast(data);
    setIsOpen(true);

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return { toast: startToast };
};