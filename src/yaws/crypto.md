# Cryptography

yaws TLS uses either rustls >0.23 or yTLS behind the scenes.

Typically rustls would be used in most cases but in no_std + no_alloc you can use yTLS.

See more at [yaws/tls](https://github.com/yaws-rs/tls).
