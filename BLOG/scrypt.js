document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.getElementById('navList');

    // Funcionalidad de menú hamburguesa (Responsive)
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar el menú
            navList.classList.toggle('active');
            
            // Mejora de accesibilidad (aria-expanded)
            const isExpanded = navList.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.textContent = isExpanded ? '✕' : '☰'; // Cambia el icono al abrir/cerrar
        });

        // Cierra el menú si se hace clic en un enlace (útil en móvil)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            });
        });
    }

    // Pequeño script para el formulario de suscripción (Feedback visual)
    const subscriptionForm = document.querySelector('.subscription-box form');
    if (subscriptionForm) {
        subscriptionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por suscribirte al SysAdmin Nexus! Tu email ha sido enviado al servicio de email marketing ficticio.');
            subscriptionForm.reset();
        });
    }
});