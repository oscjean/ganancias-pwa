console.log("App funcionando. Puedes agregar la lógica aquí si deseas.");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("Service Worker registrado correctamente");
  });
}
