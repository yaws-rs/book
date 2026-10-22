# TLS

Source: [yaws-rs/tls](https://github.com/yaws-rs/tls).

User typically provides the TLS Layer configuration through it's context within the provided blueprints to the runtime driver.

The **Left** side of the state machine is used as the Ciphertext and **Right** side is the Cleartext side.

The TLS state machine both handles the necessarily handshake and negotiation in the middle and then either encrypts the traffic from **Right-to-Left** or decrypts from **Left-to-Right**.
