import tailwind from '/src/index.css'

let StyleSheet = new CSSStyleSheet();
await StyleSheet.replace("@import url('/src/index.css')");

console.log(StyleSheet)