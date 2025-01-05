[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/makeRoute](../README.md) / makeRoute

# Function: makeRoute()

```ts
function makeRoute<Params, Search>(
  route: string,
  info: RouteInfo<Params, Search>,
): RouteBuilder<Params, Search>;
```

Defined in: [src/routes/makeRoute.tsx:425](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/makeRoute.tsx#L425)

## Type Parameters

| Type Parameter               | Default type                               |
| ---------------------------- | ------------------------------------------ |
| `Params` _extends_ `ZodType` | -                                          |
| `Search` _extends_ `ZodType` | `ZodObject`\<\{\}, `"strip"`, \{\}, \{\}\> |

## Parameters

| Parameter | Type                                                              |
| --------- | ----------------------------------------------------------------- |
| `route`   | `string`                                                          |
| `info`    | [`RouteInfo`](../type-aliases/RouteInfo.md)\<`Params`, `Search`\> |

## Returns

[`RouteBuilder`](../type-aliases/RouteBuilder.md)\<`Params`, `Search`\>
