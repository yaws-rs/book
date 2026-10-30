# HTTP/2

Source: [yaws-rs/h2spec](https://github.com/yaws-rs/h2spec)

YAWS HTTP/2 also serves as the "Terminating" layer embedding an Application layer into itself.

The application layer implements the contract for:
 - [H2FrameReceiver](https://docs.rs/blueprint-h2spec/latest/blueprint_h2spec/trait.H2FrameReceiver.html) to receive H2 frames.
 - [H2FrameSender](https://docs.rs/blueprint-h2spec/latest/blueprint_h2spec/trait.H2FrameSender.html) to provide H2 frames for sending out.

The application layer gives the implementor full control of the stateful framing of H2 context.

## HTTP/1.1 Translation

It is convenient to be able to use the same [application layer](/app.md) as HTTP/1.1 for HTTP/2 use.

For this You can use an YAWS H2 Application to transform all the requests into YAWS HTTP/1.1 Request & Response pairs:

```rust
// Rick Roll is a HTTP/1.1 App but we wrap it into H2Serving
fn init_orbit() -> H2Serving<MyH2App<RickRoll>> {
    H2SpecServer::with_defaults().unwrap()
}
```

See the full example at [yaws-rs/h2spec/basic-h2-cleartext](https://github.com/yaws-rs/h2spec/tree/main/examples/basic-h2-cleartext)