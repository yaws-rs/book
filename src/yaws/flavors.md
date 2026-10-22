# Flavors

YAWS calls it's environment / runtime integrations as flavors.

Given the aim of YAWS is to make it easier and have harmonious capability where only the runtime and I/O changes.

We provide them as examples given YAWS is aimed for multitude of uses in diverse varying environments with different needs.

## YAOI

YAOI or *Y*et *A*nother *O*utput and *I*nput is provided as an Linux io_uring example.

See full [YAOI HTTPS example here](https://github.com/yaws-rs/yaoi/tree/main/examples/blueprint-tls-http).

More information about YAOI:
- [GitHub](https://github.com/yaws-rs/yaoi)
- [docs.rs](https://docs.rs/yaoi/latest/yaoi/)

## Embassy

See full [Embassy HTTPS example here](https://github.com/yaws-rs/embassy).

More information about Embassy:
- [Website](https://embassy.dev/)
- [GitHub](https://github.com/embassy-rs/)
- [Docs](https://docs.embassy.dev/)

## More

If you would look forward to more runtime integrations or know one we haven't listed here.

Raise an issue at [yaws/yaws repository](https://github.com/yaws-rs/yaws) about it.

## Library Driver

User can also implement the I/O traits in conjuction with the abstract machines implementing HTTP.

Refer to the API documentation or see the existing reference runtimes or flavors for examples.
