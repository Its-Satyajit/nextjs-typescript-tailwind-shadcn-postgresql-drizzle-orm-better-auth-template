[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/routes/hooks](src.routes.hooks.md) / usePush

# Function: usePush()

```ts
function usePush<Params, Search>(
  builder: RouteBuilder<Params, Search>,
): (
  p: input<Params>,
  search?: input<Search>,
  options?: NavigateOptions,
) => void;
```

Defined in: [src/routes/hooks.ts:18](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/routes/hooks.ts#L18)

## Type Parameters

| Type Parameter               | Default type                               |
| ---------------------------- | ------------------------------------------ |
| `Params` _extends_ `ZodType` | -                                          |
| `Search` _extends_ `ZodType` | `ZodObject`\<\{\}, `"strip"`, \{\}, \{\}\> |

## Parameters

| Parameter | Type                                                                                   |
| --------- | -------------------------------------------------------------------------------------- |
| `builder` | [`RouteBuilder`](src.routes.makeRoute.TypeAlias.RouteBuilder.md)\<`Params`, `Search`\> |

## Returns

`Function`

### Parameters

| Parameter  | Type                |
| ---------- | ------------------- |
| `p`        | `input`\<`Params`\> |
| `search`?  | `input`\<`Search`\> |
| `options`? | `NavigateOptions`   |

### Returns

`void`
