/*
 * SnepWatch - Bangle JS 2 Port
 * JoppyFurr 2023
 */

{
    Graphics.prototype.setFontTerminus_14 = function (scale)
    {
        g.setFontCustom (atob ("AB/oJhGIZBf4AAAAAgUB/8AQBAAAGDgWCYRiFwQAABhoBiGIYhd4AAABgKBIIhCP/AAAPiiGIYhiGHgAAA/khiGIYhB4AAAgCAIHhiYOAAAAHeiGIYhiF3gAAB4IRhGEYSfwAEAoOjEyMXBQCAA="), 48, 8, 10);
    };

    Graphics.prototype.setFontTerminus_18 = function (scale)
    {
        /* TODO: Strip out unused characters - Eg, encode zero-width */
        g.setFontCustom (E.toString (require ("heatshrink").decompress (atob ("AH4A/AH4AnoEHBpcgB4MAwEBgECgEEgEIItf/4UEokQxFBiMCkkEn/wCY0CgMIgU//hHCiAQGh0GkEUoFIwMRgkiiFD4GACQkwmGAiMIBwNEkA7Bh98EoqPBiUAog6BgkQiEgv/4CIvjhFBiGCkMEoUIwkRg/ACQv8IoIODHYVAj43FuC4EgfEjEI4EeOA334RZEHYc9SosD8EIkMQoUgwlBhGCkH/QQoA/AH6VD/+IkDHBkGAoMAwUA//gEq8/+GAiMAkUAokAxEBhkMCIkB//iBwkQgUQhEfG7Ef/0hgFCgGEgMIgUAgip/AAM4gEIgEQQwVH/4HBAFEH/+EgEGcwIDCmEAwDtB4CVERgIBGDoOAcB8P/jgHhEEbYMgiFAkGAnylrnkwwkRhEiiFEkGIoMMvhKFgD+Dh//XYMggFAJVd//AxBgOAhkAjEAAYMEn6XFAH4A/AE8PgMhgVCgmEhMIiUQj/gCIkf/0EgkIhEQiEgkFAoF/EgsH+AOFwGBgMBggSFj/ABwkCgQsBfwQAEv8BiMCkUEokIxERiEeoBvXJQUSkEkoFIwGRgMj/+ACIcB//gFoOAgMAgUALQMHJQwACLIM3/kAhC6bO4I0DhUAkUAwQsBCpBEBx//CwQAagbgBLAUQgEggB3Bv6CEcBh1BAAk//jgIDoJKZQQJMBJQpJFACodCh/+JQbRHUQLwFQ4U/8BKFH4PAgFggEwgOAhkACIoAmJQUggVAgmAhMAiU//AiVO4MEiEEoEFgFEoFBAYMAqCOCgE+gC6BAIkH/Ef8E/wAOBAAI="))), 32, 10, 15);
    };

    Graphics.prototype.setFontDigits = function (scale)
    {
        g.setFontCustom (E.toString (require ("heatshrink").decompress (atob ("AEE//4AC4EDAof8Bid8EQMB+ED8/AAwMfgE+BisD8AMEnwIBBisHBAQMCCoYMUh+ABgn4AoIMUTbIMGAH4AhdoKOC8DtBAwTYBBiQHBBgbtCBi1/VAf/84FE/wMSFYZNDAAY4EBmoA7n7PCg/+gf/BQV/8AMSvgLCh+D8/AAwX4nwMWj6OBBgUB+EDBiysBBgasCBiwIDAYMHCoQMTRwP4dIc//+ABiz/8AAbpD//AewcP/gMTdIaOEAAT2EBiLCdBn7pDeQKOC/+D/6bDBiIA/YwbyCAATyDBikH4IMEvkfBi0PwAME/EBBiwDBBgYDCBi0+BAZrB8AMXv7tBAAXnAon+BiQrBAH0HIYP8AgPAJoXAbAIMTvgDCSYPnCASTCBn4M2gE/RQIQDS4QMSf/gAEgJLBeQcfAoRNBBiUD8BwD8E+RwgMSdP4MhUgTpFewYMVAHprCAAZrCBnf//wMDh//WoQMTn/waYn/GYgMRh7GDBgLTDBid/FQQMC/4qBBioA/QoX/wf/OAKSB/AIBOAIMSRwKxDZ4SxCnwM/BmibZBgwA/JoREDJoJRBBiqFDRwkD8CbDBn4MWeQIMEvj6DBh6OCAAOARwQAB/CbDBiAA/AH4ACh/8gEH/wGB/6xBv7YBBiYA/AH4A=="))), 48, 40, 52);
    };

    Graphics.prototype.setFontOutline = function (scale)
    {
        g.setFontCustom (E.toString (require ("heatshrink").decompress (atob ("ADMD/4AC/kAoALDkEEAocCBhkH4AGDn2DEgP+h/8jEgC4WAoOCC4UIggMJnwMEgkfgAMDoIIBBgcQBhV8BgkInwMECoYMCEQQMI/AMEiF8BgcBOwQMDQYQMHn/wv59B4IdCVoXgVDEAn7JDVogA/ACEB+AECXwLtBRwUQfQIMCbAIMLSwIMEoImDoL6CBgg4DBg0X4KbD4IkCAAUYKQoMSi4lDEwILEHAhnDBmKoBAGUD/4ECv/goDPChEBgkASAWAiAMLi/ABgX4gODEwUQvkYkCzCglBwQyCiFEBhMB+AMEkH4BgcChEEBgmABhMD8AMEoPwBgasCBggIBBhEHfQIMDwfgBgcICoQMCEQYMGn//Bgd8EwPAF4VAgABBBgKbBAIIMPEwKvCnz/vAAcDbgUP/hLBdIMBW4L2DiECBhh4BBgc+wYmEbgabEAATpEBgibDWpoM/BhrcBPoP/4N8M4cD8D0BogZBTYUEBAKoCBhYmEEQIA1n/waYjyCAAT/CBh59BBgcInwMEwUgBgkiBhX4BgkQvgMDgMEgQMEoAMJgPwBgkg/AMDAYQMEwAMJa4IMEoKFBBgUEiAVDBgIiDBg0H4LaB8H//yQEgEYAokBBiUXEoIAC/z/ygF/G4PAcoKQDbAKdEbAIMSn2D//4BgN8jAQCUAQDBDoKgBBn4MqPoP/4IMBg6oBgfoCASXCDoVAS4IdDBhAdDZYYAzj44B//8c4QACKQIBBeQYMMnwMDn0Ej/4n4mBiFBTYkEiB9DBg18BgkYEwLp/BjWDUQPBvkAcofgCwL2DSQT2CAoQMMgYmBEQIAyLQIADNYQADPAQM0h//9AMCgIBBBgcQgC1CBhibBBglAEwi1BwAzDoEIcAgMEXIIMDiAmCBgI3BHgQMCaYYMGn/wBgYoBcAYoCOgYMBAIIMOg//+D/zAAZ4B/E///8SQMAogLBkCSBggIBOAIMLg54BvgMBn2DEwjPCXwVBAYK+DBn4MoPAJ9B//BQoKKCgfgVDEAEwgiBAGUDG4pEDAAJNBKIIMOPAkAnyFDTYkEiCbDAYIM/Bh18BgkInwMEwT6DBgMgBgzcB/kf/EgvitDAgKbBTIabCUwYMMEwIAB/D/wAH4AG//AgF/8EAiECgEIgMAAIK+BwDYBBiQmGAH4A5"))), 48, 40, 52);
    };

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
        }, 60000 - (Date.now () % 60000));
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
        let date = new Date ();
        let charge_level = E.getBattery ();

        /* Clear */
        g.reset ();
        g.setBgColor (0, 0, 0);
        g.clear ();

        /* Battery level - Note, '%' is encoded as ':' */
        let battery_text = ((charge_level < 10) ? "0" : "") + charge_level + ":";
        if (charge_level <= 16)
        {
            g.setColor (1, 0, 0);
        }
        else
        {
            g.setColor (0, 1, 1);
        }
        g.setFont ("Terminus_14");
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
        g.setFont ("Terminus_18");
        g.drawString (date_text, 65, 2);

        /* Time */
        let hours = date.getHours ();
        let minutes = date.getMinutes ();
        let time_hh = ((hours < 10) ? "0" : "") + hours;
        let time_mm = ((minutes < 10) ? "0" : "") + minutes;

        g.setFont ("Digits");
        g.setColor (0.5, 0, 0);
        g.drawString (time_hh, -2, 60);
        g.drawString (":", 71, 55);
        g.drawString (time_mm, 98, 60);

        g.setFont ("Outline");
        g.setColor (1, 0, 0);
        g.drawString (time_hh, -2, 60);
        g.drawString (":", 71, 55);
        g.drawString (time_mm, 98, 60);

        /* For now, draw the step and heart rate counter here */
        let health = Bangle.getHealthStatus ('day');
        let steps_string = "" + health.steps;
        if (health.steps >= 1000)
        {
            steps_string = steps_string.slice (0, -3) + "," + steps_string.slice (-3);
        }
        g.setFont("Terminus_18");
        g.setColor (0, 1, 0);
        g.drawString ("{", 2, 144); /* Arrows */
        g.setColor (1, 0, 0);
        g.drawString ("|", 2, 160); /* Heart */
        g.setColor (1, 1, 1);
        g.drawString (steps_string, 2 + 15, 144);
        g.drawString ("--", 2 + 15, 160);

        /* Queue up the next tick */
        snepwatch_tick_queue ();
    };

    g.setTheme ( { bg:"#000", fg:"#fff", dark:true } ).clear ();

    /* Initial call, will tick once per minute. */
    snepwatch_tick ();

    Bangle.setUI ("clock");

    /* Use a swipe to show the widgets */
    Bangle.loadWidgets ();
    require ("widget_utils").swipeOn ();
}
