// ==UserScript==
// @name 0
// @match *
// @run-at document-start
// ==/UserScript==
var style = document.createElement('style')
style.textContent = `
body{color:#FFF!important;background:#000!important}
a{color:#AFF!important}a:visited{color:#FAF!important}
`
document.head.appendChild(style)