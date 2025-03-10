# Recv

Single-shot Recv abstracts the underlying [io_uring::opcode::Recv](https://docs.rs/io-uring/latest/io_uring/opcode/struct.Recv.html).

**Note**: This is being migrated to implement the OpCode + OpCompletion traits similar to EpollCtl.

## Construct

Recv requires a registered filehandle and previously created indexed buffer.

## Submission

Use [UringBearer::add_recv] to submit a Single-shot Recv to kernel.

## Completion

Recv([RecvRec]) is provided normally through the handler API via UringBearer.

## Lifetime (Manual handling)

[SubmissionRecordStatus::Forget] is safe given the pending Completion was Single-shot.

[UringBearer::add_recv]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.add_recv
[RecvRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.RecvRec.html
[SubmissionRecordStatus::Forget]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/completion/enum.SubmissionRecordStatus.html
