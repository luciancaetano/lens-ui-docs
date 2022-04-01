import React from 'react';
import * as LensUI from 'lens-ui';
import "regenerator-runtime/runtime.js";

const ReactLiveScope = {
  React,
  ...React,
  ...(ExecutionEnvironment.canUseDOM ? LensUI : {}),
};

export default ReactLiveScope;