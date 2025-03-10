# OpCode

All io_uring operations or ops are described through their opcodes.

The below opcodes are currently implemented:

| OpCode         | Linux Kernel | trait / built-in | Description   |
| :---           | :---         | :---             | :---          |
| Accept         |              | built-in         | accept4(2) (single-shot) |
| EpollCtl       |              | trait impl       | Epoll Control |
| FuteXWait      |              | built-in         | Futex Wait    |
| ProvideBuffers |              | built-in         | Register Buffers with Kernel for faster I/O |
| Recv           |              | built-in         | Receive (single-shot) |
| RecvMulti      |              | built-in         | Receive (multi-shot)  |
| SendZc         |              | built-in         | Send (Zero Copy)      |

All the in-Bearer built-in OpCodes will be moved to implement the associated [trait] in the future.

All the builti-in & OpCode<C> + OpCompletion [trait] impls are mapped into [Completion] enum.

To push a bearer-aware submission, use the push_* or push_op_typed methods via the associated [UringBearer].

[trait]: https://docs.rs/io-uring-opcode/latest/io_uring_opcode/
[Completion]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.Completion.html
[UringBearer]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html
