document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.projects-section .item');
    const showMoreBtn = document.getElementById('show-more-projects');
    const ITEMS_TO_SHOW = 5;
    
    // Esconde todos os projetos após o quinto
    projectItems.forEach((item, index) => {
        if (index >= ITEMS_TO_SHOW) {
            item.style.display = 'none';
            item.classList.add('hidden-project');
        }
    });

    // Adiciona evento de click no botão
    showMoreBtn.addEventListener('click', function() {
        const hiddenProjects = document.querySelectorAll('.hidden-project');
        const isShowingMore = showMoreBtn.classList.contains('showing-more');
        
        hiddenProjects.forEach(project => {
            project.style.display = isShowingMore ? 'none' : 'block';
        });
        
        showMoreBtn.textContent = isShowingMore ? 'Ver Mais Projetos' : 'Ver Menos';
        showMoreBtn.classList.toggle('showing-more');
    });
}); 