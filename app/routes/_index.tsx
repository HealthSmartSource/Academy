import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Health Smart Source" },
    { name: "description", content: "Welcome Health Smart Source group" },
  ];
};

export default function Index() {
  return (
    <div style={
      { fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        display:"flex",
        width:"98vw",
        height:"99vh",
        padding:"0px",
        margin:"0px",
        boxSizing:"border-box",
        alignItems:"center",
        justifyContent:"center",
        }}>
      <h1 style={{fontSize:"48px"}}> Health Smart Source </h1>
    </div>
  );
}
