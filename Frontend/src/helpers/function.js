
const validateEmailOrPhone = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format
    const phoneRegex = /^[6-9]\d{9}$/; // Mobile number format (India-specific)

        if (emailRegex.test(value)) {
            return { isValid: true, type: "email" };
        } else if (phoneRegex.test(value)) {
            return { isValid: true, type: "phone" };
        }
        return { isValid: false };
};



export {validateEmailOrPhone}