# ProvideBuffers

ProvideBuffers abstracts the underlying [io_uring::opcode::ProvideBuffers](https://docs.rs/io-uring/latest/io_uring/opcode/struct.ProvideBuffers.html).

To do faster I/O it is essential to register (or map) any userspace buffers with the kernel so the kernel can spend less time mapping the userspace buffers between the Recv / Send calls.

**Note**: This is being migrated to implement the OpCode + OpCompletion traits similar to EpollCtl.

## Construct

See the main section about [Buffers] how to manage these.

## Submission

Use the [UringBearer::provide_buffers] to both submit and associate any created [Buffers] with kernel-mapped identifiers.

We may later have API to make this more easier to use but for now the user must keep track of the kernel-mapped identifiers.

## Completion

ProvideBuffers([ProvideBuffersRec]) is provided normally through the handler API via UringBearer.

## Lifetime (Manual handling)

The actual buffers are separate from the registering it so the submission can be forgotten after completion safely.

[Buffers]: ../buffers.html
[ProvideBuffersRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.ProvideBuffersRec.html
[UringBearer::provide_buffers]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.provide_buffers