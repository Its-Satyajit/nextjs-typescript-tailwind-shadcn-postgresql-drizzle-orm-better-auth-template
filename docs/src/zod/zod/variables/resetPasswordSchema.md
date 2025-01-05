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

Defined in: [src/zod/zod.ts:37](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/zod/zod.ts#L37)
