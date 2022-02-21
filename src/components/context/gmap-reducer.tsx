export const gmapReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_GMAP":
      return {
        ...state,
        selectedGmapData: action.payload,
      };
      break;
    default:
      throw new Error(`${action.type} not defined`);
  }
};
