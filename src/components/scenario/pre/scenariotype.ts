/**
 * 상담 종류 타입 정리 -> key: string 형식
 *  key : 식별자
 *  label : 화면에 뜨는 글자 UI
 */
export const CONSULT_TYPES = [
  { key: 'internet', label: '인터넷/IP TV' },  // index 0
  { key: 'plan', label: '요금제' },
  { key: 'esim', label: '유심/eSIM' },
  { key: 'roaming', label: '로밍' },
  { key: 'addservice', label: '부가서비스' },
  { key: 'loss', label: '휴대폰 분실/파손' },
] as const;

export type ConsultTypeKey = (typeof CONSULT_TYPES)[number]['key'];  // key 6개 중 선택한 하나만...

/**
 * 상담 종류별 이유 선택지 정리 -> { label, value } 형식
 *  key랑 value 둘 다 나중에 백엔드로 전달함
 */
export const REASONS_BY_TYPE: Record<ConsultTypeKey, { label: string; value: string }[]> =
  {
    internet: [
      { label: '속도가 느려요.', value: 'slow_speed' },
      { label: '요금이 비싸요.', value: 'high_cost' },
      { label: '자주 끊겨요.', value: 'disconnect' },
    ],
    plan: [
      { label: '비용을 줄이고 싶어요.', value: 'reduce_cost' },
      { label: '데이터가 더 많이 필요해요.', value: 'need_more_data' },
      { label: '통화량이 더 많이 필요해요.', value: 'need_more_call' },
    ],
    esim: [
      { label: '해외에서 사용하려고 해요.', value: 'overseas_use' },
      { label: '기기 변경을 했어요.', value: 'device_change' },
    ],
    roaming: [
      { label: '출장/여행 예정이에요.', value: 'travel' },
      { label: '요금이 궁금해요.', value: 'price_check' },
    ],
    addservice: [
      { label: '부가서비스를 추가하고 싶어요.', value: 'add_service' },
      { label: '불필요한 서비스를 해지하고 싶어요.', value: 'remove_service' },
    ],
    loss: [
      { label: '휴대폰을 분실했어요.', value: 'lost_phone' },
      { label: '휴대폰이 파손됐어요.', value: 'broken_phone' },
    ],
};