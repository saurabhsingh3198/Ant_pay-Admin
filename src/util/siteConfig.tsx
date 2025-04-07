const siteCofig = {
    BASE_URL: "",
    USER_PHONE_SEND_OTP: "https://affiliate.antworksmoney.in/api/auth/user/send-otp",
    USER_VERIFY: "https://affiliate.antworksmoney.in/api/auth/user/verify-otp",
};

// User
// Login - https://affiliate.antworksmoney.in/api/auth/user/send-otp
// Body - phone
// Verify - https://affiliate.antworksmoney.in/api/auth/user/verify-otp
// Body - "phone" : "xxxxxxxxx", "otp"    : "xxxxxx"

// Admin 
// Login - https://affiliate.antworksmoney.in/api/auth/admin/send-otp
// Body - phone
// Verify - https://affiliate.antworksmoney.in/api/auth/admin/verify-otp
// Body - "phone" : "xxxxxxxxx", "otp"    : "xxxxxx"


export default siteCofig;