[**nextjs-template**](README.md)

---

[nextjs-template](README.md) / [src/routes/makeRoute](src.routes.makeRoute.md) / RouteBuilder

# Type Alias: RouteBuilder\<Params, Search\>

```ts
type RouteBuilder<Params, Search> = CoreRouteElements<Params, Search> & (p?: input<Params>, search?: input<Search>) => string;
```

Defined in: [src/routes/makeRoute.tsx:115](https://github.com/Its-Satyajit/nextjs-template/blob/c8d81b09293d759cbf04e9bc7e542cc7d90740e6/src/routes/makeRoute.tsx#L115)

## Type Parameters

| Type Parameter                   |
| -------------------------------- |
| `Params` _extends_ `z.ZodSchema` |
| `Search` _extends_ `z.ZodSchema` |
