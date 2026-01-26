try {
  console.log(window.dataLayer);
} catch {}
try {
  console.log(this);
} catch {}
try {
  console.log(self);
} catch {}
try {
  console.log(dataLayer);
} catch {}
try {
  let d = document.createElement("div");
  d.textContent = JSON.stringify(window.dataLayer);
  document.body.appendChild(d);
} catch {}
