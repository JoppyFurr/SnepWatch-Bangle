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
        g.setFontCustom (E.toString (require ("heatshrink").decompress (atob ("ACkH/4AB/EBAgX+gF/AoWAj4EC8F4C4N4g+eAgMegPnwAhBwF58EAgPgjwUBBIIUCBIIUDBgIUCjwBBA4IWCCgIJBCgQeBCgQeBCgQJCCgIJCCgRKCCgIeBCgJoUXv5dCNYJdCNYJyCBoJyCNAQJCg+BBIQNBDwQUBDwQUBOQf/z4ED84ED/IEDRAL/DFoQpCJgwpCCjAAlg/4AYN/wJaCj/gv5FBBoIGBJAP+UweHzxSC8PnUwd5UwceCgV4g4UCj0BCgRxBCgRxBCgQJBCgQJBCgYMBCgR7BCgQWCCgIJBCgSaCCgKaCcwP/GoWB/41Dv5zCvEfOYSntAQKZBTgSuBJAICBU4QCBdgaSDNAYFCU4Z9WClKnBw//NAP/8P/NAX4v60BU4MfWgQAqVISQCboQABVIQABVITuCVQced4cHw4UCgPhCgRyBCgRyBCgd4PwQeBPwSRCCgQSBCgQSBCgQSBCgQHCCgKbDDwYMCWAQMBTQIACz4ED84ED/IEDOggAlHwKmBvDZBGILwCcgMHwIEBNIR8Dg+eL4fnPgd5PgceCn4SBNQISCNQISCOoOBCQJ1Bc4SoqVIQyBVISoCVIJHBVIRJBKoRJBKoSyBKoV4jyn/CgRpBU4QEBU4R0ECwKntKIIACIgRGCHQSYCCjZpBPoJpCPoJpC/IUCj/+SAR8BSATlCCgN/coIUBj4CBbYKQCbYKQCCgITBHwQTCDgITCGARTDUgZFBUlQ0Ew7mBGgPhcwRJBcwRJBcwR9BP4SSBP4SSBP4V58B/CjwU+NCinrc4Q+Bc4Y8CeIQ8DMwRgBNAJeBNAQMCNAJzCPoQUrvClC8CcBCgUHwIUCBYJoBAAOANAIABBoJoBOgRoBOggA/aSZcBv5pBLgMfNIScBNIScBNP4AUA=="))), 48, 32, 42);
    };

    Graphics.prototype.setFontOutline = function (scale)
    {
        g.setFontCustom (E.toString (require ("heatshrink").decompress (atob ("AB8f/4AB8EIBAUEgQECgMAwAFCoPgAgUew4YBw/4sIIBkMCjFAgEIoGGiASBiEhwgJBvEICgMCiAUDBgIUBgPhEAIHBw+ACgUhCwIUBFAIUCFAIUCFAIrBsIoBCgYgBCgMf8JPB8ISBAAMHwRoIoEgAgUQg6CC/C80gKoCjyGCTwR8BSgR8CBoJ8CPoJ8CCgNCBIQUBDwUAwp8CPoJyDgFgAgcYAgcGIQl/PoY3CFIQPDFobJCAARMDCiEHIYgAaj6SBgP+hEEBAOAoTjBgEgiGAIoMIgvgIoMegOHcYKVBsJSCiUYUweGCYMB8MhLIWHxAUCkMCCgRxBCgS+BCgQoBhAUBPYIUDBgIUBFAIgBA4OHwAUCQoIUCTQWGj/+FYMhcoIBBcwMABIIrBwBzCwkgOYUhg//UgKnjAQKnCAQMCGYICCU4WAoKnCkEeU4UH/CSCNAYFCPoQqBPoSUCPpSaBPoQUkU4Mf//hU4cHwUAiTyBMoMETQNAU4MgWgKnBw//NYIAgVIQABVISQCboQABVIRGBVIQABw5pBdwRpBDwVICgUeiQUChF4CgSHBCgeEPwUB8KTCFAOACgQSBCgQSBCgUeVAYoBVASwDFAQWCFAP/VAP+TQIACsAEDjAEDgwEDgN//4ACDIgAZgIhB8CUBEgKmBwjZBUwMhhASBNINCAgJpBjzkBL4N4sJnCgUYPgeGPgchCQJ0CCm0f//hKIUAg+hCQJqBCQR1BoQnBOoMQCQX//CmdVAipBGQSpCGQKpCVASpBjwECj0Iv6pB/BJBNAUQwhVCwvhPoeHwCn8SQKUCNgKnCMIQHBCwKnDAgKnhgKjBAARRBAARRBAARRCAAJmCCisf/wUCZIJ9BNIR9BNIUGCgMf8EBSARpB0ITBcoQUBwFAFIITBC4LbBg58BkITCCgQTBDgITDDgITCTQKkDIoI/CIoJpDv6kfAAZ6BcwPgGgNIgEEGgMScwWAgjmBoJ6BXwMew//AIP4SQKpBgSSBP4WGiCpCkKSBSgQU0NAfhvEAAIMHwRoIoCyBkCqBcYJoCU8ClBbgcEbgbnDHgQHBUoSnD/BgBNAJzBNARzCPoJzCPoRzBCkcB8IUDw+hCgUhUoWEhFCUoX+iClBAAN4NAIABEQJoBOgSlBOgSnBAAINCAH7SJ8EB/x8BLgOAoECLgMgNIScBNIScBNIX4gF/NP4AO"))), 48, 32, 42);
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
        g.setColor (0.5, 0, 0);
        g.setFont ("Digits");
        g.drawString (time_hh + ":" + time_mm, 8, 60);
        g.setColor (1, 0, 0);
        g.setFont ("Outline");
        g.drawString (time_hh + ":" + time_mm, 8, 60);

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
