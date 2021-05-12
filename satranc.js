let main = {

    variables: {
        sira: 'b',
        secilen_kare: '',
        highlighted: [],
        kare: {
            b_sah: {
                position: '5_1',
                img: '&#9812;',
                captured: false,
                moved: false,
                type: 'b_sah'

            },
            b_vezir: {
                position: '4_1',
                img: '&#9813;',
                captured: false,
                moved: false,
                type: 'b_vezir'
            },
            b_fil1: {
                position: '3_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'b_fil'
            },
            b_fil2: {
                position: '6_1',
                img: '&#9815;',
                captured: false,
                moved: false,
                type: 'b_fil'
            },
            b_at1: {
                position: '2_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'b_at'
            },
            b_at2: {
                position: '7_1',
                img: '&#9816;',
                captured: false,
                moved: false,
                type: 'b_at'
            },
            b_kale1: {
                position: '1_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'b_kale'
            },
            b_kale2: {
                position: '8_1',
                img: '&#9814;',
                captured: false,
                moved: false,
                type: 'b_kale'
            },
            b_piyon1: {
                position: '1_2',
                img: '&#9817;',
                captured: false,
                moved: false,
                type: 'b_piyon',


            },
            b_piyon2: {
                position: '2_2',
                img: '‪&#9817;',
                captured: false,
                moved: false,
                type: 'b_piyon',
            },
            b_piyon3: {
                position: '3_2',
                img: '&#9817;',
                captured: false,
                type: 'b_piyon',
                moved: false
            },
            b_piyon4: {
                position: '4_2',
                img: '&#9817;',
                captured: false,
                type: 'b_piyon',
                moved: false
            },
            b_piyon5: {
                position: '5_2',
                img: '&#9817;',
                captured: false,
                type: 'b_piyon',
                moved: false
            },
            b_piyon6: {
                position: '6_2',
                img: '&#9817;',
                captured: false,
                type: 'b_piyon',
                moved: false
            },
            b_piyon7: {
                position: '7_2',
                img: '&#9817;',
                captured: false,
                type: 'b_piyon',
                moved: false
            },
            b_piyon8: {
                position: '8_2',
                img: '&#9817;',
                captured: false,
                type: 'b_piyon',
                moved: false
            },

            s_sah: {
                position: '5_8',
                img: '&#9818;',
                captured: false,
                moved: false,
                type: 's_sah'
            },
            s_vezir: {
                position: '4_8',
                img: '&#9819;',
                captured: false,
                moved: false,
                type: 'bs_vezir'
            },
            s_fil1: {
                position: '3_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 's_fil'
            },
            s_fil2: {
                position: '6_8',
                img: '&#9821;',
                captured: false,
                moved: false,
                type: 's_fil'
            },
            s_at1: {
                position: '2_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 's_at'
            },
            s_at2: {
                position: '7_8',
                img: '&#9822;',
                captured: false,
                moved: false,
                type: 's_at'
            },
            s_kale1: {
                position: '1_8',
                img: '&#9820;',
                captured: false,
                moved: false,
                type: 's_kale'
            },
            s_kale2: {
                position: '8_8',
                img: '‪&#9820;',
                captured: false,
                moved: false,
                type: 's_kale'
            },
            s_piyon1: {
                position: '1_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon2: {
                position: '2_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon3: {
                position: '3_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon4: {
                position: '4_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon5: {
                position: '5_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon6: {
                position: '6_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon7: {
                position: '7_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            },
            s_piyon8: {
                position: '8_7',
                img: '&#9823;',
                captured: false,
                type: 's_piyon',
                moved: false
            }

        }
    },

    methods: {
        satranc_kuralları: function() {
            $('.satirdaki_kare').attr('satranc', 'null');
            for (let satranc_karesi in main.variables.kare) {
                $('#' + main.variables.kare[satranc_karesi].position).html(main.variables.kare[satranc_karesi].img);
                $('#' + main.variables.kare[satranc_karesi].position).attr('satranc', satranc_karesi);
            }
        },

        moveoptions: function(secilen_kare) {

            let position = { x: '', y: '' };
            position.x = main.variables.kare[secilen_kare].position.split('_')[0];
            position.y = main.variables.kare[secilen_kare].position.split('_')[1];


            var options = [];
            var coordinates = [];
            var startpoint = main.variables.kare[secilen_kare].position;
            var c1, c2, c3, c4, c5, c6, c7, c8;

            if (main.variables.highlighted.length != 0) {
                main.methods.togglehighlight(main.variables.highlighted);
            }

            switch (main.variables.kare[secilen_kare].type) {
                case 'b_sah':

                    if ($('#6_1').attr('satranc') == 'null' && $('#7_1').attr('satranc') == 'null' && main.variables.kare['b_sah'].moved == false && main.variables.kare['b_kale2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.kare[secilen_kare].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 's_sah':

                    if ($('#6_8').attr('satranc') == 'null' && $('#7_8').attr('satranc') == 'null' && main.variables.kare['s_sah'].moved == false && main.variables.kare['s_kale2'].moved == false) {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 2, y: 0 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    } else {
                        coordinates = [{ x: 1, y: 1 }, { x: 1, y: 0 }, { x: 1, y: -1 }, { x: 0, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 0 }, { x: -1, y: 1 }, { x: 0, y: 1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });
                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.kare[secilen_kare].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_vezir':

                    c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 's_vezir':

                    c1 = main.methods.s_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.s_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.s_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.s_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);
                    c5 = main.methods.s_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c6 = main.methods.s_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c7 = main.methods.s_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c8 = main.methods.s_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4).concat(c5).concat(c6).concat(c7).concat(c8);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 'b_fil':

                    c1 = main.methods.b_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.b_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.b_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 's_fil':

                    c1 = main.methods.s_options(position, [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }]);
                    c2 = main.methods.s_options(position, [{ x: 1, y: -1 }, { x: 2, y: -2 }, { x: 3, y: -3 }, { x: 4, y: -4 }, { x: 5, y: -5 }, { x: 6, y: -6 }, { x: 7, y: -7 }]);
                    c3 = main.methods.s_options(position, [{ x: -1, y: 1 }, { x: -2, y: 2 }, { x: -3, y: 3 }, { x: -4, y: 4 }, { x: -5, y: 5 }, { x: -6, y: 6 }, { x: -7, y: 7 }]);
                    c4 = main.methods.s_options(position, [{ x: -1, y: -1 }, { x: -2, y: -2 }, { x: -3, y: -3 }, { x: -4, y: -4 }, { x: -5, y: -5 }, { x: -6, y: -6 }, { x: -7, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);
                    break;
                case 'b_at':

                    coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function(val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    options = (main.methods.options(startpoint, coordinates, main.variables.kare[secilen_kare].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 's_at':

                    coordinates = [{ x: -1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: -2 }, { x: -1, y: -2 }, { x: 2, y: 1 }, { x: 2, y: -1 }, { x: -2, y: -1 }, { x: -2, y: 1 }].map(function(val) {
                        return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                    });

                    options = (main.methods.options(startpoint, coordinates, main.variables.kare[secilen_kare].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_kale':

                    c1 = main.methods.b_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.b_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.b_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.b_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 's_kale':

                    c1 = main.methods.s_options(position, [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }]);
                    c2 = main.methods.s_options(position, [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, { x: 0, y: 6 }, { x: 0, y: 7 }]);
                    c3 = main.methods.s_options(position, [{ x: -1, y: 0 }, { x: -2, y: 0 }, { x: -3, y: 0 }, { x: -4, y: 0 }, { x: -5, y: 0 }, { x: -6, y: 0 }, { x: -7, y: 0 }]);
                    c4 = main.methods.s_options(position, [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 0, y: -3 }, { x: 0, y: -4 }, { x: 0, y: -5 }, { x: 0, y: -6 }, { x: 0, y: -7 }]);

                    coordinates = c1.concat(c2).concat(c3).concat(c4);

                    options = coordinates.slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;
                case 'b_piyon ':

                    if (main.variables.kare[secilen_kare].moved == false) {

                        coordinates = [{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    } else if (main.variables.kare[secilen_kare].moved == true) {

                        coordinates = [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: -1, y: 1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.kare[secilen_kare].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

                case 's_piyon':


                    if (main.variables.kare[secilen_kare].moved == false) {

                        coordinates = [{ x: 0, y: -1 }, { x: 0, y: -2 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    } else if (main.variables.kare[secilen_kare].moved == true) {

                        coordinates = [{ x: 0, y: -1 }, { x: 1, y: -1 }, { x: -1, y: -1 }].map(function(val) {
                            return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
                        });

                    }

                    options = (main.methods.options(startpoint, coordinates, main.variables.kare[secilen_kare].type)).slice(0);
                    main.variables.highlighted = options.slice(0);
                    main.methods.togglehighlight(options);

                    break;

            }
        },

        options: function(startpoint, coordinates, piecetype) {

            coordinates = coordinates.filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            });

            switch (piecetype) {

                case 'b_sah':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('satranc') == 'null' || ($('#' + val).attr('satranc')).slice(0, 1) == 's');
                    });

                    break;
                case 's_sah':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('satranc') == 'null' || ($('#' + val).attr('satranc')).slice(0, 1) == 'b');
                    });

                    break;
                case 'b_at':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('satranc') == 'null' || ($('#' + val).attr('satranc')).slice(0, 1) == 's');
                    });

                    break;

                case 's_at':

                    coordinates = coordinates.filter(val => {
                        return ($('#' + val).attr('satranc') == 'null' || ($('#' + val).attr('satranc')).slice(0, 1) == 'b');
                    });

                    break;

                case 'b_piyon':

                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) {
                            return ($('#' + val).attr('satranc') != 'null' && ($('#' + val).attr('satranc')).slice(0, 1) == 's');
                        } else {
                            if (coordinate[1] == (parseInt(sp.y) + 2) && $('#' + sp.x + '_' + (parseInt(sp.y) + 1)).attr('satranc') != 'null') {

                            } else {
                                return ($('#' + val).attr('satranc') == 'null');
                            }
                        }

                    });

                    break;

                case 's_piyon':

                    coordinates = coordinates.filter(val => {
                        let sp = { x: 0, y: 0 };
                        let coordinate = val.split('_');

                        sp.x = startpoint.split('_')[0];
                        sp.y = startpoint.split('_')[1];

                        if (coordinate[0] < sp.x || coordinate[0] > sp.x) {
                            return ($('#' + val).attr('satranc') != 'null' && ($('#' + val).attr('satranc')).slice(0, 1) == 'b');
                        } else {
                            if (coordinate[1] == (parseInt(sp.y) - 2) && $('#' + sp.x + '_' + (parseInt(sp.y) - 1)).attr('satranc') != 'null') {

                            } else {
                                return ($('#' + val).attr('satranc') == 'null');
                            }
                        }
                    });

                    break;
            }

            return coordinates;
        },

        b_options: function(position, coordinates) {

            let flag = false;

            coordinates = coordinates.map(function(val) {
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            }).filter(val => {
                if (flag == false) {
                    if ($('#' + val).attr('satranc') == 'null') {
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('satranc')).slice(0, 1) == 's') {
                        flag = true;
                        console.log(val)
                        return val;
                    } else if (($('#' + val).attr('satranc')).slice(0, 1) == 'b') {
                        console.log(val + '-3')
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        b_options: function(position, coordinates) {

            let flag = false;

            coordinates = coordinates.map(function(val) {
                return (parseInt(position.x) + parseInt(val.x)) + '_' + (parseInt(position.y) + parseInt(val.y));
            }).filter(val => {
                let pos = { x: 0, y: 0 };
                pos.x = parseInt(val.split('_')[0]);
                pos.y = parseInt(val.split('_')[1]);

                if (!(pos.x < 1) && !(pos.x > 8) && !(pos.y < 1) && !(pos.y > 8)) {
                    return val;
                }
            }).filter(val => {
                if (flag == false) {
                    if ($('#' + val).attr('satranc') == 'null') {
                        return val;
                    } else if (($('#' + val).attr('satranc')).slice(0, 1) == 'b') {
                        flag = true;
                        return val;
                    } else if (($('#' + val).attr('satranc')).slice(0, 1) == 's') {
                        flag = true;
                    }
                }
            });

            return coordinates;

        },

        capture: function(target) {
            let secilen_kare = {
                isim: $('#' + main.variables.secilen_kare).attr('satranc'),
                id: main.variables.secilen_kare
            };



            $('#' + target.id).html(main.variables.kare[secilen_kare.isim].img);
            $('#' + target.id).attr('satranc', secilen_kare.isim);

            $('#' + secilen_kare.id).html('');
            $('#' + secilen_kare.id).attr('satranc', 'null');

            main.variables.kare[secilen_kare.isim].position = target.id;
            main.variables.kare[secilen_kare.isim].moved = true;

            main.variables.kare[target.isim].captured = true;


        },

        move: function(target) {

            let secilen_kare = $('#' + main.variables.secilen_kare).attr('satranc');


            $('#' + target.id).html(main.variables.kare[secilen_kare].img);
            $('#' + target.id).attr('satranc', secilen_kare);

            $('#' + main.variables.secilen_kare).html('');
            $('#' + main.variables.secilen_kare).attr('satranc', 'null');
            main.variables.kare[secilen_kare].position = target.id;
            main.variables.kare[secilen_kare].moved = true;



        },

        endturn: function() {

            if (main.variables.sira == 'b') {
                main.variables.sira = 's';


                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;

                main.variables.secilen_kare = '';

                $('#sira').html("Sıra Siyahta");

                $('#sira').addClass('sirahighlight');
                window.setTimeout(function() {
                    $('#sira').removeClass('sirahighlight');
                }, 1500);

            } else if (main.variables.sira = 's') {
                main.variables.sira = 'b';


                main.methods.togglehighlight(main.variables.highlighted);
                main.variables.highlighted.length = 0;

                main.variables.secilen_kare = '';

                $('#sira').html("Sıra Beyazda");

                $('#sira').addClass('sirahighlight');
                window.setTimeout(function() {
                    $('#sira').removeClass('sirahighlight');
                }, 1500);

            }

        },

        togglehighlight: function(options) {
            options.forEach(function(element, index, array) {
                $('#' + element).toggleClass("yesil shake-little neonyesil_txt");
            });
        },

    }
};

$(document).ready(function() {
    main.methods.satranc_kuralları();

    $('.satirdaki_kare').click(function(e) {

        var secilen_kare = {
            isim: '',
            id: main.variables.secilen_kare
        };

        if (main.variables.secilen_kare == '') {
            secilen_kare.isim = $('#' + e.target.id).attr('satranc');
        } else {
            secilen_kare.isim = $('#' + main.variables.secilen_kare).attr('satranc');
        }

        var target = {
            isim: $(this).attr('satranc'),
            id: e.target.id
        };

        if (main.variables.secilen_kare == '' && target.isim.slice(0, 1) == main.variables.sira) {


            main.variables.secilen_kare = e.target.id;
            main.methods.moveoptions($(this).attr('satranc'));

        } else if (main.variables.secilen_kare != '' && target.isim == 'null') {

            if (secilen_kare.isim == 'b_sah' || secilen_kare.isim == 's_sah') {

                let t0 = (secilen_kare.isim = 'b_sah');
                let t1 = (secilen_kare.isim = 's_sah');
                let t2 = (main.variables.kare[secilen_kare.isim].moved == false);
                let t3 = (main.variables.kare['s_kale2'].moved == false);
                let t4 = (main.variables.kare['b_kale2'].moved == false);
                let t5 = (target.id == '7_8');
                let t6 = (target.id == '7_1');

                if (t0 && t2 && t4 && t6) {

                    let k_position = '5_1';
                    let k_target = '7_1';
                    let r_position = '8_1';
                    let r_target = '6_1';

                    main.variables.kare['b_sah'].position = '7_1';
                    main.variables.kare['b_sah'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('satranc', 'null');
                    $('#' + k_target).html(main.variables.kare['b_sah'].img);
                    $('#' + k_target).attr('satranc', 'b_sah');

                    main.variables.kare['b_kale2'].position = '6_1';
                    main.variables.kare['b_kale2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('satranc', 'null');
                    $('#' + r_target).html(main.variables.kare['b_kale2'].img);
                    $('#' + r_target).attr('satranc', 'b_kale2');

                    main.methods.endturn();

                } else if (t1 && t2 && t3 && t5) {

                    let k_position = '5_8';
                    let k_target = '7_8';
                    let r_position = '8_8';
                    let r_target = '6_8';


                    main.variables.kare['s_sah'].position = '7_8';
                    main.variables.kare['s_sah'].moved = true;
                    $('#' + k_position).html('');
                    $('#' + k_position).attr('satranc', 'null');
                    $('#' + k_target).html(main.variables.kare['s_sah'].img);
                    $('#' + k_target).attr('satranc', 's_sah');

                    main.variables.kare['s_kale2'].position = '6_8';
                    main.variables.kare['s_kale2'].moved = true;
                    $('#' + r_position).html('');
                    $('#' + r_position).attr('satranc', 'null');
                    $('#' + r_target).html(main.variables.kare['s_kale2'].img);
                    $('#' + r_target).attr('satranc', 's_kale2');

                    main.methods.endturn();

                } else {
                    main.methods.move(target);
                    main.methods.endturn();
                }

            } else {

                main.methods.move(target);
                main.methods.endturn();

            }

        } else if (main.variables.secilen_kare != '' && target.isim != 'null' && target.id != secilen_kare.id && secilen_kare.isim.slice(0, 1) != target.isim.slice(0, 1)) {

            if (secilen_kare.id != target.id && main.variables.highlighted.indexOf(target.id) != (-1)) {


                main.methods.capture(target)
                main.methods.endturn();

            }

        } else if (main.variables.secilen_kare != '' && target.isim != 'null' && target.id != secilen_kare.id && secilen_kare.isim.slice(0, 1) == target.isim.slice(0, 1)) {

            main.methods.togglehighlight(main.variables.highlighted);
            main.variables.highlighted.length = 0;

            main.variables.secilen_kare = target.id;
            main.methods.moveoptions(target.isim);

        }

    });

    $('body').contextmenu(function(e) {
        e.preventDefault();
    });

});