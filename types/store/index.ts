import { AuthProps, SystemProps } from "../../constants/Types";
import { TestState } from "./tests";
import { LoadersProps } from "./loaders";

export type RootState = {
  readonly testsReducer: TestState;
  readonly authReducer: AuthProps;
  readonly loadersReducer: LoadersProps;
  readonly systemReducer: SystemProps;
};
