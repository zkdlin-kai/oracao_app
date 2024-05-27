function contactForm(lawyerName) {
    document.getElementById('contactForm').style.display = 'block';
    document.getElementById('lawyer').value = lawyerName;
}

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar o código para enviar o formulário via AJAX ou outra técnica.
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('form').reset();
});
