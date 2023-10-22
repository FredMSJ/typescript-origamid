"use strict";
window.UserData = {};
//typeguard
function isUserData(value) {
    if (value && typeof value === "object" &&
        ("nome" in value || "email" in value || "cpf" in value)) {
        return true;
    }
    return false;
}
function saveUserData({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}
const form = document.querySelector("#form");
form?.addEventListener("keyup", saveUserData);
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function loadInfo() {
    const userInfo = localStorage.getItem("UserData");
    if (userInfo) {
        const userData = JSON.parse(userInfo);
        if (isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
loadInfo();
