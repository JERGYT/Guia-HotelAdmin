document.addEventListener('DOMContentLoaded', () => {
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');
    
    
    let currentStep = 1;

    
    termInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim(); 
            this.value = ''; 
            
            if (command === '') return;

            
            printToTerminal(`PM> ${command}`, '');

            
            if (currentStep === 1) {
                if (command.toLowerCase() === 'add-migration inicial') {
                    printToTerminal('Build started...', 'text-warning-term');
                    
                    
                    setTimeout(() => {
                        printToTerminal('Build succeeded.', 'text-success-term');
                        printToTerminal('To undo this action, use Remove-Migration.', 'text-warning-term');
                        currentStep = 2; 
                    }, 800);
                } else {
                    printToTerminal(`Error: El término '${command}' no se reconoce. Escribe exactamente: Add-Migration Inicial`, 'text-error-term');
                }
            } 
            
            else if (currentStep === 2) {
                if (command.toLowerCase() === 'update-database') {
                    printToTerminal('Build started...', 'text-warning-term');
                    
                    setTimeout(() => {
                        printToTerminal('Build succeeded.', 'text-success-term');
                        printToTerminal("Applying migration '20260517_Inicial'.", 'text-warning-term');
                        printToTerminal('Done. ¡Felicidades! Tu base de datos ha sido creada exitosamente.', 'text-success-term');
                        currentStep = 3; 
                        termInput.disabled = true; 
                    }, 1000);
                } else {
                    printToTerminal(`Error: Comando incorrecto. Pista: Ahora debes actualizar la base usando Update-Database`, 'text-error-term');
                }
            }
            
            
            setTimeout(() => {
                termOutput.scrollTop = termOutput.scrollHeight;
            }, 100);
        }
    });

    
    function printToTerminal(text, className) {
        const div = document.createElement('div');
        div.textContent = text;
        if (className) div.classList.add(className);
        termOutput.appendChild(div);
    }
});