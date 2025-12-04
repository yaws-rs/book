# Right of State Machines

The **Right** side of state machines can be thought as the I/O destination side, produced by the state machine/s and then consumed either by the other layers further through the chain or the final terminating App (for which it is typically then provided as it's Left side from the "below in the stack" Right side)

As an example in the TLS, we use the Left side as the "Cleartext" side.

## Requirements / Assumptions

The following requirements / assumptions are currently made as of v0.1.0:

| fn                  | Description | Assumptions |
| :---                | :---        | :---        |
| wants_right_next_in | State machine wants Right input | Runtime should provide Right side traffic as desired |

## Runtime (impl Producer)

Typically within the runtime the **Right** side is mirrored transparently as the Left side further Right in the blueprints.

Runtimes should manage to keep sufficient intermediary buffering capability as desired by it's users that is first used as the Right side that then gets passed as Left in next cycle.

## State Machine (impl Consumer)

The isolation provides that state machines do not know anything about each other but the data is typically transformed forward through it's Right side, typically reflecting what the Left side was.

State machine can generate it's Right side without the Left side, e.g. in various testing scenarios or when replaying recorded I/O.
