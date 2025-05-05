const form = document.getElementById('formAsistente');
const tabla = document.getElementById('tablaAsistentes');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${nombre}</td>
    <td>${email}</td>
  `;

  tabla.appendChild(fila);

  form.reset();
});
