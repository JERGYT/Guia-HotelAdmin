document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    let draggedElement = null;

    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggedElement = draggable;
            
            e.dataTransfer.setData('text/plain', draggable.getAttribute('data-id'));
            setTimeout(() => draggable.style.opacity = '0.5', 0);
        });
        
        draggable.addEventListener('dragend', () => {
            draggedElement.style.opacity = '1';
            draggedElement = null;
        });
    });

    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); 
            if (!zone.classList.contains('correct')) zone.classList.add('over');
        });

        zone.addEventListener('dragleave', () => zone.classList.remove('over'));

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');
            
            if (zone.classList.contains('correct')) return;

            const draggedId = e.dataTransfer.getData('text/plain');
            const targetId = zone.getAttribute('data-target');

            
            if (draggedId === targetId) {
                zone.classList.add('correct');
                zone.classList.remove('incorrect');
                zone.innerHTML = `<i class="fas fa-check-circle"></i> ¡Correcto! - ${draggedElement.innerText}`;
                draggedElement.style.display = 'none'; 
            } else {
                zone.classList.add('incorrect');
                setTimeout(() => zone.classList.remove('incorrect'), 800); 
            }
        });
    });
});