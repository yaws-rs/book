# Summary

# Yaws

- [Introduction](./yaws/introduction.md)
- [Architecture](./yaws/architechture.md)
- [Flavors](./yaws/flavors.md)
- [Validation](./yaws/validation.md)
- [Security](./yaws/security.md)
- [Performance](./yaws/performance.md)
- [Cryptography](./yaws/crypto.md)

# Sans-I/O

- [Overview](./traits/overview.md)
- [BluePrint](./traits/blueprint.md)
- [Orbit](./traits/orbit.md)
- [Left](./traits/left.md)
- [Right](./traits/right.md)

# Runtimes

- [Overview](./runtimes/overview.md)
- [Buffering](./runtimes/buffering.md)
- [YAOI](./runtimes/yaoi.md)

# Layers / State Machines

- [Overview](./protocols/overview.md)
- [TLS](./protocols/tls.md)
- [HTTP/1.1](./protocols/h11spec.md)

# Yaws io_uring

- [Introduction](./io_uring/introduction.md)
- [Bearer](./io_uring/bearer.md)
  - [Capacity](./io_uring/bearer/capacity.md)
  - [Slabbable](./io_uring/bearer/slabbable.md)
- [OpCode](./io_uring/opcode.md)
  - [Accept](./io_uring/opcode/accept.md)
  - [EpollCtl](./io_uring/opcode/epoll_ctl.md)
  - [FutexWait](./io_uring/opcode/futex_wait.md)
  - [ProvideBuffers](./io_uring/opcode/provide_buffers.md)  
  - [Recv](./io_uring/opcode/recv.md)
  - [RecvMulti](./io_uring/opcode/recv_multi.md)
  - [SendZc](./io_uring/opcode/send_zc.md)
  - [Extensions](./io_uring/opcode/extensions.md)
- [Ownership](./io_uring/ownership.md)  
- [Filehandles](./io_uring/fd.md)
- [Buffers](./io_uring/buffers.md)
