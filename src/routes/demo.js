import { connect } from "dva";
import styles from "./demo.css";

function demo({ dispatch, num }) {
  //dispatch用来操作数据模型。

  function Add() {
    console.log(num);
    dispatch({
      type: "num/add" //num代表数据模型，add代表方法。这里可以通过payload来传递参数。 // payload: 1,
    });
  }

  function jian() {
    console.log(num);
    dispatch({
      type: "num/jian"
    });
  }

  function show() {
    console.log(num);
  }

  return (
    <div className={styles.checkNum}>
      <input type="button" value="+" onClick={Add} />
      <input type="input" value={num} onChange={show} />
      <input type="button" value="-" onClick={jian} />
    </div>
  );
}

export default connect(
  //将组件与数据模型进行连接。
  ({ num }) => ({ num })
)(demo);
