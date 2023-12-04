 // declaração dos logins
 const login_admin = 'admin';
 const senha_admin = 'admin';
 const login_conta1 = 'conta1';
 const senha_conta1 = 'conta1';
 
 
 
 
 function login() {
    //pega o id do div e transforma em uma variável
    var login = document.getElementById("login");
    var estado_atual = window.getComputedStyle(login).display;

    // Verificar o estado atual do div
    if (estado_atual === "none") {
        login.style.display = "block";
    } else {
        login.style.display = "none";
    }
}
// compara o valor do formulário com a senha definida para acessar a respectiva página
function acessar(){
    var x = document.getElementById('usuario').value;
    var y = document.getElementById('senha').value;
        if (x === login_admin && y === senha_admin) {
            window.location.href = 'administrador.html';
        } 
        else if (x === login_conta1 && y === senha_conta1) {
            window.location.href = 'conta1.html';
        } 
        else {
            alert('Credenciais incorretas. Tente novamente.');
        }

}
// mesma coisa que a função login, porém tbm dispara função acessar()
function acessar2(){
 //pega o id do div e transforma em uma variável
 var login = document.getElementById("login");
 var estado_atual = window.getComputedStyle(login).display;

 // Verificar o estado atual do div
 if (estado_atual === "none") {
     login.style.display = "block";
 } else {
     login.style.display = "none";
 }
 acessar();
}


