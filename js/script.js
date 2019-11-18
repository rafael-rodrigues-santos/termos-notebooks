//ALTERA APARENCIA DOS INPUTS AO PREENCHER
$(function() {
    $('.inputs, .inputs2').blur(function () {
        if ($(this).val() != ''){
            $(this).css('border-color', 'green')
            $(this).css('color', 'green')
            $(this).css('box-shadow', 'green 1px 1px 3px')
            /*$(this).css("background-color", "#90ee90");*/
        }
    });
});

//ALTERA A CLASSE DOS INPUTS
function mudar(){
    $('.inputs').attr('class', 'obrigatorio');
};


//REMOVER PROPAGANDA DO SITE 000WEBHOST AO TENTAR IMPRIMIR
function removerPropaganda(){
    $("body > div:nth-child(5)").remove();    
};


//ALTERA APARENCIA DOS INPUTS AO TENTAR ENVIAR SEM OS CAMPOS OBRIGATORIOS ESTAREM PREENCHIDOS
$(function() {
    $('#btn-criartermo').click(function () {
        if($('.inputs').val() == '' || $('#instituicao').val() == 'Escolha' || $('#note_modelo').val() == 'Selecione um modelo' || $('#aprovador').val() == 'Escolha' ){
            mudar(); 
            alert('Preencha os campos obrigatórios');
            $('#termo').css('display', 'none');
            $('#btn-imprimir').css('display', 'none');
        }
            else {
            $('#termobranco').css('display', 'none');
            return false;
        }  
    });
});

//PREENCHE O INPUT 'NOTE_FABRICANTE' COM A INFORMAÇÃO DE ACORDO COM A ESCOLHA DO SELECT 'NOTE_MODELO'
$(function() {
    $('#note_modelo').blur(function () {
        if ($(this).val() == "EliteBook 820 G1" || $(this).val() == "EliteBook 830 G5" || $(this).val() == "EliteBook 840 G1" || $(this).val() == "EliteBook 840 G3" || $(this).val() == "ENVY Pro" || $(this).val() == "Pavilion" || $(this).val() == "ProBook 440 G2" || $(this).val() == "ProBook 440 G3" || $(this).val() == "ProBook 440 G5" || $(this).val() == "ProBook 640 G1" || $(this).val() == "ProBook 640 G1" || $(this).val() == "ProBook 640 G2" || $(this).val() == "ProBook 640 G4" || $(this).val() == "ProBook 650 G3") {
            $("#note_fabricante").val("HP")
            $("#note_fabricante").css("border-color", "green");
            $("#note_fabricante").css('box-shadow', 'green 1px 1px 3px')
            $("#note_fabricante").css('color', 'green')
        } else if ($(this).val() == "Inspiron 3442" || $(this).val() == "Inspiron 3443" || $(this).val() == "Inspiron 5448" || $(this).val() == "Inspiron 5457" || $(this).val() == "Latitude 3470" || $(this).val() == "Latitude E4310" || $(this).val() == "Latitude E5420" || $(this).val() == "Latitude E6330" || $(this).val() == "Latitude 3440") {
            $("#note_fabricante").val("DELL")
            $("#note_fabricante").css("border-color", "green");
            $("#note_fabricante").css("color", "green");
        } else if ($("#note_modelo").val() == "Selecione um modelo") {
            $("#note_fabricante").val("")
            $("#note_fabricante").css("border-color", "#232323");
        }
    });
});


//CAPTURA AS INFORMAÇÕES PREENCHIDAS NO FORMULÁRIO E PREENCHE O DOCUMENTO TERMO
function capturar() {   
    
    instituicao = $("#instituicao").val();
    document.getElementById('instituicao2').innerHTML = instituicao;

    note_modelo = document.getElementById('note_modelo').value;
    document.getElementById('note_modelo2').innerHTML = note_modelo;

    note_patrimonio = document.getElementById('note_patrimonio').value;
    document.getElementById('note_patrimonio2').innerHTML = note_patrimonio;

    note_ns = document.getElementById('note_ns').value;
    document.getElementById('note_ns2').innerHTML = note_ns;

    note_fabricante = document.getElementById('note_fabricante').value;
    document.getElementById('note_fabricante2').innerHTML = note_fabricante;

    note_patrimonio = document.getElementById('note_patrimonio').value;
    document.getElementById('note_patrimonio').innerHTML = note_patrimonio;

    colaborador_nome = document.getElementById('colaborador_nome').value;
    document.getElementById('colaborador_nome2').innerHTML = colaborador_nome;

    colaborador_departamento = document.getElementById('colaborador_departamento').value;
    document.getElementById('colaborador_departamento2').innerHTML = colaborador_departamento;

    colaborador_campus = document.getElementById('colaborador_campus').value;
    document.getElementById('colaborador_campus2').innerHTML = colaborador_campus;

    colaborador_centrocusto = document.getElementById('colaborador_centrocusto').value;
    document.getElementById('colaborador_centrocusto2').innerHTML = colaborador_centrocusto;

    if (colaborador_centrocusto == '') {
        document.getElementById('colaborador_centrocusto2').innerHTML = '******';
    }

    colaborador_cpf = document.getElementById ('colaborador_cpf').value;
    document.getElementById('colaborador_cpf2').innerHTML = colaborador_cpf;

    colaborador_rg = document.getElementById('colaborador_rg').value;
    document.getElementById('colaborador_rg2').innerHTML = colaborador_rg;

    colaborador_registro = document.getElementById('colaborador_registro').value;
    document.getElementById('colaborador_registro2').innerHTML = colaborador_registro;

    if (colaborador_registro == '') {
        document.getElementById('colaborador_registro2').innerHTML = '******';
    }

    colaborador_funcao = document.getElementById('colaborador_funcao').value;
    document.getElementById('colaborador_funcao2').innerHTML = colaborador_funcao;
    

    aprovador = $("#aprovador").val();
    document.getElementById('aprovador2').innerHTML = aprovador;

    data_aprovacao = document.getElementById('data_aprovacao').value;
    document.getElementById('data2').innerHTML = data_aprovacao;

    chamado = document.getElementById('chamado').value;
    document.getElementById('chamado2').innerHTML = chamado;

    
    $('#termo').css('display', 'block');
    $('#btn-imprimir').css('display', 'block');
   
}

//CAPTURA AS INFORMAÇÕES PREENCHIDAS NO FORMULÁRIO E PREENCHE O DOCUMENTO TERMO DE EMMPRESTIMO
function capturarEmprestimo() {   
    
    instituicao = $("#instituicao").val();
    document.getElementById('instituicao2').innerHTML = instituicao;

    note_modelo = document.getElementById('note_modelo').value;
    document.getElementById('note_modelo2').innerHTML = note_modelo;

    note_patrimonio = document.getElementById('note_patrimonio').value;
    document.getElementById('note_patrimonio2').innerHTML = note_patrimonio;

    note_ns = document.getElementById('note_ns').value;
    document.getElementById('note_ns2').innerHTML = note_ns;

    note_fabricante = document.getElementById('note_fabricante').value;
    document.getElementById('note_fabricante2').innerHTML = note_fabricante;

    note_patrimonio = document.getElementById('note_patrimonio').value;
    document.getElementById('note_patrimonio').innerHTML = note_patrimonio;

    colaborador_nome = document.getElementById('colaborador_nome').value;
    document.getElementById('colaborador_nome2').innerHTML = colaborador_nome;

    colaborador_departamento = document.getElementById('colaborador_departamento').value;
    document.getElementById('colaborador_departamento2').innerHTML = colaborador_departamento;

    colaborador_campus = document.getElementById('colaborador_campus').value;
    document.getElementById('colaborador_campus2').innerHTML = colaborador_campus;

    colaborador_centrocusto = document.getElementById('colaborador_centrocusto').value;
    document.getElementById('colaborador_centrocusto2').innerHTML = colaborador_centrocusto;

    if (colaborador_centrocusto == '') {
        document.getElementById('colaborador_centrocusto2').innerHTML = '******';
    }

    colaborador_cpf = document.getElementById ('colaborador_cpf').value;
    document.getElementById('colaborador_cpf2').innerHTML = colaborador_cpf;

    colaborador_rg = document.getElementById('colaborador_rg').value;
    document.getElementById('colaborador_rg2').innerHTML = colaborador_rg;

    colaborador_registro = document.getElementById('colaborador_registro').value;
    document.getElementById('colaborador_registro2').innerHTML = colaborador_registro;

    if (colaborador_registro == '') {
        document.getElementById('colaborador_registro2').innerHTML = '******';
    }

    colaborador_funcao = document.getElementById('colaborador_funcao').value;
    document.getElementById('colaborador_funcao2').innerHTML = colaborador_funcao;
    
    inicial_emprestimo = document.getElementById('data_emprestimo_inicial').value;
    document.getElementById('data_emprestimo_inicial2').innerHTML = inicial_emprestimo;
    
    final_emprestimo = document.getElementById('data_emprestimo_final').value;
    document.getElementById('data_emprestimo_final2').innerHTML = final_emprestimo;

    data_aprovacao = document.getElementById('data_aprovacao').value;
    document.getElementById('data2').innerHTML = data_aprovacao;

    chamado = document.getElementById('chamado').value;
    document.getElementById('chamado2').innerHTML = chamado;

    
    $('#termo').css('display', 'block');
    $('#btn-imprimir').css('display', 'block');
   
}

//IMPRIME DOCUMENTO EM BRANCO
function capturarBranco() {
    $('#btn-imprimir').css('display', 'none');
    $('#termobranco').css('display', 'block');
    $('#termo').css('display', 'none');
    window.print();
    $('#termobranco').css('display', 'none');
}