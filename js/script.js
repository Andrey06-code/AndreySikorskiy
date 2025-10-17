const info = document.getElementById('info');
const body = document.getElementById('bodyid');
const isHidden = 'false'; // исправлено на info



function updateBodyPadding() {
    const body = document.body;
    const screenWidth = window.innerWidth;
    if (isHidden === 'true') {
    info.style.visibility = 'hidden';
    
    } else {
    info.style.visibility = 'visibility';
    if (screenWidth <= 480) {
        body.style.paddingTop = '150px';
    } else {
        body.style.paddingTop = '130px'; // Сброс к исходному значению
    }
}
}

// Запускаем при загрузке и при изменении размера окна
document.addEventListener('DOMContentLoaded', updateBodyPadding);
window.addEventListener('resize', updateBodyPadding);