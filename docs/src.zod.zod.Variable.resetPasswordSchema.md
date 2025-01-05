[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/zod/zod](src.zod.zod.md) / resetPasswordSchema

# Variable: resetPasswordSchema

```ts
const resetPasswordSchema: ZodEffects<
  ZodObject<
    {
      password: ZodString;
      confirmPassword: ZodString;
    },
    "strip",
    {
      password: string;
      confirmPassword: string;
    },
    {
      password: string;
      confirmPassword: string;
    }
  >,
  {
    password: string;
    confirmPassword: string;
  },
  {
    password: string;
    confirmPassword: string;
  }
>;
```

Defined in: [src/zod/zod.ts:37](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/zod/zod.ts#L37)
