[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/lib/auth-client](../README.md) / forgetPassword

# Function: forgetPassword()

```ts
function forgetPassword<FetchOptions>(
  ...data: [Prettify<object & object>, FetchOptions?]
): Promise<
  BetterFetchResponse<{}, {}, FetchOptions["throw"] extends true ? true : false>
>;
```

Defined in: [src/lib/auth-client.ts:10](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/lib/auth-client.ts#L10)

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
