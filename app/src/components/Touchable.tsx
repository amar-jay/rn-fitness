import React from "react";
import { Pressable, PressableProps } from "react-native";

const Touchable: React.FC<PressableProps> = props => {
  const { children, onPress, ...rest } = props;
  return (
    <Pressable onPress={onPress} {...rest}>
      {children}
    </Pressable>
  );
};

export default Touchable;
