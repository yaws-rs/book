# Runtimes Overview

To provide common highest level denominator of portability within the yaws we've designated the individual "driver" runtimes to provide and ultimately own the I/O within it's own constraints capacity, security and performance profiles.

For example the mechanics of handling I/O in a micro controller (no_std) can be very different than OS-enabled (or host-based) io_uring completion based I/O.

Runtimes (or drivers) are intended to be the only differing part within the ecosystem to provide support within each given environment.

Each runtime, as the ultimate owner and manager of the underlying I/O makes the necessary decisions to provide the appropriate buffering and the scheduling of advancing the blueprints within their given unique environments they operate in.

Only the runtime makes the environment related decision/s e.g. threading (or not) etc. providing the highest level demoninator within the given runtime instead of the state machines having to make such tricky decisions and to add support separately that is provided by the runtime driver/s to operate within various environments and under their constraints.
