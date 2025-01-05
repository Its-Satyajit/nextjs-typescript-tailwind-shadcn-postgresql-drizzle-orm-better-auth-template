[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/zod/zod](src.zod.zod.md) / signUpSchema

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

Defined in: [src/zod/zod.ts:18](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/zod/zod.ts#L18)
