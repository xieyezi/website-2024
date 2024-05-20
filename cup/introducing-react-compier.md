`React Conf 2024` 已经完美结束了，让我最感兴趣的是 `React` 团队最新推出的 `React Compiler`。

## React Compiler 简介

`React Compiler` 是React官方团队即将在 `React 19` 版本中推出的新的构建时工具（`build-time tool` ），它能够自动优化你的 `React` 代码，提高其性能，尤其是在重新渲染(`re-render`)时的性能。该编译器同时支持 `JavaScript`和 `TypeScript`，并遵循 `React` 的[最佳实践规则](https://zh-hans.react.dev/reference/rules)。在 `React19` 中，我们不再需要手动调用 `useMemo`、`useCallback` 和 `React.memo` 这样的 `API`进行优化处理工作了。（相当于它自动在后台帮我们处理优化的工作）。React团队已经在 `Meta` 内部测试了 `React Compiler`，同时它也一已经在一些生产环境中使用，例如 `instagram.com`。

## 它能为我们做什么？

为了优化应用程序，`React Compiler` 会自动缓存（memoizes）你的代码。在这之前我们都是通过 `useMemo`、`useCallback` 和 `React.memo` 这样的 `API` 进行手动处理，通过这些 `API`你可以让 `React` 知道我们的代码在依赖(`deps`)没有改变的情况下不需要重新计算，这样就可以减少更新次数，从而达到性能优化的目的。虽然这些 `API` 很有用，但是实际上我们往往很难正确应用（这里往往可以看出一个 `Reacter` 的水平，所以面试 `React` 的时候基本都会问到这个方面的问题）。如果我们不能正确调用这些 `API`，反倒可能使我们的 `React`代码性能更加拉垮。

`React Compiler` 遵循 React的最佳实践规则，它自动对 `Components` 和 `Hooks` 中的值进行缓存（memoizes）。如果它检测你的代码不符合最佳实践规则，它会自动跳过这些`Components` 和 `Hooks`，并继续安全地编译其他代码。

当然，如果你的React代码库已经在你的手动处理下优化得非常好了，`React Compiler`可能不会带来明显的性能改进。然而事实上在实际使用中，正确的处理这些 `优化API` 导致的性能问题是很棘手的事情。

## 它提供了哪些优化?

我们先来看看在对 `React` 进行性能优化时，我们需要注意的几个地方：

1. 跳过组件的重新渲染（性能优化）

   - 例如：重新渲染 `<Parent />` 会导致其组件树中的许多组件也重新渲染，即使只有 `<Parent />` 发生了变化。

2. 跳过昂贵的计算开销（性能优化）

   - 例如，在组件或`hook`内部调用一个 `expensivelyResolveData` 函数，但是这个函数会对一个非常大的数组进行处理，耗费大量时间。

3. 依赖的处理
   - 例如 `useEffect()`，如果我们不能处理好 `deps` 依赖，可能会造成出现无限循环渲染的问题。

`React Compiler` 则主要侧重于改进更新性能（即Re-renders），因此它的工作主要集中在前两个关键点上。

## 优化 Re-renders

`React` 允许开发人员将 `UI界面` 抽象为（更具体地说，是 `props`、`state` 和 `context`）一个函数(也可以称为一个组件)。在当前的实现中，当组件的状态改变时，`React` 会重新渲染该组件及其所有子组件，除非开发人员使用 `useMemo()`、`useCallback()` 或 `React.memo()` 等手动实现了优化。例如，在以下示例中，当 `<Parent>` 的状态改变时，`<Child>` 组件将会重新渲染：

```js
function Parent() {
  const [count, setCount] = useState(0)
  return (
    <>
      Count {count}
      <Child onClick={() => setCount((count) => count + 1)} />
    </>
  )
}
```

`React Compiler` 会自动帮我们执行 `memoizes` 的操作，确保只有应用程序的相关部分随着状态变化而重新渲染。在上面的例子中，`React Compiler` 会自动判断 `() => setCount(count => count + 1)` 回调不需要随着 `count` 的变化而更新，并且可以避免重新创建这个回调，从而避免重新渲染 `<Child>`组件。

## 优化昂贵的计算开销

例如：

```js
function expensivelyResolveData() {
  // 在这里对一个对象数组进行大量计算
  return res
}

function Example({ items }) {
  // 这个函数会被 memoized:
  const data = expensivelyResolveData(items)
}
```

在上面的例子中，`React Compiler` 会自动帮我们执行 `Example` 组件的 `memoizes` 的操作。

不过，如果 `expensivelyResolveData` 确实是一个昂贵的函数，我们可能需要考虑在 `React` 外部为它实现自己的缓存处理，因为：

- `React Compiler` 仅对 React组件和 `hook` 进行缓存处理，而不缓存每个函数。
- `React Compiler` 的缓存处理是专属于单个组件或 `hook` 的，它不会在不同组件或函数之间共享。

如果 `expensivelyResolveData` 函数被多个不同组件使用，即使传递相同的参数，该函数也会被反复执行。

## 使用建议

- 旧代码

  - React团队建议保留任何现有的 `useMemo()` 或 `useCallback()` 调用，以确保我们之前的优化是有用的。 `React Compiler` 仍会尝试生成更优化的记忆化代码。

- 新代码
  - 在编写新代码不使用 `useMemo` 和 `useCallback` 这些优化API。

## 说在最后

我猜测，现有的React项目大部分都是需要性能优化的，即使很多号称处理了性能问题，但是实际上这个是React 基于Fiber Diff更新带来的坑，大量冗余的 Re-renders 造成了很大的性能损耗。它极大的提高了使用者的心智负担，所以这属于框架层面的问题，所以 `React Compiler` 出现了。
