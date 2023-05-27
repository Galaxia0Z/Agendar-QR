const form = document.getElementById("contact-form");
const qrcodeDiv = document.getElementById("qrcode");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const formData = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    mensaje: mensaje
  };

  const jsonData = JSON.stringify(formData);

  qrcodeDiv.innerHTML = ""; // Limpiar el contenido anterior del elemento qrcodeDiv

  const qr = new QRCode(qrcodeDiv, {
    text: jsonData,
    width: 128,
    height: 128
  });
});
