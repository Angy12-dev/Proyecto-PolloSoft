function abrirPanel() {
  document.getElementById('panel').classList.add('activo');
  document.getElementById('overlay').classList.add('activo');
}

function cerrarPanel() {
  document.getElementById('panel').classList.remove('activo');
  document.getElementById('overlay').classList.remove('activo');
}

function guardar() {
  const tipo  = document.getElementById('tipo').value;
  const monto = document.getElementById('monto').value;
  const fecha = document.getElementById('fecha').value;

  if (!tipo || !monto || !fecha) {
    alert('Por favor completa los campos requeridos.');
    return;
  }

  document.getElementById('mensajeOk').classList.add('visible');
  setTimeout(cerrarPanel, 1800);
}