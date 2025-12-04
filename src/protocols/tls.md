# TLS

Source: [yaws-rs/tls/blueprint](https://github.com/yaws-rs/tls/tree/main/blueprint).

User typically provides the TLS Layer configuration through it's context within the provided blueprints to the runtime driver.

```no_run
let tls_config_server =
        TlsServerConfig::with_certs_and_key_file(Path::new(CA), Path::new(CERT), Path::new(KEY))
            .unwrap();
    let server_context =
        blueprint_tls::TlsContext::Server(TlsServer::with_config(tls_config_server).unwrap());
```

The **Left** side of the state machine is used as the Ciphertext and **Right** side is the Cleartext side.

The TLS state machine both handles the necessarily handshake and negotiation in the middle and then either encrypts the traffic from **Right-to-Left** or decrypts from **Left-to-Right**.
