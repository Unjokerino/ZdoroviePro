import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomLayout from "../components/CustomLayout";
import {
  fetchUser,
  //@ts-ignore
} from "../store/actions";
import { RootState } from "../types/store";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const {
    authReducer: { identity },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(fetchUser());
    return () => {};
  }, []);

  return (
    <CustomLayout>
      <Text>{JSON.stringify(identity)}</Text>
    </CustomLayout>
  );
}
