import { NavigationActions, StackActions } from 'react-navigation';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
};

const goBack = (keyName) => {
  const nav = keyName ? NavigationActions.back({
    key: keyName,
  }) : NavigationActions.back();
  navigator.dispatch(nav);
};

const reset = (routeName) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  });
  navigator.dispatch(resetAction);
};

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  reset,
};
