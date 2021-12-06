# use-nprogress

> react hook for NProgress

- **React Hooks** _适用于 React Hooks 组件_
- **无依赖** _仅仅使用了 React，无第三方库的依赖_
- **简单** _只需会 React Hooks，即可上手_
- **TypeScript 编写** _完备的类型提示，轻松编写代码_

## 安装

```bash
yarn add use-nprogress
```

## 使用

```tsx
import { useState } from 'react'
import useNProgress from "use-nprogress";

const Example: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { progress, isFinished, animationDuration } = useNProgress({
    isAnimating: loading,
  });
};
```
