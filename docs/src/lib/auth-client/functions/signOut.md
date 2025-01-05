[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/lib/auth-client](../README.md) / signOut

# Function: signOut()

```ts
function signOut<FetchOptions>(
  ...data: [Prettify<{}>?, FetchOptions?]
): Promise<
  BetterFetchResponse<{}, {}, FetchOptions["throw"] extends true ? true : false>
>;
```

Defined in: [src/lib/auth-client.ts:9](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/lib/auth-client.ts#L9)

## Type Parameters

| Type Parameter                    |
| --------------------------------- |
| `FetchOptions` _extends_ `object` |

## Parameters

| Parameter | Type                                     |
| --------- | ---------------------------------------- |
| ...`data` | \[`Prettify`\<\{\}\>?, `FetchOptions`?\] |

## Returns

`Promise`\<`BetterFetchResponse`\<\{\}, \{\}, `FetchOptions`\[`"throw"`\] _extends_ `true` ? `true` : `false`\>\>
