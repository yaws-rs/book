# Accept

Single-shot Accept provides the source socket address and port within the completion.

If you either don't need the source address and / or port, consider using AcceptMulti instead.

## Submission

You can currently push single-shot Accept unsafely depending on whether the underlying TcpListener RawFd is IPv4 or IPv6:

- IPv4: [UringBearer::add_accept_ipv4](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.add_accept_ipv4)
- IPv6: [UringBearer::add_accept_ipv6](https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html#method.add_accept_ipv6)

To use it safely, user must ensure that the underlying socket is either exclusively IPv4 or IPv6 given the returned source address and structure layout is different depending on which one it is.

If someone needs UNIX sockets, please feel free to [send a PR](https://github.com/yaws-rs/io_uring-utils).

## Completion

Accept([AcceptRec]) will show up as normal through the handler API through [UringBearer].

[AcceptRec]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/slab/enum.AcceptRec.html
[UringBearer]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html
[SubmissionRecordStatus::Forget]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/completion/enum.SubmissionRecordStatus.html

## Lifetime (Manual handling)

[SubmissionRecordStatus::Forget] is safe given the pending Completion was Single-shot.

If the completed record is retained, this will result in memoryleak.
