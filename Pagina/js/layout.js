document.addEventListener('DOMContentLoaded', () => {
    const layoutBtns = document.querySelectorAll('.btn-layout');
    const renderTarget = document.getElementById('render-target');
    const browserUrl = document.querySelector('.browser-url');

    
    const vistasHTML = {
        reservas: `
            <div class="injected-view">
                <h4 style="color: #fff;"><i class="fas fa-calendar-check" style="color: var(--primary); margin-right: 8px;"></i> Panel de Reservas</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">Aquí se carga el formulario de check-in y la tabla de huéspedes.</p>
                
                <div style="background: var(--bg-base); padding: 15px; border: 1px solid var(--border-color); border-radius: 8px; margin-top:15px;">
                    <strong style="color: var(--primary);">Última reserva:</strong> <span style="color: var(--text-main);">Julián Rodríguez - Suite Ejecutiva</span>
                </div>
            </div>
        `,
        funcionarios: `
            <div class="injected-view">
                <h4 style="color: #fff;"><i class="fas fa-users" style="color: #f59e0b; margin-right: 8px;"></i> Gestión de Personal</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">Aquí se carga la lista de empleados y su rendimiento de ventas.</p>
                
                <table style="width: 100%; font-size: 0.95rem; margin-top: 15px; text-align: left; border-collapse: collapse;">
                    <tr style="background: var(--bg-base);">
                        <th style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">ID</th>
                        <th style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-muted);">Nombre</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main);">EMP-01</td>
                        <td style="padding: 10px; border-bottom: 1px solid var(--border-color); color: var(--text-main);">Carlos Vendedor</td>
                    </tr>
                </table>
            </div>
        `
    };

    layoutBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const viewToLoad = this.getAttribute('data-view');

            
            renderTarget.innerHTML = '<div class="render-target-empty"><span style="color: var(--primary);"><i class="fas fa-spinner fa-spin"></i> Cargando vista desde el servidor...</span></div>';

            setTimeout(() => {
                if (viewToLoad === 'limpiar') {
                    renderTarget.innerHTML = '<div class="render-target-empty"><span class="pulse-text" style="color: var(--text-muted);">Esperando inyección de Vista...</span></div>';
                    browserUrl.textContent = 'localhost:5000/HotelAdmin';
                    renderTarget.className = 'render-target-empty';
                } else {
                    
                    renderTarget.innerHTML = vistasHTML[viewToLoad];
                    renderTarget.className = ''; 
                    
                    
                    browserUrl.textContent = `localhost:5000/HotelAdmin/${viewToLoad.charAt(0).toUpperCase() + viewToLoad.slice(1)}`;
                }
            }, 600); 
        });
    });
});