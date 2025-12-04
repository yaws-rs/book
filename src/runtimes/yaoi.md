# YAOI

YAOI or Yer Another Output Input is the runtime for io_uring in YAWS.

It provides host-based processing leveraging Linux io_uring, hugetable and provides several buffering schemes depending on the workloads it's serving.

See the [example HTTPs pipeline](https://github.com/yaws-rs/yaoi/blob/main/examples/blueprint-tls-http/src/main.rs) on how to use it.

It is also the example provided on how to create a driver runtime for the yaws to support more environments and configurations.
