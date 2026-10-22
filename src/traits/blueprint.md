# Yaws BluePrint

Yaws Blueprints represent the static blueprints of intended state machine configuration used to instantiate Orbits running the state machines.

Typically a runtime (such as yaoi) provides "injection point" to both instantiate and advance instances of chained up state machines forward with the I/O managed by the runtime.

A static collection of configured BluePrint is typically injected through runtime for each accepted or connected TCP Client.

Yaws blueprints are designed to be used in either std or no_std as well as alloc-optional environments.

## Configuration

Each protocol or app take either default configuration or with_configuration upon instantiation into a running set of chained Orbit.
