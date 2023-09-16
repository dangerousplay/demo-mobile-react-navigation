import type React from 'react';
import { SafeAreaView } from 'react-native';

type BaseProps = {
  className?: string;
};

export const Base = ({ children, className = '' }: React.PropsWithChildren<BaseProps>) => {
  return <SafeAreaView className={`pt-10 ${className}`}>{children}</SafeAreaView>;
};