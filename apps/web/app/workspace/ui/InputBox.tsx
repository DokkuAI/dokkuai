import { Textarea } from "@/components/ui/textarea";
import MicrophoneIcon from "@/public/MicrophoneIcon.svg";
import SendIcon from "@/public/SendIcon.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";

const InputBox = ({ setInput, placeholder }: any) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) =>
    setInput((cmnts: any) => [
      ...cmnts,
      {
        name: "Devesh Singh",
        role: "DEV",
        src: "/Devesh.png",
        content: data.inputText,
        time: "Time",
        replies: [],
      },
    ]);
  return (
    <form
      className="w-full border-2 border-[#2D66F5] h-[74px] flex gap-4 items-center px-5 rounded py-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Textarea
        className="min-h-[60px] max-h-[60px]"
        placeholder={placeholder}
        {...register("inputText")}
      />
      <div className="flex items-center gap-2">
        <button className="w-5 h-5">
          <Image src={MicrophoneIcon} alt="mic icon" />
        </button>
        <button type="submit" className="w-5 h-5">
          <Image src={SendIcon} alt="send icon" />
        </button>
      </div>
    </form>
  );
};

export default InputBox;
