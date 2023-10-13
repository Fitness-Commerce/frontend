// 생성 시간에서 현재까지 지난 시간을 계산하여 "~일 전", "~시간 전" 같은 문자열 반환
const kstToUtc = (kst: string) => {
    const date = new Date(kst);
    return date.setHours(date.getHours() + 9);
  };

const pastTimeCalculator = (created_at: string) => {
    const parsed = kstToUtc(created_at);
    const now = Date.now();
    const diff = now - (now > parsed ? parsed : Date.parse(created_at));
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));

    if(days > 0) return days + '일 전';
    if(hours > 0) return hours + '시간 전';
    return mins + '분 전';
};

export default pastTimeCalculator;
