[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/zod/zod](../README.md) / resetPasswordSchema

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

Defined in: [src/zod/zod.ts:37](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/zod/zod.ts#L37)
