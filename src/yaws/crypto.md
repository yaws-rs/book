# Cryptography

yaws HTTP-TLS uses rustls >0.23 behind the scenes.

It can be configured to various providers implementing CryptoProvider.

Downstream user does not need to be concerned of the TLS implementation detail.
