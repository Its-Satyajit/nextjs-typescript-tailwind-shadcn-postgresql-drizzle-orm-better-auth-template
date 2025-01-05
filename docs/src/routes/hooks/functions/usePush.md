[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/hooks](../README.md) / usePush

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

Defined in: [src/routes/hooks.ts:18](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/hooks.ts#L18)

## Type Parameters

| Type Parameter               | Default type                               |
| ---------------------------- | ------------------------------------------ |
| `Params` _extends_ `ZodType` | -                                          |
| `Search` _extends_ `ZodType` | `ZodObject`\<\{\}, `"strip"`, \{\}, \{\}\> |

## Parameters

| Parameter | Type                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| `builder` | [`RouteBuilder`](../../makeRoute/type-aliases/RouteBuilder.md)\<`Params`, `Search`\> |

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
