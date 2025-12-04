# HTTP/1.1

Source: [github/yaws-rs/h11spec/blueprint](https://github.com/yaws-rs/h11spec/tree/main/blueprint)

Currently the HTTP/1.1 is an "App Layer" provided as the terminating layer.

The HTTP state machine only takes the **Left** side and does not provide any transformation at the moment.

In the future the HTTP state machine will provide transformation where the **Right** side can implement application functionality over HTTP.

The HTTP state machine is designed to minimally parse the metadata for the sole processing of HTTP layer and will then pass the rest to the application on top.
