import "./Page.css";

const Page = (props) => {
  // const classes = "page " + props.className;

  // return <div className={classes}>{props.children}</div>;
  return <div className='page'>{props.children}</div>;
};

export default Page;
