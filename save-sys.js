function saveUserData(key, value) {
    localStorage.setItem(key, value);
}

function getSavedData(key){
    let res = localStorage.getItem(key);
    if(res === null) return "0";
    return res;
}