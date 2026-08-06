# Horn Extras

This feature allows you to bind extras to your airhorn. For example, you could enable a more aggressive or faster pattern, or takedown lights while the horn is in use.

Simply create a stage extra as usual, and assign it in the config.

Horn extras can activate immediately or after the horn has been held for a
configured amount of time. They can also remain active briefly after the horn
is released. Both delays are measured in milliseconds and apply to
`hornExtras` and `disableExtras`.

## Global Horn Timing Config

Set server-wide defaults in the ULC resource's `config.lua` file. A value of
`0` keeps the original instant behavior.

```lua
HornSettings = {
    hornPressDelay = 0,
    hornReleaseDelay = 0,
},
```

## Vehicle Horn Extras Config

```lua
hornConfig = {
    useHorn = true,
    hornExtras = {12},
    disableExtras = {11},
    -- Optional: nil inherits the matching Config.HornSettings value.
    hornPressDelay = nil,
    hornReleaseDelay = nil,
},
```

- `hornPressDelay` controls how long the horn must be held before the configured
  extras activate. Releasing the horn before this delay expires prevents them
  from activating.
- `hornReleaseDelay` controls how long the configured extras remain active
  after the horn is released. Pressing the horn again during this delay cancels
  the pending restoration, so the extras remain active.

Each delay is resolved independently. A value set in the vehicle's `hornConfig`
takes priority, followed by the matching global `Config.HornSettings` value,
then `0`. Use `0` to explicitly select instant behavior. Use `nil`, or omit the
field, to inherit the global value.
