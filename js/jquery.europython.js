/*
EuroPython JQuery plugin which is the main.entry point for the application.

This requires europythonlib jquery.epl.* to be loaded before this module,
in addition to the other dependancies.

Oisin Mulvihill
2011-03-20.

*/ 
(function($){

    function print(msg) {
        console.log(msg);
    }

    var settings = {
        // My index like object based on the test / laster years conference data.
        "index": {
            "days": [
                // Order important i.e. day1, 2, etc as other code relies on this.
                "http://www.pycon.it/conference/schedule/pycon4/day1.xml",
                "http://www.pycon.it/conference/schedule/pycon4/day2.xml"
            ]
        }
    };


    function fetch_and_cache() {
        /*Recover the conference information and store it locally.
        */
        // Recover each days data from the conference data:
        $(settings.index.days).each(function (i, day) {
            function read_success(xml) {
                print("data from '" + day + "' recovered OK. Converting.");
                var schedule = $.epl.schedule.convert(xml);

                print("data converted OK.");
            }

            function read_error() {
                print("Unable to read from'" + day + "'.");
            }

            print("Recovering data from '" + day + "'.");
            $.epl.schedule.fetch(day, read_success, read_error);
        })
    }


    // Set up the om1 app controls:
    //
    function app_init(options){
        if (options) { 
            $.extend(settings, options);
        }

        fetch_and_cache();
    }


    // $.europy.<...>
    $.extend({
        "europy": {
            "init": app_init
        }
    });


})(jQuery);

