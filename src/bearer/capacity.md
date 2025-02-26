# Capacity

[UringBearer] requires bounded capacities described to it.

Leaving things unbounded and without any capacity planning, it would be easy to create opportunities for denial of service, crashes etc. resulting from unbounded capacities at runtime.

All consumers must describe the required capacities through [BearerCapacityKind] type.

Given that the capacity is described and used at runtime context,

You should test your intended runtime with the described capacity to ensure that the given environment meets it where ever it's deployed in.

Anything that hits the capacity will typically see [SlabbableError] `AtCapacity(setting)` variant.

The capacity values are only used when the UringBearer is constructed and are not changeable within it's lifetime after.

See the [BearerCapacityKind] for an example how to use it along the [capacity] crate.

[BearerCapacityKind]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.BearerCapacityKind.html
[capacity]: https://docs.rs/capacity/latest/capacity/
[UringBearer]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html
[SlabbableError]: https://docs.rs/slabbable/latest/slabbable/enum.SlabbableError.html
