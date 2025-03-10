# RecvMulti

RecvMulti abstracts the underlying [io_uring::opcode::RecvMulti](https://docs.rs/io-uring/latest/io_uring/opcode/struct.Recv
Multi.html).

**Note**: This is being migrated to implement the OpCode + OpCompletion traits similar to EpollCtl.

## Construct

RecvMulti requires both a registered filehandle and previously registered / kernel-mapped buffer/s with the referred group.

## Submission

Use [UringBearer::add_recv_multi] to submit a RecvMulti to kernel.

## Completion

RecvMulti([RecvMultiRec]) is provided normally through the handler API via UringBearer.

See [Buffers](../buffers.html) on how to deal with individual "selected buffers" within registered "grouped" Buffers.

## Lifetime (Manual handling)

It would be undefined behaviour if the submission record is invalidated before the Multi-shot submission is either confirmed cancelled or timed out.

[UringBearer::add_recv_multi]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.add_recv_multi
[RecvMultiRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.RecvMultiRec.html
