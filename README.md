# stopwatchtimer
assignment on stopwatch timer 


The code creates a stopwatch that displays the time in hours, minutes, and seconds. 
It uses HTML elements and buttons to control the stopwatch's behavior.

When we click the "start" button, the stopwatch starts running.
It updates the time every second by increasing the seconds, minutes, and hours accordingly.
The time is then displayed on the screen.

If the seconds reach 60, they are reset to 0, and the minutes increase by 1. Similarly, if the minutes reach 60, they are reset to 0, and the hour's increase by 1.

we can stop the stopwatch by clicking the "stop" button. This will pause the time and disable the stop button by the clearInterval function.

The "reset" button allows you to reset the stopwatch to zero. It stops the time, sets hours, minutes, and seconds to 0, and updates the display accordingly.

The `padStart` function is used to ensure that the time values are displayed with two digits, adding a leading zero if necessary. This helps maintain a consistent format.

Thanks
