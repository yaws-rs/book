# Validation

Each state machine (or blueprint / instantiated orbit) is validated.

Stata machinery consists of the below:
* TLS Blueprints at [yaws/tls](https://github.com/yaws-rs/tls/tree/main/test_ab)
* HTTP+App relevant Behavior at [yaws/h11spec](https://github.com/yaws-rs/h11spec/tree/main/test_bp)

Given yaws is organized around it's traits, we validate all the implementations through the trait implementations requiring no I/O.

## Roadmap

Given the state machinery is isolated composable units we are be able to derive downstream stack test cases from upstream protocols.

i.e. HTTP requests can turn into TLS test cases when chained with TLS state machinery.

Performance testing can be done in isolated state machine units as well as in integrated composed form.
