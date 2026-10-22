# HTTP/1.1

Source: [yaws-rs/h11spec](https://github.com/yaws-rs/h11spec)

Currently the HTTP/1.1 is an "App Layer" provided as the terminating layer.

The HTTP state machine only takes the **Left** side and does not provide any transformation into the **Right** at the moment.

In the future the HTTP state machine will provide transformation where the **Right** side can implement application functionality over HTTP.

The application on top injected through the HTTP/1.1 state machine provides the instrumentation on how to respond to every request.
