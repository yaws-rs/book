# EpollCtl

EpollCtl abstracts the underlying [io_uring::opcode::EpollCtl](https://docs.rs/io-uring/latest/io_uring/opcode/struct.EpollCtl.html).

You can use io_uring to batch the control calls of Epoll.

For now the separate [io-uring-epoll] crate also provides a convenient syscall abstraction into epoll_wait which is not yet available through the io_uring interaface over a regular syscall as of now.

If you have millions of sockets that constantly change status, it is helpful to be able to batch the control calls.

See the [examples] from the io-uring-epoll repository.

**Note**: io-uring-epoll 0.1 crate is different to 0.2 which implements the new OpCode/Completion traits.

## Construct

- Construct associated [EpollUringHandler::with_bearer(UringBearer)](https://docs.rs/io-uring-epoll/0.2.0-pre1/io_uring_epoll/struct.EpollCtl.html#method.with_epfd_handled).
- Construct [HandledFd](https://docs.rs/io-uring-epoll/0.2.0-pre1/io_uring_epoll/struct.HandledFd.html) representing individual Epoll triggered RawFd

## Submission

- Construct [EpollCtl::with_epfd_handled(epfd, handle_fd, your_reference)](https://docs.rs/io-uring-epoll/0.2.0-pre1/io_uring_epoll/struct.EpollCtl.html#method.with_epfd_handled)
- Use [UringBearer::push_epoll_ctl](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.push_epoll_ctl) to push the constructed EpollCtl as submission.

## Completion

EpollCtl(impl [OpExtEpollCtl]) will show up as normal through the handler API through UringBearer.

## Lifetime (Manual handling)

You should only Forget the underlying EpollCtl when the RawFd is removed from monitored filehandles list.

Failing to Retain the underlying EpollCtl before removing it will result in undefined behaviour.

[examples]: https://github.com/yaws-rs/io_uring-utils/tree/main/io-uring-epoll/examples
[io-uring-epoll]: https://docs/io-uring-epoll
[EpollUringHandler::with_bearer(UringBearer)]: https://docs/io-uring-epoll
[OpExtEpollCtl]: https://docs.rs/io-uring-opcode/latest/io_uring_opcode/trait.OpExtEpollCtl.html
