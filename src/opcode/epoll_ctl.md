# EpollCtl

You can use io_uring to batch the control calls of Epoll.

For now the separate [io-uring-epoll] also provides a convenient syscall abstraction into epoll_wait.

If you have millions of sockets that constantly change status, it is helpful to be able to batch the control calls.

See the [examples] from the io-uring-epoll repository.

**Note**: io-uring-epoll 0.1 crate is differnent to 0.2 which implements the new OpCode/Completion traits.

## Construct

- Construct associated [EpollUringHandler::with_bearer(UringBearer)]
- Construct HandledFd representing individual Epoll triggered RawFd

## Submission

- Construct EpollCtl::with_epfd_handled(epfd, handle_fd, your_reference)
- Use UringBearer::push_epoll_ctl to push the constructed EpollCtl

## Completion

EpollCtl(impl OpExtEpollCtl) will show up as normal through the handler API through UringBearer.

## Lifetime (Manual handling)

You should only Forget the underlying EpollCtl when the RawFd is removed from monitored filehandles list.

Failing to Retain the underlying EpollCtl before removing it will result in undefined behaviour.

[examples]: https://github.com/yaws-rs/io_uring-utils/tree/main/io-uring-epoll/examples
[io-uring-epoll]: https://docs/io-uring-epoll
[EpollUringHandler::with_bearer(UringBearer)]: https://docs/io-uring-epoll