interface Window {
    UserData: any;
}

interface UserData {
    nome: string;
    email: string;
    cpf: number;
}

window.UserData = {};

//typeguard
function isUserData(value: unknown): value is UserData {
    if(value && typeof value === "object" && 
    ("nome" in value || "email" in value || "cpf" in value)
    ) {
        return true;
    }
    return false;
}

function saveUserData({target}: Event) {
    if(target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem("UserData", JSON.stringify(window.UserData));
    }
}

const form = document.querySelector<HTMLElement>("#form");

form?.addEventListener("keyup", saveUserData);

function validJSON(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

function loadInfo() {
    const userInfo = localStorage.getItem("UserData")
    if(userInfo) {
        const userData = JSON.parse(userInfo);
        if(isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if(input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
                
            })
        }
    }
    
}

loadInfo();
