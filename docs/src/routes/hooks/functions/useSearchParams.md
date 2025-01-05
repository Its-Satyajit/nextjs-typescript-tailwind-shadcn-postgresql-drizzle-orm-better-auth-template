[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/hooks](../README.md) / useSearchParams

# Function: useSearchParams()

```ts
function useSearchParams<Params, Search>(
  builder: RouteBuilder<Params, Search>,
): z.output<Search>;
```

Defined in: [src/routes/hooks.ts:45](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/hooks.ts#L45)

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

`z.output`\<`Search`\>
