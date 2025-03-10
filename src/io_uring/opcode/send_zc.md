# SendZc

SendZc abstracts the underlying [io_uring::opcode::SendZc](https://docs.rs/io-uring/latest/io_uring/opcode/struct.SendZc.html).

**Note**: This is being migrated to implement the OpCode + OpCompletion traits similar to EpollCtl.

## Construct

Currently SendZc requires the associated indexing (through submission) into:
 - registered filehandle (see [Filehandles](../filehandles.html)
 - registered buffer (see [Buffers](../buffers.md)
 - kernel buffer id (see [Buffers](../buffers.md)

## Submission

Currently submit using [UringBearer::add_send_singlebuf](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.add_send_singlebuf).

## Completion

SendZc([SendZcRec]) is provided normally through the handler API via UringBearer.

## Lifetime (Manual handling)

[SendZcRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/enum.SendZcRec.html
