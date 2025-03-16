/* eslint-disable import/no-anonymous-default-export */
/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-organize-attributes",
    "prettier-plugin-tailwindcss",
  ],

  importOrder: [
    "^server-only$",
    "^client-only$",
    "^@/components/shared/providers/ReactScan$",
    "^react-scan$",
    "^(react|next)",
    "<THIRD_PARTY_MODULES>",
    "^@/app/(.*)$",
    "^@/features/(.*)$",
    "^@/components/(.*)$",
    "^@/data/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/types/(.*)$",
    "^@/styles/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};
