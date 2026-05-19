
function showSection(sectionId) {
    
    document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    
    document.getElementById(sectionId).classList.add('active');
    
    
    event.currentTarget.classList.add('active');
}