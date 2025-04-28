export function TreeBuilder_catalog($, cidade) {
    if (cidade == 'sp_catalog') {
        $(function () {
            $('#Tree_catalog').jstree({
                "types" : 
                {
                    "bilhetagem" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema jstree-ocl"}}, 
                    "gps" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl jstree-ocl"}},
                    "gtfs" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema jstree-ocl"}}, 
                    "splus" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "splus"}}, 
                },
                'plugins' : [ "checkbox" , "search", "types", "themes" ],
                'core' : {
                    'themes' : { "stripes" : false },
                    'data' : [{
                        "text" : "Bilhetagem",
                        'id' : 'no_checkbox_bilhetagem_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true,
                        },
                        "type" : "bilhetagem",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_bilhetagem_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_bilhetagem_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_bilhetagem_3',
                                "type" : "splus",
                            },
                        ]
                        },
                        {
                        "text" : "GPS",
                        'id' : 'no_checkbox_gps_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true
                        },
                        "type" : "gps",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_gps_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_gps_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_gps_3',
                                "type" : "splus",
                            },
                        ]
                        },
                        {
                        "text" : "GTFS",
                        'id' : 'no_checkbox_gtfs_64',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "gtfs",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_gtfs_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_gtfs_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_gtfs_3',
                                "type" : "splus",
                            },
                        ]
                        }
                    ]
                },
            });
            var to = false;
            $('#busca').keyup(function () {
                if(to) { clearTimeout(to); }
                to = setTimeout(function () {
                    var v = $('#busca').val();
                    $('#Tree_catalog').jstree(true).search(v);
                }, 250);
            });
        });
    } else if (cidade == 'rj_catalog') {
        $(function () {
            $('#Tree_catalog').jstree({
                "types" : 
                {
                    "bilhetagem" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema jstree-ocl"}}, 
                    "gps" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl jstree-ocl"}},
                    "gtfs" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema jstree-ocl"}}, 
                    "splus" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "splus"}}, 
                },
                'plugins' : [ "checkbox" , "search", "types", "themes" ],
                'core' : {
                    'themes' : { "stripes" : false },
                    'data' : [{
                        "text" : "Bilhetagem",
                        'id' : 'no_checkbox_bilhetagem_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true,
                        },
                        "type" : "bilhetagem",
                        "children" : [
                            {
                                "text" : "Demanda de Passageiros",
                                "id" : "portal_dados:demanda_transporte_rj",
                                "type" : "splus",
                                },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_bilhetagem_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_bilhetagem_3',
                                "type" : "splus",
                            },
                        ]
                        },
                        {
                        "text" : "GPS",
                        'id' : 'no_checkbox_gps_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true
                        },
                        "type" : "gps",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_gps_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_gps_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_gps_3',
                                "type" : "splus",
                            },
                        ]
                        },
                        {
                        "text" : "GTFS",
                        'id' : 'no_checkbox_gtfs_64',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "gtfs",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_gtfs_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_gtfs_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_gtfs_3',
                                "type" : "splus",
                            },
                        ]
                        }
                    ]
                },
            });
            var to = false;
            $('#busca').keyup(function () {
                if(to) { clearTimeout(to); }
                to = setTimeout(function () {
                    var v = $('#busca').val();
                    $('#Tree_catalog').jstree(true).search(v);
                }, 250);
            });
        });
    } else if (cidade == 'noi_catalog') {
        $(function () {
            $('#Tree_catalog').jstree({
                "types" : 
                {
                    "bilhetagem" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema jstree-ocl"}}, 
                    "gps" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema  jstree-ocl jstree-ocl"}},
                    "gtfs" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "tema jstree-ocl"}}, 
                    "splus" : {"icon" : "./icons/blank.svg", "a_attr" : {"class" : "splus"}}, 
                },
                'plugins' : [ "checkbox" , "search", "types", "themes" ],
                'core' : {
                    'themes' : { "stripes" : false },
                    'data' : [{
                        "text" : "Bilhetagem",
                        'id' : 'no_checkbox_bilhetagem_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true,
                        },
                        "type" : "bilhetagem",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_bilhetagem_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_bilhetagem_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_bilhetagem_3',
                                "type" : "splus",
                            },
                        ]
                        },
                        {
                        "text" : "GPS",
                        'id' : 'no_checkbox_gps_1',
                        "state" : { 
                            "opened" : true,
                            "disabled" : true
                        },
                        "type" : "gps",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_gps_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_gps_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_gps_3',
                                "type" : "splus",
                            },
                        ]
                        },
                        {
                        "text" : "GTFS",
                        'id' : 'no_checkbox_gtfs_64',
                        "state" : { 
                            "disabled" : true,
                            "opened" : true
                        },
                        "type" : "gtfs",
                        "children" : [
                            {
                                "text" : "Dado 1",
                                'id' : 'checkbox_gtfs_1',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 2",
                                'id' : 'checkbox_gtfs_2',
                                "type" : "splus",
                            },
                            {
                                "text" : "Dado 3",
                                'id' : 'checkbox_gtfs_3',
                                "type" : "splus",
                            },
                        ]
                        }
                    ]
                },
            });
            var to = false;
            $('#busca').keyup(function () {
                if(to) { clearTimeout(to); }
                to = setTimeout(function () {
                    var v = $('#busca').val();
                    $('#Tree_catalog').jstree(true).search(v);
                }, 250);
            });
        });
    }
} 