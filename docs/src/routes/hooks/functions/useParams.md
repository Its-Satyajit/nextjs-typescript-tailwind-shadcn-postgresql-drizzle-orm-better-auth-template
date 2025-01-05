[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/hooks](../README.md) / useParams

# Function: useParams()

```ts
function useParams<Params, Search>(
  builder: RouteBuilder<Params, Search>,
): z.output<Params>;
```

Defined in: [src/routes/hooks.ts:32](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/routes/hooks.ts#L32)

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

`z.output`\<`Params`\>
