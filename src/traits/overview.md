# Yaws Sans-I/O Overview

Yaws de-couples all the I/O from the rest of the state machine with the follwing set of traits with differing set of implementors.

The below traits are intended to be implemented by both the state machines & runtimes.

| Trait       | Description |
| :---        | :---        |
| [BluePrint] | Constructor to instantiate Orbits |
| [Orbit]     | Instantiated State machines       |

And the I/O traits are intended to be implemented by the runtimes handling I/O:

| Trait               | Description |
| :---                | :---        |
| [NoLeft] & [Left]   | "Left" side of the state machine/s |
| [NoRight] & [Right] | "Right" side of the state machine/s |

[BluePrint]: ./blueprint.md
[Orbit]: ./orbit.md
[Left]: ./left.md
[NoLeft]: ./left.md
[Right]: ./right.md
[NoRight]: ./right.md
