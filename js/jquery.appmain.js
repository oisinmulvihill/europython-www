/*jslint white: true, undef: true, newcap: true, nomen: true, regexp: true, plusplus: true, bitwise: true, maxerr: 50, indent: 4 */

/* jquery plugin: EuroPython mobile app main. */

(function ($) {

    $.epl = $.epl || {};

    var app_title = "EuroPython 2011";
    var app_name = "EuroPython";
    
    
    function create_schedule_gui() {
        return {
            title: 'Schedule',
            html: '-- The schedule controls --',
            cls: 'card1'
        }
    }
    
    function create_twitter_gui() {
        return {
            title: 'Twitter',
            html: '-- twitter controls go here --',
            cls: 'card2'
        }
    }
    
    function create_settings_gui() {
        return {
            title: 'Settings',
            html: '-- Application set up and controls go here --',
            cls: 'card3'
        }
    }

    function sencha_gui_init() {
        /* Create the GUI
        */
        function gui_setup() {
            var control_tabs = new Ext.TabPanel({
                ui: 'light',
                sortable: true,
                items: [
                    create_schedule_gui(),
                    create_twitter_gui(),
                    create_settings_gui()
                ]
            });

            var panel = new Ext.Panel({
                fullscreen: true,
                dockedItems: [
                    new Ext.Toolbar({
                        title: app_title
                    })
                ],
                items: [
                    control_tabs
                ],
                layout: 'fit'
            });
        }

        new Ext.Application({
            "name": app_name,
            "launch": gui_setup
        });
    }


    function init() {
        function device_ready() {
            console.log("init: device_ready ");
            sencha_gui_init();
        }

        document.addEventListener("deviceready", device_ready, false);        
    }
    

    $.extend($.epl, {
        "appmain": {
            "init": init
        }
    });

})(jQuery);
