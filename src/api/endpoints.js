// API Endpoints
export const BASE_URL = 'https://uncompetently-indefeasible-alfredo.ngrok-free.dev';

export const API_ENDPOINTS = {
    
    // Auth
    REGISTER: `${BASE_URL}/api/Auth/register`,

    LOGIN: `${BASE_URL}/api/Auth/login`,
    FORGOT_PASSWORD: `${BASE_URL}/api/Auth/forgot-password`,
    RESET_PASSWORD: `${BASE_URL}/api/Auth/reset-password`,

    // Google and Facebook
    GOOGLE_LOGIN: `${BASE_URL}/api/Auth/google`,
    FACEBOOK_LOGIN: `${BASE_URL}/api/Auth/facebook`,


    // Profile
    GET_PROFILE: `${BASE_URL}/api/User/profile`,
    UPDATE_PROFILE: `${BASE_URL}/api/User/profile`,
    CHANGE_PASSWORD: `${BASE_URL}/api/Auth/change-password`,
    
};