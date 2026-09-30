/* ══════════════════════════════════════════════════════════════
   1-3팀 운영 스케줄 · 접속 설정

   이 파일에만 Supabase 주소와 키가 들어갑니다.
   schedule.html 은 새 버전이 나와도 그냥 덮어쓰면 되고,
   이 파일은 한 번 만들어두면 다시 건드릴 일이 없습니다.

   key 에 넣을 것:
     Supabase → Settings → API Keys → publishable (또는 anon public)
     ※ service_role 키는 절대 넣지 마세요. 관리자 키입니다.
   ══════════════════════════════════════════════════════════════ */

window.SCHEDULE_CONFIG = {
  url: 'https://yfbzitsgnwjtuegknypo.supabase.co',
  key: 'sb_publishable_JUWVWN9qFbnx1ST6oW6-_Q_G4ljbGSo'
};
