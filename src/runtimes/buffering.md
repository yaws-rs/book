# Buffering

Given the runtimes effectively own the I/O they also own the buffering (and scheduling) mechanics.

Typically runtimes are I/O driven and have to buffer not only the initial Left side but all the intermediary layers as well throughout the processing.

Each runtime is responsible of both managing the I/O and providing the appropriate buffering towards each encountered layer, as described throiugh the underlying blueprints provided to the runtime by the user.

As an example yaoi as an example provides various schemes of buffering depending on workloads, including incremental linux hugetable buffering greatly speeding up continuously streamed large payloads and so on.
