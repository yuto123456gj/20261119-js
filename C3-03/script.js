const btn = document.querySelector('#flow-button-js');
btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    btn.style.backgroundPosition = `${x}% 0`;
});
btn.addEventListener('mouseleave', () => {
    btn.style.backgroundPosition = '0% 0';
});