export default {
  setRoute(context, payload) {
    context.commit("SET_CURRENT_ROUTE", payload);
  },
};
