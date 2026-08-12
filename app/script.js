document.addEventListener('DOMContentLoaded', () => {
    const transferBtn = document.getElementById('transferBtn');
    
    if (transferBtn) {
        transferBtn.addEventListener('click', () => {
            const inputs = document.querySelectorAll('.neo-input');
            const name = inputs[0].value;
            const amount = inputs[1].value;
            
            if (name && amount) {
                const originalText = transferBtn.innerText;
                transferBtn.innerText = 'Gönderiliyor...';
                transferBtn.style.opacity = '0.7';
                
                setTimeout(() => {
                    transferBtn.innerText = 'Başarılı! ✓';
                    transferBtn.style.background = '#10b981'; // Green color
                    
                    setTimeout(() => {
                        transferBtn.innerText = originalText;
                        transferBtn.style.background = 'var(--primary-gradient)';
                        transferBtn.style.opacity = '1';
                        inputs[0].value = '';
                        inputs[1].value = '';
                    }, 2000);
                }, 1000);
            } else {
                alert('Lütfen tüm alanları doldurun!');
            }
        });
    }
});
