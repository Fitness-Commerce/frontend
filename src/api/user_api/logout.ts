function logout() {
    const error = Error("로그아웃");
    error.name = "LOGOUT";
    throw error;
}

export default logout;
