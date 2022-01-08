const prefix = 'v1'

//info
export const REGISTER = prefix + "/auth/register";
export const LOGIN = prefix + "/auth/login";
export const GET_INFO_USER = prefix + "/users/getuserinfo";
export const CHANGE_PASS_WORD = prefix + "/auth/reset-password";

//rols
export const GET_DATA_ADMIN_MESSAGE = prefix + "/adminmessage/getadminmessagebyuser";
export const SET_STATUS_ADMIN = prefix + "/adminmessage/readed-message";
