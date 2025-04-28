export function TreeBuilder_pemob($) {
    $(function () {
        $('#Tree_pemob').jstree({
                "types" :
                {
                    "Infraestrutura" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Frota" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Tarifas" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Receita" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Custos" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Demanda" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Arrecadação" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl"}},
                    "Ônibus" : {"icon" : "./images/onibus.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Trem" : {"icon" : "./images/trem.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Metrô" : {"icon" : "./images/trem.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Metrô/Trem" : {"icon" : "./images/trem.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Monotrilho" : {"icon" : "./images/monotrilho.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "VLT" : {"icon" : "./images/VLT.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "BRT" : {"icon" : "./images/BRT.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Bicicletas" : {"icon" : "./images/bicicleta.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Pedestre" : {"icon" : "./images/pedestre.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Vans/Microônibus" : {"icon" : "./images/van.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Barco" : {"icon" : "./images/barco.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Automóvel" : {"icon" : "./images/carro.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Aeromóvel" : {"icon" : "./images/aeromovel.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Trabalhadores" : {"icon" : "./images/trabalhadores.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Equipamentos" : {"icon" : "./images/equipamentos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Táxis" : {"icon" : "./images/taxis.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Mototáxis" : {"icon" : "./images/mototaxis.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Viagens" : {"icon" : "./images/viagens.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Multas" : {"icon" : "./images/multas.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Tributos" : {"icon" : "./images/tributos.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Bandeira" : {"icon" : "./images/bandeira.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Valores" : {"icon" : "./images/valores.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "Subsídios" : {"icon" : "./images/subsidios.svg", "a_attr" : {"class" : "subtema  jstree-ocl"}},
                    "splus_sociedade" : {"icon" : "./images/blank.svg", "a_attr" : {"class" : "splus"}},
                },
            'plugins' : [ "checkbox" , "search", "types", "themes" ],
            'core' : {
                'themes' : { "stripes" : false },
                'data' : [
                    {
                    'text' : 'Infraestrutura',
                    'id' : 'no_checkbox_Infraestrutura',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Infraestrutura',
                    'children' : [ 
                        {
                        'text' : 'Ônibus',
                        'id' : 'no_checkbox_Infraestrutura_Ônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Ônibus',
                        'children' : [
                            {
                            'text' : 'Terminais Rodoviários',
                            'id' : 'checkbox_sociedade_1',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Acessibilidade (Deficiência Física)',
                            'id' : 'checkbox_sociedade_2',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Acessibilidade (Deficiência Visual)',
                            'id' : 'checkbox_sociedade_3',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Integração Física',
                            'id' : 'checkbox_sociedade_4',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total de Pontos de Embarque',
                            'id' : 'checkbox_sociedade_5',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total de Pontos de Embarque com Abrigo',
                            'id' : 'checkbox_sociedade_6',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total de Pontos de Embarque com Acessibilidade',
                            'id' : 'checkbox_sociedade_7',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Pontos de Embarque são georreferenciados?',
                            'id' : 'checkbox_sociedade_8',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem de Corredores Exclusivos de Ônibus',
                            'id' : 'checkbox_sociedade_9',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem de Faixas Exclusivas',
                            'id' : 'checkbox_sociedade_10',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média dos Corredores de Ônibus em Horário de Pico',
                            'id' : 'checkbox_sociedade_11',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média das Faixas Exclusivas de Ônibus em Horário de Pico',
                            'id' : 'checkbox_sociedade_12',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do Sistema de Transporte Público Coletivo em Vias de Tráfego Misto no Horário de Pico',
                            'id' : 'checkbox_sociedade_13',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Informações de Itinerário',
                            'id' : 'checkbox_sociedade_14',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Informações de Horários',
                            'id' : 'checkbox_sociedade_15',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Informações de Tarifas',
                            'id' : 'checkbox_sociedade_16',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Terminais Rodoviários com Informações de Integração',
                            'id' : 'checkbox_sociedade_17',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Pontos de Embarque com Informações de Itinerários',
                            'id' : 'checkbox_sociedade_18',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Pontos de Embarque com Informações de Horários',
                            'id' : 'checkbox_sociedade_19',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Pontos de Embarque com Informações de Tarifas',
                            'id' : 'checkbox_sociedade_20',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Pontos de Embarque com Informações de Integração',
                            'id' : 'checkbox_sociedade_21',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Ônibus Realizadas dentro o Horário Programado',
                            'id' : 'checkbox_sociedade_22',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Ônibus não Completadas',
                            'id' : 'checkbox_sociedade_23',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Metrô/Trem',
                        'id' : 'no_checkbox_Infraestrutura_Metrô/Trem',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Metrô/Trem',
                        'children' : [
                            {
                            'text' : 'Estações Metroferroviárias',
                            'id' : 'checkbox_sociedade_24',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Acessibilidade (Deficiência Física)',
                            'id' : 'checkbox_sociedade_25',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Acessibilidade (Deficiência Visual)',
                            'id' : 'checkbox_sociedade_26',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Integração Física',
                            'id' : 'checkbox_sociedade_27',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Informações de Itinerários',
                            'id' : 'checkbox_sociedade_28',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Informações de Horários',
                            'id' : 'checkbox_sociedade_29',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Informações de Tarifas',
                            'id' : 'checkbox_sociedade_30',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estações Metroferroviárias com Informações de Integração',
                            'id' : 'checkbox_sociedade_31',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Pedestre',
                        'id' : 'no_checkbox_Infraestrutura_Pedestre',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Pedestre',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Vias Exclusivas para Pedestres',
                            'id' : 'checkbox_sociedade_32',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem de Vias Exclusivas Temporárias para Pedestres',
                            'id' : 'checkbox_sociedade_33',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem de calçadas',
                            'id' : 'checkbox_sociedade_34',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'BRT',
                        'id' : 'no_checkbox_Infraestrutura_BRT',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'BRT',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Vias Exclusivas para BRT',
                            'id' : 'checkbox_sociedade_35',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do BRT em Horário de Pico',
                            'id' : 'checkbox_sociedade_36',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Bicicletas',
                        'id' : 'no_checkbox_Infraestrutura_Bicicletas',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Bicicletas',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Ciclovias Exclusivas',
                            'id' : 'checkbox_sociedade_37',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem de Ciclofaixas Exclusivas',
                            'id' : 'checkbox_sociedade_38',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Metrô',
                        'id' : 'no_checkbox_Infraestrutura_Metrô',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Metrô',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Linhas de Metrô',
                            'id' : 'checkbox_sociedade_39',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do Sistema de Metrô no Horário de Pico',
                            'id' : 'checkbox_sociedade_40',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Metrô Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_41',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Metro não Completadas',
                            'id' : 'checkbox_sociedade_42',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Trem',
                        'id' : 'no_checkbox_Infraestrutura_Trem',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Trem',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Linhas de Trem',
                            'id' : 'checkbox_sociedade_43',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do Sistema de Trem no Horário de Pico',
                            'id' : 'checkbox_sociedade_44',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Trem Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_45',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Trem não Completadas',
                            'id' : 'checkbox_sociedade_46',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'VLT',
                        'id' : 'no_checkbox_Infraestrutura_VLT',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'VLT',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Linhas de VLT',
                            'id' : 'checkbox_sociedade_47',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do Sistema de VLT no Horário de Pico',
                            'id' : 'checkbox_sociedade_48',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de VLT Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_49',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de VLT não Completadas',
                            'id' : 'checkbox_sociedade_50',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Monotrilho',
                        'id' : 'no_checkbox_Infraestrutura_Monotrilho',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Monotrilho',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Linhas de Monotrilho',
                            'id' : 'checkbox_sociedade_51',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do Sistema de Monotrilho no Horário de Pico',
                            'id' : 'checkbox_sociedade_52',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Monotrilho Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_53',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Monotrilho não Completadas',
                            'id' : 'checkbox_sociedade_54',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Aeromóvel',
                        'id' : 'no_checkbox_Infraestrutura_Aeromóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Aeromóvel',
                        'children' : [
                            {
                            'text' : 'Quilometragem de Vias Exclusivas de Aeromóvel',
                            'id' : 'checkbox_sociedade_55',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Velocidade Média do Sistema de Aeromóvel no Horário de Pico',
                            'id' : 'checkbox_sociedade_56',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Aeromóvel Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_57',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Aeromóvel não Completadas',
                            'id' : 'checkbox_sociedade_58',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Vans/Microônibus',
                        'id' : 'no_checkbox_Infraestrutura_Vans/Microônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Vans/Microônibus',
                        'children' : [
                            {
                            'text' : 'Proporção de Viagens de Vans/Microônibus Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_59',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Vans/Microônibus não Completadas',
                            'id' : 'checkbox_sociedade_60',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Barco',
                        'id' : 'no_checkbox_Infraestrutura_Barco',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Barco',
                        'children' : [
                            {
                            'text' : 'Proporção de Viagens de Barco Realizadas dentro do Horário Programado',
                            'id' : 'checkbox_sociedade_61',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Barco não Completadas',
                            'id' : 'checkbox_sociedade_62',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Automóvel',
                        'id' : 'no_checkbox_Infraestrutura_Automóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Automóvel',
                        'children' : [
                            {
                            'text' : 'Vagas de Estacionamento Regulamentados no município?',
                            'id' : 'checkbox_sociedade_63',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Vagas de Estacionamento para PCDs',
                            'id' : 'checkbox_sociedade_64',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Vagas de Estacionamento para Idosos',
                            'id' : 'checkbox_sociedade_65',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Vagas de Estacionamento para Gestantes',
                            'id' : 'checkbox_sociedade_66',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Trabalhadores',
                        'id' : 'no_checkbox_Infraestrutura_Trabalhadores',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Trabalhadores',
                        'children' : [
                            {
                            'text' : 'Agentes de Trânsito em Exercício',
                            'id' : 'checkbox_sociedade_67',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Equipamentos',
                        'id' : 'no_checkbox_Infraestrutura_Equipamentos',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Equipamentos',
                        'children' : [
                            {
                            'text' : 'Equipamentos de Fiscalização de Velocidade Existentes',
                            'id' : 'checkbox_sociedade_68',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
                    {
                    'text' : 'Frota',
                    'id' : 'no_checkbox_Frota',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Frota',
                    'children' : [ 
                        {
                        'text' : 'Ônibus',
                        'id' : 'no_checkbox_Frota_Ônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Ônibus',
                        'children' : [
                            {
                            'text' : 'Frota de Ônibus Convencional',
                            'id' : 'checkbox_sociedade_69',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota de Ônibus Convencional',
                            'id' : 'checkbox_sociedade_70',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Convencional com Piso Baixo',
                            'id' : 'checkbox_sociedade_71',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Convencional com Plataforma Elevatória',
                            'id' : 'checkbox_sociedade_72',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Articulado',
                            'id' : 'checkbox_sociedade_73',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota de Ônibus Articulado',
                            'id' : 'checkbox_sociedade_74',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Articulado com Piso Baixo',
                            'id' : 'checkbox_sociedade_75',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Articulado com Plataforma Elevatória',
                            'id' : 'checkbox_sociedade_76',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Biarticulado',
                            'id' : 'checkbox_sociedade_77',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota de Ônibus Biarticulado',
                            'id' : 'checkbox_sociedade_78',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Biarticulado com Piso Baixo',
                            'id' : 'checkbox_sociedade_79',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Ônibus Biarticulado com Plataforma Elevatória',
                            'id' : 'checkbox_sociedade_80',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Veículos Fretados para Passageiros',
                            'id' : 'checkbox_sociedade_81',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Frota de Veículos Escolares',
                            'id' : 'checkbox_sociedade_82',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Ônibus',
                            'id' : 'checkbox_sociedade_83',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Ônibus',
                            'id' : 'checkbox_sociedade_84',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Vans/Microônibus',
                        'id' : 'no_checkbox_Frota_Vans/Microônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Vans/Microônibus',
                        'children' : [
                            {
                            'text' : 'Frota de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_85',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_86',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_87',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_88',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Táxis',
                        'id' : 'no_checkbox_Frota_Táxis',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Táxis',
                        'children' : [
                            {
                            'text' : 'Frota de Táxis',
                            'id' : 'checkbox_sociedade_89',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Táxi',
                            'id' : 'checkbox_sociedade_90',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção da Frota de Táxi que Utiliza Etanol como Fonte de Energia',
                            'id' : 'checkbox_sociedade_91',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção da Frota de Táxi que Utiliza Eletricidade como Fonte de Energia',
                            'id' : 'checkbox_sociedade_92',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção da Frota de Táxi que Utiliza Gás Natural como Fonte de Energia',
                            'id' : 'checkbox_sociedade_93',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção da Frota de Táxi que Utiliza Energia Híbrida como Fonte de Energia',
                            'id' : 'checkbox_sociedade_94',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Mototáxis',
                        'id' : 'no_checkbox_Frota_Mototáxis',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Mototáxis',
                        'children' : [
                            {
                            'text' : 'Frota de Mototáxis',
                            'id' : 'checkbox_sociedade_95',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Metrô',
                        'id' : 'no_checkbox_Frota_Metrô',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Metrô',
                        'children' : [
                            {
                            'text' : 'Frota (composições) de Metrôs',
                            'id' : 'checkbox_sociedade_96',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota (composições) de Metrô',
                            'id' : 'checkbox_sociedade_97',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Metrô',
                            'id' : 'checkbox_sociedade_98',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Metrô',
                            'id' : 'checkbox_sociedade_99',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Trem',
                        'id' : 'no_checkbox_Frota_Trem',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Trem',
                        'children' : [
                            {
                            'text' : 'Frota (composições) de Trem',
                            'id' : 'checkbox_sociedade_100',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota (composição) de Trem',
                            'id' : 'checkbox_sociedade_101',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Trem',
                            'id' : 'checkbox_sociedade_102',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Trem',
                            'id' : 'checkbox_sociedade_103',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Barco',
                        'id' : 'no_checkbox_Frota_Barco',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Barco',
                        'children' : [
                            {
                            'text' : 'Frota de Barcos',
                            'id' : 'checkbox_sociedade_104',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota de Barcos',
                            'id' : 'checkbox_sociedade_105',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Barcos',
                            'id' : 'checkbox_sociedade_106',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'VLT',
                        'id' : 'no_checkbox_Frota_VLT',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'VLT',
                        'children' : [
                            {
                            'text' : 'Frota (composições) de VLT',
                            'id' : 'checkbox_sociedade_107',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade Média da Frota (composição) de VLT',
                            'id' : 'checkbox_sociedade_108',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de VLT',
                            'id' : 'checkbox_sociedade_109',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de VLT',
                            'id' : 'checkbox_sociedade_110',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Monotrilho',
                        'id' : 'no_checkbox_Frota_Monotrilho',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Monotrilho',
                        'children' : [
                            {
                            'text' : 'Frota (composição) de Monotrilho',
                            'id' : 'checkbox_sociedade_111',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade da Frota (composição) de Monotrilho',
                            'id' : 'checkbox_sociedade_112',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Monotrilho',
                            'id' : 'checkbox_sociedade_113',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Monotrilho',
                            'id' : 'checkbox_sociedade_114',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Aeromóvel',
                        'id' : 'no_checkbox_Frota_Aeromóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Aeromóvel',
                        'children' : [
                            {
                            'text' : 'Frota de Aeromóvel',
                            'id' : 'checkbox_sociedade_115',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Capacidade média da Frota de Aeromóvel',
                            'id' : 'checkbox_sociedade_116',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida pela Frota de Aeromóvel',
                            'id' : 'checkbox_sociedade_117',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Idade Média da Frota de Aeromóvel',
                            'id' : 'checkbox_sociedade_118',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Bicicletas',
                        'id' : 'no_checkbox_Frota_Bicicletas',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Bicicletas',
                        'children' : [
                            {
                            'text' : 'Frota de Bicicletas Compartilhadas',
                            'id' : 'checkbox_sociedade_119',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Automóvel',
                        'id' : 'no_checkbox_Frota_Automóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Automóvel',
                        'children' : [
                            {
                            'text' : 'Proporção de Frota que Usa Etanol como Fonte de Energia',
                            'id' : 'checkbox_sociedade_120',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Frota que Usa Eletricidade como Fonte de Energia',
                            'id' : 'checkbox_sociedade_121',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Frota que Usa Gás Natural como Fonte de Energia',
                            'id' : 'checkbox_sociedade_122',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Frota que Usa Hidrogênio como Fonte de Energia',
                            'id' : 'checkbox_sociedade_123',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Frota que Usa Biodiesel como Fonte de Energia',
                            'id' : 'checkbox_sociedade_124',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Frota que Usa Energia Híbrida como Fonte de Energia',
                            'id' : 'checkbox_sociedade_125',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Quilometragem Percorrida por Transporte Remunerado Individual de Passageiros',
                            'id' : 'checkbox_sociedade_126',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
                    {
                    'text' : 'Tarifas',
                    'id' : 'no_checkbox_Tarifas',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Tarifas',
                    'children' : [ 
                        {
                        'text' : 'Valores',
                        'id' : 'no_checkbox_Tarifas_Valores',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Valores',
                        'children' : [
                            {
                            'text' : 'Valor Atual da Tarifa Predominante',
                            'id' : 'checkbox_sociedade_127',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Anterior da Tarifa Predominante',
                            'id' : 'checkbox_sociedade_128',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Subsídios',
                        'id' : 'no_checkbox_Tarifas_Subsídios',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Subsídios',
                        'children' : [
                            {
                            'text' : 'Desconto para Passageiros de Baixa Renda',
                            'id' : 'checkbox_sociedade_129',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Renda Máxima para Baixa Renda',
                            'id' : 'checkbox_sociedade_130',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Desconto para Passageiros entre 60 e 64 anos',
                            'id' : 'checkbox_sociedade_131',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Descontos para PCDs',
                            'id' : 'checkbox_sociedade_132',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Desconto para Estudantes da Rede Pública',
                            'id' : 'checkbox_sociedade_133',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Desconto para Estudantes da Rede Privada',
                            'id' : 'checkbox_sociedade_134',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Bandeira',
                        'id' : 'no_checkbox_Tarifas_Bandeira',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Bandeira',
                        'children' : [
                            {
                            'text' : 'Valor da Bandeira para Táxi',
                            'id' : 'checkbox_sociedade_135',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Bandeira 1 para Táxi por Km rodado',
                            'id' : 'checkbox_sociedade_136',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Bandeira 2 para Táxi por Km rodado',
                            'id' : 'checkbox_sociedade_137',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Serviço de Táxi por hora parada',
                            'id' : 'checkbox_sociedade_138',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Tarifa Aeroporto do Serviço de Táxi',
                            'id' : 'checkbox_sociedade_139',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Bandeira para Mototáxi',
                            'id' : 'checkbox_sociedade_140',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Bandeira 1 para Mototáxi por Km rodado',
                            'id' : 'checkbox_sociedade_141',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Bandeira 2 para Mototáxi por Km rodado',
                            'id' : 'checkbox_sociedade_142',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Serviço de Mototáxi por hora parada',
                            'id' : 'checkbox_sociedade_143',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor da Tarifa Aeroporto do Serviço de Mototáxi',
                            'id' : 'checkbox_sociedade_144',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
                    {
                    'text' : 'Receita',
                    'id' : 'no_checkbox_Receita',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Receita',
                    'children' : [ 
                        {
                        'text' : 'Ônibus',
                        'id' : 'no_checkbox_Receita_Ônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Ônibus',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada por Ônibus',
                            'id' : 'checkbox_sociedade_145',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Ônibus',
                            'id' : 'checkbox_sociedade_146',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Ônibus',
                            'id' : 'checkbox_sociedade_147',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Ônibus',
                            'id' : 'checkbox_sociedade_148',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Ônibus',
                            'id' : 'checkbox_sociedade_149',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Vans/Microônibus',
                        'id' : 'no_checkbox_Receita_Vans/Microônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Vans/Microônibus',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com Vans/Microõnibus',
                            'id' : 'checkbox_sociedade_150',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_151',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_152',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_153',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_154',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Metrô',
                        'id' : 'no_checkbox_Receita_Metrô',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Metrô',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com Metrô',
                            'id' : 'checkbox_sociedade_155',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Metrô',
                            'id' : 'checkbox_sociedade_156',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Metrô',
                            'id' : 'checkbox_sociedade_157',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Metrô',
                            'id' : 'checkbox_sociedade_158',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Metrô',
                            'id' : 'checkbox_sociedade_159',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Trem',
                        'id' : 'no_checkbox_Receita_Trem',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Trem',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com Trem',
                            'id' : 'checkbox_sociedade_160',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Trem',
                            'id' : 'checkbox_sociedade_161',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Trem',
                            'id' : 'checkbox_sociedade_162',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Trem',
                            'id' : 'checkbox_sociedade_163',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Trem',
                            'id' : 'checkbox_sociedade_164',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Barco',
                        'id' : 'no_checkbox_Receita_Barco',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Barco',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com Barco',
                            'id' : 'checkbox_sociedade_165',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Barco',
                            'id' : 'checkbox_sociedade_166',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Barco',
                            'id' : 'checkbox_sociedade_167',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Barco',
                            'id' : 'checkbox_sociedade_168',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Barco',
                            'id' : 'checkbox_sociedade_169',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'VLT',
                        'id' : 'no_checkbox_Receita_VLT',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'VLT',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com VLT',
                            'id' : 'checkbox_sociedade_170',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de VLT',
                            'id' : 'checkbox_sociedade_171',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de VLT',
                            'id' : 'checkbox_sociedade_172',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de VLT',
                            'id' : 'checkbox_sociedade_173',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de VLT',
                            'id' : 'checkbox_sociedade_174',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Monotrilho',
                        'id' : 'no_checkbox_Receita_Monotrilho',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Monotrilho',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com Monotrilho',
                            'id' : 'checkbox_sociedade_175',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Monotrilho',
                            'id' : 'checkbox_sociedade_176',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Monotrilho',
                            'id' : 'checkbox_sociedade_177',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Monotrilho',
                            'id' : 'checkbox_sociedade_178',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Monotrilho',
                            'id' : 'checkbox_sociedade_179',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Aeromóvel',
                        'id' : 'no_checkbox_Receita_Aeromóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Aeromóvel',
                        'children' : [
                            {
                            'text' : 'Receita Tarifária Arrecadada com Aeromóvel',
                            'id' : 'checkbox_sociedade_180',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Tarifário para o Sistema de Aeromóvel',
                            'id' : 'checkbox_sociedade_181',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor do Subsídio Direto ao Sistema de Aeromóvel',
                            'id' : 'checkbox_sociedade_182',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Publicidade no Sistema de Aeromóvel',
                            'id' : 'checkbox_sociedade_183',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Outras Fontes de Recursos no Sistema de Aeromóvel',
                            'id' : 'checkbox_sociedade_184',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
                    {
                    'text' : 'Custos',
                    'id' : 'no_checkbox_Custos',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Custos',
                    'children' : [ 
                        {
                        'text' : 'Ônibus',
                        'id' : 'no_checkbox_Custos_Ônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Ônibus',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Ônibus',
                            'id' : 'checkbox_sociedade_185',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Ônibus',
                            'id' : 'checkbox_sociedade_186',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Ônibus',
                            'id' : 'checkbox_sociedade_187',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Ônibus',
                            'id' : 'checkbox_sociedade_188',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Ônibus',
                            'id' : 'checkbox_sociedade_189',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_190',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_191',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_192',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_193',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_194',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_195',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_196',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_197',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Ônibus',
                            'id' : 'checkbox_sociedade_198',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Vans/Microônibus',
                        'id' : 'no_checkbox_Custos_Vans/Microônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Vans/Microônibus',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_199',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_200',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_201',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_202',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_203',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_204',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_205',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_206',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_207',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_208',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_209',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_210',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_211',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_212',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Metrô',
                        'id' : 'no_checkbox_Custos_Metrô',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Metrô',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Metrô',
                            'id' : 'checkbox_sociedade_213',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Metrô',
                            'id' : 'checkbox_sociedade_214',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Metrô',
                            'id' : 'checkbox_sociedade_215',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Metrô',
                            'id' : 'checkbox_sociedade_216',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Metrô',
                            'id' : 'checkbox_sociedade_217',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Metrô',
                            'id' : 'checkbox_sociedade_218',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Metrô',
                            'id' : 'checkbox_sociedade_219',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_220',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_221',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_222',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_223',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_224',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_225',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Energia no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_226',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de IPTU no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_227',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Metrô',
                            'id' : 'checkbox_sociedade_228',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Trem',
                        'id' : 'no_checkbox_Custos_Trem',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Trem',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Trem',
                            'id' : 'checkbox_sociedade_229',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Trem',
                            'id' : 'checkbox_sociedade_230',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Trem',
                            'id' : 'checkbox_sociedade_231',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Trem',
                            'id' : 'checkbox_sociedade_232',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Trem',
                            'id' : 'checkbox_sociedade_233',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Trem',
                            'id' : 'checkbox_sociedade_234',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Trem',
                            'id' : 'checkbox_sociedade_235',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Trem',
                            'id' : 'checkbox_sociedade_236',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Trem',
                            'id' : 'checkbox_sociedade_237',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Trem',
                            'id' : 'checkbox_sociedade_238',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Trem',
                            'id' : 'checkbox_sociedade_239',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Trem',
                            'id' : 'checkbox_sociedade_240',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Trem',
                            'id' : 'checkbox_sociedade_241',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Energia no Serviço de Trem',
                            'id' : 'checkbox_sociedade_242',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de IPTU no Serviço de Trem',
                            'id' : 'checkbox_sociedade_243',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Trem',
                            'id' : 'checkbox_sociedade_244',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Barco',
                        'id' : 'no_checkbox_Custos_Barco',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Barco',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Barco',
                            'id' : 'checkbox_sociedade_245',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Barco',
                            'id' : 'checkbox_sociedade_246',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Barco',
                            'id' : 'checkbox_sociedade_247',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Barco',
                            'id' : 'checkbox_sociedade_248',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Barco',
                            'id' : 'checkbox_sociedade_249',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Barco',
                            'id' : 'checkbox_sociedade_250',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Barco',
                            'id' : 'checkbox_sociedade_251',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Barco',
                            'id' : 'checkbox_sociedade_252',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Barco',
                            'id' : 'checkbox_sociedade_253',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Barco',
                            'id' : 'checkbox_sociedade_254',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Barco',
                            'id' : 'checkbox_sociedade_255',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Barco',
                            'id' : 'checkbox_sociedade_256',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Barco',
                            'id' : 'checkbox_sociedade_257',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Barco',
                            'id' : 'checkbox_sociedade_258',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'VLT',
                        'id' : 'no_checkbox_Custos_VLT',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'VLT',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de VLT',
                            'id' : 'checkbox_sociedade_259',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de VLT',
                            'id' : 'checkbox_sociedade_260',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de VLT',
                            'id' : 'checkbox_sociedade_261',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de VLT',
                            'id' : 'checkbox_sociedade_262',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de VLT',
                            'id' : 'checkbox_sociedade_263',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de VLT',
                            'id' : 'checkbox_sociedade_264',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de VLT',
                            'id' : 'checkbox_sociedade_265',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de VLT',
                            'id' : 'checkbox_sociedade_266',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de VLT',
                            'id' : 'checkbox_sociedade_267',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de VLT',
                            'id' : 'checkbox_sociedade_268',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de VLT',
                            'id' : 'checkbox_sociedade_269',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de VLT',
                            'id' : 'checkbox_sociedade_270',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de VLT',
                            'id' : 'checkbox_sociedade_271',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Energia no Serviço de VLT',
                            'id' : 'checkbox_sociedade_272',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de IPTU no Serviço de VLT',
                            'id' : 'checkbox_sociedade_273',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de VLT',
                            'id' : 'checkbox_sociedade_274',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Monotrilho',
                        'id' : 'no_checkbox_Custos_Monotrilho',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Monotrilho',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Monotrilho',
                            'id' : 'checkbox_sociedade_275',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Monotrilho',
                            'id' : 'checkbox_sociedade_276',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Monotrilho',
                            'id' : 'checkbox_sociedade_277',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Monotrilho',
                            'id' : 'checkbox_sociedade_278',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Monotrilho',
                            'id' : 'checkbox_sociedade_279',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_280',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_281',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_282',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_283',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_284',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_285',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_286',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_287',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Energia no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_288',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de IPTU no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_289',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Monotrilho',
                            'id' : 'checkbox_sociedade_290',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Aeromóvel',
                        'id' : 'no_checkbox_Custos_Aeromóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Aeromóvel',
                        'children' : [
                            {
                            'text' : 'ISS Incidente no Serviço de Transporte de Aeromóvel',
                            'id' : 'checkbox_sociedade_291',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Taxa de Gerenciamento Incidente no Serviço de Transporte de Aeromóvel',
                            'id' : 'checkbox_sociedade_292',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'PIS Incidente no Serviço de Transporte de Aeromóvel',
                            'id' : 'checkbox_sociedade_293',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Cofins Incidente no Serviço de Transporte de Aeromóvel',
                            'id' : 'checkbox_sociedade_294',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Outros Impostos Incidentes no Serviço de Transporte de Aeromóvel',
                            'id' : 'checkbox_sociedade_295',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Operacional do Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_296',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Mão de Obra Administrativa do Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_297',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Combustíveis no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_298',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Depreciação no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_299',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Remuneração de Serviços no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_300',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Peças no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_301',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Impostos no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_302',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Despesas Administrativas no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_303',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Energia no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_304',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de IPTU no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_305',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Custo de Outros Insumos no Serviço de Aeromóvel',
                            'id' : 'checkbox_sociedade_306',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
                    {
                    'text' : 'Demanda',
                    'id' : 'no_checkbox_Demanda',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Demanda',
                    'children' : [ 
                        {
                        'text' : 'Ônibus',
                        'id' : 'no_checkbox_Demanda_Ônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Ônibus',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Ônibus',
                            'id' : 'checkbox_sociedade_307',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Ônibus',
                            'id' : 'checkbox_sociedade_308',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Ônibus',
                            'id' : 'checkbox_sociedade_309',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Ônibus',
                            'id' : 'checkbox_sociedade_310',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Ônibus',
                            'id' : 'checkbox_sociedade_311',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Ônibus',
                            'id' : 'checkbox_sociedade_312',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Vans/Microônibus',
                        'id' : 'no_checkbox_Demanda_Vans/Microônibus',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Vans/Microônibus',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Vans/Microônibus',
                            'id' : 'checkbox_sociedade_313',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Vans/Microônibus',
                            'id' : 'checkbox_sociedade_314',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Vans/Microônibus',
                            'id' : 'checkbox_sociedade_315',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Vans/Microônibus',
                            'id' : 'checkbox_sociedade_316',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Vans/Microônibus',
                            'id' : 'checkbox_sociedade_317',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Vans/Microônibus',
                            'id' : 'checkbox_sociedade_318',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Metrô',
                        'id' : 'no_checkbox_Demanda_Metrô',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Metrô',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Metrô',
                            'id' : 'checkbox_sociedade_319',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Metrô',
                            'id' : 'checkbox_sociedade_320',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Metrô',
                            'id' : 'checkbox_sociedade_321',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Metrô',
                            'id' : 'checkbox_sociedade_322',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Metrô',
                            'id' : 'checkbox_sociedade_323',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Metrô',
                            'id' : 'checkbox_sociedade_324',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Trem',
                        'id' : 'no_checkbox_Demanda_Trem',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Trem',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Trem',
                            'id' : 'checkbox_sociedade_325',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Trem',
                            'id' : 'checkbox_sociedade_326',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Trem',
                            'id' : 'checkbox_sociedade_327',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Trem',
                            'id' : 'checkbox_sociedade_328',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Trem',
                            'id' : 'checkbox_sociedade_329',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Trem',
                            'id' : 'checkbox_sociedade_330',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Barco',
                        'id' : 'no_checkbox_Demanda_Barco',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Barco',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Barco',
                            'id' : 'checkbox_sociedade_331',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Barco',
                            'id' : 'checkbox_sociedade_332',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Barco',
                            'id' : 'checkbox_sociedade_333',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Barco',
                            'id' : 'checkbox_sociedade_334',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Barco',
                            'id' : 'checkbox_sociedade_335',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Barco',
                            'id' : 'checkbox_sociedade_336',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'VLT',
                        'id' : 'no_checkbox_Demanda_VLT',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'VLT',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por VLT',
                            'id' : 'checkbox_sociedade_337',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por VLT',
                            'id' : 'checkbox_sociedade_338',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por VLT',
                            'id' : 'checkbox_sociedade_339',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por VLT',
                            'id' : 'checkbox_sociedade_340',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de VLT',
                            'id' : 'checkbox_sociedade_341',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por VLT',
                            'id' : 'checkbox_sociedade_342',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Monotrilho',
                        'id' : 'no_checkbox_Demanda_Monotrilho',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Monotrilho',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Monotrilho',
                            'id' : 'checkbox_sociedade_343',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Monotrilho',
                            'id' : 'checkbox_sociedade_344',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Monotrilho',
                            'id' : 'checkbox_sociedade_345',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Monotrilho',
                            'id' : 'checkbox_sociedade_346',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Monotrilho',
                            'id' : 'checkbox_sociedade_347',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Monotrilho',
                            'id' : 'checkbox_sociedade_348',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Aeromóvel',
                        'id' : 'no_checkbox_Demanda_Aeromóvel',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Aeromóvel',
                        'children' : [
                            {
                            'text' : 'Passageiros Comuns Transportados por Aeromóvel',
                            'id' : 'checkbox_sociedade_349',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Vale Transporte Transportados por Aeromóvel',
                            'id' : 'checkbox_sociedade_350',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Estudantes Transportados por Aeromóvel',
                            'id' : 'checkbox_sociedade_351',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Passageiros de Integração Transportados por Aeromóvel',
                            'id' : 'checkbox_sociedade_352',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Gratuidades no Transporte de Aeromóvel',
                            'id' : 'checkbox_sociedade_353',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Total Equivalente de Passageiros Transportados por Aeromóvel',
                            'id' : 'checkbox_sociedade_354',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Viagens',
                        'id' : 'no_checkbox_Demanda_Viagens',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Viagens',
                        'children' : [
                            {
                            'text' : 'Número Médio de Viagens Diárias no Município',
                            'id' : 'checkbox_sociedade_355',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Distância Média das Viagens no Município',
                            'id' : 'checkbox_sociedade_356',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Tempo Médio das Viagens no Município',
                            'id' : 'checkbox_sociedade_357',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens a Pé',
                            'id' : 'checkbox_sociedade_358',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens de Bicicleta',
                            'id' : 'checkbox_sociedade_359',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens em Transporte Coletivo',
                            'id' : 'checkbox_sociedade_360',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens em Transporte Individual Motorizado',
                            'id' : 'checkbox_sociedade_361',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens em Transporte Individual Motocicleta',
                            'id' : 'checkbox_sociedade_362',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens em Transporte Individual Remunerado',
                            'id' : 'checkbox_sociedade_363',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Proporção de Viagens em Outros Modos de Transporte',
                            'id' : 'checkbox_sociedade_364',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Viagens Realizadas por Transporte Remunerado Individual de Passageiros',
                            'id' : 'checkbox_sociedade_365',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
                    {
                    'text' : 'Arrecadação',
                    'id' : 'no_checkbox_Arrecadação',
                    'state' : { 
                        'opened' : true,
                        'disabled' : true,
                    },
                    'type' : 'Arrecadação',
                    'children' : [ 
                        {
                        'text' : 'Tributos',
                        'id' : 'no_checkbox_Arrecadação_Tributos',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Tributos',
                        'children' : [
                            {
                            'text' : 'Arrecadação Anual Tributos pela Utilização da Infraestrutura em Perímetro Urbano',
                            'id' : 'checkbox_sociedade_366',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Valor Arrecadado com Cobrança de Estacionamento',
                            'id' : 'checkbox_sociedade_367',
                            'type' : 'splus_sociedade',
                            },
                            {
                            'text' : 'Arrecadação por Transporte Remunerado Individual de Passageiros',
                            'id' : 'checkbox_sociedade_368',
                            'type' : 'splus_sociedade',
                            }
                        ]}, 
                        {
                        'text' : 'Multas',
                        'id' : 'no_checkbox_Arrecadação_Multas',
                        'state' : {
                            'disabled' : true,
                        },
                        'type' : 'Multas',
                        'children' : [
                            {
                            'text' : 'Arrecadação anual com Multas de Trânsito',
                            'id' : 'checkbox_sociedade_369',
                            'type' : 'splus_sociedade',
                            }
                        ]}
                ]},
            ]
                    },
                
                });
                var to = false;
                $('#busca').keyup(function () {
                    if(to) { clearTimeout(to); }
                    to = setTimeout(function () {
                        var v = $('#busca').val();
                        $('#Tree_pemob').jstree(true).search(v);
                    }, 250);
                });
            });
    
}