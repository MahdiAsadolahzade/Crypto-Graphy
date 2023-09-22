# Caesar Cipher Encryption and Decryption

## Introduction
The Caesar Cipher is one of the simplest encryption methods. In this method, a fixed number 'n' (within the range [0, 25]) is chosen, and all characters in the input string are shifted forward by 'n' positions. For example, if 'n' is set to 11, the character 'A' becomes 'B', and 'Z' becomes 'A'. The same shifting process applies to lowercase English letters. It's important to note that only English letters (both uppercase and lowercase) are encrypted, and any non-alphabet characters remain unchanged.

## Encryption Process
The encryption process is as follows:
- For each alphabet character 'x', replace it with '(x + n) mod 26'.
- For example, if 'n' is 3, 'A' becomes 'D', 'B' becomes 'E', and 'Z' becomes 'C'.
- Non-alphabet characters (such as numbers, symbols, and spaces) are not encrypted and remain the same.

## Decryption Process
The decryption process is the reverse of encryption:
- For each encrypted alphabet character 'y', replace it with '(y - n) mod 26'.
- For example, if 'n' is 5, 'F' becomes 'A', 'G' becomes 'B', and 'D' becomes 'Y'.
- Non-alphabet characters (such as numbers, symbols, and spaces) are not decrypted and remain the same.

## Usage
To use this Caesar Cipher encryption and decryption tool, follow these steps:
1. Input the text you want to encrypt or decrypt.
2. Specify the value of 'n' (the shift value) within the range [0, 25].
3. Click the "Encrypt" or "Decrypt" button to see the result.

## Example
- Input: "Hello, World!"
- Shift Value (n): 3
- Encrypted Result: "Khoor, Zruog!"
- Decrypted Result: "Hello, World!"

This project demonstrates a simple implementation of the Caesar Cipher algorithm in JavaScript.

Enjoy encrypting and decrypting your messages!
