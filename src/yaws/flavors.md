# Flavors

yaws reference runtime implementations are called flavors.

yaws provides initially the reference runtimes or flavors for:
* Lunatic Rust+Erlang+WebAssembly Guest-side
* io_uring Linux io_uring Completion Host-side

# Binary Runtime

User can run any of the flavors directly as binary through `cfg(yaws_flavor)`.

This cfg can be either supplied through `.cargo/config.toml` or through `--cfg` via the top-level binary.

## io_uring Binary

```
$ RUSTFLAGS="--cfg yaws_flavor=\"io_uring\"" cargo run --bin yaws
```

## Lunatic Binary

```
$ RUSTFLAGS="--cfg yaws_flavor=\"lunatic\"" cargo run --bin yaws --target wasm32-wasi
```

# Library Driver

User can implement the I/O traits in conjuction with the abstract machines implementing HTTP.

Refer to the API documentation or see the existing reference runtimes or flavors for examples.
