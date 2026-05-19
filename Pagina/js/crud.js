document.addEventListener('DOMContentLoaded', () => {
    const btnGet = document.getElementById('btn-simulate-get');
    const btnPost = document.getElementById('btn-simulate-post');
    const feedback = document.getElementById('crud-feedback');
    
    
    const arrowGet = document.getElementById('arrow-get');
    const arrowPost = document.getElementById('arrow-post');
    const dbRecord = document.getElementById('db-record');
    const dbName = document.getElementById('db-name');
    const dbRoom = document.getElementById('db-room');
    
    
    const formName = document.getElementById('form-name');
    const formRoom = document.getElementById('form-room');

    if (btnGet) {
        
        btnGet.addEventListener('click', () => {
            btnGet.disabled = true;
            arrowGet.classList.add('active-get');
            feedback.style.display = 'block';
            feedback.innerHTML = '<i class="fas fa-spinner fa-spin text-warning"></i> Buscando la reserva en la Base de Datos...';
            
            
            setTimeout(() => {
                
                formName.value = dbName.innerText;
                formRoom.value = dbRoom.innerText;
                
                
                formName.disabled = false;
                formRoom.disabled = false;
                
                
                btnGet.style.display = 'none';
                btnPost.style.display = 'inline-block';
                arrowGet.classList.remove('active-get');
                
                feedback.innerHTML = '<i class="fas fa-check-circle text-primary"></i> <strong>GET Exitoso.</strong> Ahora edita el nombre en el formulario y presiona Guardar.';
                feedback.style.color = '#1976d2';
            }, 1500);
        });

        
        btnPost.addEventListener('click', () => {
            btnPost.disabled = true;
            formName.disabled = true;
            formRoom.disabled = true;
            
            arrowPost.classList.add('active-post');
            feedback.innerHTML = '<i class="fas fa-spinner fa-spin text-success"></i> Enviando datos modificados al servidor...';
            feedback.style.color = '#28a745';

            setTimeout(() => {
                
                dbName.innerText = formName.value;
                dbRoom.innerText = formRoom.value;
                
                
                dbRecord.classList.add('updated');
                arrowPost.classList.remove('active-post');
                
                feedback.innerHTML = '<i class="fas fa-check-double text-success"></i> <strong>POST Exitoso.</strong> ¡La Base de Datos ha sido actualizada correctamente!';
                
                
                setTimeout(() => {
                    btnPost.style.display = 'none';
                    btnGet.style.display = 'inline-block';
                    btnGet.disabled = false;
                    btnPost.disabled = false;
                    dbRecord.classList.remove('updated');
                }, 4000);
            }, 1500);
        });
    }
});