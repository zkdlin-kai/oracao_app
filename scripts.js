function contactForm(psychologistName) {
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('psychologist').value = psychologistName;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar o código para enviar o formulário via AJAX ou outra técnica.
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('form').reset();
});
