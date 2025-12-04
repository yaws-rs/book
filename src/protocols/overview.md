# State Machines Overview

yaws Layers (or State machines) run statefully typically to transform Left side into Right side in a chain of state machines.

State machines don't know about each others existence and they can be processed as isolated stateful computation units independently and in parallel.

Given the design characteristics state machines should store as little stateful information as possible and process the traffic in streaming fashion.

Users typically instantiate running state machines as orbits through blueprints and then provide them to the runtime driver which advances all the chained state machines in the provided context.

## Known Blueprints

Source: [yaws-rs/blueprint/known](https://github.com/yaws-rs/blueprint/blob/main/known/src/lib.rs)

Given the blueprints have to be typically constructed using same type, we provide a static enum dispatch of all the known blueprints to avoid dynamistic indirection.
