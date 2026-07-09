# DeMatrix API

A lightweight Node.js library for interacting with the Cyphers API. It provides AI utilities, encryption helpers, GitHub information, TikTok profile lookup, APK information, QR code generation, IP lookup, lyrics search, UUID generation, Base64 utilities, and more.

## Installation

bash npm install dematrix 

or

bash yarn add dematrix 

---

# Import

javascript import dematrix, {     formatCN,     getqr,     cipher128,     cipher128Decode } from "dematrix"; 

---

# Features

-  GPT-3 AI
-  Uncensored Venice AI
-  Bible AI
-  AES Encryption & Decryption
-  Encryption Credentials
-  Song Lyrics
-  TikTok Profile Lookup
- APK Information

   •GitHub User Lookup

-  Programming Resources
-  IP Lookup
-  QR Code Generator
-  Contact Formatter
-  Base64 Encoding & Decoding
-  UUID Generator
-  Cipher128 Encryption
-  Cipher128 Decryption

---

# # DeMatrix API

A lightweight Node.js library for interacting with the Cyphers API. It provides AI utilities, encryption helpers, GitHub information, TikTok profile lookup, APK information, QR code generation, IP lookup, lyrics search, UUID generation, Base64 utilities, and more.

## Installation

bash npm install dematrix 

or

bash yarn add dematrix 

---

# Import

javascript import dematrix, {     formatCN,     getqr,     cipher128,     cipher128Decode } from "dematrix"; 

---

# Features

-  GPT-3 AI

-  Uncensored Venice AI

-  Bible AI

-  AES Encryption & Decryption

- Encryption Credentials

-  Song Lyrics

-  TikTok Profile Lookup

-  APK Information

-  GitHub User Lookup

-  Programming Resources

-  IP Lookup

-  QR Code Generator

-  Contact Formatter

-  Base64 Encoding & Decoding

And many more…

---

# Basic Usage

javascript import dematrix from "dematrix"; 

---

# GPT-3

javascript const response = await dematrix.gpt3("What is JavaScript?");  console.log(response); 

---

# Uncensored AI

javascript const response = await dematrix.uncensoredAi("Tell me a story.");  console.log(response); 

---

# Bible AI

javascript const response = await dematrix.bibleAi("John 3:16");  console.log(response); 

---

# Encryption Credentials

javascript const credentials = await dematrix.getEncryptionCredentials();  console.log(credentials); 

Returns

javascript {    Key: "...",    Iv: "...",    I_Info: "..." } 

---

# Encrypt

javascript const encrypted = await dematrix.encrypt("Hello World");  console.log(encrypted); 

---

# Decrypt

javascript const decrypted = await dematrix.decrypt(encrypted);  console.log(decrypted); 

---

# Song Lyrics

javascript const lyrics = await dematrix.lyrics("Shape of You");  console.log(lyrics); 

---

# TikTok Lookup

javascript const profile = await dematrix.tiktokStalk("username");  console.log(profile); 

---

# APK Information

javascript const app = await dematrix.apk("WhatsApp");  console.log(app); 

---

# GitHub User

javascript const user = await dematrix.github("octocat");  console.log(user); 

---

# Programming Resources

javascript const data = await dematrix.programming();  console.log(data); 

---

# Base64

javascript const encoded = dematrix.base64.encode("Hello");  console.log(encoded);  const decoded = dematrix.base64.decode(encoded);  console.log(decoded); 

---

# UUID

javascript const id = dematrix.uuid();  console.log(id); 

---

# IP Lookup

javascript const info = await dematrix.iplookup("8.8.8.8");  console.log(info); 

---

# QR Code

javascript import { getqr } from "dematrix";  const qr = await getqr("https://example.com");  console.log(qr); 

---

# Format Contact Number

javascript import { formatCN } from "dematrix";  console.log(formatCN("0551234567")); 

---

# Cipher128 Encryption

javascript import { cipher128 } from "dematrix";  const encrypted = cipher128("Hello World");  console.log(encrypted); 

---

# Cipher128 Decryption

javascript import { cipher128Decode } from "dematrix";  const decrypted = cipher128Decode("EncryptedText");  console.log(decrypted); 

---

# API Methods

| Method | Description |

|---------|-------------|

| gpt3(prompt) | GPT-3 AI response |

| uncensoredAi(prompt) | Venice Uncensored AI |

| bibleAi(prompt) | Bible AI |

| getEncryptionCredentials() | Returns encryption key and IV |

| encrypt(text) | Encrypt text |

| decrypt(text) | Decrypt text |

| lyrics(song) | Get song lyrics |

| tiktokStalk(username) | TikTok profile lookup |

| apk(name) | APK information |

| github(username) | GitHub user lookup |

| programming() | Programming resources |

| base64 | Base64 utilities |

| uuid() | Generate UUID |

| iplookup(ip) | Lookup IP address |

---

# Exported Utilities

javascript import {     formatCN,     getqr,     cipher128,     cipher128Decode } from "dematrix"; 

---

# Error Handling

Every async method should be wrapped in a try...catch block.

javascript try {     const res = await dematrix.gpt3("Hello");     console.log(res); } catch (err) {     console.error(err); } 

---

# Requirements

- Node.js 18+

- ES Modules

---

# Author

Cypher APIs

Powered by the Cyphers API infrastructure.

---

# License

MIT LicensBasic Usage

javascript import dematrix from "dematrix"; 

---

# GPT-3

javascript const response = await dematrix.gpt3("What is JavaScript?");  console.log(response); 

---

# Uncensored AI

javascript const response = await dematrix.uncensoredAi("Tell me a story.");  console.log(response); 

---

# Bible AI

javascript const response = await dematrix.bibleAi("John 3:16");  console.log(response); 

---

# Encryption Credentials

javascript const credentials = await dematrix.getEncryptionCredentials();  console.log(credentials); 

Returns

javascript {    Key: "...",    Iv: "...",    I_Info: "..." } 

---

# Encrypt

javascript const encrypted = await dematrix.encrypt("Hello World");  console.log(encrypted); 

---

# Decrypt

javascript const decrypted = await dematrix.decrypt(encrypted);  console.log(decrypted); 

---

# Song Lyrics

javascript const lyrics = await dematrix.lyrics("Shape of You");  console.log(lyrics); 

---

# TikTok Lookup

javascript const profile = await dematrix.tiktokStalk("username");  console.log(profile); 

---

# APK Information

javascript const app = await dematrix.apk("WhatsApp");  console.log(app); 

---

# GitHub User

javascript const user = await dematrix.github("octocat");  console.log(user); 

---

# Programming Resources

javascript const data = await dematrix.programming();  console.log(data); 

---

# Base64

javascript const encoded = dematrix.base64.encode("Hello");  console.log(encoded);  const decoded = dematrix.base64.decode(encoded);  console.log(decoded); 

---

# UUID

javascript const id = dematrix.uuid();  console.log(id); 

---

# IP Lookup

javascript const info = await dematrix.iplookup("8.8.8.8");  console.log(info); 

---

# QR Code

javascript import { getqr } from "dematrix";  const qr = await getqr("https://example.com");  console.log(qr); 

---

# Format Contact Number

javascript import { formatCN } from "dematrix";  console.log(formatCN("0551234567")); 

---

# Cipher128 Encryption

javascript import { cipher128 } from "dematrix";  const encrypted = cipher128("Hello World");  console.log(encrypted); 

---

# Cipher128 Decryption

javascript import { cipher128Decode } from "dematrix";  const decrypted = cipher128Decode("EncryptedText");  console.log(decrypted); 

---

# API Methods

| Method                       | Description                   |
| ---------------------------- | ----------------------------- |
| gpt3(prompt)               | GPT-3 AI response             |
| uncensoredAi(prompt)       | Venice Uncensored AI          |
| bibleAi(prompt)            | Bible AI                      |
| getEncryptionCredentials() | Returns encryption key and IV |
| encrypt(text)              | Encrypt text                  |
| decrypt(text)              | Decrypt text                  |
| lyrics(song)               | Get song lyrics               |
| tiktokStalk(username)      | TikTok profile lookup         |
| apk(name)                  | APK information               |
| github(username)           | GitHub user lookup            |
| programming()              | Programming resources         |
| base64                     | Base64 utilities              |
| uuid()                     | Generate UUID                 |
| iplookup(ip)               | Lookup IP address             |

---

# Exported Utilities

javascript import {     formatCN,     getqr,     cipher128,     cipher128Decode } from "dematrix"; 

---

# Error Handling

Every async method should be wrapped in a try...catch block.

javascript try {     const res = await dematrix.gpt3("Hello");     console.log(res); } catch (err) {     console.error(err); } 

---

# Requirements

- Node.js 20+
- ES Modules

---

# Author

**Cyber cyphers**

Powered by the Cyphers API infrastructure.

---

# License

MIT Licens
