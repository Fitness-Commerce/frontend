// 회원가입 - REGISTER
// 로그인 - LOGIN
// 로그아웃 - LOGOUT
// 토큰 재발급 - REFRESH_TOKEN
// 회원정보 수정 - UPDATE_PROFILE
// 회원 비밀번호 수정 - UPDATE_PASSWORD
// 회원 단건 조회(본인) - GET_SELF_MEMBER
// 회원 단건 조회(상대방) - GET_OTHER_MEMBER + {memberId}
// 회원 전체 조회 - GET_ALL_MEMBERS
// 회원탈퇴 - DELETE_MEMBER

export const REGISTER = '/api/members/signup';
export const LOGIN = '/api/auth/login';
export const LOGOUT = '/api/auth/logout';
export const REFRESH_TOKEN = '/api/auth/token-refresh';
export const UPDATE_PROFILE = '/api/members/myProfile';
export const UPDATE_PASSWORD = '/api/members/myProfile/password';
export const GET_SELF_MEMBER = '/api/members/myProfile';
export const GET_OTHER_MEMBER = '/api/members/';
export const GET_ALL_MEMBERS = '/api/members';
export const DELETE_MEMBER = '/api/members/myProfile';
export const CATEGORIES = "/api/categories"
export const ITEMS = "/api/items"