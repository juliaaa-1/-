document.querySelector('.cvv').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '');
    
    const btn = document.getElementById('confirm-btn');
    if (this.value.length === 3) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const cvv = document.querySelector('.cvv');
    const btn = document.getElementById('confirm-btn');
    if (cvv.value.length === 3) {
        btn.classList.add('active');
    }
});