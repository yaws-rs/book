# Yaws Orbit

Yaws Orbits are the instantiated state machines from set of blueprints typically run as "pipelines" with the given set of external I/O.

All Orbits are advanced using [Left] and [Right] traits.

See example Orbit implementation [advancing the TLS state machine](https://github.com/yaws-rs/tls/blob/main/blueprint/src/tls_blueprints.rs#L20) which advances either the client or server TLS contextes.

Within each blueprint composition there must be at least one App layer with the intermediate Layers being optional.

Within the runtime, each runtime makes the decision/s on how to process all the intermediate layers as well as the terminating layers given each runtime is expected to have it's unique I/O characteristics.

Typically all the runtimes first processes the raw I/O all the way from Left to Right (as input) and then secondly provides the final summary (or reduced output) from all the chained state machines through back into the I/O layer, essentially advancing first from Left to Right for input and then from Right to Left for the final output.

## Instantiation

A typical chain of `Orbit` might be instantiated as follows:

```no_run
fn tls_server_blueprints() -> Result<Blueprints<1, Orbits>, ConfigurationError> {
   let tls_config_server =
        TlsServerConfig::with_certs_and_key_file(Path::new(CA), Path::new(CERT), Path::new(KEY))
            .unwrap();
    let server_context =
        blueprint_tls::TlsContext::Server(TlsServer::with_config(tls_config_server).unwrap());

    BlueprintsLayers::<1>::layers([Orbits::Tls(server_context)])
        .app(Orbits::H11Server(H11SpecServer::with_defaults().unwrap()))
}
```

Which is typically then provided into the runtime upon instantiation of new clients e.g. in yaoi [upon TCP accept]

```no_run
// uncomment for cleartext only pipeline
//    let mut bp_listener: [Blueprints::<1, Orbits>; 2] = core::array::from_fn(|_| tls_server_blueprints());
let mut bp_listener: [Blueprints::<0, Orbits>; 2] = core::array::from_fn(|_| clear_server_blueprints());

// Setup Listener behaviour on_accept
listener
  .accept_with_cb(&mut bp_listener, |ud, stream| {
          let id = stream.fixed_fd().unwrap() as usize;

          stream.run_blueprints(&mut ud[id-1]).unwrap();
      })
      .unwrap();
```

## Layer

Each Layer, is designed to sit between the actual I/O and the terminating App is typically provided both the **Left** and **Right** implementations.

A good way of thinking both the Left and Right side in the context of TLS is that [Left](./left.md) is intended for the "Ciphertext" side where as the [Right
](./right.md) is intended for the "Cleartext" side providing clear isolation from either through the processing.

Given all the Layers can be stacked (or nested) statically on each other they do not know about each other where the runtime is dedicated to passing both the I/O through to advance each of the Layer within the chained instantiated blueprints.

## App

An App on the otherhand is designed to terminate the I/O processing pipeline as the last remaining "Layer" typically only interested of the **Left** side I/O.
