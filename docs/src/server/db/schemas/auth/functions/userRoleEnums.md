[**nextjs-template**](../../../../../../README.md)

---

[nextjs-template](../../../../../../README.md) / [src/server/db/schemas/auth](../README.md) / userRoleEnums

# Function: userRoleEnums()

## Call Signature

```ts
function userRoleEnums(): PgEnumColumnBuilderInitial<
  "",
  ["user", "admin", "superAdmin"]
>;
```

Defined in: [src/server/db/schemas/auth.ts:3](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/server/db/schemas/auth.ts#L3)

### Returns

`PgEnumColumnBuilderInitial`\<`""`, \[`"user"`, `"admin"`, `"superAdmin"`\]\>

## Call Signature

```ts
function userRoleEnums<TName>(
  name: TName,
): PgEnumColumnBuilderInitial<TName, ["user", "admin", "superAdmin"]>;
```

Defined in: [src/server/db/schemas/auth.ts:3](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/server/db/schemas/auth.ts#L3)

### Type Parameters

| Type Parameter             |
| -------------------------- |
| `TName` _extends_ `string` |

### Parameters

| Parameter | Type    |
| --------- | ------- |
| `name`    | `TName` |

### Returns

`PgEnumColumnBuilderInitial`\<`TName`, \[`"user"`, `"admin"`, `"superAdmin"`\]\>

## Call Signature

```ts
function userRoleEnums<TName>(
  name?: TName,
): PgEnumColumnBuilderInitial<TName, ["user", "admin", "superAdmin"]>;
```

Defined in: [src/server/db/schemas/auth.ts:3](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/server/db/schemas/auth.ts#L3)

### Type Parameters

| Type Parameter             |
| -------------------------- |
| `TName` _extends_ `string` |

### Parameters

| Parameter | Type    |
| --------- | ------- |
| `name`?   | `TName` |

### Returns

`PgEnumColumnBuilderInitial`\<`TName`, \[`"user"`, `"admin"`, `"superAdmin"`\]\>
