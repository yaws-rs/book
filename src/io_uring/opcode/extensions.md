# Extensions

Every OpCode should add:
- It's own separate crate (e.g. [io-uring-epoll]) and it's own type (e.g. [EpollCtl]).
- Impl [OpCode] and [OpCompletion] from the [io-uring-opcode] crate.
- Feature-gated "extension" trait within [io-uring-opcode] similar to [OpExtEpollCtl].
- Feature-gated [UringBearer::Completion] variant, e.g. [Completion::EpollCtl] within UringBearer.
- Explicit API to push the OpCode as submission, e.g. [UringBearer::push_epoll_ctl]

[OpCode]: https://docs.rs/io-uring-opcode/latest/io_uring_opcode/trait.OpCode.html
[OpCompletion]: https://docs.rs/io-uring-opcode/latest/io_uring_opcode/trait.OpCompletion.html
[io-uring-opcode]: https://docs.rs/io-uring-opcode/latest/io_uring_opcode/
[OpExtEpollCtl]: https://docs.rs/io-uring-opcode/latest/io_uring_opcode/trait.OpExtEpollCtl.html
[UringBearer::Completion]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.Completion.html
[Completion::EpollCtl]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.Completion.html#variant.EpollCtl
[UringBearer::push_epoll_ctl]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.push_epoll_ctl
[io-uring-epoll]: https://docs.rs/io-uring-epoll
[EpollCtl]: https://docs.rs/io-uring-epoll/0.2.0-pre1/io_uring_epoll/struct.EpollCtl.html