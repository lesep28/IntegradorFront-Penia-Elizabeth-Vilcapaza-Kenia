const form = document.getElementById("agregarForm");
const apiURL = "https://integradorback-penia-elizabeth-vilcapaza.onrender.com";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const apellido = document.getElementById("apellido").value;
  const nombre = document.getElementById("nombre").value;
  const nroMatricula = document.getElementById("nroMatricula").value;


  // llamando al endpoint de agregar
  const datosFormularioB = {
    nombre,
    apellido,
    nroMatricula
    }

  fetch(`${apiURL}/odontologo/guardar`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosFormularioB),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Odontologo agregado con éxito");
      form.reset(); // Resetear el formulario
    })
    .catch((error) => {
      console.error("Error agregando odontologo:", error);
    });
});
