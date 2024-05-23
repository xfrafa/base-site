/* script.js */
document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.querySelector('.snow-container');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Estilos iniciais aleatórios
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2 a 5 segundos
        snowflake.style.width = snowflake.style.height = `${Math.random() * 1 + 2}px`; // 10 a 20px

        snowContainer.appendChild(snowflake);

        // Remova o floco de neve após a animação
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    }

    // Crie bolinhas de neve a cada 100ms
    setInterval(createSnowflake, 100);
});
