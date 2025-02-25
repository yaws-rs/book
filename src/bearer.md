# Bearer

The crate io-uring-bearer consists of the below main types:

| Type                 | Description |
| :---                 | :---        |
| [UringBearer]        | The main carrier type holding all the instaces of Completion, Registered Filehandles & Buffers |
| [UringBearerError]   | The error type for UringBearer                                    |
| [BearerCapacityKind] | Descriptor used to describe the boundaries of capacities required |
| [Completion]         | The main completion type bringing together all the possible competions |

## Associated Built-In Types

The below will be migrated into separate crates, implementing the io-uring-opcode trait later, similar to EpollCtl.

Until then, io-uring-bearer still holds some of the required holding types:

| Holding Type         | Description                                 |
| :---                 | :---                                        |
| [BuffersRec]         | Holds the actual allocation for the Buffers that either owned by the Kernel or Userspace. |
| [FutexRec]           | futex2(2) -like, Used for FutexWait         |

In addition io-uring-bearer still holds some of the individual OpCode Pending / Completion slab types:

| OpCode Type          | Description |
| :---                 | :---        |
| [AcceptRec]          | accept4(2), used for Accept and AcceptMulti |
| [FutexWaitRec]       | Represents FutexWait                        |
| [RecvRec]            | Represents Recv                             |
| [RecvMultiRec]       | Represents RecvMulti                        |
| [SendZcRec]          | Represents SendZc                           |

[UringBearer]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html
[UringBearerError]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/error/enum.UringBearerError.html
[BearerCapacityKind]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.BearerCapacityKind.html
[Completion]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.Completion.html

[AcceptRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/enum.AcceptRec.html
[BuffersRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.BuffersRec.html
[FutexRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/enum.FutexRec.html

[FutexWaitRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.FutexWaitRec.html

[RecvRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.RecvRec.html
[RecvMultiRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.RecvMultiRec.html
[SendZcRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/enum.SendZcRec.html