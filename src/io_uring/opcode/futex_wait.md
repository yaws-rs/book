# FutexWait

FutexWait abstracts the underlying [io_uring::opcode::FutexWait](https://docs.rs/io-uring/latest/io_uring/opcode/struct.FutexWait.html).

This can be used, among other use-cases, to combine epoll_wait or other events waiting on another thread with io_uring completions given atomics can be used to generate completion events through FutexWait.

**Note**: This is being migrated to implement the OpCode + OpCompletion traits similar to EpollCtl.

## Construct

You can create the underlying indexed AtomicU32 which will be owned by the UringBearer through:
- [UringBearer::create_futex_atomic](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.create_futex_atomic)

Alternatively and unsafely you can provide your own AtomicU32 to UringBearer through:
- [UringBearer::supply_futex_atomic_raw](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.supply_futex_atomic_raw)

## Submission

You can submit a FutexWait through [UringBearer::add_futex_wait](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.add_futex_wait).

## Completion

FutexWait([FutexWaitRec]) will show up as normal through the handler API through UringBearer.

[FutexWaitRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/struct.FutexWaitRec.html

## Lifetime (Manual handling)

SubmissionRecordStatus::Forget is safe given the pending Completion was Single-shot.

If the completed record is retained, this will result in memoryleak.
