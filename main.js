//Importa bibliotecas, módulos e estilos//

import { TreeBuilder_pemob } from './assets/js/arvore.js';
import { TreeBuilder_catalog } from './assets/js/TreeBuilder_catalog.js';
import { TreeBuilder } from './assets/js/TreeBuilder.js';
import { AddDataBar } from './assets/js/AddDataBar.js';
import $ from 'jquery';
window.$ = $;
window.jQuery = $;
import noUiSlider from 'nouislider';
import L from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet-control-geocoder';
import 'jstree';
import 'jstree/src/jstree.checkbox.js';
import 'jstree/src/jstree.search.js';
import 'jstree/src/jstree.types.js';
import Plotly from 'plotly.js-dist';
import SimpleScrollbar from 'simple-scrollbar';
import select2 from 'select2';
select2();
import { Grid } from 'gridjs';
import 'simple-scrollbar/simple-scrollbar.css';
import 'jstree/src/themes/default/style.css';
import 'gridjs/dist/theme/mermaid.min.css';
import 'select2/dist/css/select2.min.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet/dist/leaflet.css';
import 'nouislider/dist/nouislider.css';
import './style_geop.css'
import './style.css';
import { variaveis } from './assets/dados/PEMOB.js';

// Captura o elemento com id 'app'
const app = document.getElementById("app");

// Criar os divs de separação das ferramentas
const menu = document.createElement("div");
menu.id = "menu";
app.appendChild(menu);
const pemob = document.createElement('div');
pemob.id = 'pemob';
pemob.style.opacity = '100%';
pemob.style.zIndex = '1';
app.appendChild(pemob);
const geop = document.createElement('div');
geop.id = 'geop';
geop.style.opacity = '0%';
geop.style.zIndex = '-1000';
app.appendChild(geop);
const catalog = document.createElement('div');
catalog.id = 'catalog';
catalog.style.opacity = '0%';
catalog.style.zIndex = '-1000';
app.appendChild(catalog);
const menu_pemob = document.createElement("div");
menu_pemob.id = "menu_pemob";
pemob.appendChild(menu_pemob);
const menu_geop = document.createElement("div");
menu_geop.id = "menu_geop";
geop.appendChild(menu_geop);
const menu_catalog = document.createElement("div");
menu_catalog.id = "menu_catalog";
catalog.appendChild(menu_catalog);
const tool1 = document.createElement("div");
tool1.id = "tool_graph";
tool1.classList.add("tool");
tool1.style.zIndex = '-1000';
pemob.appendChild(tool1);
const tool2 = document.createElement("div");
tool2.id = "tool_table";
tool2.classList.add("tool");
pemob.appendChild(tool2);
const tool3 = document.createElement("div");
tool3.id = "tool_about";
tool3.classList.add("tool");
tool3.style.zIndex = '-1000';
pemob.appendChild(tool3);
const texto_about = document.createElement("div");
texto_about.id = "texto_about"
texto_about.innerHTML = `
  <p><strong>O que é a Pemob?</strong></p>
  <p>A Pesquisa Nacional de Mobilidade Urbana (PEMOB) apresenta um panorama da mobilidade urbana nas principais cidades do Brasil. A PEMOB é realizada anualmente, desde 2018, pelo Ministério das Cidades e inclui todas os municípios com mais de 250 mil habitantes. Os dados são apresentados em nível de cidade e, desde 2019, também em nível de região metropolitana.</p>
  <p>A pesquisa tem objetivo de padronizar a coleta de dados de mobilidade entre os municípios brasileiros, visando estruturar o Sistema Nacional de Informações em Mobilidade Urbana (SIMU). Ela fornece informações relevantes para aprimorar a qualidade do sistema de transporte nas cidades, auxiliando governos a desenhar políticas públicas mais eficientes.</p>
  <p>A amostra total da PEMOB engloba 116 municípios, incluindo todas as capitais, que representam cerca de 42% da população brasileira. Em sua versão mais recente, entretano, a PEMOB 2024 conseguiu reunir informações de apenas 70 dos 116 municípios (60%) e de 29 das principais regiões metropolitanas do país.</p>
  <p>A pesquisa reúne dados sobre o desempenho operacional do transporte coletivo, indicadores de qualidade dos serviços, instrumentos de gestão utilizados, preços de tarifas e reajustes, entre outros. As informações da pesquisa são declaratórias e de responsabilidade das prefeituras e dos órgãos competentes. O grau de completude das respostas varia significativamente entre as cidades.</p>
  <p>O Dashboard da PEMOB foi criado para facilitar o acesso e dar mais visibilidade a este importante conjunto de dados, permitindo a fácil comparação da disponibilidade de informações em cada cidade.</p>
  <p>Os dados brutos originais podem ser acessados também através do site do <a href="https://simu.cidades.gov.br/pesquisa-nacional-de-mobilidade-urbana/" target="_blank">Sistema Nacional Informações em Mobilidade Urbana (Simu)</a>.</p>
`;
tool3.appendChild(texto_about);

// Criar divs para os botões das ferramentas
const botao_fundo = document.createElement("div");
botao_fundo.id = "botao_fundo";
menu_pemob.appendChild(botao_fundo);
const graphs = document.createElement("div");
graphs.id = "botao_graphs";
graphs.classList.add("botao_menu");
graphs.innerText = "Gráficos";
botao_fundo.appendChild(graphs);
const tables = document.createElement("div");
tables.id = "botao_tables";
tables.classList.add("botao_menu");
tables.classList.add("clicked");
tables.innerText = "Tabela";
botao_fundo.appendChild(tables);
const about = document.createElement("div");
about.id = "botao_sobre";
about.classList.add("botao_menu");
about.innerText = "Sobre";
botao_fundo.appendChild(about);

function toggleButtons(clickedButton) {
    if (clickedButton.classList.contains("clicked")) return;
    graphs.classList.remove("clicked");
    tables.classList.remove("clicked");
    about.classList.remove("clicked");
    clickedButton.classList.add("clicked");
    if (clickedButton === graphs) {
        tool1.style.opacity = "100%";
        tool1.style.zIndex = "1";
        tool2.style.opacity = "0%";
        tool2.style.zIndex = "-1000";
        tool3.style.opacity = "0%";
        tool3.style.zIndex = "-1000";
    } else if (clickedButton === tables) {
        tool2.style.opacity = "100%";
        tool2.style.zIndex = "1";
        tool1.style.opacity = "0%";
        tool1.style.zIndex = "-1000";
        tool3.style.opacity = "0%";
        tool3.style.zIndex = "-1000";
    } else {
        tool3.style.opacity = "100%";
        tool3.style.zIndex = "1";
        tool2.style.opacity = "0%";
        tool2.style.zIndex = "-1000";
        tool1.style.opacity = "0%";
        tool1.style.zIndex = "-1000";
    }
}

graphs.addEventListener('click', () => toggleButtons(graphs));
tables.addEventListener('click', () => toggleButtons(tables));
about.addEventListener('click', () => toggleButtons(about));

let logo_insper = document.createElement("div");
logo_insper.id = "logo_insper";
menu.appendChild(logo_insper);
let menu_itens = document.createElement("div");
menu_itens.id = "menu_itens";
menu.appendChild(menu_itens);
const itens = ['GeoPortal', 'Catálogo de Dados', 'PEMOB'];
const ul = document.createElement('ul');
ul.classList.add('horizontal-list');
itens.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  if(item == 'PEMOB') {
    li.classList.add('clicked');
  }
  li.addEventListener('click', () => {
    document.querySelectorAll('.horizontal-list li').forEach(el => el.classList.remove('clicked'));
    li.classList.add('clicked');
    if(item == 'GeoPortal') {
        geop.style.opacity = '100%';
        geop.style.zIndex = '1';
        catalog.style.opacity = '0%';
        catalog.style.zIndex = '-1000';
        pemob.style.opacity = '0%';
        pemob.style.zIndex = '-1000';
    } else if (item == 'Catálogo de Dados') {
        geop.style.opacity = '0%';
        geop.style.zIndex = '-1000';
        catalog.style.opacity = '100%';
        catalog.style.zIndex = '1';
        pemob.style.opacity = '0%';
        pemob.style.zIndex = '-1000';
    } else {
        geop.style.opacity = '0%';
        geop.style.zIndex = '-1000';
        catalog.style.opacity = '0%';
        catalog.style.zIndex = '-1000';
        pemob.style.opacity = '100%';
        pemob.style.zIndex = '1';
    }
  });
  ul.appendChild(li);
});
document.getElementById('menu_itens').appendChild(ul);

// Criação das divs
const tool_catalog = document.createElement('div');
tool_catalog.classList.add('tool');
catalog.appendChild(tool_catalog);
const titulos_catalog = document.createElement("div");
titulos_catalog.id = "titulos_catalog";
tool_catalog.appendChild(titulos_catalog);
const titulo_catalog = document.createElement("div");
titulo_catalog.id = "titulo_catalog";
titulo_catalog.innerText = "Catálogo de Dados";
titulos_catalog.appendChild(titulo_catalog);
const subtitulo_catalog = document.createElement("div");
subtitulo_catalog.id = "subtitulo_catalog";
subtitulo_catalog.innerText = "Selecione uma base de dados";
titulos_catalog.appendChild(subtitulo_catalog);
const arvore_catalog = document.createElement("div");
arvore_catalog.id = 'arvore_catalog';
tool_catalog.appendChild(arvore_catalog);
const sheet_catalog = document.createElement("div");
sheet_catalog.id = 'sheet_catalog';
tool_catalog.appendChild(sheet_catalog);
const metadado_catalog = document.createElement('div');
metadado_catalog.id = 'metadado_catalog';
tool_catalog.appendChild(metadado_catalog);
const tree_catalog = document.createElement("div");
tree_catalog.id = 'Tree_catalog';
arvore_catalog.appendChild(tree_catalog);
const titulos = document.createElement("div");
titulos.id = "titulos";
tool2.appendChild(titulos);
const titulo = document.createElement("div");
titulo.id = "titulo";
titulo.innerText = "Pesquisa Nacional de Mobilidade Urbana";
titulos.appendChild(titulo);
const subtitulo = document.createElement("div");
subtitulo.id = "subtitulo";
subtitulo.innerText = "Selecione uma das variáveis";
titulos.appendChild(subtitulo);
const arvore = document.createElement("div");
arvore.id = 'arvore';
tool2.appendChild(arvore);
const sheet = document.createElement("div");
sheet.id = 'sheet';
tool2.appendChild(sheet);
const tree = document.createElement("div");
tree.id = 'Tree_pemob';
arvore.appendChild(tree);
const graph = document.createElement("div");
graph.id = 'graph';
tool1.appendChild(graph);
const radar = document.createElement("div");
radar.id = 'radar';
graph.appendChild(radar);
const distribution = document.createElement("div");
distribution.id = 'distribution';
distribution.style.opacity = "0%";
distribution.style.zIndex = "-1";
graph.appendChild(distribution);
const botao_graph_radar = document.createElement("div");
botao_graph_radar.id = "botao_radar";
botao_graph_radar.classList.add("botao_grafico", "clicked");
botao_graph_radar.innerText = "Radar";
graph.appendChild(botao_graph_radar);
const botao_graph_distribution = document.createElement("div");
botao_graph_distribution.id = "botao_distribution";
botao_graph_distribution.classList.add("botao_grafico");
botao_graph_distribution.innerText = "Distribuição";
graph.appendChild(botao_graph_distribution);
function toggleButtonsGraphs() {
    botao_graph_radar.classList.toggle("clicked");
    botao_graph_distribution.classList.toggle("clicked");
    if (botao_graph_radar.classList.contains("clicked")) {
        radar.style.opacity = "100%";
        radar.style.zIndex = "0";
        distribution.style.opacity = "0%";
        distribution.style.zIndex = "-1";
    } else {
        distribution.style.opacity = "100%";
        distribution.style.zIndex = "0";
        radar.style.opacity = "0%";
        radar.style.zIndex = "-1";
    }
}
botao_graph_distribution.addEventListener("click", toggleButtonsGraphs);
botao_graph_radar.addEventListener("click", toggleButtonsGraphs);
//const slider = document.createElement("input");
//slider.id = 'slider'
//slider.type = "range";
//slider.min = "2018";
//slider.max = "2024";
//slider.value = "2024";
//slider.step = "1";
//slider.style.width = "300px";
//const output = document.createElement("span");
//output.innerText = slider.value;
//output.id = "output";
//tool1.appendChild(slider);
//tool1.appendChild(output);
//slider.addEventListener("input", function () {
//    output.innerText = slider.value;
//});

const cidades_pemob = [
    "Anápolis", "Aparecida de Goiânia", "Aracaju", "Barueri", "Belo Horizonte", "Blumenau", "Boa Vista", "Brasília", "Camaçari", "Campina Grande",
    "Campinas", "Campo Grande", "Campos dos Goytacazes", "Carapicuíba", "Cariacica", "Caruaru", "Caucaia", "Chapecó", "Cotia", "Cuiabá",
    "Curitiba", "Feira de Santana", "Florianópolis", "Foz do Iguaçu", "Franca", "Goiânia", "Gravataí", "Itajaí", "Itaquaquecetuba", "Jaboatão dos Guararapes",
    "Jundiaí", "Limeira", "Londrina", "Maceió", "Manaus", "Maringá", "Mauá", "Nova Iguaçu", "Osasco", "Parnamirim",
    "Petrolina", "Petrópolis", "Ponta Grossa", "Porto Alegre", "Praia Grande", "Recife", "Ribeirão das Neves", "Rio Branco", "Rio de Janeiro", "Salvador",
    "Santa Maria", "Santarém", "Santo André", "Santos", "São Bernardo do Campo", "São Gonçalo", "São João de Meriti", "São José", "São José do Rio Preto", "São José dos Campos",
    "São José dos Pinhais", "São Paulo", "São Vicente", "Serra", "Sorocaba", "Taubaté", "Teresina", "Uberaba", "Vila Velha", "Vitória da Conquista"
];
const transporteDados = [
    "Total de Pontos de Embarque",
    "Total de Pontos de Embarque com Abrigo",
    "Total de Pontos de Embarque com Acessibilidade",
    "Frota de Ônibus Convencional",
    "Capacidade Média da Frota de Ônibus Convencional",
    "Frota de Ônibus Convencional com Piso Baixo",
    "Frota de Ônibus Convencional com Plataforma Elevatória",
    "Frota de Ônibus Articulado",
    "Capacidade Média da Frota de Ônibus Articulado",
    "Frota de Ônibus Articulado com Piso Baixo",
    "Frota de Ônibus Articulado com Plataforma Elevatória",
    "Capacidade Média da Frota de Ônibus Biarticulado",
    "Frota de Vans/Microônibus",
    "Capacidade Média da Frota de Vans/Microônibus",
    "Frota de Táxis",
    "Frota de Mototáxis",
    "Frota de Bicicletas Compartilhadas",
    "Frota de Veículos Fretados para Passageiros",
    "Frota de Veículos Escolares",
    "Quilometragem de Vias Exclusivas para Pedestres",
    "Quilometragem de Vias Exclusivas Temporárias para Pedestres",
    "Quilometragem de calçadas",
    "Quilometragem de Vias Exclusivas para BRT",
    "Quilometragem de Corredores Exclusivos de Ônibus",
    "Quilometragem de Faixas Exclusivas",
    "Quilometragem de Ciclovias Exclusivas",
    "Quilometragem de Ciclofaixas Exclusivas",
    "Quilometragem de Linhas de Metrô",
    "Quilometragem de Linhas de Trem",
    "Quilometragem Percorrida pela Frota de Ônibus",
    "Quilometragem Percorrida pela Frota de Vans/Microônibus",
    "Velocidade Média do BRT em Horário de Pico",
    "Velocidade Média dos Corredores de Ônibus em Horário de Pico",
    "Velocidade Média das Faixas Exclusivas de Ônibus em Horário de Pico",
    "Velocidade Média do Sistema de Transporte Público Coletivo em Vias de Tráfego Misto no Horário de Pico",
    "Idade Média da Frota de Ônibus",
    "Idade Média da Frota de Vans/Microônibus",
    "Idade Média da Frota de Táxi",
    "Terminais Rodoviários com Informações de Itinerário",
    "Terminais Rodoviários com Informações de Horários",
    "Terminais Rodoviários com Informações de Tarifas",
    "Terminais Rodoviários com Informações de Integração",
    "Estações Metroferroviárias com Informações de Itinerários",
    "Estações Metroferroviárias com Informações de Horários",
    "Estações Metroferroviárias com Informações de Tarifas",
    "Estações Metroferroviárias com Informações de Integração",
    "Pontos de Embarque com Informações de Itinerários",
    "Pontos de Embarque com Informações de Horários",
    "Pontos de Embarque com Informações de Tarifas",
    "Pontos de Embarque com Informações de Integração",
    "Proporção de Viagens de Ônibus Realizadas dentro do Horário Programado",
    "Proporção de Viagens de Vans/Microônibus Realizadas dentro do Horário Programado",
    "Proporção de Viagens de Ônibus não Completadas",
    "Proporção de Viagens de Vans/Microônibus não Completadas",
    "Valor Atual da Tarifa Predominante",
    "Valor Anterior da Tarifa Predominante",
    "Receita Tarifária Arrecadada por Ônibus",
    "Valor do Subsídio Tarifário para o Sistema de Ônibus",
    "Valor do Subsídio Direto ao Sistema de Ônibus",
    "Valor Arrecadado com Publicidade no Sistema de Ônibus",
    "Receita Tarifária Arrecadada com Vans/Microônibus",
    "ISS Incidente no Serviço de Transporte de Ônibus",
    "Taxa de Gerenciamento Incidente no Serviço de Transporte de Ônibus",
    "PIS Incidente no Serviço de Transporte de Ônibus",
    "Cofins Incidente no Serviço de Transporte de Ônibus",
    "Outros Impostos Incidentes no Serviço de Transporte de Ônibus",
    "Outros Impostos Incidentes no Serviço de Transporte de Vans/Microônibus",
    "Passageiros Comuns Transportados por Ônibus",
    "Passageiros de Vale Transporte Transportados por Ônibus",
    "Estudantes Transportados por Ônibus",
    "Passageiros de Integração Transportados por Ônibus",
    "Gratuidades no Transporte de Ônibus",
    "Total Equivalente de Passageiros Transportados por Ônibus",
    "Passageiros Comuns Transportados por Vans/Microônibus",
    "Passageiros de Vale Transporte Transportados por Vans/Microônibus",
    "Estudantes Transportados por Vans/Microônibus",
    "Gratuidades no Transporte de Vans/Microônibus",
    "Total Equivalente de Passageiros Transportados por Vans/Microônibus",
    "Desconto para Passageiros de Baixa Renda",
    "Renda Máxima para Baixa Renda",
    "Desconto para Passageiros entre 60 e 64 anos",
    "Descontos para PCDs",
    "Desconto para Estudantes da Rede Pública",
    "Desconto para Estudantes da Rede Privada",
    "Valor da Bandeira para Táxi",
    "Valor da Bandeira 1 para Táxi por Km rodado",
    "Valor da Bandeira 2 para Táxi por Km rodado",
    "Valor do Serviço de Táxi por hora parada",
    "Valor da Tarifa Aeroporto do Serviço de Táxi",
    "Custo de Mão de Obra Operacional do Serviço de Ônibus",
    "Custo de Mão de Obra Administrativa do Serviço de Ônibus",
    "Custo de Combustíveis no Serviço de Ônibus",
    "Custo de Depreciação no Serviço de Ônibus",
    "Custo de Remuneração de Serviços no Serviço de Ônibus",
    "Custo de Peças no Serviço de Ônibus",
    "Custo de Impostos no Serviço de Ônibus",
    "Custo de Despesas Administrativas no Serviço de Ônibus",
    "Custo de Outros Insumos no Serviço de Ônibus",
    "Número Médio de Viagens Diárias no Município",
    "Distância Média das Viagens no Município",
    "Tempo Médio das Viagens no Município",
    "Proporção de Viagens a Pé",
    "Proporção de Viagens de Bicicleta",
    "Proporção de Viagens em Transporte Coletivo",
    "Proporção de Viagens em Transporte Individual Motorizado",
    "Proporção de Viagens em Transporte Individual Motocicleta",
    "Proporção de Viagens em Transporte Individual Remunerado",
    "Proporção de Viagens em Outros Modos de Transporte",
    "Vagas de Estacionamento Regulamentados no Município",
    "Proporção de Vagas de Estacionamento para PCDs",
    "Proporção de Vagas de Estacionamento para Idosos",
    "Proporção de Vagas de Estacionamento para Gestantes",
    "Valor Arrecadado com Cobrança de Estacionamento",
    "Proporção de Frota que Usa Etanol como Fonte de Energia",
    "Proporção de Frota que Usa Eletricidade como Fonte de Energia",
    "Proporção de Frota que Usa Gás Natural como Fonte de Energia",
    "Proporção de Frota que Usa Hidrogênio como Fonte de Energia",
    "Proporção de Frota que Usa Biodiesel como Fonte de Energia",
    "Proporção de Frota que Usa Energia Híbrida como Fonte de Energia",
    "Proporção da Frota de Táxi que Utiliza Etanol como Fonte de Energia",
    "Proporção da Frota de Táxi que Utiliza Eletricidade como Fonte de Energia",
    "Proporção da Frota de Táxi que Utiliza Gás Natural como Fonte de Energia",
    "Proporção da Frota de Táxi que Utiliza Energia Híbrida como Fonte de Energia",
    "Agentes de Trânsito em Exercício",
    "Equipamentos de Fiscalização de Velocidade Existentes",
    "Arrecadação anual com Multas de Trânsito"
];

dropdownmenu(cidades_pemob, 'PEMOB: ', 'estados');
dropdownmenu(transporteDados, "Variáveis: ", "variaveis");

function dropdownmenu(vetor, titulo, id) {
    const select = document.createElement("select");
    select.id = id;
    select.multiple = true;
    select.style.width = "300px";
    tool1.appendChild(select);
    vetor.forEach((cidade, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = cidade;
        select.appendChild(option);
    });
}
function updatedropdownmenu(cidades, id) {
    let select = $(id);
    select.empty();
    cidades.forEach((cidade, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = cidade;
        select.append(option);
    });
    select.trigger("change");
}

// Constrói o droplist de cidades
const dropdown_catalog = document.createElement('div');
dropdown_catalog.classList.add('dropdown_catalog');
const CityButton_catalog = document.createElement('div');
CityButton_catalog.id = 'SelectedOption_catalog';
CityButton_catalog.className = 'dropbtn_catalog';
CityButton_catalog.innerHTML = 'Rio de Janeiro';
dropdown_catalog.appendChild(CityButton_catalog);
const dropdownContent_catalog = document.createElement('ul');
dropdownContent_catalog.id = 'Dropdown_catalog';
dropdownContent_catalog.classList.add('dropdown-content_catalog', 'no_show');
const cidades_catalog = [
  { id: 'sp_catalog', nome: 'São Paulo'},
  { id: 'rj_catalog', nome: 'Rio de Janeiro'},
  { id: 'noi_catalog', nome: 'Niterói'}
];
cidades_catalog.forEach(cidade => {
  const li = document.createElement('li');
  li.id = cidade.id;
  li.classList.add('DropOption_catalog');
  li.innerHTML = cidade.nome;
  dropdownContent_catalog.appendChild(li);
});
dropdown_catalog.appendChild(dropdownContent_catalog);
titulos_catalog.appendChild(dropdown_catalog);
CityButton_catalog.addEventListener('click', CityOptions_catalog);
function CityOptions_catalog() {
    let lista = document.getElementById("Dropdown_catalog").classList;
    if (lista.contains('no_show')) {
        lista.remove("no_show");
    } else {
        lista.add("no_show");
    }
}

//Função para mudar a cidade no catálogo
async function changeCity_catalog(event) {
    let current_city = event.target.innerText;
    document.getElementById('SelectedOption_catalog').innerText = current_city;
    await new Promise(resolve => setTimeout(resolve, 1500));
    cidades_catalog.forEach(cidade => {
        if (cidade.nome == current_city) {
            $('#Tree_catalog').jstree('destroy');
            TreeBuilder_catalog($, cidade.id);
            MakeTreeOn_catalog();
            setTimeout(() => {
                grid_catalog.updateConfig({
                    columns: ["Variável 1", "Variável 2", "Variável 3"],
                    data: [],
                }).forceRender();
            }, 1000);
        }
        metadado_catalog.style.height = '0px';
        metadado_catalog.innerHTML = '';
    })
}
TreeBuilder_catalog($, 'rj_catalog');
MakeTreeOn_catalog();
SimpleScrollbar.initEl(document.getElementById("arvore_catalog"));

const quantidade_catalog = Math.trunc(window.innerHeight / (60*window.devicePixelRatio))
let grid_catalog = new Grid({
    columns: ["Variável 1", "Variável 2", "Variável 3"],
    search: true,
    pagination: true,
    pagination: {
        limit: quantidade_catalog,
    },
    fixedHeader: true,
    height: '50%',
    width: '99%',
    sort: true,
    data: [],
    language: {
        search: {
            placeholder: "Buscar dentro da base de dados"
        },
        sort: {
            sortAsc: "Ordenar Ascendente",
            sortDesc: "Ordenar Descendente"
        },
        pagination: {
            previous: "Anterior",
            next: "Próximo",
            showing: "Mostrando",
            of: "de",
            to: "até",
            results: "resultados"
        },
        loading: "Carregando...",
        noRecordsFound: "Nenhum registro encontrado",
        error: "Ocorreu um erro ao carregar os dados"
    }
}).render(document.getElementById("sheet_catalog"));

function MakeTreeOn_catalog() {
    $('#Tree_catalog').on("select_node.jstree", function(e, data) {
        $('#Tree_catalog').jstree("deselect_all", true);
        data.node.state.selected = true;
        $('#Tree_catalog').jstree(true).redraw_node(data.node)
    });
    
    $('#Tree_catalog').on('select_node.jstree', function () {
        let vetor_camadas_novo = getSelectedElementsTree(tree_catalog);
        let vetor_camadas_novo_id = [...vetor_camadas_novo].map(element => element.id);
        let variavel = vetor_camadas_novo_id[0].toString();
        let vetor_camadas_novo_texto = [...vetor_camadas_novo].map(element => element.text);
        let variavel_texto = vetor_camadas_novo_texto[0].toString();
        carregar(variavel, variavel_texto);
    })
}

const metadado_info = {
    "Rio de Janeiro": {
        Dados: {
            "Demanda de Passageiros": {
                Info: "Dados extraídos e processados da base de dados de bilhetagem da cidade do Rio de Janeiro para o novo sistema 'Já é'",
                Link: "https://www.dados.rio/datalake"
            }
        }
    },
    "São Paulo": {
        Dados: {
            "População": {
                Info: "Mais de 12 milhões de habitantes",
                Link: "https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo"
            }
        }
    },
    "Niterói": {
        Dados: {
            "População": {
                Info: "Cerca de 500 mil habitantes",
                Link: "https://pt.wikipedia.org/wiki/Niter%C3%B3i"
            }
        }
    }
};

async function dados_catalog(variavel, variavel_texto) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    let base = fetchWFS(variavel);
    const propriedades = base.features.map(f => f.properties);
    const colunas = Object.keys(propriedades[0]);
    const linhas = propriedades.map(obj => colunas.map(coluna => obj[coluna]));
    setTimeout(() => {
        grid_catalog.updateConfig({
            columns: colunas,
            data: linhas,
        }).forceRender();
    }, 1000);
    setTimeout(() => {
        let elemento_grid = document.querySelectorAll('.gridjs.gridjs-container')[1];
        let altura_grid = elemento_grid.offsetHeight + 10;
        let altura_toolcatalog = tool_catalog.offsetHeight;
        metadado_catalog.style.top = altura_grid.toString()+'px';
        let nova_altura = altura_toolcatalog - altura_grid -10;
        metadado_catalog.style.height = nova_altura.toString() + 'px';
        let cidade_selecionada = document.getElementById('SelectedOption_catalog').innerText;
        let texto_info = metadado_info[cidade_selecionada].Dados[variavel_texto].Info;
        let texto_link = metadado_info[cidade_selecionada].Dados[variavel_texto].Link;
        metadado_catalog.innerHTML = "<p><strong>"+variavel_texto+"</strong></p>"+"<p>"+texto_info+"</p>"+'<a href='+texto_link+'>Link de acesso à base original</a>';
    }, 2000);
}

async function carregar (variavel, variavel_texto) {
    gif.classList.toggle('no_show');
    await dados_catalog(variavel, variavel_texto);
    gif.classList.toggle('no_show');

}


TreeBuilder_pemob($);
SimpleScrollbar.initEl(document.getElementById("arvore"));

const quantidade = Math.trunc(window.innerHeight / 70)
let grid = new Grid({
    columns: ["Município", "Unidade Federativa", "variavel"],
    search: true,
    pagination: true,
    pagination: {
        limit: quantidade,
    },
    fixedHeader: true,
    height: '50%',
    width: '99%',
    sort: true,
    data: [],
    language: {
        search: {
            placeholder: "Buscar por município ou unidade federativa"
        },
        sort: {
            sortAsc: "Ordenar Ascendente",
            sortDesc: "Ordenar Descendente"
        },
        pagination: {
            previous: "Anterior",
            next: "Próximo",
            showing: "Mostrando",
            of: "de",
            to: "até",
            results: "resultados"
        },
        loading: "Carregando...",
        noRecordsFound: "Nenhum registro encontrado",
        error: "Ocorreu um erro ao carregar os dados"
    }
}).render(document.getElementById("sheet"));

$('#Tree_pemob').on("select_node.jstree", function(e, data) {
    $('#Tree_pemob').jstree("deselect_all", true);
    data.node.state.selected = true;
    $('#Tree_pemob').jstree(true).redraw_node(data.node)
});

$('#Tree_pemob').on('select_node.jstree', function () {
    let vetor_camadas_novo = getSelectedElementsTree(tree);
    let vetor_camadas_novo_text = [...vetor_camadas_novo].map(element => element.text);
    let variavel = vetor_camadas_novo_text[0].toString();
    variavel = variaveis.map(obj => obj[variavel]);
    let municipio = variaveis.map(obj => obj['Município']);
    let uf = variaveis.map(obj => obj['UF']);
    dados(variavel, municipio, uf, vetor_camadas_novo_text[0].toString());
})

$('#Tree_pemob').on('ready.jstree', function () {
    const elementos = document.querySelectorAll(".tema");
    elementos.forEach(el => {
      if (el.childNodes.length > 1) {
        el.removeChild(el.childNodes[1]);
      }
    });
});

const data1 = [
        {
        type: 'scatterpolar',
        r: [],
        theta: [],
        fill: 'toself',
        name: '',
        showlegend: false
    },
]
const layout = {
    polar: {
        radialaxis: {
            visible: true,
            range: [0, 100]
        }
    }
}

Plotly.newPlot("radar", data1, layout, { displayModeBar: false });

function dados(variavel, municipio, uf, nome) {
    setTimeout(() => {
        grid.updateConfig({
            columns: ["Município", "Unidade Federativa", nome],
            data: municipio.map((_, i) => [municipio[i], uf[i], variavel[i]])
        }).forceRender();
    }, 2000);
}

function radargraph(cidade, cidadename, variables) {
    const data = [
        {
        type: 'scatterpolar',
        r: cidade,
        theta: variables,
        fill: 'toself',
        name: cidadename
        }
    ]
    Plotly.addTraces("radar", data);
}

$(function() {
    let estados = $('#estados').select2({
        placeholder: "Selecione as cidades",
        allowClear: true
    });
    //estados.select2('open');
    //estados.on('select2:closing', function(e) {
    //    e.preventDefault();
    //});
});

$(function() {
    $('#variaveis').select2({
        placeholder: "Selecione 5 variáveis",
        allowClear: true,
        maximumSelectionLength: 5,
        language: {
            maximumSelected: function(args) {
                return "Você só pode selecionar " + args.maximum + " itens.";
            }
        }
    });
});

let vetor_cidades = [];
$('#estados').on('select2:select', function (e) {
    let cidade = e.params.data.text;
    vetor_cidades.push(cidade);
    if (vetor_variaveis.length == 5) {
        let vetor = [];
        let min = 0;
        let max = 0;
        let valor;
        for (let i = 0; i < vetor_variaveis.length; i++) {
            min = Math.min(...variaveis.map(obj => obj[vetor_variaveis[i]]))
            max = Math.max(...variaveis.map(obj => obj[vetor_variaveis[i]]))
            valor = (getValueByField('Município', cidade, vetor_variaveis[i])-min)*100/(max-min);
            vetor.push(valor);
        }
        let selected = $(this).val();
        radargraph(vetor, cidade, vetor_variaveis);
        var dados_cidade = {
            type: 'scatter',
            x: vetor,
            y: vetor_variaveis,
            mode: 'markers',
            name: cidade,
            showlegend: true,
            hovertemplate: '%{fullData.name}: %{x}<extra></extra>',
            marker: {
                line: {
                    width: 1,
                },
                symbol: 'circle',
                size: 16
            }
        };
        Plotly.addTraces("distribution", [dados_cidade])
    }
    let variables = filtrarColunasPorMunicipio(variaveis, vetor_cidades);
    updatedropdownmenu(variables, '#variaveis');
    selecionarItens(vetor_variaveis, "#variaveis");
});

$('#estados').on('select2:unselect', function (e) {
    let cidade = e.params.data.text;
    let indice = vetor_cidades.indexOf(cidade) + 1;
    let indice2 = indice + 70;
    if (document.getElementById('graph').data.length > 1 ) {
        Plotly.deleteTraces('radar', indice);
        Plotly.deleteTraces('distribution', indice2);
    }
    vetor_cidades = vetor_cidades.filter(city => city !== cidade);
    let variables = filtrarColunasPorMunicipio(variaveis, vetor_cidades);
    updatedropdownmenu(variables, '#variaveis');
    selecionarItens(vetor_variaveis, "#variaveis");
});

let vetor_variaveis = [];
$('#variaveis').on('select2:select', function (e) {
    let variavel = e.params.data.text;
    vetor_variaveis.push(variavel);
    let selected = $(this).val();
    let cidades = filtrarMunicipiosPorColuna(variaveis, vetor_variaveis);
    updatedropdownmenu(cidades, '#estados');
    selecionarItens(vetor_cidades, "#estados");
    if(document.getElementById("distribution").data.length == 1 && vetor_variaveis.length == 5){
        distributionStart();
    }
    if(vetor_cidades.length > 0 && vetor_variaveis.length == 5) {
        for(let i = 0; i < vetor_cidades.length; i++) {
            let cidade = vetor_cidades[i];
            let vetor = [];
            let min = 0;
            let max = 0;
            let valor;
            for (let i = 0; i < vetor_variaveis.length; i++) {
                min = Math.min(...variaveis.map(obj => obj[vetor_variaveis[i]]))
                max = Math.max(...variaveis.map(obj => obj[vetor_variaveis[i]]))
                valor = (getValueByField('Município', cidade, vetor_variaveis[i])-min)*100/(max-min);
                vetor.push(valor);
            }
            let selected = $(this).val();
            radargraph(vetor, cidade, vetor_variaveis);
            var dados_cidade = {
                type: 'scatter',
                x: vetor,
                y: vetor_variaveis,
                mode: 'markers',
                name: cidade,
                showlegend: true,
                hovertemplate: '%{fullData.name}: %{x}<extra></extra>',
                marker: {
                    line: {
                        width: 1,
                    },
                    symbol: 'circle',
                    size: 16
                }
            };
            Plotly.addTraces("distribution", [dados_cidade])
        }
    }
});

$('#variaveis').on('select2:unselect', function (e) {
    let variavel = e.params.data.text;
    vetor_variaveis = vetor_variaveis.filter(variable => variable !== variavel);
    let cidades = filtrarMunicipiosPorColuna(variaveis, vetor_variaveis);
    updatedropdownmenu(cidades, '#estados');
    selecionarItens(vetor_cidades, "#estados");
    if(vetor_variaveis.length < 5) {
        var grafico = document.getElementById('graph');
        var numTraces = grafico.data.length;
        if (numTraces > 1) {
            Plotly.deleteTraces(grafico, Array.from(Array(numTraces - 1), (_, i) => i + 1));
        }
        grafico = document.getElementById('distribution');
        numTraces = grafico.data.length;
        if (numTraces > 1) {
            Plotly.deleteTraces(grafico, Array.from(Array(numTraces - 1), (_, i) => i + 1));
        }
    }
});

function getValueByField(knownField, knownValue, targetField) {
    const objeto = variaveis.find(obj => obj[knownField] === knownValue);
    return objeto ? objeto[targetField] : null;
}

function filtrarMunicipiosPorColuna(dados, colunas) {
    for (let i = 0; i < colunas.length; i++) {
        dados = dados.filter(item => item[colunas[i]] !== "" && item[colunas[i]] !== null && item[colunas[i]] !== undefined)
    }
    return dados
    .map(item => item["Município"]);
}

function filtrarColunasPorMunicipio(dados, municipios) {
    let vetor_final = [];
    let vetor = [];
    for (let i = 0; i < municipios.length; i++) {
        let linha = dados.find(item => item["Município"] === municipios[i]);
        if (vetor_final.length > 0) {
            vetor = Object.keys(linha).filter(coluna => linha[coluna] !== "" && linha[coluna] !== null && linha[coluna] !== undefined);
            vetor_final = intersecao(vetor, vetor_final);
        } else {
            vetor_final = Object.keys(linha).filter(coluna => linha[coluna] !== "" && linha[coluna] !== null && linha[coluna] !== undefined);
        }
    }
    const setRemover = new Set(["CÓDIGO", "UF", "Município"]);
    vetor_final = vetor_final.filter(valor => !setRemover.has(valor));
    if (vetor_final.length == 0) {
        vetor_final = transporteDados;
    }
    return vetor_final
}

function intersecao(vetor1, vetor2) {
    const setVetor2 = new Set(vetor2);
    return vetor1.filter(valor => setVetor2.has(valor));
}

function selecionarItens(nomesDesejados, id, n) {
    const valoresParaSelecionar = $(id+' option').filter(function() {
        return nomesDesejados.includes($(this).text());
    }).map(function() {
        return $(this).val();
    }).get();
    $(id).val(valoresParaSelecionar).trigger('change');

}


const eixoy = [];
var trace = {
    type: 'scatter',
    x: [],
    y: eixoy,
    mode: 'markers',
    showlegend: false,
    marker: {
        color: 'rgba(156, 165, 196, 0.95)',
        line: {
            color: 'rgba(156, 165, 196, 1.0)',
            width: 1,
        },
    symbol: 'circle',
    size: 16
    }
};

var layout_dados = {
    yaxis: {
        tickfont: { size: 7 } 
    },
    xaxis: {
        range: [-5,105],
        showgrid: false,
        showline: true,
        linecolor: 'rgb(102, 102, 102)',
        tickfont: {
            font: {
                color: 'rgb(102, 102, 102)'
            }
        },  
        tickmode: 'linear',
        dtick: 10,
        ticks: 'outside',
        tickcolor: 'rgb(102, 102, 102)'
    },
    margin: {
        l: 140,
        r: 40,
        b: 50,
        t: 80
    },
    legend: {
        font: {
            size: 10,
        },
        yanchor: 'middle',
        xanchor: 'right'
    },
    width: window.innerWidth-100,
    height: window.innerHeight-100,
    hovermode: 'closest'
};
Plotly.newPlot('distribution', [trace], layout_dados, { displayModeBar: false });

function distributionStart() {
    for (var i = 0; i < variaveis.length; i++){
        let cidade_dado = variaveis[i].Município;
        let vetor_dados_cidade = [];
        let min = 0;
        let max = 0;
        let valor;
        for (let i = 0; i < vetor_variaveis.length; i++) {
            min = Math.min(...variaveis.map(obj => obj[vetor_variaveis[i]]))
            max = Math.max(...variaveis.map(obj => obj[vetor_variaveis[i]]))
            valor = (getValueByField('Município', cidade_dado, vetor_variaveis[i])-min)*100/(max-min);
            vetor_dados_cidade.push(valor);
        }
        var dados_cidade = {
            type: 'scatter',
            x: vetor_dados_cidade,
            y: vetor_variaveis,
            mode: 'markers',
            name: cidade_dado,
            showlegend: false,
            hovertemplate: '%{fullData.name}: %{x}<extra></extra>',
            marker: {
                color: 'rgba(156, 165, 196, 0.95)',
                line: {
                    color: 'rgba(156, 165, 196, 1.0)',
                    width: 1,
                },
                symbol: 'circle',
                size: 16
            }
        };
        Plotly.addTraces("distribution", [dados_cidade])
    }
}


// GeoPortal//
//Função para fetch de dados do beckend
function fetchWFS(string) {
    string = encodeURIComponent(string);    
    const url = 'https://geoserver.datascience.insper.edu.br/geoserver/portal_dados/ows?service=WFS&version=1.0.0&request=GetFeature&typeName='+string+'&outputFormat=application%2Fjson';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    try {
      xhr.send();
      if (xhr.status === 200) {
        const geoJsonData = JSON.parse(xhr.responseText);
        return geoJsonData;
      } else {
        console.error('Erro ao acessar o GeoJSON. Status:', xhr.status);
      }
    } catch (error) {
      console.error('Erro ao acessar o GeoJSON:', error);
    }
}
// Constrói o div DataBar e adiciona ao geop //
let databar = document.createElement('div');
databar.id = 'DataBar';
databar.className = 'placed';
databar.classList.add('no_show');
geop.appendChild(databar);
L.DomEvent.disableClickPropagation(databar);
L.DomEvent.disableScrollPropagation(databar);
SimpleScrollbar.initEl(document.getElementById("DataBar"));

// Constrói o div Legenda e adciona ao geop //
let legenda = document.createElement('div');
legenda.id = 'Legenda';
legenda.className = 'no_show';
geop.appendChild(legenda);
L.DomEvent.disableClickPropagation(legenda);
L.DomEvent.disableScrollPropagation(legenda);
SimpleScrollbar.initEl(document.getElementById("Legenda"));

// Constrói o div main_tools e adiciona no geop //
let main_tools = document.createElement('div');
main_tools.id = 'main_tools';
main_tools.className = 'closed';
geop.appendChild(main_tools);
L.DomEvent.disableClickPropagation(main_tools);
L.DomEvent.disableScrollPropagation(main_tools);

// Constrói o div camadas_layer e adiciona ao main_tools //
let camadas_layer = document.createElement('div');
camadas_layer.id = 'camadas_layer';
camadas_layer.classList.add('main_tools_layers', 'roll');
main_tools.appendChild(camadas_layer);

// Constrói o droplist de cidades
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
const CityButton = document.createElement('div');
CityButton.id = 'SelectedOption';
CityButton.className = 'dropbtn';
CityButton.innerHTML = 'São Paulo';
dropdown.appendChild(CityButton);
const dropdownContent = document.createElement('ul');
dropdownContent.id = 'Dropdown';
dropdownContent.classList.add('dropdown-content', 'no_show');
const cidades = [
  { id: 'sp', camada: 'portal_dados:municipios_sp', nome: 'São Paulo', coord: { lat: -23.5470, long: -46.6339}, nordeste: { lat: -23.0, long: -44.2}, sudoeste: { lat: -23.0, long: -44.2} },
  { id: 'rj', camada: 'portal_dados:municipios_rj', nome: 'Rio de Janeiro', coord: {lat: -22.9275, long: -43.4143}, nordeste: { lat: -20.6635, long: -40.9848}, sudoeste: { lat: -23.3866, long: -44.8497} },
  { id: 'noi', camada: 'portal_dados:municipios_rj', nome: 'Niterói', coord: { lat: -22.9084, long: -43.0543}, nordeste: { lat: -20.6635, long: -40.9848}, sudoeste: { lat: -23.3866, long: -44.8497} }
];
cidades.forEach(cidade => {
  const li = document.createElement('li');
  li.id = cidade.id;
  li.classList.add('DropOption');
  li.innerHTML = cidade.nome;
  dropdownContent.appendChild(li);
});
dropdown.appendChild(dropdownContent);
document.body.appendChild(dropdown);
CityButton.addEventListener('click', CityOptions);
function CityOptions() {
    let lista = document.getElementById("Dropdown").classList;
    if (lista.contains('no_show')) {
        lista.remove("no_show");
    } else {
        lista.add("no_show");
    }
}

//Função para mudar a cidade
async function changeCity(event) {
    let current_city = event.target.innerText;
    document.getElementById('SelectedOption').innerText = current_city;
    await new Promise(resolve => setTimeout(resolve, 1500));
    cidades.forEach(cidade => {
        if (cidade.nome == current_city) {
            let camadas = getSelectedElementsTree(div_tree);
            if (camadas.length > 0 ){
                camadas.forEach(camada => {
                    removeLayerFromGroup(backend_layers_group, camada.id);
                    AddDataBar(noUiSlider, backend_layers_group, [], $(div_tree));
                });
            }
            vetor_camadas = [];
            vetor_camadas_text = [];
            $('#tree').jstree('destroy');
            bounds_group.removeLayer(layer_limites_municipais);
            map.removeLayer(layer_limites_municipais);
            json_limites_municipais = fetchWFS(cidade.camada.toString());
            layer_limites_municipais = new L.geoJson(json_limites_municipais, {
                attribution: '',
                interactive: false,
                dataVar: 'json_limites_municipais',
                layerName: 'layer_limites_municipais',
                pane: 'pane_limites_municipais',
                style: style_limites_municipais,
                renderer: L.canvas(),
                smoothFactor: 0,
            })
            bounds_group.addLayer(layer_limites_municipais);
            map.addLayer(layer_limites_municipais);
            //sudoeste = L.latLng(-36.312668870703455, -75.33239427789226);
            //nordeste = L.latLng(7.103916933041202, -32.178097913980785);
            //bounds = L.latLngBounds(sudoeste, nordeste)
            //sudoeste = L.latLng(cidade.sudoeste.lat, cidade.sudoeste.long);
            //nordeste = L.latLng(cidade.nordeste.lat, cidade.nordeste.long);
            map.flyTo([cidade.coord.lat, cidade.coord.long], 11);
            //bounds = L.latLngBounds(sudoeste, nordeste);
            label();
            TreeBuilder($, cidade.id);
            MakeTreeOn();
        }
    })
}
let gif = document.createElement('div');
gif.id = 'loading_gif';
gif.classList.add('no_show');
document.getElementById('app').appendChild(gif);
window.onclick = async function(event) {
    if(event.target.matches('.DropOption')) {
        gif.classList.toggle('no_show');
        await changeCity(event);
        let botoes = ferramentas_layer.querySelectorAll('.ferramentas_icone');
        botoes.forEach(botao => {
            if(botao.classList.contains('clicked')){
                botao.click();
            };     
        });
        gif.classList.toggle('no_show');
        
    }
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('no_show')) {
                openDropdown.classList.add('no_show');
            }
        }
    }
    if(event.target.matches('.DropOption_catalog')) {
        gif.classList.toggle('no_show');
        await changeCity_catalog(event);
        gif.classList.toggle('no_show');
    }
    if (!event.target.matches('.dropbtn_catalog')) {
        let dropdowns = document.getElementsByClassName("dropdown-content_catalog");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('no_show')) {
                openDropdown.classList.add('no_show');
            }
        }
    }
}

// Constrói a árvore de camadas e adiciona na camada_layer //
let div_tree = document.createElement("div");
div_tree.id = "tree";
div_tree.className = "arvore";
camadas_layer.appendChild(div_tree);
TreeBuilder($, 'sp');
SimpleScrollbar.initEl(document.getElementById("camadas_layer"));
camadas_layer.insertBefore(dropdown, camadas_layer.firstChild);
let vetor_camadas = [];
let vetor_camadas_text = [];
MakeTreeOn();
function MakeTreeOn() {
    $('#tree').on('changed.jstree', function () {
        let vetor_camadas_novo = getSelectedElementsTree(div_tree);
        let vetor_camadas_novo_id = [...vetor_camadas_novo].map(element => element.id);
        let vetor_camadas_novo_text = [...vetor_camadas_novo].map(element => element.text);
        if (vetor_camadas_novo_id.length > vetor_camadas.length) {
            let item = vetor_camadas_novo_id.filter(element => !vetor_camadas.includes(element))[0];
            let item_text = vetor_camadas_novo_text.filter(element => !vetor_camadas_text.includes(element))[0];
            let wmsLayer = L.tileLayer.wms('https://geoserver.datascience.insper.edu.br/geoserver/ows?', {
                layers: item,
                format: 'image/png',
                transparent: true,
                pane: 'pane_backend',
                layerName: item,
            })
            backend_layers_group.addLayer(wmsLayer);
            map.addLayer(wmsLayer);
            if (vetor_camadas.length == 0) {
                legenda.classList.remove('no_show');
                legendas.classList.add("clicked");
            }
            let legenda_titulo = document.createElement('div');
            legenda_titulo.id = 'legenda_titulo:'+item;
            legenda_titulo.className = 'legenda_titulo';
            legenda_titulo.innerText = item_text;
            legenda.firstChild.firstChild.appendChild(legenda_titulo);
            let legenda_in = document.createElement('div');
            legenda_in.id = 'legenda:'+item;
            legenda_in.className = 'legenda_in';
            legenda_in.innerHTML = "<img src='https://geoserver.datascience.insper.edu.br/geoserver/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer="+item+"'/>";
            legenda.firstChild.firstChild.appendChild(legenda_in);
            setTimeout(() => {
                ajustarAltura(legenda, 250)
            }, 500);
            //let dados = fetchWFS(item);
            //console.log(dados);
        }
        if ( vetor_camadas_novo_id.length < vetor_camadas.length ) {
            let item = vetor_camadas.filter(element => !vetor_camadas_novo_id.includes(element))[0];
            removeLayerFromGroup(backend_layers_group, item);
            if (vetor_camadas.length == 1) {
                legenda.classList.add('no_show');
                legendas.classList.remove("clicked");
            }
        }
        vetor_camadas = vetor_camadas_novo_id;
        vetor_camadas_text = vetor_camadas_novo_text;
        if (vetor_camadas.length > 0 && [...opacidade.classList].includes('clicked')) {
            databar.classList.remove('no_show');
        } else if (vetor_camadas.length == 0 && [...opacidade.classList].includes('clicked')) {
            opacidade.click();
        } 
        else {
            databar.classList.add('no_show');
        }
        AddDataBar(noUiSlider, backend_layers_group, vetor_camadas_novo, $(div_tree));
    });
}
function ajustarAltura(div, max) {
    let pai = div.firstChild.firstChild;
    let filhas = pai.getElementsByClassName("legenda_in");
    let alturas = 0;
    let larguras = 0;
    for (let i = 0; i < filhas.length; i++) {
        let altura = filhas[i].offsetHeight;
        let largura = filhas[i].offsetWidth;
        alturas = alturas + altura + 19.5 + 15;
        larguras = Math.max(larguras, largura);
    }
    div.style.height = Math.min(alturas, max) + "px";
}
function removeLayerFromGroup(group, item) {
    document.getElementById('legenda:'+item).remove();
    document.getElementById('legenda_titulo:'+item).remove();
    group.eachLayer(function(layer) {
        if (layer.options && layer.options.layerName == item) {
            map.removeLayer(layer);
            group.removeLayer(layer);
        }
    });
    ajustarAltura(legenda, 250);
}

function getSelectedElementsTree(tree) {
    var arvore = $(tree).jstree(true).get_json('#', {flat:true});
    var tamanho = arvore.length;
    var vetor = [];
    for (var i = 0; i < tamanho; i++) {
        if (arvore[i].a_attr.class.includes('splus') && arvore[i].state.selected == true){
            vetor.push(arvore[i]);
        }
    }
    return(vetor);
}

// Constrói o div ferramentas_layer e adiciona ao main_tools //
let ferramentas_layer = document.createElement('div');
ferramentas_layer.id = 'ferramentas_layer';
ferramentas_layer.classList.add('main_tools_layers', 'roll');

// Constrói os ícones das ferramentas //
let opacidade = document.createElement('div');
opacidade.id = 'opacidade';
opacidade.classList.add('ferramentas_icone');
ferramentas_layer.appendChild(opacidade);
opacidade.addEventListener('click', () => {
    if (opacidade.classList.contains("clicked")) {
        opacidade.classList.remove("clicked");
        databar.classList.add('no_show');
        logo_insper.classList.remove('to_left');
    } else if (!opacidade.classList.contains("clicked")) {
        if ( vetor_camadas.length > 0 ) {
            opacidade.classList.add("clicked");
            databar.classList.remove('no_show');
            logo_insper.classList.add('to_left');
        } else {
            alert("Não há camadas selecionadas!");
        }
    }
});
let opacidade_img = document.createElement('div');
opacidade_img.classList.add('ferramentas_img');
opacidade.appendChild(opacidade_img);
let opacidade_texto = document.createElement('div');
opacidade_texto.classList.add('ferramentas_texto');
opacidade_texto.innerText = 'Opacidade';
opacidade.appendChild(opacidade_texto);

let legendas = document.createElement('div');
legendas.id = 'legendas';
legendas.classList.add('ferramentas_icone');
ferramentas_layer.appendChild(legendas);
legendas.addEventListener('click', () => {
    if (legendas.classList.contains("clicked")) {
        legendas.classList.remove("clicked");
        legenda.classList.add('no_show');
    } else if (!legendas.classList.contains("clicked")) {
        if ( vetor_camadas.length >0 ) {
            legendas.classList.add("clicked");
            legenda.classList.remove('no_show');
        } else {
            alert("Não há camadas selecionadas!");
        }
    }
});
let legendas_img = document.createElement('div');
legendas_img.classList.add('ferramentas_img');
legendas.appendChild(legendas_img);
let legendas_texto = document.createElement('div');
legendas_texto.classList.add('ferramentas_texto');
legendas_texto.innerText = 'Legendas';
legendas.appendChild(legendas_texto);



// Cria e adiciona o botão de camadas no div de ferramentas //
let camadas_button = document.createElement("div");
camadas_button.id = "camadas_button";
camadas_button.classList.add("main_tools_button", "clicked");
main_tools.appendChild(camadas_button);
let camadas_texto = document.createElement('div');
camadas_texto.id = "camadas_texto";
camadas_texto.classList.add("main_tools_text");
camadas_texto.textContent = "Camadas";
camadas_button.appendChild(camadas_texto);

// Cria e adiciona o botão de ferramentas no div de ferramentas //
let ferramentas_button = document.createElement("div");
ferramentas_button.id = "ferramentas_button";
ferramentas_button.classList.add("main_tools_button");
main_tools.appendChild(ferramentas_button);
let ferramentas_texto = document.createElement('div');
ferramentas_texto.id = "ferramentas_texto";
ferramentas_texto.classList.add("main_tools_text");
ferramentas_texto.textContent = "Ferramentas";
ferramentas_button.appendChild(ferramentas_texto);

// Adiciona o event listner de seleção das ferramentas //
const toolsDivMap = {
    "camadas_button": camadas_layer,
    "ferramentas_button": ferramentas_layer,
};
const tools_buttons = document.querySelectorAll('.main_tools_button');
tools_buttons.forEach(button => {
    button.addEventListener('click', () => {
        tools_buttons.forEach(btn => {
            btn.classList.remove('clicked');
        });
        button.classList.add('clicked');
        const div = toolsDivMap[button.id];
        const mainContent = document.getElementsByClassName("main_tools_layers");
        mainContent[0].classList.remove('roll');
        main_tools.removeChild(mainContent[0]);
        main_tools.appendChild(div);
        div.classList.add("roll");
    });
});

//Constrói o mapa no div geop//
let map = L.map('geop', {
    zoomControl:false, maxZoom:22, minZoom:10, zoomDelta: 0.60, zoomSnap: 0.20, wheelPxPerZoomLevel: 100
}).setView([-23.6738,-46.5216], 10.6);

// Cria e adiciona o botão de mais zoom no div geop//
let zoomin_button = document.createElement("div");
zoomin_button.id = "zoomin_button";
zoomin_button.classList.add("geop_button");
geop.appendChild(zoomin_button);
L.DomEvent.disableClickPropagation(zoomin_button);

// Adiciona o event listner de dar zoom in ao clicar no botão//
let zoomInDiv = document.getElementById('zoomin_button');
zoomInDiv.addEventListener('click', function() {
    map.zoomIn();
});

// Cria e adiciona o botão de menos zoom no div geop
let zoomout_button = document.createElement("div");
zoomout_button.id = "zoomout_button";
zoomout_button.classList.add("geop_button");
geop.appendChild(zoomout_button);
L.DomEvent.disableClickPropagation(zoomout_button);

// Adiciona o event listner de dar zoom out ao clicar no botão
let zoomOutDiv = document.getElementById('zoomout_button');
zoomOutDiv.addEventListener('click', function() {
    map.zoomOut();
});

// Cria e adiciona o botão de localização no div geop
let localize_button = document.createElement("div");
localize_button.id = "localize_button";
localize_button.classList.add("geop_button");
geop.appendChild(localize_button);
L.DomEvent.disableClickPropagation(localize_button);

let locateControl = L.control.locate({
    locateOptions: {
        enableHighAccuracy: true, 
        maxZoom: 14,
    },
    strings: {
        title: "",
        metersUnit: "metros",
        feetUnit: "pés",
        popup: "Você está a um raio de {distance} {unit} desse ponto",
        outsideMapBoundsMsg: "Você fora dos limites do mapa"
    },
    markerStyle: {
        weight: 0.5,
        opacity: 0.9,
        fillOpacity: 0.7,
        color: '#C00026',
        fillColor: '#C00026'
    },
    circleStyle: {
        color: '#F69679',
        fillColor: '#F69679',
        fillOpacity: 0.15,
        weight: 1,
        opacity: 0.9
    },
}).addTo(map);
document.querySelector('.leaflet-control-locate').style.display = 'none';
document.getElementById('localize_button').addEventListener('click', function() {
    if (localize_button.classList.contains("clicked")) {
        localize_button.classList.remove("clicked");
        locateControl.stop();
    } else if (!localize_button.classList.contains("clicked")) {
        localize_button.classList.add("clicked");
        locateControl.start();
    }
});

// Cria e adiciona o botão de open street map no div geop
let osm_button = document.createElement("div");
osm_button.id = "osm_button";
osm_button.classList.add("geop_button");
geop.appendChild(osm_button);
L.DomEvent.disableClickPropagation(osm_button);

// Adiciona o event listner de adicionar ou remover a camada de open street map
document.getElementById('osm_button').addEventListener('click', function() {
    if (osm_button.classList.contains("clicked")) {
        osm_button.classList.remove("clicked");
        map.removeLayer(layer_OpenStreetMap_0);
    } else if (!osm_button.classList.contains("clicked")) {
        osm_button.classList.add("clicked");
        map.addLayer(layer_OpenStreetMap_0);
    }
});

// Cria e adiciona o botão de seta para menu no div geop
let seta_button = document.createElement("div");
seta_button.id = "seta_button";
seta_button.classList.add("geop_button");
geop.appendChild(seta_button);
L.DomEvent.disableClickPropagation(seta_button);

// Adiciona event listner para abrir ou fechar o main_tools do geop
document.getElementById('seta_button').addEventListener('click', function() {
    if (seta_button.classList.contains("clicked")) {
        seta_button.classList.remove("clicked");
        logo_insper.classList.remove("clicked");
        main_tools.classList.remove("opened");
        main_tools.classList.add("closed");
        databar.classList.remove('displaced');
        databar.classList.add('placed');
    } else if (!seta_button.classList.contains("clicked")) {
        seta_button.classList.add("clicked");
        logo_insper.classList.add("clicked");
        main_tools.classList.remove("closed");
        main_tools.classList.add("opened");
        databar.classList.remove('placed');
        databar.classList.add('displaced');

    }
});


// Cria e adiciona o norte no div geop
let norte = document.createElement("div");
norte.id = "norte";
geop.appendChild(norte);

//Mostra o nível de zoom e coordenadas no endereço//
//let hash = new L.Hash(map);

//Cria o rodapé com links//
map.attributionControl.setPrefix('<a href="https://www.insper.edu.br/laboratorio-de-cidades/" title="Laboratório Arq.Futuro de Cidades"></a>');

//Cria a escala do mapa e adiciona classe a ela//
let escala = L.control.scale().addTo(map);
escala.getContainer().className += ' custom-scale';

//Cria um feature Group//
let bounds_group = new L.featureGroup([]);

//Cria um Layer Group//
let layers_group = new L.layerGroup([]);

//Cria um Layer Group para as camadas adicionadas pelo menu//
let backend_layers_group = new L.layerGroup([]);

//Cria um Pane para as camadas adicionadas pelo menu
map.createPane('pane_backend');
map.getPane('pane_backend').style.zIndex = 402;
map.getPane('pane_backend').style['mix-blend-mode'] = 'normal';

//Cria e impõe limites de enquadramento do mapa//
let sudoeste = L.latLng(-24.6, -48.99);
let nordeste = L.latLng(-23.0, -44.2);
let bounds = L.latLngBounds(sudoeste, nordeste);

//Cria o estilo da camada de limites municipais//
function style_limites_municipais() {
    return {
        pane: 'pane_limites_municipais',
        opacity: 1,
        color: '#BCBEC0',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 0.5, 
        fill: true,
        fillOpacity: 1,
        fillColor: '#ffffff',
        interactive: false,
    }
}

//Muda o estilo da camada de limites municipais de acordo com o nível de zoom//
function change_style_limites_municipais(){
    layer_limites_municipais.eachLayer(function (layer) {
        if (map.getZoom() >= 11.6 ) {
            layer.setStyle ({
                weight: 0.8,
            });
        } else {
            layer.setStyle ({
                weight: 0.3,
            });
        }
    })
}

// Cria a camada de open street map //
map.createPane('pane_OpenStreetMap_0');
map.getPane('pane_OpenStreetMap_0').id = "osm";
map.getPane('pane_OpenStreetMap_0').style.zIndex = 401;
let layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_0',
    opacity: 0.5,
    attribution: '',
    minZoom: 9,
    maxZoom: 30,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layers_group.addLayer(layer_OpenStreetMap_0);

//Cria a camada de Limites Municipais//
let json_limites_municipais = fetchWFS('portal_dados:municipios_sp');
map.createPane('pane_limites_municipais');
map.getPane('pane_limites_municipais').style.zIndex = 400;
map.getPane('pane_limites_municipais').style['mix-blend-mode'] = 'normal';
let layer_limites_municipais = new L.geoJson(json_limites_municipais, {
    attribution: '',
    interactive: false,
    dataVar: 'json_limites_municipais',
    layerName: 'layer_limites_municipais',
    pane: 'pane_limites_municipais',
    style: style_limites_municipais,
    renderer: L.canvas(),
    smoothFactor: 0,
})


//Adiciona a camada de Limites Municipais ao Feature Group//
bounds_group.addLayer(layer_limites_municipais);

//Adiciona a camada de Limites Municipais à visualização do mapa//
map.addLayer(layer_limites_municipais);

//Mostra o nome dos municípios da camada de Limites Municipais//
function label() {
    layer_limites_municipais.eachLayer(function(layer) {
        if ( String((layer.feature.properties['NM_MUN'])) != "SANTO ANDRÉ" ) {
            layer.bindTooltip(String((layer.feature.properties['NM_MUN'])), {
                direction: 'center',
                sticky: true,
                permanent: true }).openTooltip();
        } else {
            let poligono = L.polygon([[-23.659800, -46.520938], [-23.659800, -46.520938], [-23.659800, -46.52938], [-23.659800, -46.520938]], {color: 'transparent', interactive: false}).addTo(map);
            poligono.bindTooltip(String((layer.feature.properties['NM_MUN'])), {
            direction: 'center',
            sticky: true, 
            permanent: true,
            offset: [0,0] }).openTooltip();
        }
    });
}

//Cria o geocodificador//
let osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Search',
    title: 'Testing',
    defaultMarkGeocode: false
}).addTo(map);

// Cria o ícone de localização para o geocoder //
let customIcon = L.icon({
    iconUrl: './icons/localizar_mapa.svg', // URL do seu ícone personalizado
    iconSize: [38, 38], // Tamanho do ícone
    iconAnchor: [19, 38], // Ponto de ancoragem do ícone (onde ele será posicionado)
    popupAnchor: [0, -38] // Ponto de ancoragem do popup (se você exibir um popup)
});

// Cria variável que armazenará as informações do marcador do mapa //
let marcador;

// Evento disparado quando um local é selecionado para indicar o nível de zoom do mapa //
osmGeocoder.on('markgeocode', function(e) {
    if (marcador) {
        map.removeLayer(marcador);
        marcador = null;
    }
    marcador = L.marker(e.geocode.center, { icon: customIcon }).addTo(map);
    map.setView(e.geocode.center, 19);
});

//Event Listners do mapa//
map.on("zoomend", function(){
    change_style_limites_municipais();
});
map.on("layeradd", function(){
});
map.on("layerremove", function(){
});
map.on("drag", function(){
    //map.panInsideBounds(bounds, { animate: false }); 
});
map.on("move", function(){
    //map.panInsideBounds(bounds, { animate: false });
});

label();

// Verifica se a instância de JStree está carregada
function isJsTreeLoaded() {
    let treeInstance = $('#tree').jstree(true);
    return treeInstance !== undefined && treeInstance !== null;
}