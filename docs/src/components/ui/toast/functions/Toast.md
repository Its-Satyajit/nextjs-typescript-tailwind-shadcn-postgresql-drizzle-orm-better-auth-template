[**nextjs-template**](../../../../../README.md)

---

[nextjs-template](../../../../../README.md) / [src/components/ui/toast](../README.md) / Toast

# Function: Toast()

```ts
function Toast(
  props: Omit<ToastProps & RefAttributes<HTMLLIElement>, "ref"> &
    VariantProps<
      (
        props?: ConfigVariants<{
          variant: { default: string; destructive: string };
        }> &
          ClassProp,
      ) => string
    > &
    RefAttributes<HTMLLIElement>,
): ReactNode;
```

Defined in: [src/components/ui/toast.tsx:43](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/components/ui/toast.tsx#L43)

## Parameters

| Parameter | Type                                                                                                                                                                                                                                            |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props`   | `Omit`\<`ToastProps` & `RefAttributes`\<`HTMLLIElement`\>, `"ref"`\> & `VariantProps`\<(`props`?: ConfigVariants\<\{ variant: \{ default: string; destructive: string; \}; \}\> & ClassProp) => `string`\> & `RefAttributes`\<`HTMLLIElement`\> |

## Returns

`ReactNode`
