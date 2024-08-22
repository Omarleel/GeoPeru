const data = 'https://raw.githubusercontent.com/Omarleel/GeoPeru/main/GeoPeru.json';
document.addEventListener("DOMContentLoaded", function() {
    // Cargar datos del archivo GeoPeru.json
    fetch(data)
        .then(response => response.json())
        .then(geoData => {
            const departamentosSelect = document.getElementById('departamentos');
            const provinciasSelect = document.getElementById('provincias');
            const distritosSelect = document.getElementById('distritos');
            const ubigeoInput = document.getElementById('ubigeo');

            departamentosSelect.innerHTML = '<option value="" selected disabled>Seleccione un departamento</option>';
            // Población del select de departamentos
            geoData.forEach(departamento => {
                const option = document.createElement('option');
                option.value = departamento.departamento;
                option.textContent = departamento.departamento;
                departamentosSelect.appendChild(option);
            });

            // Evento cuando se selecciona un departamento
            departamentosSelect.addEventListener('change', function() {
                provinciasSelect.innerHTML = '<option value="" selected disabled>Seleccione una provincia</option>';
                distritosSelect.innerHTML = '<option value="" selected disabled>Seleccione un distrito</option>';

                const selectedDepartamento = geoData.find(dep => dep.departamento === this.value);

                if (selectedDepartamento) {
                    // Población del select de provincias basado en el departamento seleccionado
                    selectedDepartamento.provincias.forEach(provincia => {
                        const option = document.createElement('option');
                        option.value = provincia.provincia;
                        option.textContent = provincia.provincia;
                        provinciasSelect.appendChild(option);
                    });
                }
            });

            // Evento cuando se selecciona una provincia
            provinciasSelect.addEventListener('change', function() {
                distritosSelect.innerHTML = '<option value="">Seleccione un distrito</option>';

                const selectedDepartamento = geoData.find(dep => dep.departamento === departamentosSelect.value);
                const selectedProvincia = selectedDepartamento.provincias.find(prov => prov.provincia === this.value);

                if (selectedProvincia) {
                    // Población del select de distritos basado en la provincia seleccionada
                    selectedProvincia.distritos.forEach(distrito => {
                        const option = document.createElement('option');
                        option.value = distrito.distrito;
                        option.textContent = distrito.distrito;
                        distritosSelect.appendChild(option);
                    });
                }
            });
            distritosSelect.addEventListener('change', function() {
                const selectedDepartamento = geoData.find(dep => dep.departamento === departamentosSelect.value);
                const selectedProvincia = selectedDepartamento.provincias.find(prov => prov.provincia === provinciasSelect.value);
                const selectedDistrito = selectedProvincia.distritos.find(dist => dist.distrito === this.value);
            
                if (selectedDistrito) {
                    ubigeoInput.value = selectedDistrito.ubigeo;
                }
            });
            
        })
        .catch(error => console.error('Error al cargar los datos:', error));
});
