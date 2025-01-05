[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/routes/utils](src.routes.utils.md) / safeParseSearchParams

# Function: safeParseSearchParams()

```ts
function safeParseSearchParams<T>(
  schema: T,
  searchParams: URLSearchParams,
): z.infer<T>;
```

Defined in: [src/routes/utils.ts:9](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/routes/utils.ts#L9)

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
