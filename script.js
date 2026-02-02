function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
}

// Заполняем отзывы
const track = document.getElementById('reviews-track');
for(let i=0; i<10; i++) {
    const card = document.createElement('div');
    card.className = 'rev-card';
    card.innerHTML = <h4>Клиент ${i+1}</h4><p>Всё супер, тараканов нет!</p><span>★★★★★</span>;
    track.appendChild(card);
}
track.innerHTML += track.innerHTML; // Дублируем для анимации

function openOrderModal(service) {
    document.getElementById('orderModal').style.display = 'flex';
}

function closeOrderModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('form-step').style.display = 'block';
    document.getElementById('success-step').style.display = 'none';
}

function submitFinalOrder() {
    document.getElementById('form-step').style.display = 'none';
    document.getElementById('success-step').style.display = 'block';
}
