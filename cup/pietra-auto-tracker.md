# Pietra Auto Tracker

`@pietra-auto-tracker` is a Vite Plugin that can add automatic event tracker in JSX/TSX.

## Install

```bash
yarn add @pietra-auto-tracker -D
```

`vite.config.ts`:

```ts
import { pietraAutoTracker } from '@pietra/auto-tracker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pietraAutoTracker()],
})
```

## Use

1. Without onClick attribute

```tsx
<Button data-log-common-type="xxx" data-log-field1="xxx">
  Click Me
</Button>
```

2. Existing onClick attribute and with a Function Expression

```tsx
<Button
  data-log-common-type="xxx"
  data-log-field1="xxx"
  onClick={() => {
    console.log('Button clicked')
  }}
>
  Click Me
</Button>
```

3.Existing onClick attribute with a Function Identifier

```tsx
function handleClick() {
  console.log('Button clicked')
}

// eslint-disable-next-line style/jsx-indent
;<Button data-log-common-type="xxx" data-log-field1="xxx" onClick={handleClick}>
  Click Me
</Button>
```

## Type

| Value                      | Key            | Type   |
| -------------------------- | -------------- | ------ |
| data-log-common-type       | commonType     | string |
| data-log-common-content    | commonContent  | string |
| data-log-sum-of-item-value | sumOfItemValue | string |
| data-log-item-type         | itemType       | string |
| data-log-field1            | field1         | string |
| data-log-field2            | field2         | string |
| data-log-field3            | field3         | string |
| data-log-field4            | field4         | string |
| data-log-field5            | field5         | string |
| data-log-field6            | field6         | string |
