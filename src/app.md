# Application

Application layer is injected on top of the terminating protocol layer.

Currently we have application layer implementations over H11spec (HTTP/1.1)

## HTTP/1.1 Application

The application typically implements the below traits found from [h11types](https://docs.rs/h11types) crate:

To receive a HTTP/1.1 Request:
- [RequestReceiver](https://docs.rs/h11types/latest/h11types/trait.RequestReceiver.html) to receive Metadata
- [HeaderReceiver](https://docs.rs/h11types/latest/h11types/trait.HeaderReceiver.html) to receive Headers
- [RequestBodyReceiver](https://docs.rs/h11types/latest/h11types/trait.RequestBodyReceiver.html) to receive Body
- [TargetReceiver](https://docs.rs/h11types/latest/h11types/trait.RequestTargetReceiver.html) to receive Target URI

And to provide a response to the received request:
- [ResponseSender](https://docs.rs/h11types/latest/h11types/trait.ResponseSender.html) to send a Response

Example HTTP/1.1 Applications:
- [Rick-Roll](https://github.com/yaws-rs/h11spec/tree/main/apps/rick_roll) to send every request a Rick-Roll / payload
- [Mirror](https://github.com/yaws-rs/h11spec/tree/main/apps/mirror) to send post back to sender

Example applications are used in testing to ensure the expected behaviour of any given app is followed.
