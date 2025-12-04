# Left of State Machines

The **Left** side of the state machines can be thought as the I/O originating side, produced by the runtime (responsible of managing I/O) and consumed by the state machine/s (responsible of processing the I/O provided by the runtime/s)

As an example in the TLS, we use the **Left** side as the "Ciphertext" side.

The trait and it's requirements is defined through the blueprint crate.

## Requirements / Assumptions

The following requirements / assumptions are currently made as of v0.1.0:

| fn                    | Description         | Assumptions |
| :---                  | :---                | :---        |
| [set_]left_in_blocked | Is Left blocked ?   | Right will not advance, see Blocking Left section below |
| left_set_lens | Set new lengths for Left buffers | Bounds are respected and checked by the state machines, see chapter [Buffering](./runtimes/buffering.md) | [set|is]_ready | Is Left Ready ? | Set only once to signal Layer readiness to transform Left into/from Right side |
| [set_]left_want_[read/write] | Does Left want to Read/Write ? | State machine sets and runtime provides traffic based on the state machine "wants" |

### Blocking Left

Often it is desired to "block" the Left side in favor of processing only the Left side, e.g. in TLS negotiation before a layer can operate to transform the Cleartext (Right) traffic into Ciphertext (Left).

For example within the yaoi runtime we stop the Left-to-Right processing at the layer which is blocked to ensure we have completed all the necessary negotiating required before advancing the layers on top, e.g. in the case of TLS to generate Cleartext traffic on top to be transformed into Ciphertext saving memory pressure through the use of intermediary layers and processing in case of failed TLS handshake/s.

Blocking is different from "Readiness" that blocking can be set across the lifetime of the instanted orbit where as readiness is set only once.

## Runtime (impl Producer)

The **Left** side is implemented in the runtime to provide the correct buffering for both the I/O and intermediary layers.

## State Machine (impl Consumer)

State machine is provided an implementation of the instantiated Left side by the runtime.
