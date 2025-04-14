const validatePassword = password => {
    if (password.length < 8) {
        return { error: "Password must be at least 8 characters long" };
    }

    if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
        return { error: "Password must contain special characters!" };
    }

    if (!password.match(/[A-Z]/)) {
        return { error: "Password must contain at least one uppercase letter!" };
    }

    if (!password.match(/[a-z]/)) {
        return { error: "Password must contain at least one lowercase letter!" };
    }

    if (!password.match(/[0-9]/)) {
        return { error: "Password must contain at least one number!" };
    }

    return null;
}

export default validatePassword;
