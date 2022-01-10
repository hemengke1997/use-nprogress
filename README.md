# use-nprogress

## WHAT IS THIS?

[NProgress](https://github.com/rstacruz/nprogress)的进度数值，而非 UI

## EXAMPLES

[BASIC EXAMPLE](https://codesandbox.io/s/holy-feather-quz0v)

[NProgress EXAMPLE](https://codesandbox.io/s/amazing-hooks-gk7qd?file=/src/App.tsx)

## 特点

- 支持多实例（NProgress 是单例模式）

## 安装

```bash
yarn add @minko-fe/use-nprogress
```

## 使用

```tsx
import { useState } from 'react';
import useNProgress from 'use-nprogress';

const Example: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { progress, isFinished, animationDuration } = useNProgress({
    isAnimating: loading,
  });
};
```

## 灵感来源

[nprogress](https://github.com/rstacruz/nprogress)
