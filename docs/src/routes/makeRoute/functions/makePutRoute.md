[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/makeRoute](../README.md) / makePutRoute

# Function: makePutRoute()

```ts
function makePutRoute<Params, Search, Body, Result>(
  route: string,
  info: RouteInfo<Params, Search>,
  putInfo: PutInfo<Body, Result>,
): PutRouteBuilder<Params, Search, Body, Result>;
```

Defined in: [src/routes/makeRoute.tsx:282](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/makeRoute.tsx#L282)

## Type Parameters

| Type Parameter               |
| ---------------------------- |
| `Params` _extends_ `ZodType` |
| `Search` _extends_ `ZodType` |
| `Body` _extends_ `ZodType`   |
| `Result` _extends_ `ZodType` |

## Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `route`   | `string`                                                          |
| `info`    | [`RouteInfo`](../type-aliases/RouteInfo.md)\<`Params`, `Search`\> |
| `putInfo` | [`PutInfo`](../type-aliases/PutInfo.md)\<`Body`, `Result`\>       |

## Returns

`PutRouteBuilder`\<`Params`, `Search`, `Body`, `Result`\>
