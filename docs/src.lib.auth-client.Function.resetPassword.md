[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/lib/auth-client](src.lib.auth-client.md) / resetPassword

# Function: resetPassword()

```ts
function resetPassword<FetchOptions>(
  ...data: [Prettify<object & object>, FetchOptions?]
): Promise<
  BetterFetchResponse<{}, {}, FetchOptions["throw"] extends true ? true : false>
>;
```

Defined in: [src/lib/auth-client.ts:11](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/lib/auth-client.ts#L11)

## Type Parameters

| Type Parameter                    |
| --------------------------------- |
| `FetchOptions` _extends_ `object` |

## Parameters

| Parameter | Type                                                   |
| --------- | ------------------------------------------------------ |
| ...`data` | \[`Prettify`\<`object` & `object`\>, `FetchOptions`?\] |

## Returns

`Promise`\<`BetterFetchResponse`\<\{\}, \{\}, `FetchOptions`\[`"throw"`\] _extends_ `true` ? `true` : `false`\>\>
