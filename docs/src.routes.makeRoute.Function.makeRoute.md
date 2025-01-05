[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/routes/makeRoute](src.routes.makeRoute.md) / makeRoute

# Function: makeRoute()

```ts
function makeRoute<Params, Search>(
  route: string,
  info: RouteInfo<Params, Search>,
): RouteBuilder<Params, Search>;
```

Defined in: [src/routes/makeRoute.tsx:425](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/routes/makeRoute.tsx#L425)

## Type Parameters

| Type Parameter               | Default type                               |
| ---------------------------- | ------------------------------------------ |
| `Params` _extends_ `ZodType` | -                                          |
| `Search` _extends_ `ZodType` | `ZodObject`\<\{\}, `"strip"`, \{\}, \{\}\> |

## Parameters

| Parameter | Type                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| `route`   | `string`                                                                         |
| `info`    | [`RouteInfo`](src.routes.makeRoute.TypeAlias.RouteInfo.md)\<`Params`, `Search`\> |

## Returns

[`RouteBuilder`](src.routes.makeRoute.TypeAlias.RouteBuilder.md)\<`Params`, `Search`\>
