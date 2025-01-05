[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/utils](../README.md) / safeParseSearchParams

# Function: safeParseSearchParams()

```ts
function safeParseSearchParams<T>(
  schema: T,
  searchParams: URLSearchParams,
): z.infer<T>;
```

Defined in: [src/routes/utils.ts:9](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/utils.ts#L9)

## Type Parameters

| Type Parameter             |
| -------------------------- |
| `T` _extends_ `ZodTypeAny` |

## Parameters

| Parameter      | Type              |
| -------------- | ----------------- |
| `schema`       | `T`               |
| `searchParams` | `URLSearchParams` |

## Returns

`z.infer`\<`T`\>
