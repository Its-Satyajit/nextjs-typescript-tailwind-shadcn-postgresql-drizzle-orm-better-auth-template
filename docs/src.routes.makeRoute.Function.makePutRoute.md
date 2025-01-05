[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/routes/makeRoute](src.routes.makeRoute.md) / makePutRoute

# Function: makePutRoute()

```ts
function makePutRoute<Params, Search, Body, Result>(
  route: string,
  info: RouteInfo<Params, Search>,
  putInfo: PutInfo<Body, Result>,
): PutRouteBuilder<Params, Search, Body, Result>;
```

Defined in: [src/routes/makeRoute.tsx:282](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/routes/makeRoute.tsx#L282)

## Type Parameters

| Type Parameter               |
| ---------------------------- |
| `Params` _extends_ `ZodType` |
| `Search` _extends_ `ZodType` |
| `Body` _extends_ `ZodType`   |
| `Result` _extends_ `ZodType` |

## Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `route`   | `string`                                                                         |
| `info`    | [`RouteInfo`](src.routes.makeRoute.TypeAlias.RouteInfo.md)\<`Params`, `Search`\> |
| `putInfo` | [`PutInfo`](src.routes.makeRoute.TypeAlias.PutInfo.md)\<`Body`, `Result`\>       |

## Returns

`PutRouteBuilder`\<`Params`, `Search`, `Body`, `Result`\>
