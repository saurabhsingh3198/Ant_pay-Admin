const siteConfig = {
    BASE_URL: "https://affiliate.antworksmoney.in",
    USER_ALREADY_REGISTERED: "1",
    USER_NOT_REGISTERED: "2",
    USER_PHONE_SEND_OTP: `/api/auth/user/send-otp`,
    USER_VERIFY: `/api/auth/user/verify-otp`,
};

// Admin 
// Login - https://affiliate.antworksmoney.in/api/auth/admin/send-otp
// Body - phone
// Verify - https://affiliate.antworksmoney.in/api/auth/admin/verify-otp
// Body - "phone" : "xxxxxxxxx", "otp"    : "xxxxxx"


export default siteConfig;