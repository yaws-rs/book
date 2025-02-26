# Slabbable

See [blog] which describes the [Slabbable] trait in general.

Normal Vec etc. would implicitly allocate without warning and invalidate the underlying addresses.

Given that memory addresses need to be kept stable for many things submitted to the io_uring queue,

[UringBearer] uses [Slabbable] to back the underlying pending or completed instances of [Completion].

Any top-level binary can configure the desired Slabbable implementation through [SelectedSlab].

By default the crate currently uses nohash-hasher through HashBrown through [slabbable-hash].

## Completions

We exploit the fact that Kernel doesn't make any opinion what the userdata should contain for the pending completions by giving each submission a rotating u64 identifier which can then be mapped into the completed type upon completion.

This avoids using any from_raw_parts -like re-construction when we can refer through rotating u64 serial through storage.

We could also use [std::mem::forget] but we can also model this through the trait giving the option to the user what kind of storage they would like.

Main reason we like to track the items is we that can have some level of ownership / pointer provenance, manage easily any associated data (e.g. regarding the ownership) and more importantly we can construct a gated accessor / barrier to it whilst when for example the kernel has only immutable reference to the said data meaning we can also hold immutable references whilst doing so where as simply forgetting the submitted data.

Not only this but sometimes you might have an arena of buffers (e.g. group of buffers) that are provided to kernel and you must handle the ownership status of window / slice into the part of group of continuous buffers that have been provided back essentially fragmenting the type in some scenarios.

In short, the trait gives us the flexibility and we are able to test that all the implementations uphold the guarantees whilst leaving us easy way to benchmark any possible scenarios through the varying implementation in one go.

[blog]: https://github.com/pinkforest/pinkforest/blob/main/2025-01-25-slabbable.md
[UringBearer]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/struct.UringBearer.html
[Slabbable]: https://docs.rs/slabbable/latest/slabbable/trait.Slabbable.html
[Completion]: https://docs.rs/io-uring-bearer/latest/io_uring_bearer/enum.Completion.html
[std::mem::forget]: https://doc.rust-lang.org/std/mem/fn.forget.html
[SelectedSlab]: https://docs.rs/slabbable-impl-selector/latest/slabbable_impl_selector/
[slabbable-hash]: https://docs.rs/slabbable-hash/latest/slabbable_hash/