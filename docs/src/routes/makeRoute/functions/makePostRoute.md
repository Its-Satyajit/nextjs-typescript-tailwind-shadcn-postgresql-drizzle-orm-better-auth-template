[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/makeRoute](../README.md) / makePostRoute

# Function: makePostRoute()

```ts
function makePostRoute<Params, Search, Body, Result>(
  route: string,
  info: RouteInfo<Params, Search>,
  postInfo: PostInfo<Body, Result>,
): PostRouteBuilder<Params, Search, Body, Result>;
```

Defined in: [src/routes/makeRoute.tsx:219](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/makeRoute.tsx#L219)

## Type Parameters

| Type Parameter               |
| ---------------------------- |
| `Params` _extends_ `ZodType` |
| `Search` _extends_ `ZodType` |
| `Body` _extends_ `ZodType`   |
| `Result` _extends_ `ZodType` |

## Parameters

| Parameter  | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| `route`    | `string`                                                          |
| `info`     | [`RouteInfo`](../type-aliases/RouteInfo.md)\<`Params`, `Search`\> |
| `postInfo` | [`PostInfo`](../type-aliases/PostInfo.md)\<`Body`, `Result`\>     |

## Returns

`PostRouteBuilder`\<`Params`, `Search`, `Body`, `Result`\>
