function saveUserData(key, value) {
    localStorage.setItem('key', value);
}

function getSavedData(key){
    return localStorage.getItem(key);
}