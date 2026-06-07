/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Lendas do Basquete - Jogadores Lendários da NBA
Aluno: Francisco Santana Almeida - RA: 252259
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// ===== BOTÃO VOLTAR AO TOPO =====
const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== FILTRO DA GALERIA =====
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const cards = document.querySelectorAll('.card-item');

if (botoesFiltro.length > 0 && cards.length > 0) {
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
  
            botoesFiltro.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filtro = this.getAttribute('data-filtro');
            
            cards.forEach(card => {
                if (filtro === 'todos') {
                    card.style.display = 'block';
                } else {
                    const categoria = card.getAttribute('data-categoria');
                    if (categoria === filtro) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
}

// ===== VALIDAÇÃO DO FORMULÁRIO DE CONTATO =====
const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.querySelector('#nome');
        const email = document.querySelector('#email');
        const assunto = document.querySelector('#assunto');
        const mensagem = document.querySelector('#mensagem');
        
        let erros = [];
        
        if (!nome.value.trim()) {
            erros.push('Preencha o campo Nome.');
            nome.classList.add('is-invalid');
        } else {
            nome.classList.remove('is-invalid');
        }
        
        if (!email.value.trim()) {
            erros.push('Preencha o campo E-mail.');
            email.classList.add('is-invalid');
        } else if (!email.value.includes('@') || !email.value.includes('.')) {
            erros.push('Digite um e-mail válido.');
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }
        
        if (!assunto.value) {
            erros.push('Selecione um assunto.');
            assunto.classList.add('is-invalid');
        } else {
            assunto.classList.remove('is-invalid');
        }
        
        if (!mensagem.value.trim()) {
            erros.push('Preencha o campo Mensagem.');
            mensagem.classList.add('is-invalid');
        } else {
            mensagem.classList.remove('is-invalid');
        }
        
        if (erros.length > 0) {
            alert('❌ ' + erros.join('\n'));
        } else {
            alert('✅ Mensagem enviada com sucesso, ' + nome.value + '!');
            formulario.reset();
        }
    });
}