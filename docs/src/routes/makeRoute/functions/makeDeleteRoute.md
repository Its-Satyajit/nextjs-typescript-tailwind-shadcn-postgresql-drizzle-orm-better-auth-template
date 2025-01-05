[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/makeRoute](../README.md) / makeDeleteRoute

# Function: makeDeleteRoute()

```ts
function makeDeleteRoute<Params, Search>(
  route: string,
  info: RouteInfo<Params, Search>,
): DeleteRouteBuilder<Params, Search>;
```

Defined in: [src/routes/makeRoute.tsx:389](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/makeRoute.tsx#L389)

## Type Parameters

| Type Parameter               |
| ---------------------------- |
| `Params` _extends_ `ZodType` |
| `Search` _extends_ `ZodType` |

## Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `route`   | `string`                                                          |
| `info`    | [`RouteInfo`](../type-aliases/RouteInfo.md)\<`Params`, `Search`\> |

## Returns

`DeleteRouteBuilder`\<`Params`, `Search`\>
