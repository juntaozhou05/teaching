export default {
  namespace: "num",
  state: 0,
  reducers: {
    add(state) {
      //num可以理解为数据模型，state是数据的初始值，add是方法名，用来修改num用的。如果需要传参可参考官方教程。（payload）
      state++;
      return state;
    },
    jian(state) {
      state--;
      return state;
    }
  }
};
