import { Button, Input } from "@/components/public/base";
import { localStorage } from "@/utils";
import { ChangeEvent, useState } from "react";

const TOKEN = "TOKEN";

export default function Home(): JSX.Element {
  const [input, setInput] = useState<string>("");

  const onAddItem = (content: string) => {
    localStorage.setItem({ name: TOKEN, content });
    setInput("");
  };
  const onGetItem = () => {
    console.log("token --> ", localStorage.getItem(TOKEN));
  };
  const onDeleteItem = () => {
    localStorage.removeItem(TOKEN);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Input onChange={onChange} value={input} />
      <Button onClick={() => onAddItem(input)}>Add Item</Button>
      <Button onClick={onGetItem}>Get Item</Button>
      <Button onClick={onDeleteItem}>Delete Item</Button>
    </div>
  );
}
