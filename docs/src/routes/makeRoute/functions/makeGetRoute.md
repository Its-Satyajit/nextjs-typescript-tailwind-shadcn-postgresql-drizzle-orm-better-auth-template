[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/makeRoute](../README.md) / makeGetRoute

# Function: makeGetRoute()

```ts
function makeGetRoute<Params, Search, Result>(
  route: string,
  info: RouteInfo<Params, Search>,
  getInfo: GetInfo<Result>,
): GetRouteBuilder<Params, Search, Result>;
```

Defined in: [src/routes/makeRoute.tsx:345](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/makeRoute.tsx#L345)

## Type Parameters

| Type Parameter               |
| ---------------------------- |
| `Params` _extends_ `ZodType` |
| `Search` _extends_ `ZodType` |
| `Result` _extends_ `ZodType` |

## Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `route`   | `string`                                                          |
| `info`    | [`RouteInfo`](../type-aliases/RouteInfo.md)\<`Params`, `Search`\> |
| `getInfo` | [`GetInfo`](../type-aliases/GetInfo.md)\<`Result`\>               |

## Returns

`GetRouteBuilder`\<`Params`, `Search`, `Result`\>
