# 21 &bull; log viewer



## [main](main)

### [main.component.ts](main/main.component.ts)

`logs` is appended every half second with the current time and log count.

### [main.component.html](main/main.component.html)

The buttons and status are repeated outside of the component.


## [log](log)

### [log.component.ts](log/log.component.ts)

`logs` is received as `@Input`.
But it is initially detached, and refreshed only every 2.5 seconds.

### [log.component.html](log/log.component.html)

The buttons and status inside of the component do not work as expected.
