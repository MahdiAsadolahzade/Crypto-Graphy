function encrypt(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (str[i] >= "a" && str[i] <= "z") {
      charCode = ((charCode - "a".charCodeAt(0) + n) % 26) + "a".charCodeAt(0);
    } else if (str[i] >= "A" && str[i] <= "Z") {
      charCode = ((charCode - "A".charCodeAt(0) + n) % 26) + "A".charCodeAt(0);
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}

function decrypt(str, n) {
  return encrypt(str, 26 - n);
}

const encryptedText = encrypt("Hello, World!", 3);
console.log(encryptedText); // Outputs: "Khoor, Zruog!"

const decryptedText = decrypt("Khoor, Zruog!", 3);
console.log(decryptedText); // Outputs: "Hello, World!"

