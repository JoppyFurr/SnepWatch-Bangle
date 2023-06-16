/*
 * SnepWatch - Bangle JS 2 Port
 * JoppyFurr 2023
 */

{
    var snepwatch_tick_timeout;

    /*
     * Tick once per minute.
     */
    let snepwatch_tick_queue = function ()
    {
        if (snepwatch_tick_timeout)
        {
            clearTimeout (snepwatch_tick_timeout);
        }

        snepwatch_tick_timeout = setTimeout (function () {
            snepwatch_tick_timeout = undefined;
            snepwatch_tick ();
        }, 60000 - (Date.now() % 60000));
    };


    /*
     * Called once per minute.
     *
     * Updates the time, date, and battery level.
     */
    let snepwatch_tick = function ()
    {
        /* Data */
        let days = [ "Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat " ];
        let months = [ " Jan", " Feb", " Mar", " Apr", " May", " June", " July", " Aug", " Snep", " Oct", " Nov", " Dec"];
        let date = new Date();
        let charge_level = E.getBattery();

        /* Clear */
        g.reset ();
        g.setBgColor (0, 0, 0);
        g.clear ();

        /* Battery level */
        let battery_text = ((charge_level < 10) ? "0" : "") + charge_level + "%";
        if (charge_level <= 16)
        {
            g.setColor (1, 0, 0);
        }
        else
        {
            g.setColor (0, 1, 1);
        }
        g.setFont("6x8");
        g.drawString (battery_text, 2, 2);

        /* Date */
        let day = days [ date.getDay () ];
        let dd = date.getDate ();
        dd = ((dd < 10) ? "0" : "") + dd;
        let month = months [ date.getMonth () ];

        let date_text = day + dd + month;
        if (date_text.length < 11)
        {
            date_text = " " + date_text;
        }
        g.setColor (1, 1, 1);
        g.setFont("6x15");
        g.drawString(date_text, 112, 2);

        /* Time */
        let hours = date.getHours ();
        let minutes = date.getMinutes ();
        let time_hh = ((hours < 10) ? "0" : "") + hours;
        let time_mm = ((minutes < 10) ? "0" : "") + minutes;
        g.setColor (0, 1, 0);
        g.setFont12x20(2);
        g.drawString(time_hh + ":" + time_mm, 46, 72);

        /* Queue up the next tick */
        snepwatch_tick_queue ();
    };

    g.setTheme ( { bg:"#000", fg:"#fff", dark:true } ).clear ();

    /* Initial call, will tick once per minute. */
    snepwatch_tick ();

    Bangle.setUI ("clock");

    /* Use a swipe to show the widgets */
    Bangle.loadWidgets ();
    require("widget_utils").swipeOn();
}
