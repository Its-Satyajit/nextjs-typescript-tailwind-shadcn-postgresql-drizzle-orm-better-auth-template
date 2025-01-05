[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/zod/zod](../README.md) / signUpSchema

# Variable: signUpSchema

```ts
const signUpSchema: ZodEffects<
  ZodObject<
    {
      name: ZodString;
      email: ZodString;
      password: ZodString;
      confirmPassword: ZodString;
    },
    "strip",
    {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    },
    {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    }
  >,
  {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  },
  {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
>;
```

Defined in: [src/zod/zod.ts:18](https://github.com/Its-Satyajit/nextjs-template/blob/main/src/zod/zod.ts#L18)
