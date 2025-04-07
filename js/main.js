let url = new URL(window.location.href);
let length_params = url.searchParams.get("length");
let length = length_params? length_params.toString() : 500;

function createRandString(length, chars) {
  console.log(chars);
  let result = "";
  let randIndex;
  for (let i = 0; i < length; ++i) {
    randIndex = Math.floor(Math.random() * chars.length);
    result += chars[randIndex];
  }
  return result;
}


const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const text = createRandString(length, chars);
document.querySelector(".main_text").textContent = text;
