const userKey = document.getElementById("userKey");
const userValue = document.getElementById("userValue");
const buttonInsert = document.getElementById("buttonInsert");
const output = document.getElementById("output");

buttonInsert.onclick = function () {
    const key = userKey.value;
    const value = userValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    output.innerHTML += `${key}: ${value}<br />`;
}

